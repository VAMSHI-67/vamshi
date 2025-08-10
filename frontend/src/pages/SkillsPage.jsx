import React, { useState, useEffect } from 'react';
import { Code, Wrench, Users, TrendingUp } from 'lucide-react';
import { skills } from '../data/mock';

const SkillsPage = () => {
  const [animatedSkills, setAnimatedSkills] = useState({});

  useEffect(() => {
    const timer = setTimeout(() => {
      const animated = {};
      skills.technical.forEach(skill => {
        animated[skill.name] = skill.level;
      });
      setAnimatedSkills(animated);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const SkillBar = ({ skill, delay = 0 }) => {
    const animatedLevel = animatedSkills[skill.name] || 0;
    
    return (
      <div 
        className="skill-bar mb-6 fade-in"
        style={{ animationDelay: `${delay}s` }}
      >
        <div className="flex justify-between items-center mb-2">
          <h4 className="font-semibold text-white">{skill.name}</h4>
          <span className="text-accent font-semibold">{skill.level}%</span>
        </div>
        <div className="w-full bg-secondary-olive/30 rounded-full h-3 overflow-hidden">
          <div
            className="bg-gradient-to-r from-accent to-secondary-yellow h-full rounded-full transition-all duration-1000 ease-out"
            style={{ width: `${animatedLevel}%` }}
          />
        </div>
      </div>
    );
  };

  const skillCategories = [
    {
      icon: Code,
      title: "Technical Skills",
      description: "Programming languages and frameworks I work with",
      skills: skills.technical,
      color: "text-accent"
    },
    {
      icon: Wrench,
      title: "Tools & Technologies",
      description: "Development tools and platforms I use daily",
      skills: skills.tools.map(tool => ({ name: tool })),
      color: "text-secondary-blue"
    },
    {
      icon: Users,
      title: "Soft Skills",
      description: "Personal and professional abilities",
      skills: skills.soft.map(skill => ({ name: skill })),
      color: "text-secondary-yellow"
    }
  ];

  return (
    <div className="skills-page pt-24">
      {/* Hero Section */}
      <section className="section">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="heading-1 mb-4 fade-in">Skills & Expertise</h1>
            <p className="body-large text-secondary mb-8 fade-in" style={{ animationDelay: '0.2s' }}>
              A comprehensive overview of my technical abilities, tools, and soft skills 
              that enable me to create exceptional digital experiences.
            </p>
            
            {/* Skill Level Legend */}
            <div className="flex flex-wrap justify-center gap-4 text-sm fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-accent rounded-full"></div>
                <span>Expert (90-100%)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-secondary-yellow rounded-full"></div>
                <span>Advanced (70-89%)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-secondary-blue rounded-full"></div>
                <span>Intermediate (50-69%)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Skills Section */}
      <section className="section bg-secondary-olive/10">
        <div className="container">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Code className="w-8 h-8 text-accent" />
              <h2 className="heading-2 fade-in">Technical Proficiency</h2>
            </div>
            <p className="body-large text-secondary fade-in" style={{ animationDelay: '0.2s' }}>
              My core programming skills and technical expertise levels
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Skill Bars Column 1 */}
            <div className="space-y-6">
              {skills.technical.slice(0, Math.ceil(skills.technical.length / 2)).map((skill, index) => (
                <SkillBar 
                  key={skill.name} 
                  skill={skill} 
                  delay={index * 0.1} 
                />
              ))}
            </div>

            {/* Skill Bars Column 2 */}
            <div className="space-y-6">
              {skills.technical.slice(Math.ceil(skills.technical.length / 2)).map((skill, index) => (
                <SkillBar 
                  key={skill.name} 
                  skill={skill} 
                  delay={(index + Math.ceil(skills.technical.length / 2)) * 0.1} 
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Categories Grid */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4 fade-in">Skill Categories</h2>
            <p className="body-large text-secondary fade-in" style={{ animationDelay: '0.2s' }}>
              A breakdown of my diverse skill set across different areas
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={category.title}
                className="card bg-secondary-olive/20 hover:bg-secondary-olive/30 transition-all duration-300 fade-in"
                style={{ animationDelay: `${categoryIndex * 0.2}s` }}
              >
                {/* Category Header */}
                <div className="text-center mb-6">
                  <div className={`w-16 h-16 rounded-full bg-secondary-olive/50 flex items-center justify-center mx-auto mb-4`}>
                    <category.icon className={`w-8 h-8 ${category.color}`} />
                  </div>
                  <h3 className="heading-3 text-white mb-2">{category.title}</h3>
                  <p className="body-medium text-secondary">{category.description}</p>
                </div>

                {/* Skills List */}
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skill.name}
                      className="flex items-center justify-between p-3 bg-secondary-olive/30 rounded-lg hover:bg-secondary-olive/40 transition-colors scale-in"
                      style={{ animationDelay: `${(categoryIndex * 0.2) + (skillIndex * 0.05)}s` }}
                    >
                      <span className="text-white font-medium">{skill.name}</span>
                      {skill.level && (
                        <div className="flex items-center gap-2">
                          <div className="flex gap-1">
                            {[...Array(5)].map((_, i) => (
                              <div
                                key={i}
                                className={`w-2 h-2 rounded-full transition-colors duration-500 ${
                                  i < Math.round(skill.level / 20) 
                                    ? 'bg-accent' 
                                    : 'bg-secondary-olive/50'
                                }`}
                              />
                            ))}
                          </div>
                          <span className="text-xs text-secondary ml-2">{skill.level}%</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills in Numbers */}
      <section className="section bg-secondary-olive/10">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4 fade-in">Skills by the Numbers</h2>
            <p className="body-large text-secondary fade-in" style={{ animationDelay: '0.2s' }}>
              Quantifying my expertise and experience
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "10+", label: "Programming Languages", icon: Code },
              { number: "15+", label: "Frameworks & Libraries", icon: Wrench },
              { number: "5+", label: "Years Experience", icon: TrendingUp },
              { number: "20+", label: "Technologies Mastered", icon: Users }
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="text-center card bg-secondary-olive/20 hover:scale-105 transition-transform fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-accent" />
                </div>
                <div className="heading-2 text-accent mb-2">{stat.number}</div>
                <div className="body-medium text-secondary">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Path */}
      <section className="section curve-divider">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-2 mb-8 fade-in">Continuous Learning</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="fade-in" style={{ animationDelay: '0.1s' }}>
                <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-10 h-10 text-accent" />
                </div>
                <h3 className="heading-3 text-white mb-3">Currently Learning</h3>
                <div className="space-y-2">
                  <div className="px-3 py-1 bg-secondary-olive/30 rounded-full text-sm">Machine Learning</div>
                  <div className="px-3 py-1 bg-secondary-olive/30 rounded-full text-sm">Kubernetes</div>
                  <div className="px-3 py-1 bg-secondary-olive/30 rounded-full text-sm">GraphQL</div>
                </div>
              </div>

              <div className="fade-in" style={{ animationDelay: '0.2s' }}>
                <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code className="w-10 h-10 text-accent" />
                </div>
                <h3 className="heading-3 text-white mb-3">Next Goals</h3>
                <div className="space-y-2">
                  <div className="px-3 py-1 bg-secondary-olive/30 rounded-full text-sm">DevOps</div>
                  <div className="px-3 py-1 bg-secondary-olive/30 rounded-full text-sm">Blockchain</div>
                  <div className="px-3 py-1 bg-secondary-olive/30 rounded-full text-sm">Mobile Development</div>
                </div>
              </div>

              <div className="fade-in" style={{ animationDelay: '0.3s' }}>
                <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-10 h-10 text-accent" />
                </div>
                <h3 className="heading-3 text-white mb-3">Teaching & Sharing</h3>
                <div className="space-y-2">
                  <div className="px-3 py-1 bg-secondary-olive/30 rounded-full text-sm">Mentoring</div>
                  <div className="px-3 py-1 bg-secondary-olive/30 rounded-full text-sm">Open Source</div>
                  <div className="px-3 py-1 bg-secondary-olive/30 rounded-full text-sm">Tech Talks</div>
                </div>
              </div>
            </div>

            <div className="mt-12 p-8 bg-secondary-olive/30 rounded-2xl fade-in" style={{ animationDelay: '0.4s' }}>
              <blockquote className="heading-3 text-accent italic mb-4">
                "The only way to stay relevant in technology is to never stop learning. 
                Every challenge is an opportunity to grow."
              </blockquote>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SkillsPage;