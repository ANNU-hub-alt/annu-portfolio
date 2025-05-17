
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
      
      <div className="container mx-auto px-6 py-10 flex items-center justify-center relative z-10">
        {/* Text Content - Enhanced and centered */}
        <div className="text-center max-w-2xl">
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
          
          <div className="flex flex-wrap gap-4 justify-center mb-8 animate-fade-in" style={{animationDelay: "0.3s"}}>
            <Button className="bg-portfolio-purple hover:bg-purple-600 text-white">
              View Projects
            </Button>
            <Button variant="outline" className="border-portfolio-purple/50 hover:border-portfolio-purple text-white">
              Contact Me
            </Button>
          </div>
          
          {/* Social Icons */}
          <div className="flex gap-4 justify-center animate-fade-in" style={{animationDelay: "0.4s"}}>
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
