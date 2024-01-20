import React from 'react';
import {FaGithub, FaInstagram, FaLinkedin} from 'react-icons/fa';

export const Socials: React.FC = () => {
  const handleRedirectToLinkedIn = () => {
    window.open('https://www.linkedin.com/in/leevi-puntanen-0a3484298/');
  };

  const handleRedirectToGitHub = () => {
    window.open('https://github.com/leevipun');
  };

  const handleRedirectToInstagram = () => {
    window.open('https://www.instagram.com/__leepu/');
  };
  return (
    <div className='mb-4'>
      <h2 className='text-2xl font-bold mb-4 mt-4'>Socials </h2>
      <div className='bg-gray-700 p-6 rounded-md'>
        <div
          className='flex mb-2 hover:cursor-pointer hover:bg-gray-600 rounded-md mb-2 p-2'
          onClick={handleRedirectToLinkedIn}
        >
          <FaLinkedin
            className='mr-4 bg-white rounded-md'
            color='#0077B5'
            size='2em'
          />
          <p className='text-lg'>Leevi Puntanen</p>
        </div>
        <div
          className='flex mb-2 hover:cursor-pointer hover:bg-gray-600 rounded-md mb-2 p-2'
          onClick={handleRedirectToGitHub}
        >
          <FaGithub className='mr-4 bg-purple-700 rounded-md' size='2em' />
          <p className='text-lg'>leevipun</p>
        </div>
        <div
          className='flex hover:cursor-pointer hover:bg-gray-600 rounded-md mb-2 p-2'
          onClick={handleRedirectToInstagram}
        >
          <FaInstagram
            className='mr-4 rounded-md bg-gradient-to-tr from-yellow-300 via-pink-500 to-indigo-700'
            size='2em'
          />
          <p className='text-lg'>__leepu</p>
        </div>
      </div>
    </div>
  );
};
