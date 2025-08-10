import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import { personalInfo, socialLinks, projects, testimonials } from '../data/mock';

const HomePage = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = personalInfo.title;

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.substring(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, [fullText]);

  const featuredProjects = projects.filter(project => project.featured).slice(0, 3);

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section relative min-h-screen flex items-center overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 right-20 w-64 h-64 bg-secondary-olive/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-48 h-48 bg-accent/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className="hero-content space-y-8">
              <div className="fade-in">
                <h1 className="brand-display mb-4">
                  Hello, I'm <span className="text-accent">{personalInfo.name.split(' ')[0]}</span>
                </h1>
                <div className="h-16">
                  <h2 className="heading-2 text-secondary">
                    {typedText}
                    <span className="animate-pulse">|</span>
                  </h2>
                </div>
                <p className="body-large mt-6 max-w-lg">
                  {personalInfo.tagline}
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 fade-in" style={{ animationDelay: '0.3s' }}>
                <Link to="/projects" className="btn-primary">
                  View My Work
                  <ArrowRight size={20} />
                </Link>
                <Link to="/contact" className="btn-secondary">
                  Get In Touch
                </Link>
              </div>

              {/* Social Links */}
              <div className="flex gap-4 fade-in" style={{ animationDelay: '0.6s' }}>
                {socialLinks.map((social) => {
                  const IconComponent = {
                    Github,
                    Linkedin,
                    Mail
                  }[social.icon] || ExternalLink;

                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-secondary-olive/30 hover:bg-accent hover:text-inverse rounded-full transition-all duration-300 hover:scale-110"
                      aria-label={social.name}
                    >
                      <IconComponent size={20} />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Hero Image */}
            <div className="hero-image-container relative">
              <div className="relative w-full max-w-md mx-auto">
                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-72 h-72 bg-accent/20 rounded-full blur-xl"></div>
                <div className="absolute -bottom-4 -left-4 w-48 h-48 bg-secondary-olive/30 rounded-full blur-lg"></div>
                
                {/* Profile Image */}
                <div className="relative z-10 scale-in" style={{ animationDelay: '0.4s' }}>
                  <img
                    src={personalInfo.profileImage}
                    alt={personalInfo.name}
                    className="w-full h-auto rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Overlay Badge */}
                  <div className="absolute -bottom-4 -right-4 bg-accent text-inverse px-4 py-2 rounded-full font-semibold shadow-lg">
                    Available for hire
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-accent rounded-full flex justify-center">
            <div className="w-1 h-3 bg-accent rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="section bg-secondary-olive/10">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4 fade-in">Featured Projects</h2>
            <p className="body-large text-secondary fade-in" style={{ animationDelay: '0.2s' }}>
              A showcase of my recent work and innovations
            </p>
          </div>

          <div className="grid grid-3 gap-8">
            {featuredProjects.map((project, index) => (
              <div
                key={project.id}
                className="card group cursor-pointer fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300"></div>
                  <div className="absolute top-4 right-4 bg-accent text-inverse px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </div>
                </div>

                <h3 className="heading-3 mb-3 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="body-medium mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-secondary-olive/50 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-3 py-1 bg-secondary-olive/30 text-sm rounded-full">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>

                <div className="flex gap-3">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-ghost flex-1 text-center"
                    >
                      <Github size={16} />
                      Code
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-ghost flex-1 text-center"
                    >
                      <ExternalLink size={16} />
                      Demo
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 fade-in" style={{ animationDelay: '0.5s' }}>
            <Link to="/projects" className="btn-secondary">
              View All Projects
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4 fade-in">What People Say</h2>
            <p className="body-large text-secondary fade-in" style={{ animationDelay: '0.2s' }}>
              Feedback from colleagues and clients I've worked with
            </p>
          </div>

          <div className="grid grid-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.name}
                className="card bg-secondary-olive/20 fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-white">{testimonial.name}</h4>
                    <p className="text-sm text-secondary">{testimonial.position}</p>
                  </div>
                </div>
                <p className="body-medium italic">
                  "{testimonial.quote}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-secondary-olive/10 curve-divider">
        <div className="container text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="heading-2 mb-4 fade-in">Ready to Work Together?</h2>
            <p className="body-large text-secondary mb-8 fade-in" style={{ animationDelay: '0.2s' }}>
              I'm always interested in new opportunities and exciting projects. 
              Let's discuss how we can bring your ideas to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in" style={{ animationDelay: '0.4s' }}>
              <Link to="/contact" className="btn-primary">
                Start a Project
                <ArrowRight size={20} />
              </Link>
              <a
                href={personalInfo.resumeFile}
                download
                className="btn-secondary"
              >
                Download Resume
                <Download size={20} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;