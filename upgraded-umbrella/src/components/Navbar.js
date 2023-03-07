import React from 'react';
import logo from '../assets/logo.jpg';
import '../App.css'
import 'tailwindcss/tailwind.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-blue-500 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <img src={logo} className="h-8 w-8" alt="Logo" />
          </div>
          <div className="flex">
            <Link to="/" className="text-white px-3 py-2 rounded-md text-sm font-medium">Home</Link>
            <Link to="/Features" className="text-white px-3 py-2 rounded-md text-sm font-medium">Features</Link>
            <Link to="/Pricing" className="text-white px-3 py-2 rounded-md text-sm font-medium">Pricing</Link>
            <Link to="/Contact" className="text-white px-3 py-2 rounded-md text-sm font-medium">Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;