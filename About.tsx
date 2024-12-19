import React from 'react';
import { Code, Palette, Terminal, Zap } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-600 mb-6 text-justify">
            "I am a passionate and dedicated Frontend Developer with a strong foundation in building responsive and user-friendly web applications. I recently completed a 3-month internship at Coyotech, where I honed my skills in modern frontend technologies and gained hands-on experience in real-world projects. I specialize in crafting clean, efficient code using HTML, CSS, JavaScript, and frameworks like Tailwind CSS. My goal is to create engaging digital experiences that prioritize usability and performance. Eager to grow and contribute to innovative projects, I am constantly learning and keeping up with the latest trends in web development."


            </p>
            
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: <Code className="w-5 h-5" />, text: 'Clean Code' },
                { icon: <Terminal className="w-5 h-5" />, text: 'Modern Tech Stack' },
                { icon: <Palette className="w-5 h-5" />, text: 'Creative Design' },
                { icon: <Zap className="w-5 h-5" />, text: 'Fast Performance' },
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2 text-gray-700">
                  {item.icon}
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-4">Core Skills</h3>
            <div className="space-y-4">
              {[
                { name: 'React.js', level: 90 },
                { name: 'JavaScript', level: 85 },
                { name: 'Tailwind CSS', level: 95 },
              ].map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}