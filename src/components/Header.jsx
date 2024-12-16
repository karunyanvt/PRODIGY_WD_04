import React from "react";

const Header = () => {
  return (
    <header className="sticky top-0 bg-gradient-to-r from-purple-800 to-blue-800 text-white shadow-lg z-10">
      <nav className="flex items-center justify-between px-8 py-4">
        <h1 className="text-2xl font-bold hover:text-teal-300 transition duration-300">
          Karunyan
        </h1>
        <ul className="flex space-x-6">
          <li>
            <a href="#about" className="hover:text-teal-300 transition duration-300">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-teal-300 transition duration-300">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-teal-300 transition duration-300">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
