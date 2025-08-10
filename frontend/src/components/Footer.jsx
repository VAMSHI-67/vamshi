import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { personalInfo, socialLinks } from '../data/mock';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Projects', path: '/projects' },
    { label: 'Skills', path: '/skills' },
    { label: 'Resume', path: '/resume' },
    { label: 'Contact', path: '/contact' }
  ];

  return (
    <footer className="bg-secondary-olive/20 relative">
      {/* Curve Divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden">
        <svg
          className="relative block w-full h-12"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="fill-current text-bg-page"
          />
        </svg>
      </div>

      <div className="container pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand & Description */}
          <div className="md:col-span-2">
            <Link to="/" className="inline-block mb-4">
              <h3 className="text-2xl font-bold text-white">
                {personalInfo.name.split(' ').map((name, index) => (
                  <span key={index} className={index === 1 ? 'text-accent' : ''}>
                    {name}{index === 0 && ' '}
                  </span>
                ))}
              </h3>
            </Link>
            <p className="text-secondary mb-4 max-w-md">
              {personalInfo.tagline}. Always excited to work on new projects and connect with fellow developers.
            </p>
            <p className="text-secondary text-sm">
              Currently available for freelance work and full-time opportunities.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <div className="space-y-2">
              {footerLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="block text-secondary hover:text-accent transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="font-semibold text-white mb-4">Get In Touch</h4>
            <div className="space-y-2 mb-6">
              <p className="text-secondary text-sm">{personalInfo.location}</p>
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-secondary hover:text-accent transition-colors duration-300 text-sm"
              >
                {personalInfo.email}
              </a>
            </div>
            
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const IconComponent = {
                  Github,
                  Linkedin,
                  Mail
                }[social.icon] || Mail;

                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-secondary-olive/50 hover:bg-accent hover:text-inverse rounded-lg transition-all duration-300 hover:scale-110"
                    aria-label={social.name}
                  >
                    <IconComponent size={18} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-secondary-olive/50 mb-6"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-secondary text-sm">
            <span>© {currentYear} {personalInfo.name}. Made with</span>
            <Heart size={16} className="text-red-500 animate-pulse" />
            <span>using React & Tailwind CSS</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-secondary text-sm">Back to top</span>
            <button
              onClick={scrollToTop}
              className="p-2 bg-secondary-olive/50 hover:bg-accent hover:text-inverse rounded-full transition-all duration-300 hover:scale-110 group"
              aria-label="Scroll to top"
            >
              <ArrowUp size={16} className="group-hover:animate-bounce" />
            </button>
          </div>
        </div>

        {/* Credits */}
        <div className="text-center mt-6 pt-6 border-t border-secondary-olive/30">
          <p className="text-secondary text-xs">
            Portfolio design inspired by modern web standards. 
            All projects and achievements are representative examples.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;