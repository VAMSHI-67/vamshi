// Mock data for portfolio website - Easy to edit for content updates

export const personalInfo = {
  name: "Alex Thompson",
  title: "Full Stack Developer & AI Enthusiast",
  tagline: "Building innovative solutions with modern technology",
  bio: "Passionate full-stack developer with 5+ years of experience creating scalable web applications and AI-powered solutions. I love turning complex problems into simple, beautiful, and intuitive designs.",
  email: "alex.thompson@email.com",
  phone: "+1 (555) 123-4567",
  location: "San Francisco, CA",
  profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
  resumeFile: "/resume-alex-thompson.pdf"
};

export const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/alexthompson",
    icon: "Github"
  },
  {
    name: "LinkedIn", 
    url: "https://linkedin.com/in/alexthompson",
    icon: "Linkedin"
  },
  {
    name: "Twitter",
    url: "https://twitter.com/alexthompson",
    icon: "Twitter"
  },
  {
    name: "Email",
    url: "mailto:alex.thompson@email.com",
    icon: "Mail"
  }
];

export const skills = {
  technical: [
    { name: "JavaScript", level: 95 },
    { name: "React", level: 90 },
    { name: "Node.js", level: 85 },
    { name: "Python", level: 88 },
    { name: "TypeScript", level: 82 },
    { name: "MongoDB", level: 80 },
    { name: "PostgreSQL", level: 78 },
    { name: "AWS", level: 75 },
    { name: "Docker", level: 70 },
    { name: "GraphQL", level: 72 }
  ],
  tools: [
    "Git & GitHub", "VS Code", "Figma", "Postman", "Jira", "Slack", "Adobe Creative Suite"
  ],
  soft: [
    "Problem Solving", "Team Leadership", "Communication", "Project Management", "Agile Development", "Mentoring"
  ]
};

export const experience = [
  {
    title: "Senior Full Stack Developer",
    company: "TechCorp Inc.",
    period: "2022 - Present",
    description: "Lead development of scalable web applications serving 100K+ users. Architected microservices infrastructure and mentored junior developers."
  },
  {
    title: "Full Stack Developer",
    company: "StartupXYZ",
    period: "2020 - 2022", 
    description: "Built MVP from scratch that grew to $1M ARR. Developed React frontend and Node.js backend with real-time features."
  },
  {
    title: "Frontend Developer",
    company: "Digital Agency",
    period: "2019 - 2020",
    description: "Created responsive websites and web applications for 20+ clients. Specialized in React and modern CSS frameworks."
  }
];

export const projects = [
  {
    id: 1,
    title: "AI-Powered Task Manager",
    category: "AI/ML",
    description: "Intelligent task management app that uses NLP to categorize and prioritize tasks automatically. Built with React, Node.js, and OpenAI API.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
    technologies: ["React", "Node.js", "OpenAI API", "MongoDB", "TypeScript"],
    githubUrl: "https://github.com/alexthompson/ai-task-manager",
    liveUrl: "https://ai-taskmanager.vercel.app",
    featured: true
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    category: "Web Development",
    description: "Full-featured e-commerce platform with payment processing, inventory management, and analytics dashboard.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
    technologies: ["React", "Express", "Stripe API", "PostgreSQL", "Redis"],
    githubUrl: "https://github.com/alexthompson/ecommerce-platform",
    liveUrl: "https://myecommerce-demo.com",
    featured: true
  },
  {
    id: 3,
    title: "Data Visualization Dashboard",
    category: "Data Analytics",
    description: "Interactive dashboard for visualizing complex datasets with real-time updates and customizable charts.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
    technologies: ["React", "D3.js", "Python", "Flask", "WebSocket"],
    githubUrl: "https://github.com/alexthompson/data-viz-dashboard",
    liveUrl: "https://dataviz-demo.herokuapp.com",
    featured: false
  },
  {
    id: 4,
    title: "Mobile-First Social App",
    category: "Mobile",
    description: "Social networking app with real-time messaging, photo sharing, and location-based features.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500&h=300&fit=crop",
    technologies: ["React Native", "Firebase", "Node.js", "Socket.io"],
    githubUrl: "https://github.com/alexthompson/social-mobile-app",
    liveUrl: null,
    featured: false
  },
  {
    id: 5,
    title: "Blockchain Voting System",
    category: "Blockchain",
    description: "Secure and transparent voting system built on Ethereum blockchain with smart contracts.",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=500&h=300&fit=crop",
    technologies: ["Solidity", "Web3.js", "React", "IPFS", "MetaMask"],
    githubUrl: "https://github.com/alexthompson/blockchain-voting",
    liveUrl: "https://voting-dapp.netlify.app",
    featured: true
  },
  {
    id: 6,
    title: "API Gateway Service",
    category: "Backend",
    description: "Microservices API gateway with authentication, rate limiting, and request routing.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&h=300&fit=crop",
    technologies: ["Node.js", "Express", "JWT", "Redis", "Docker"],
    githubUrl: "https://github.com/alexthompson/api-gateway",
    liveUrl: null,
    featured: false
  }
];

export const achievements = [
  {
    title: "AWS Certified Solutions Architect",
    date: "2023",
    description: "Professional level certification in cloud architecture"
  },
  {
    title: "Hackathon Winner",
    date: "2022",
    description: "1st place in TechCrunch Disrupt Hackathon for AI-powered accessibility tool"
  },
  {
    title: "Open Source Contributor",
    date: "2021-Present",
    description: "Active contributor to popular React and Node.js libraries with 1000+ stars"
  }
];

export const testimonials = [
  {
    name: "Sarah Johnson",
    position: "Product Manager at TechCorp",
    quote: "Alex is an exceptional developer who consistently delivers high-quality solutions. His ability to understand complex requirements and translate them into elegant code is remarkable.",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
  },
  {
    name: "Michael Chen",
    position: "CTO at StartupXYZ", 
    quote: "Working with Alex was a game-changer for our startup. He built our entire platform from scratch and helped us scale to thousands of users.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
  },
  {
    name: "Emma Rodriguez",
    position: "Lead Designer at Digital Agency",
    quote: "Alex has an eye for detail and design that's rare among developers. He brings mockups to life with pixel-perfect precision.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
  }
];

export const categories = [
  "All",
  "AI/ML",
  "Web Development", 
  "Data Analytics",
  "Mobile",
  "Blockchain",
  "Backend"
];