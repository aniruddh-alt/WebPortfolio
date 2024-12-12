import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from 'react-icons/fa';

const TechStack = () => {
  const technologies = [
    { name: 'HTML5', icon: <FaHtml5 /> },
    { name: 'CSS3', icon: <FaCss3Alt /> },
    { name: 'JavaScript', icon: <FaJs /> },
    { name: 'React', icon: <FaReact /> },
    { name: 'Node.js', icon: <FaNodeJs /> },
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Tech Stack</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {technologies.map((tech, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="text-5xl mb-4">{tech.icon}</div>
              <span className="text-lg">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;