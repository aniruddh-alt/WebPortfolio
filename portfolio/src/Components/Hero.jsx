import React from 'react';

const Hero = () => {
  return (
    <section className="text-white py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700">
      <div className="container mx-auto px-6 text-left">
        <h1 className="text-7xl font-extrabold mb-4 tracking-wide leading-tight drop-shadow-lg">
          Aniruddhan Ramesh
        </h1>
        <h2 className="text-3xl font-semibold mb-10 text-gray-300">
          Software Developer
        </h2>
        <a 
          href="#contact" 
          className="inline-block text-lg font-bold text-gray-900 bg-primary py-3 px-8 rounded-full hover:bg-secondary hover:text-white transition duration-300 shadow-lg transform hover:scale-105"
        >
          Get In Touch
        </a>
      </div>
    </section>
  );
};

export default Hero;
