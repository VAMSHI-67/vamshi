import React, { useState } from 'react';
import { Download, Mail, Phone, MapPin, Calendar, ExternalLink, Github, Linkedin } from 'lucide-react';
import { personalInfo, experience, skills, achievements, socialLinks } from '../data/mock';

const ResumePage = () => {
  const [isGenerating, setIsGenerating] = useState(false);

  const handleDownloadPDF = async () => {
    setIsGenerating(true);
    
    // Simulate PDF generation (replace with actual PDF generation logic later)
    setTimeout(() => {
      // This would typically call a backend API to generate PDF
      console.log('PDF generation would happen here');
      setIsGenerating(false);
    }, 2000);
  };

  const handlePrintResume = () => {
    window.print();
  };

  return (
    <div className="resume-page pt-24">
      {/* Resume Header Actions */}
      <section className="section-sm bg-secondary-olive/10 no-print">
        <div className="container">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <h1 className="heading-2 mb-2 fade-in">Resume</h1>
              <p className="body-medium text-secondary fade-in" style={{ animationDelay: '0.2s' }}>
                View my professional background and download as PDF
              </p>
            </div>
            
            <div className="flex gap-3 fade-in" style={{ animationDelay: '0.3s' }}>
              <button
                onClick={handlePrintResume}
                className="btn-secondary"
              >
                Print Resume
              </button>
              <button
                onClick={handleDownloadPDF}
                disabled={isGenerating}
                className="btn-primary"
              >
                {isGenerating ? 'Generating...' : 'Download PDF'}
                <Download size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Resume Content */}
      <section className="section bg-white text-black print-section" id="resume-content">
        <div className="container max-w-4xl mx-auto">
          <div className="bg-white p-8 md:p-12 rounded-lg shadow-2xl resume-container">
            
            {/* Header */}
            <div className="text-center mb-8 pb-8 border-b-2 border-gray-200">
              <h1 className="text-4xl font-bold text-black mb-2">{personalInfo.name}</h1>
              <h2 className="text-xl text-gray-600 mb-4">{personalInfo.title}</h2>
              
              <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Mail size={16} />
                  <span>{personalInfo.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={16} />
                  <span>{personalInfo.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={16} />
                  <span>{personalInfo.location}</span>
                </div>
              </div>

              <div className="flex justify-center gap-4 mt-4">
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
                      className="text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      <IconComponent size={16} />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Professional Summary */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-black mb-4 pb-2 border-b border-gray-300">
                Professional Summary
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {personalInfo.bio}
              </p>
            </div>

            {/* Experience */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-black mb-4 pb-2 border-b border-gray-300">
                Professional Experience
              </h3>
              
              {experience.map((exp, index) => (
                <div key={exp.title} className="mb-6 last:mb-0">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
                    <h4 className="text-xl font-semibold text-black">{exp.title}</h4>
                    <span className="text-gray-600 font-medium">{exp.period}</span>
                  </div>
                  <h5 className="text-lg text-gray-700 mb-2">{exp.company}</h5>
                  <p className="text-gray-600 leading-relaxed">{exp.description}</p>
                </div>
              ))}
            </div>

            {/* Skills */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-black mb-4 pb-2 border-b border-gray-300">
                Technical Skills
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Technical Skills */}
                <div>
                  <h4 className="text-lg font-semibold text-black mb-3">Programming & Frameworks</h4>
                  <div className="space-y-2">
                    {skills.technical.map((skill) => (
                      <div key={skill.name} className="flex justify-between items-center">
                        <span className="text-gray-700">{skill.name}</span>
                        <div className="flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <div
                              key={i}
                              className={`w-3 h-3 rounded-full ${
                                i < Math.round(skill.level / 20) 
                                  ? 'bg-gray-800' 
                                  : 'bg-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tools & Soft Skills */}
                <div>
                  <h4 className="text-lg font-semibold text-black mb-3">Tools & Technologies</h4>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {skills.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  <h4 className="text-lg font-semibold text-black mb-3">Core Competencies</h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.soft.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Achievements */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-black mb-4 pb-2 border-b border-gray-300">
                Achievements & Certifications
              </h3>
              
              {achievements.map((achievement, index) => (
                <div key={achievement.title} className="mb-4 last:mb-0">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-1">
                    <h4 className="text-lg font-semibold text-black">{achievement.title}</h4>
                    <span className="text-gray-600 font-medium">{achievement.date}</span>
                  </div>
                  <p className="text-gray-600">{achievement.description}</p>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="text-center pt-8 border-t border-gray-200 text-sm text-gray-500">
              <p>This resume was generated on {new Date().toLocaleDateString()}</p>
              <p className="mt-1">
                Visit <span className="font-semibold">alexthompson.dev</span> for the latest version
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section bg-secondary-olive/10 curve-divider no-print">
        <div className="container text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="heading-2 mb-4 fade-in">Interested in Working Together?</h2>
            <p className="body-large text-secondary mb-8 fade-in" style={{ animationDelay: '0.2s' }}>
              I'm always open to discussing new opportunities and exciting projects. 
              Let's connect and see how we can create something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in" style={{ animationDelay: '0.4s' }}>
              <a href="/contact" className="btn-primary">
                Get In Touch
                <Mail size={16} />
              </a>
              <a href="/projects" className="btn-secondary">
                View My Work
                <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Print Styles */}
      <style jsx>{`
        @media print {
          .no-print {
            display: none !important;
          }
          
          .print-section {
            background: white !important;
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
          
          .resume-container {
            box-shadow: none !important;
            border: none !important;
            padding: 0 !important;
          }
          
          body {
            background: white !important;
            color: black !important;
          }
          
          * {
            color: black !important;
          }
          
          .container {
            max-width: 100% !important;
            padding: 0 !important;
          }
          
          .section {
            padding: 0 !important;
          }
        }
      `}</style>
    </div>
  );
};

export default ResumePage;