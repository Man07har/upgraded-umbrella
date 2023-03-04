import React from 'react';
import logo from '../assets/logo.jpg';
import '../App.css'
import 'tailwindcss/tailwind.css';

function Navbar() {
  return (
    <nav className="bg-blue-500 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <img src={logo} className="h-8 w-8" alt="Logo" />
          </div>
          <div className="flex">
            <a href="#" className="text-white px-3 py-2 rounded-md text-sm font-medium">Home</a>
            <a href="#" className="text-white px-3 py-2 rounded-md text-sm font-medium">Features</a>
            <a href="#" className="text-white px-3 py-2 rounded-md text-sm font-medium">Pricing</a>
            <a href="#" className="text-white px-3 py-2 rounded-md text-sm font-medium">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;