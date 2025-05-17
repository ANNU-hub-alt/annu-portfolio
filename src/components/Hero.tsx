
import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen relative flex flex-col justify-center bg-dot-pattern overflow-hidden pt-16">
      {/* Enhanced background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-portfolio-purple/10 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-portfolio-blue/10 blur-3xl"></div>
      <div className="absolute top-1/4 left-1/4 w-24 h-24 rounded-full bg-portfolio-orange/10 blur-xl animate-pulse-slow"></div>
      
      <div className="container mx-auto px-6 py-10 flex flex-col md:flex-row items-center relative z-10">
        {/* Text Content - Enhanced */}
        <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0 relative z-10">
          <div className="inline-block px-4 py-1 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 text-portfolio-purple font-medium mb-6 animate-fade-in">
            Hello, I'm
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in" style={{animationDelay: "0.1s"}}>
            Annu <span className="text-gradient">Bunkar</span>
          </h1>
          
          <div className="bg-white/5 backdrop-blur-sm p-3 rounded-xl inline-block mb-8 animate-fade-in" style={{animationDelay: "0.2s"}}>
            <p className="text-xl text-gray-300">
              MCA Student Developer passionate about development
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-8 animate-fade-in" style={{animationDelay: "0.3s"}}>
            <Button className="bg-portfolio-purple hover:bg-purple-600 text-white">
              View Projects
            </Button>
            <Button variant="outline" className="border-portfolio-purple/50 hover:border-portfolio-purple text-white">
              Contact Me
            </Button>
          </div>
          
          {/* Social Icons */}
          <div className="flex gap-4 justify-center md:justify-start animate-fade-in" style={{animationDelay: "0.4s"}}>
            <a href="#" className="bg-white/5 p-2 rounded-full hover:bg-white/10 transition-all">
              <Github className="text-white/80 hover:text-white" size={20} />
            </a>
            <a href="#" className="bg-white/5 p-2 rounded-full hover:bg-white/10 transition-all">
              <Linkedin className="text-white/80 hover:text-white" size={20} />
            </a>
            <a href="#" className="bg-white/5 p-2 rounded-full hover:bg-white/10 transition-all">
              <Mail className="text-white/80 hover:text-white" size={20} />
            </a>
          </div>
        </div>

        {/* Profile Image - Enhanced */}
        <div className="md:w-1/2 flex justify-center md:justify-end relative animate-fade-in" style={{animationDelay: "0.5s"}}>
          <div className="relative">
            {/* Main profile image container */}
            <div className="w-72 h-72 md:w-96 md:h-96 relative">
              <div className="w-full h-full rounded-2xl overflow-hidden border-2 border-portfolio-purple/30 relative z-10 shadow-glow bg-gradient-to-br from-portfolio-darkBg to-portfolio-darkBg/90">
                {/* Profile content - update with actual image when available */}
                <div className="w-full h-full bg-gradient-to-br from-portfolio-purple/30 to-portfolio-blue/30 flex items-center justify-center">
                  <div className="text-center">
                    <span className="font-bold text-8xl bg-clip-text text-transparent bg-gradient-to-r from-portfolio-purple to-portfolio-blue">AB</span>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-full h-full rounded-2xl border-2 border-dashed border-portfolio-purple/30 animate-pulse-slow"></div>
              <div className="absolute -bottom-4 -right-4 w-full h-full rounded-2xl border-2 border-dashed border-portfolio-blue/30 animate-pulse-slow" style={{animationDelay: "1s"}}></div>
              
              {/* Floating elements */}
              <div className="absolute -top-8 -right-8 w-16 h-16 rounded-lg bg-portfolio-purple/20 backdrop-blur-sm rotate-12 animate-pulse-slow"></div>
              <div className="absolute -bottom-10 -left-6 w-20 h-20 rounded-lg bg-portfolio-blue/20 backdrop-blur-sm -rotate-12 animate-pulse-slow" style={{animationDelay: "1.5s"}}></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Enhanced scroll down indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="flex flex-col items-center">
          <span className="text-sm mb-2 text-gray-400 hover:text-white transition-colors bg-white/5 px-4 py-1 rounded-full backdrop-blur-sm">Scroll Down</span>
          <div className="bg-white/5 p-2 rounded-full backdrop-blur-sm">
            <ArrowDown size={18} className="text-portfolio-purple" />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
