import React, { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="text-white">
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className="text-xl font-bold">Aniruddhan Ramesh</div>
        <div className="hidden md:flex">
          <a href="#about" className="mx-3 font-bold">About</a>
          <a href="#projects" className="mx-3 font-bold">Projects</a>
          <a href="#contact" className="mx-3 font-bold">Contact</a>
        </div>
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          Menu
        </button>
      </nav>
      {isOpen && (
        <div className="md:hidden">
          <a href="#about" className="block py-2 px-4 text-sm hover:bg-secondary">About</a>
          <a href="#projects" className="block py-2 px-4 text-sm hover:bg-secondary">Projects</a>
          <a href="#contact" className="block py-2 px-4 text-sm hover:bg-secondary">Contact</a>
        </div>
      )}
    </header>
  );
};

export default Header;