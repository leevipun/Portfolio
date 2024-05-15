'use client';

import React, { useState } from 'react';

const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className='bg-gradient-to-b from-blue-500 to-gray-800 py-4'>
      <div className='container mx-auto px-4 lg:px-0'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center flex-shrink-0 text-white'>
            <a
              href='/'
              className='font-bold text-xl lg:text-3xl hover:text-gray-200'
            >
              Portfolio
            </a>
          </div>
          <div className='block lg:hidden'>
            <button
              className='flex items-center px-3 py-2 border rounded text-gray-200 border-gray-200 hover:text-white hover:border-white'
              aria-label='Toggle Menu'
              onClick={toggleMenu}
            >
              <svg
                className='h-4 w-4 fill-current'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M0 0h20v2H0V0zm0 8h20v2H0V8zm0 8h20v2H0v-2z' />
              </svg>
            </button>
          </div>
          <div className='hidden lg:flex lg:items-center lg:space-x-4'>
            <a href='/' className='text-white hover:text-gray-200'>
              Home
            </a>
            <a href='/projects' className='text-white hover:text-gray-200'>
              Projects
            </a>
            <a href='/contact' className='text-white hover:text-gray-200'>
              Contact
            </a>
          </div>
        </div>
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out transform ${
            isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          } overflow-hidden`}
        >
          <div className='flex flex-col mt-4'>
            <a href='/' className='block mt-4 text-white hover:text-gray-200'>
              Home
            </a>
            <a
              href='/projects'
              className='block mt-4 text-white hover:text-gray-200'
            >
              Projects
            </a>
            <a
              href='/contact'
              className='block mt-4 text-white hover:text-gray-200'
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
