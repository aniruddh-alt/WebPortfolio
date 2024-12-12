import React from 'react';

const ProjectCard = ({ title, description, image, liveLink, codeLink }) => {
  return (
    <div className="bg-white max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full" src={image} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <a href={liveLink} className="inline-block bg-blue-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">Live Demo</a>
        <a href={codeLink} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">View Code</a>
      </div>
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: 'Project 1',
      description: 'A brief description of Project 1',
      image: 'path/to/image1.jpg',
      liveLink: 'https://project1.com',
      codeLink: 'https://github.com/yourusername/project1'
    },
    // Add more projects
  ];

  return (
    <section className="py-20 ">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;