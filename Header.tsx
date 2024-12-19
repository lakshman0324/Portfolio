import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

export default function Header() {
  return (
    <div className="min-h-screen relative bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="absolute inset-0">
      <div className="absolute inset-0 bg-black opacity-50"></div>
       
      </div>
      
      <div className="relative z-10 container mx-auto px-6 py-32 flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-6xl font-bold mb-4 text-center">Lakshmanan H</h1>
        <h2 className="text-2xl font-light mb-8 text-gray-300">Frontend Developer </h2>
        <p className="text-xl mb-12 max-w-2xl text-center text-gray-300">
          Passionate Frontend Developer crafting intuitive and responsive web applications that make a difference.
        </p>
        
        <div className="flex gap-6 mb-12">
          <a href="#" className="text-white hover:text-gray-300 transition-colors">
            <Github className="w-6 h-6" />
          </a>
          <a href="#" className="text-white hover:text-gray-300 transition-colors">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="#" className="text-white hover:text-gray-300 transition-colors">
            <Mail className="w-6 h-6" />
          </a>
        </div>
        
        <a
          href="#projects"
          className="bg-white text-gray-900 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors"
        >
          View My Work
        </a>
        
        <div className="absolute bottom-8 animate-bounce">
          <ArrowDown className="w-6 h-6" />
        </div>
      </div>
    </div>
  );
}