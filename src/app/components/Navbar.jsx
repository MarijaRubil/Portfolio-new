import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-opacity-80 rounded-b-3xl p-10 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <img src="/Marija.png" alt="Logo" className="h-20 w-40" />
          </div>
          <div className="flex">
            <a href="#about" className="text-black text hover:bg-red-100 px-3 py-2 rounded-md text-xl font-medium">About</a>
            <a href="#education" className="text-black hover:bg-red-100 px-3 py-2 rounded-md text-xl font-medium">Education</a>
            <a href="#projects" className="text-black hover:bg-red-100 px-3 py-2 rounded-md text-xl font-medium">Projects</a>
            <a href="#contact" className="text-black hover:bg-red-200 px-3 py-2 rounded-md text-xl font-medium">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

