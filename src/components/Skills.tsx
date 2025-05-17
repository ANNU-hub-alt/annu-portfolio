import React from 'react';
import { Code } from 'lucide-react';

type Skill = {
  name: string;
  level: number; // 0-100
  color: string;
};

const skills: Skill[] = [
  { name: 'Java', level: 85, color: 'from-red-500 to-orange-500' },
  { name: 'C', level: 80, color: 'from-blue-500 to-cyan-500' },
  { name: 'SQL', level: 75, color: 'from-blue-700 to-blue-500' },
  { name: 'C++', level: 70, color: 'from-blue-600 to-indigo-600' },
  { name: 'HTML', level: 90, color: 'from-orange-600 to-red-500' },
  { name: 'CSS', level: 85, color: 'from-blue-500 to-blue-400' },
  { name: 'JavaScript', level: 80, color: 'from-yellow-400 to-yellow-500' }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-portfolio-darkBg/95 to-portfolio-darkBg relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="section-heading">My Skills</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Here are the technologies and programming languages I specialize in
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Skills bars */}
            <div className="glass-card p-6 rounded-xl">
              <div className="flex items-center mb-6">
                <div className="bg-portfolio-purple/20 p-3 rounded-lg mr-4">
                  <Code className="text-portfolio-purple" size={24} />
                </div>
                <h3 className="text-2xl font-semibold">Technical Skills</h3>
              </div>
              
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium text-white">{skill.name}</span>
                      <span className="text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-700/50 rounded-full overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${skill.color}`} 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Other skills */}
            <div className="flex flex-col justify-between">
              <div className="glass-card p-6 rounded-xl mb-6">
                <h3 className="text-xl font-semibold mb-4">Development Tools</h3>
                <div className="flex flex-wrap gap-3">
                  <span className="skill-badge">VS Code</span>
                  <span className="skill-badge">Eclipse</span>
                  <span className="skill-badge">Git</span>
                  <span className="skill-badge">GitHub</span>
                  <span className="skill-badge">MySQL</span>
                  <span className="skill-badge">Figma</span>
                </div>
              </div>
              
              <div className="glass-card p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4">Soft Skills</h3>
                <div className="flex flex-wrap gap-3">
                  <span className="skill-badge">Team Collaboration</span>
                  <span className="skill-badge">Problem Solving</span>
                  <span className="skill-badge">Communication</span>
                  <span className="skill-badge">Time Management</span>
                  <span className="skill-badge">Adaptability</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-10 w-24 h-24 rounded-full bg-portfolio-blue/10 blur-xl"></div>
      <div className="absolute bottom-1/3 left-10 w-32 h-32 rounded-full bg-portfolio-purple/10 blur-xl"></div>
    </section>
  );
};

export default Skills;
