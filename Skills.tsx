import React from 'react';
import { Brain, Code2, Database, Layout, Settings, Users } from 'lucide-react';

export default function Skills() {
  const skills = [
    {
      category: 'Frontend',
      icon: <Layout className="w-6 h-6" />,
      items: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Tailwind CSS', 'Next.js'],
    },
    {
      category: 'Backend',
      icon: <Database className="w-6 h-6" />,
      items: ['Node.js', 'MongoDB', 'PostgreSQL'],
    },
    {
      category: 'Tools',
      icon: <Settings className="w-6 h-6" />,
      items: ['Git', 'VS Code', 'monogo atlas'],
    },
    {
      category: 'Soft Skills',
      icon: <Users className="w-6 h-6" />,
      items: ['Communication', 'Problem Solving', 'Time Management'],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">Skills & Expertise</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skillSet, index) => (
            <div key={index} className="p-6 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                {skillSet.icon}
                <h3 className="text-xl font-semibold">{skillSet.category}</h3>
              </div>
              
              <ul className="space-y-2">
                {skillSet.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-center gap-2">
                    <Code2 className="w-4 h-4 text-blue-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}