import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between">
          <p className="text-gray-400">Copyright © 2023</p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-gray-300">
              About Us
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-300">
              Contact Us
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-300">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-300">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;