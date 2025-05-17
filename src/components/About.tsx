
import React from 'react';
import { User, Book } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-portfolio-darkBg to-portfolio-darkBg/95 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="section-heading">About Me</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Education */}
          <div className="glass-card p-6 rounded-xl">
            <div className="flex items-center mb-6">
              <div className="bg-portfolio-purple/20 p-3 rounded-lg mr-4">
                <Book className="text-portfolio-purple" size={24} />
              </div>
              <h3 className="text-2xl font-semibold">Education</h3>
            </div>
            
            <div className="space-y-6">
              <div className="border-l-2 border-portfolio-purple/50 pl-4">
                <h4 className="text-lg font-medium">Master of Computer Applications (MCA)</h4>
                <p className="text-gray-400">Manipal University Jaipur</p>
                <p className="text-gray-400">Currently Pursuing</p>
              </div>
              
              <div className="border-l-2 border-portfolio-blue/50 pl-4">
                <h4 className="text-lg font-medium">Bachelor of Computer Applications (BCA)</h4>
                <p className="text-gray-400">Manipal University Jaipur</p>
                <p className="text-gray-400">2024 | CGPA: 9.03</p>
              </div>
            </div>
          </div>
          
          {/* Bio */}
          <div className="glass-card p-6 rounded-xl">
            <div className="flex items-center mb-6">
              <div className="bg-portfolio-blue/20 p-3 rounded-lg mr-4">
                <User className="text-portfolio-blue" size={24} />
              </div>
              <h3 className="text-2xl font-semibold">Personal Bio</h3>
            </div>
            
            <p className="text-gray-300 leading-relaxed mb-4">
              I am an MCA student developer with a passion for creating elegant solutions to complex problems. My journey in programming began during my BCA studies, where I discovered my enthusiasm for web development.
            </p>
            
            <p className="text-gray-300 leading-relaxed mb-4">
              With a strong foundation in both frontend and backend technologies, I aim to build responsive and user-friendly websites that deliver exceptional experiences. 
            </p>
            
            <p className="text-gray-300 leading-relaxed">
              I am constantly learning and expanding my skills to stay updated with the latest technologies and best practices in the field of web development.
            </p>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-40 left-10 w-20 h-20 rounded-full bg-portfolio-purple/10 blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-portfolio-blue/10 blur-xl"></div>
    </section>
  );
};

export default About;
