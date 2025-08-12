from fastapi import FastAPI, APIRouter
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field
from typing import List
import uuid
from datetime import datetime


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Define Models
class StatusCheck(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=datetime.utcnow)


class StatusCheckCreate(BaseModel):
    client_name: str


def _doc_to_status_check(document: dict) -> StatusCheck:
    mapped = dict(document)
    if "_id" in mapped:
        mapped["id"] = str(mapped.pop("_id"))
    return StatusCheck(**mapped)


# Add your routes to the router instead of directly to app
@api_router.get("/")
async def root():
    return {"message": "Hello World"}


@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_obj = StatusCheck(**input.model_dump())
    document = status_obj.model_dump()
    # Use id as Mongo _id to avoid duplicate id fields and simplify reads
    document["_id"] = document.pop("id")
    await db.status_checks.insert_one(document)
    return _doc_to_status_check(document)


@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    status_checks = await db.status_checks.find().to_list(1000)
    return [_doc_to_status_check(status_check) for status_check in status_checks]


# Include the router in the main app
app.include_router(api_router)

# Safer CORS configuration
_raw_origins = os.environ.get('CORS_ORIGINS', '*').split(',')
# Normalize and trim whitespace
allow_origins = [origin.strip() for origin in _raw_origins if origin.strip()]
allow_credentials_env = os.environ.get('CORS_ALLOW_CREDENTIALS', 'false').lower() == 'true'
# If wildcard origins are used, do not allow credentials
if allow_origins == ['*']:
    allow_credentials_env = False

app.add_middleware(
    CORSMiddleware,
    allow_credentials=allow_credentials_env,
    allow_origins=allow_origins,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
