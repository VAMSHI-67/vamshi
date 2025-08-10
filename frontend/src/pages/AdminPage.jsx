import React, { useState } from 'react';
import { Save, User, Briefcase, Award, Mail, Eye, EyeOff } from 'lucide-react';
import { useToast } from '../hooks/use-toast';
import { personalInfo, experience, skills, projects, achievements, socialLinks } from '../data/mock';

const AdminPage = () => {
  const [activeTab, setActiveTab] = useState('personal');
  const [isSaving, setIsSaving] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const { toast } = useToast();

  // State for all editable content
  const [personalData, setPersonalData] = useState(personalInfo);
  const [experienceData, setExperienceData] = useState(experience);
  const [skillsData, setSkillsData] = useState(skills);
  const [projectsData, setProjectsData] = useState(projects);
  const [achievementsData, setAchievementsData] = useState(achievements);
  const [socialData, setSocialData] = useState(socialLinks);

  const handleSave = async () => {
    setIsSaving(true);
    
    try {
      // Simulate saving (replace with actual save functionality)
      const portfolioData = {
        personalInfo: personalData,
        experience: experienceData,
        skills: skillsData,
        projects: projectsData,
        achievements: achievementsData,
        socialLinks: socialData
      };

      // This would typically send data to backend
      console.log('Saving portfolio data:', portfolioData);
      
      // For now, we'll just show success message
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Portfolio Updated!",
        description: "Your changes have been saved successfully.",
      });
    } catch (error) {
      toast({
        title: "Save Failed",
        description: "There was an error saving your changes. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSaving(false);
    }
  };

  const tabs = [
    { id: 'personal', label: 'Personal Info', icon: User },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'projects', label: 'Projects', icon: Award },
    { id: 'social', label: 'Social Links', icon: Mail }
  ];

  return (
    <div className="admin-page pt-24 min-h-screen bg-secondary-olive/10">
      <div className="container">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h1 className="heading-1 mb-2">Portfolio Admin</h1>
            <p className="body-medium text-secondary">
              Edit your portfolio content and information here
            </p>
          </div>
          
          <div className="flex gap-3">
            <button
              onClick={() => setShowPreview(!showPreview)}
              className="btn-secondary"
            >
              {showPreview ? <EyeOff size={16} /> : <Eye size={16} />}
              {showPreview ? 'Hide Preview' : 'Show Preview'}
            </button>
            <button
              onClick={handleSave}
              disabled={isSaving}
              className="btn-primary"
            >
              {isSaving ? 'Saving...' : 'Save Changes'}
              <Save size={16} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Navigation Tabs */}
          <div className="lg:col-span-1">
            <div className="card sticky top-24">
              <h3 className="font-semibold text-white mb-4">Edit Sections</h3>
              <nav className="space-y-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center gap-3 p-3 rounded-lg text-left transition-all ${
                      activeTab === tab.id
                        ? 'bg-accent text-inverse'
                        : 'text-white hover:bg-secondary-olive/30'
                    }`}
                  >
                    <tab.icon size={20} />
                    {tab.label}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Content Area */}
          <div className="lg:col-span-3">
            <div className="card">
              {/* Personal Information */}
              {activeTab === 'personal' && (
                <div className="space-y-6">
                  <h2 className="heading-2 text-white mb-6">Personal Information</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-white mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        value={personalData.name}
                        onChange={(e) => setPersonalData({...personalData, name: e.target.value})}
                        className="w-full px-4 py-3 bg-white border border-secondary-olive/50 rounded-lg text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-white mb-2">
                        Professional Title
                      </label>
                      <input
                        type="text"
                        value={personalData.title}
                        onChange={(e) => setPersonalData({...personalData, title: e.target.value})}
                        className="w-full px-4 py-3 bg-white border border-secondary-olive/50 rounded-lg text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      Tagline
                    </label>
                    <input
                      type="text"
                      value={personalData.tagline}
                      onChange={(e) => setPersonalData({...personalData, tagline: e.target.value})}
                      className="w-full px-4 py-3 bg-secondary-olive/30 border border-secondary-olive/50 rounded-lg text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      Bio
                    </label>
                    <textarea
                      value={personalData.bio}
                      onChange={(e) => setPersonalData({...personalData, bio: e.target.value})}
                      rows={4}
                      className="w-full px-4 py-3 bg-secondary-olive/30 border border-secondary-olive/50 rounded-lg text-white"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-white mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        value={personalData.email}
                        onChange={(e) => setPersonalData({...personalData, email: e.target.value})}
                        className="w-full px-4 py-3 bg-secondary-olive/30 border border-secondary-olive/50 rounded-lg text-white"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-white mb-2">
                        Phone
                      </label>
                      <input
                        type="text"
                        value={personalData.phone}
                        onChange={(e) => setPersonalData({...personalData, phone: e.target.value})}
                        className="w-full px-4 py-3 bg-secondary-olive/30 border border-secondary-olive/50 rounded-lg text-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      Location
                    </label>
                    <input
                      type="text"
                      value={personalData.location}
                      onChange={(e) => setPersonalData({...personalData, location: e.target.value})}
                      className="w-full px-4 py-3 bg-secondary-olive/30 border border-secondary-olive/50 rounded-lg text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      Profile Image URL
                    </label>
                    <input
                      type="url"
                      value={personalData.profileImage}
                      onChange={(e) => setPersonalData({...personalData, profileImage: e.target.value})}
                      className="w-full px-4 py-3 bg-secondary-olive/30 border border-secondary-olive/50 rounded-lg text-white"
                    />
                  </div>
                </div>
              )}

              {/* Experience Section */}
              {activeTab === 'experience' && (
                <div className="space-y-6">
                  <h2 className="heading-2 text-white mb-6">Work Experience</h2>
                  
                  {experienceData.map((exp, index) => (
                    <div key={index} className="p-4 border border-secondary-olive/30 rounded-lg space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-white mb-2">
                            Job Title
                          </label>
                          <input
                            type="text"
                            value={exp.title}
                            onChange={(e) => {
                              const newExp = [...experienceData];
                              newExp[index].title = e.target.value;
                              setExperienceData(newExp);
                            }}
                            className="w-full px-4 py-3 bg-secondary-olive/30 border border-secondary-olive/50 rounded-lg text-white"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-white mb-2">
                            Company
                          </label>
                          <input
                            type="text"
                            value={exp.company}
                            onChange={(e) => {
                              const newExp = [...experienceData];
                              newExp[index].company = e.target.value;
                              setExperienceData(newExp);
                            }}
                            className="w-full px-4 py-3 bg-secondary-olive/30 border border-secondary-olive/50 rounded-lg text-white"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-white mb-2">
                          Period
                        </label>
                        <input
                          type="text"
                          value={exp.period}
                          placeholder="e.g., 2022 - Present"
                          onChange={(e) => {
                            const newExp = [...experienceData];
                            newExp[index].period = e.target.value;
                            setExperienceData(newExp);
                          }}
                          className="w-full px-4 py-3 bg-secondary-olive/30 border border-secondary-olive/50 rounded-lg text-white"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-white mb-2">
                          Description
                        </label>
                        <textarea
                          value={exp.description}
                          onChange={(e) => {
                            const newExp = [...experienceData];
                            newExp[index].description = e.target.value;
                            setExperienceData(newExp);
                          }}
                          rows={3}
                          className="w-full px-4 py-3 bg-secondary-olive/30 border border-secondary-olive/50 rounded-lg text-white"
                        />
                      </div>
                    </div>
                  ))}

                  <button
                    onClick={() => setExperienceData([...experienceData, {
                      title: '',
                      company: '',
                      period: '',
                      description: ''
                    }])}
                    className="btn-secondary w-full"
                  >
                    Add New Experience
                  </button>
                </div>
              )}

              {/* Projects Section */}
              {activeTab === 'projects' && (
                <div className="space-y-6">
                  <h2 className="heading-2 text-white mb-6">Projects</h2>
                  
                  <div className="space-y-6 max-h-96 overflow-y-auto">
                    {projectsData.slice(0, 3).map((project, index) => (
                      <div key={project.id} className="p-4 border border-secondary-olive/30 rounded-lg space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-white mb-2">
                              Project Title
                            </label>
                            <input
                              type="text"
                              value={project.title}
                              onChange={(e) => {
                                const newProjects = [...projectsData];
                                newProjects[index].title = e.target.value;
                                setProjectsData(newProjects);
                              }}
                              className="w-full px-4 py-3 bg-secondary-olive/30 border border-secondary-olive/50 rounded-lg text-white"
                            />
                          </div>
                          
                          <div>
                            <label className="block text-sm font-medium text-white mb-2">
                              Category
                            </label>
                            <select
                              value={project.category}
                              onChange={(e) => {
                                const newProjects = [...projectsData];
                                newProjects[index].category = e.target.value;
                                setProjectsData(newProjects);
                              }}
                              className="w-full px-4 py-3 bg-secondary-olive/30 border border-secondary-olive/50 rounded-lg text-white"
                            >
                              <option value="Web Development">Web Development</option>
                              <option value="AI/ML">AI/ML</option>
                              <option value="Mobile">Mobile</option>
                              <option value="Backend">Backend</option>
                              <option value="Data Analytics">Data Analytics</option>
                              <option value="Blockchain">Blockchain</option>
                            </select>
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-white mb-2">
                            Description
                          </label>
                          <textarea
                            value={project.description}
                            onChange={(e) => {
                              const newProjects = [...projectsData];
                              newProjects[index].description = e.target.value;
                              setProjectsData(newProjects);
                            }}
                            rows={3}
                            className="w-full px-4 py-3 bg-secondary-olive/30 border border-secondary-olive/50 rounded-lg text-white"
                          />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-white mb-2">
                              GitHub URL
                            </label>
                            <input
                              type="url"
                              value={project.githubUrl || ''}
                              onChange={(e) => {
                                const newProjects = [...projectsData];
                                newProjects[index].githubUrl = e.target.value;
                                setProjectsData(newProjects);
                              }}
                              className="w-full px-4 py-3 bg-secondary-olive/30 border border-secondary-olive/50 rounded-lg text-white"
                            />
                          </div>
                          
                          <div>
                            <label className="block text-sm font-medium text-white mb-2">
                              Live Demo URL
                            </label>
                            <input
                              type="url"
                              value={project.liveUrl || ''}
                              onChange={(e) => {
                                const newProjects = [...projectsData];
                                newProjects[index].liveUrl = e.target.value;
                                setProjectsData(newProjects);
                              }}
                              className="w-full px-4 py-3 bg-secondary-olive/30 border border-secondary-olive/50 rounded-lg text-white"
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="text-center text-secondary">
                    <p>Showing first 3 projects. Save and refresh to see all projects.</p>
                  </div>
                </div>
              )}

              {/* Social Links Section */}
              {activeTab === 'social' && (
                <div className="space-y-6">
                  <h2 className="heading-2 text-white mb-6">Social Links</h2>
                  
                  {socialData.map((social, index) => (
                    <div key={index} className="p-4 border border-secondary-olive/30 rounded-lg">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-white mb-2">
                            Platform Name
                          </label>
                          <input
                            type="text"
                            value={social.name}
                            onChange={(e) => {
                              const newSocial = [...socialData];
                              newSocial[index].name = e.target.value;
                              setSocialData(newSocial);
                            }}
                            className="w-full px-4 py-3 bg-secondary-olive/30 border border-secondary-olive/50 rounded-lg text-white"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-white mb-2">
                            URL
                          </label>
                          <input
                            type="url"
                            value={social.url}
                            onChange={(e) => {
                              const newSocial = [...socialData];
                              newSocial[index].url = e.target.value;
                              setSocialData(newSocial);
                            }}
                            className="w-full px-4 py-3 bg-secondary-olive/30 border border-secondary-olive/50 rounded-lg text-white"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Instructions */}
        <div className="card mt-8 bg-accent/10">
          <h3 className="font-semibold text-white mb-4">How to Use This Admin Panel</h3>
          <div className="space-y-2 text-secondary">
            <p>• Edit your personal information, experience, projects, and social links using the forms above</p>
            <p>• Click "Save Changes" to update your portfolio (currently saves locally - backend integration needed)</p>
            <p>• Use "Show Preview" to see how your changes will look on the live site</p>
            <p>• All changes are automatically reflected across all pages of your portfolio</p>
            <p>• For image uploads, use image hosting services like Imgur or Unsplash and paste the URL</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;