import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, Clock } from 'lucide-react';
import { personalInfo, socialLinks } from '../data/mock';
import { useToast } from '../hooks/use-toast';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate form submission (replace with actual API call later)
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      color: "text-accent"
    },
    {
      icon: Phone,
      label: "Phone",
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
      color: "text-secondary-blue"
    },
    {
      icon: MapPin,
      label: "Location",
      value: personalInfo.location,
      href: null,
      color: "text-secondary-yellow"
    },
    {
      icon: Clock,
      label: "Response Time",
      value: "Within 24 hours",
      href: null,
      color: "text-accent"
    }
  ];

  return (
    <div className="contact-page pt-24">
      {/* Hero Section */}
      <section className="section">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="heading-1 mb-4 fade-in">Get In Touch</h1>
            <p className="body-large text-secondary fade-in" style={{ animationDelay: '0.2s' }}>
              Have a project in mind or just want to chat? I'd love to hear from you. 
              Send me a message and I'll respond as soon as possible.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="fade-in" style={{ animationDelay: '0.3s' }}>
                <h2 className="heading-2 mb-6">Let's Connect</h2>
                <p className="body-medium text-secondary mb-8">
                  I'm currently available for freelance work and full-time opportunities. 
                  Whether you have a question about my work, want to discuss a project, 
                  or just want to say hello, don't hesitate to reach out.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {contactInfo.map((info, index) => (
                  <div
                    key={info.label}
                    className="card bg-secondary-olive/20 hover:bg-secondary-olive/30 transition-all duration-300 fade-in"
                    style={{ animationDelay: `${0.4 + (index * 0.1)}s` }}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-full bg-secondary-olive/50 flex items-center justify-center`}>
                        <info.icon className={`w-6 h-6 ${info.color}`} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white mb-1">{info.label}</h3>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="text-secondary hover:text-accent transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-secondary">{info.value}</p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="fade-in" style={{ animationDelay: '0.8s' }}>
                <h3 className="heading-3 mb-4">Follow Me</h3>
                <div className="flex gap-4">
                  {socialLinks.map((social) => {
                    const IconComponent = {
                      Github,
                      Linkedin,
                      Twitter,
                      Mail
                    }[social.icon] || Mail;

                    return (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-4 bg-secondary-olive/30 hover:bg-accent hover:text-inverse rounded-xl transition-all duration-300 hover:scale-110 group"
                        aria-label={social.name}
                      >
                        <IconComponent size={24} className="group-hover:scale-110 transition-transform" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="fade-in" style={{ animationDelay: '0.5s' }}>
              <div className="card bg-secondary-olive/20">
                <h2 className="heading-2 mb-6">Send Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name and Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-secondary-olive/30 border border-secondary-olive/50 rounded-lg text-white placeholder-secondary focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300"
                        placeholder="Your name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-secondary-olive/30 border border-secondary-olive/50 rounded-lg text-white placeholder-secondary focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-white mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-secondary-olive/30 border border-secondary-olive/50 rounded-lg text-white placeholder-secondary focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300"
                      placeholder="What's this about?"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-secondary-olive/30 border border-secondary-olive/50 rounded-lg text-white placeholder-secondary focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300 resize-vertical"
                      placeholder="Tell me about your project or just say hello..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`btn-primary w-full ${
                      isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:scale-102'
                    }`}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    <Send size={16} />
                  </button>
                </form>

                <div className="mt-6 pt-6 border-t border-secondary-olive/30">
                  <p className="text-sm text-secondary text-center">
                    Your information is safe with me. I'll never share your details with anyone.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-secondary-olive/10">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="heading-2 mb-4 fade-in">Frequently Asked Questions</h2>
            <p className="body-large text-secondary fade-in" style={{ animationDelay: '0.2s' }}>
              Quick answers to common questions about working with me
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                question: "What's your typical response time?",
                answer: "I usually respond to all inquiries within 24 hours, often much sooner."
              },
              {
                question: "Do you work on small projects?",
                answer: "Absolutely! I enjoy projects of all sizes, from simple websites to complex applications."
              },
              {
                question: "What are your rates?",
                answer: "My rates vary depending on the project scope and complexity. Let's discuss your specific needs."
              },
              {
                question: "Do you work remotely?",
                answer: "Yes, I work with clients globally. I'm also open to local meetings in the Bay Area."
              }
            ].map((faq, index) => (
              <div
                key={faq.question}
                className="card bg-secondary-olive/20 fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="font-semibold text-white mb-3">{faq.question}</h3>
                <p className="text-secondary">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;