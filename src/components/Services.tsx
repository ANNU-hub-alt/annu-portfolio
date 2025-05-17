
import React from 'react';
import { Code } from 'lucide-react';

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-portfolio-darkBg to-portfolio-darkBg/95 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="section-heading">My Services</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            What I can offer to help bring your ideas to life
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto glass-card p-8 rounded-xl relative overflow-hidden">
          {/* Decorative gradient background */}
          <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-portfolio-purple/20 blur-xl"></div>
          <div className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-portfolio-blue/20 blur-xl"></div>
          
          <div className="relative z-10">
            <div className="flex items-center justify-center mb-8">
              <div className="bg-portfolio-purple/20 p-4 rounded-full">
                <Code className="text-portfolio-purple" size={32} />
              </div>
            </div>
            
            <h3 className="text-2xl font-bold text-center mb-6">Web Development</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white/5 p-4 rounded-lg">
                <h4 className="text-lg font-medium mb-2">Frontend Development</h4>
                <p className="text-gray-400">
                  Creating responsive, user-friendly interfaces with modern design principles that work across all devices.
                </p>
              </div>
              
              <div className="bg-white/5 p-4 rounded-lg">
                <h4 className="text-lg font-medium mb-2">UI Implementation</h4>
                <p className="text-gray-400">
                  Transforming design mockups into functional interfaces with clean, semantic HTML, CSS, and JavaScript.
                </p>
              </div>
              
              <div className="bg-white/5 p-4 rounded-lg">
                <h4 className="text-lg font-medium mb-2">Website Optimization</h4>
                <p className="text-gray-400">
                  Improving website performance and speed through optimization techniques and best practices.
                </p>
              </div>
              
              <div className="bg-white/5 p-4 rounded-lg">
                <h4 className="text-lg font-medium mb-2">Technical Consultation</h4>
                <p className="text-gray-400">
                  Providing advice on technology choices, architecture, and implementation strategies for web projects.
                </p>
              </div>
            </div>
            
            <p className="text-center text-gray-300">
              I'm committed to delivering high-quality web solutions that meet client requirements and exceed expectations. Let's work together to bring your web project to life!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
