import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './ui/button';

export const Navigation = () => {
  const location = useLocation();

  return (
    <header className="container mx-auto px-4 py-6 relative z-50">
      <nav className="flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-bold text-gray-900">
            <span className="text-blue-600">→</span>QuickSpace
          </Link>
          <div className="hidden lg:flex ml-12 space-x-8">
            <Link 
              to="/" 
              className={`font-medium transition-colors duration-200 ${
                location.pathname === '/' 
                  ? 'text-blue-600' 
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`font-medium transition-colors duration-200 ${
                location.pathname === '/about' 
                  ? 'text-blue-600' 
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              About
            </Link>
            <a href="#features" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">
              Features
            </a>
            <a href="#pricing" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">
              Pricing
            </a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">
              Contact
            </a>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" className="text-gray-700 hover:text-blue-600 font-medium">
            Sign In
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-200 shadow-lg hover:shadow-xl">
            Get Started Free
          </Button>
        </div>
      </nav>
    </header>
  );
};