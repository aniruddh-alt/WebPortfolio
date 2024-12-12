import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-8">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <p>&copy; 2024 Aniruddhan Ramesh. All rights reserved.</p>
        </div>
        <div className="flex space-x-4">
          <a href="https://github.com/yourusername" className="text-2xl hover:text-secondary"><FaGithub /></a>
          <a href="https://linkedin.com/in/yourusername" className="text-2xl hover:text-secondary"><FaLinkedin /></a>
          <a href="https://twitter.com/yourusername" className="text-2xl hover:text-secondary"><FaTwitter /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;