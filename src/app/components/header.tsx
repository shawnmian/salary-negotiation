// src/app/components/Header.tsx

import React from 'react';

const Header = () => {
  return (
    <header className="bg-blue-500 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Salary Negotiation</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="/home" className="hover:text-gray-300">
                Home
              </a>
            </li>
            <li>
              <a href="/salary-calculator" className="hover:text-gray-300">
                Calculator
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-gray-300">
                About
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
