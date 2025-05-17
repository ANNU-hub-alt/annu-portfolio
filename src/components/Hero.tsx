
import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen relative flex flex-col justify-center bg-dot-pattern overflow-hidden pt-16">
      {/* Background elements */}
      <div className="absolute top-20 right-10 w-24 h-24 rounded-full bg-portfolio-purple/20 blur-xl"></div>
      <div className="absolute bottom-20 left-10 w-32 h-32 rounded-full bg-portfolio-blue/20 blur-xl"></div>
      
      <div className="container mx-auto px-6 py-10 flex flex-col md:flex-row items-center">
        {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0 relative z-10">
          <p className="text-portfolio-purple font-medium mb-4">Hello, I'm</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Annu Bunkar
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            MCA Student Developer passionate about{" "}
            <span className="text-gradient font-medium">web development</span>
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <a href="#projects" className="cta-button">
              View Projects
            </a>
            <a href="#contact" className="bg-transparent border border-portfolio-purple/50 hover:border-portfolio-purple text-white py-3 px-6 rounded-lg transition-all duration-300 flex items-center gap-2">
              Contact Me
            </a>
          </div>
        </div>

        {/* Profile Image */}
        <div className="md:w-1/2 flex justify-center md:justify-end relative">
          <div className="w-64 h-64 md:w-80 md:h-80 relative">
            {/* Replace with actual profile picture */}
            <div className="w-full h-full rounded-full overflow-hidden border-4 border-portfolio-purple/30 relative z-10 shadow-glow">
              <div className="w-full h-full bg-gradient-to-br from-portfolio-purple/50 to-portfolio-blue/50 flex items-center justify-center text-white font-bold text-2xl">
                AB
              </div>
            </div>
            {/* Decorative circles */}
            <div className="absolute -top-4 -left-4 w-full h-full rounded-full border-2 border-dashed border-portfolio-purple/30 animate-pulse-slow"></div>
            <div className="absolute -bottom-4 -right-4 w-full h-full rounded-full border-2 border-dashed border-portfolio-blue/30 animate-pulse-slow"></div>
          </div>
        </div>
      </div>
      
      {/* Scroll down indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="flex flex-col items-center text-gray-400 hover:text-white transition-colors">
          <span className="text-sm mb-2">Scroll Down</span>
          <ArrowDown size={20} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
