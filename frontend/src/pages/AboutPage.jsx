import React from 'react';
import { Calendar, MapPin, Award, Users, Coffee, Code } from 'lucide-react';
import { personalInfo, experience, achievements } from '../data/mock';

const AboutPage = () => {
  const funFacts = [
    { icon: Coffee, label: "Cups of coffee", value: "2,847", color: "text-secondary-yellow" },
    { icon: Code, label: "Lines of code", value: "500K+", color: "text-accent" },
    { icon: Users, label: "Happy clients", value: "25+", color: "text-secondary-blue" },
    { icon: Award, label: "Projects completed", value: "40+", color: "text-accent" }
  ];

  return (
    <div className="about-page pt-24">
      {/* Hero Section */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-6">
              <div className="fade-in">
                <h1 className="heading-1 mb-4">About Me</h1>
                <h2 className="heading-3 mb-6">
                  Turning ideas into digital reality
                </h2>
                <div className="space-y-4 body-large">
                  <p>{personalInfo.bio}</p>
                  <p className="body-medium text-secondary">
                    When I'm not coding, you can find me exploring new technologies, 
                    contributing to open source projects, or mentoring aspiring developers. 
                    I believe in continuous learning and staying updated with the latest 
                    industry trends.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-6 fade-in" style={{ animationDelay: '0.2s' }}>
                <div className="flex items-center gap-2 text-secondary">
                  <MapPin size={16} />
                  <span>{personalInfo.location}</span>
                </div>
                <div className="flex items-center gap-2 text-secondary">
                  <Calendar size={16} />
                  <span>Available for hire</span>
                </div>
              </div>
            </div>

            {/* Profile Image & Stats */}
            <div className="space-y-8">
              <div className="relative scale-in" style={{ animationDelay: '0.3s' }}>
                <img
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                  className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
                />
              </div>

              {/* Fun Facts */}
              <div className="grid grid-cols-2 gap-4 fade-in" style={{ animationDelay: '0.4s' }}>
                {funFacts.map((fact, index) => (
                  <div
                    key={fact.label}
                    className="card text-center p-4 hover:scale-105 transition-transform"
                  >
                    <fact.icon className={`w-8 h-8 mx-auto mb-2 ${fact.color}`} />
                    <div className="font-bold text-lg text-white">{fact.value}</div>
                    <div className="text-sm text-secondary">{fact.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="section bg-secondary-olive/10">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4 fade-in">Experience Journey</h2>
            <p className="body-large text-secondary fade-in" style={{ animationDelay: '0.2s' }}>
              My professional path and career milestones
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-secondary-olive"></div>

              {experience.map((exp, index) => (
                <div
                  key={exp.title}
                  className="relative flex gap-8 mb-12 fade-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Timeline Dot */}
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center shadow-lg">
                      <div className="w-6 h-6 bg-inverse rounded-full"></div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 card">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                      <h3 className="heading-3 text-white">{exp.title}</h3>
                      <span className="text-accent font-semibold">{exp.period}</span>
                    </div>
                    <h4 className="text-lg font-semibold text-secondary mb-3">{exp.company}</h4>
                    <p className="body-medium">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4 fade-in">Achievements & Certifications</h2>
            <p className="body-large text-secondary fade-in" style={{ animationDelay: '0.2s' }}>
              Recognition and milestones in my career
            </p>
          </div>

          <div className="grid grid-3 gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={achievement.title}
                className="card bg-secondary-olive/20 text-center hover:bg-secondary-olive/30 transition-colors fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-inverse" />
                </div>
                <h3 className="heading-3 text-white mb-2">{achievement.title}</h3>
                <p className="text-accent font-semibold mb-3">{achievement.date}</p>
                <p className="body-medium">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Personal Philosophy */}
      <section className="section bg-secondary-olive/10 curve-divider">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-2 mb-8 fade-in">My Philosophy</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="fade-in" style={{ animationDelay: '0.1s' }}>
                <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code className="w-10 h-10 text-accent" />
                </div>
                <h3 className="heading-3 text-white mb-3">Clean Code</h3>
                <p className="body-medium">
                  Writing code that is not only functional but also readable, maintainable, and elegant.
                </p>
              </div>

              <div className="fade-in" style={{ animationDelay: '0.2s' }}>
                <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-10 h-10 text-accent" />
                </div>
                <h3 className="heading-3 text-white mb-3">User-Centric</h3>
                <p className="body-medium">
                  Always putting the user experience first, creating solutions that are intuitive and accessible.
                </p>
              </div>

              <div className="fade-in" style={{ animationDelay: '0.3s' }}>
                <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-10 h-10 text-accent" />
                </div>
                <h3 className="heading-3 text-white mb-3">Continuous Learning</h3>
                <p className="body-medium">
                  Staying curious and constantly evolving with new technologies and best practices.
                </p>
              </div>
            </div>

            <div className="mt-12 p-8 bg-secondary-olive/30 rounded-2xl fade-in" style={{ animationDelay: '0.4s' }}>
              <blockquote className="heading-3 text-accent italic mb-4">
                "The best code is not the one that works, but the one that communicates clearly 
                and solves real problems for real people."
              </blockquote>
              <cite className="text-secondary">- {personalInfo.name}</cite>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;