
import React from 'react';
import { Mail, Github, Linkedin, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-portfolio-darkBg/95 to-portfolio-darkBg relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="section-heading">Get In Touch</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Information */}
          <div className="glass-card p-6 rounded-xl">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="bg-portfolio-purple/20 p-3 rounded-full mr-4">
                  <Mail className="text-portfolio-purple" size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <a href="mailto:annu.bunkar@example.com" className="text-white hover:text-portfolio-purple transition-colors">
                    annu.bunkar@example.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-portfolio-blue/20 p-3 rounded-full mr-4">
                  <Phone className="text-portfolio-blue" size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Phone</p>
                  <a href="tel:+918565432190" className="text-white hover:text-portfolio-blue transition-colors">
                    +91 856 543 2190
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-portfolio-purple/20 p-3 rounded-full mr-4">
                  <Github className="text-portfolio-purple" size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">GitHub</p>
                  <a 
                    href="https://github.com/annubunkar" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white hover:text-portfolio-purple transition-colors"
                  >
                    github.com/annubunkar
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-portfolio-blue/20 p-3 rounded-full mr-4">
                  <Linkedin className="text-portfolio-blue" size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">LinkedIn</p>
                  <a 
                    href="https://linkedin.com/in/annubunkar" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white hover:text-portfolio-blue transition-colors"
                  >
                    linkedin.com/in/annubunkar
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="glass-card p-6 rounded-xl">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm text-gray-400 mb-1">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-portfolio-purple/50"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm text-gray-400 mb-1">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-portfolio-purple/50"
                  placeholder="Your email"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm text-gray-400 mb-1">Message</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-portfolio-purple/50"
                  placeholder="Your message"
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="w-full bg-portfolio-purple hover:bg-purple-600 text-white py-2 px-4 rounded-lg transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/3 right-10 w-24 h-24 rounded-full bg-portfolio-purple/10 blur-xl"></div>
      <div className="absolute bottom-1/3 left-10 w-32 h-32 rounded-full bg-portfolio-blue/10 blur-xl"></div>
    </section>
  );
};

export default Contact;
