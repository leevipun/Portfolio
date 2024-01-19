import React from 'react';
import {FaGithub, FaGlobe, FaInstagram} from 'react-icons/fa';
import {Button} from 'antd';

export const Projects: React.FC = () => {
  return (
    <div className='w-2/3 min-w-[300px]'>
      <h1 className='text-4xl font-bold mb-4'>Projects</h1>
      <div className='bg-gray-700 p-6 rounded-md m-4'>
        <h2 className='text-2xl font-bold m-4'>Portfolio</h2>
        <p className='text-lg mb-4'>
          My personal portfolio website built with Next.js and Tailwind CSS.
        </p>
        <Button
          className='mr-4 bg-purple-700'
          type='primary'
          shape='round'
          icon={<FaGithub />}
          size='large'
          href='https://portfolio-neon-kappa-94.vercel.app/'
          target='_blank'
        >
          Github
        </Button>
        <Button
          className='mr-4 bg-purple-700'
          type='primary'
          shape='round'
          icon={<FaInstagram />}
          size='large'
          href=''
          target='_blank'
        >
          Post
        </Button>
        <Button
          className='bg-blue-700'
          type='primary'
          shape='round'
          icon={<FaGlobe />}
          size='large'
          href='https://courseproject-ten.vercel.app/'
          target='_blank'
        >
          Visit the website
        </Button>
      </div>
      <div className='bg-gray-700 p-6 rounded-md m-4'>
        <h2 className='text-2xl font-bold m-4'>Habbit Tracker</h2>
        <p className='text-lg mb-4'>
          Habbit Tracker build with Next.js and Tailwind CSS. The app is used to
          track habbits and goals.
        </p>
        <Button
          className='mr-4 bg-purple-700'
          type='primary'
          shape='round'
          icon={<FaGithub />}
          size='large'
          href='https://github.com/leevipun/Habbit-Tracker'
          target='_blank'
        >
          Github
        </Button>
        <Button
          className='mr-4 bg-purple-700'
          type='primary'
          shape='round'
          icon={<FaInstagram />}
          size='large'
          href=''
          target='_blank'
        >
          Post
        </Button>
        <Button
          className='bg-blue-700'
          type='primary'
          shape='round'
          icon={<FaGlobe />}
          size='large'
          href='https://courseproject-ten.vercel.app/'
          target='_blank'
        >
          Visit the website
        </Button>
      </div>
      <div className='bg-gray-700 p-6 rounded-md m-4'>
        <h2 className='text-2xl font-bold m-4'>E-commarance website</h2>
        <p className='text-lg mb-4'>
          E-commarance website built for a university course project. Made with
          React, Node.js, Express.js and MongoDB.
        </p>
        <Button
          className='mr-4 bg-purple-700'
          type='primary'
          shape='round'
          icon={<FaGithub />}
          size='large'
          href='https://github.com/leevipun/Courseproject'
          target='_blank'
        >
          Github
        </Button>
        <Button
          className='mr-4 bg-purple-700'
          type='primary'
          shape='round'
          icon={<FaInstagram />}
          size='large'
          href=''
          target='_blank'
        >
          Post
        </Button>
        <Button
          className='bg-blue-700'
          type='primary'
          shape='round'
          icon={<FaGlobe />}
          size='large'
          href='https://courseproject-ten.vercel.app/'
          target='_blank'
        >
          Visit the website
        </Button>
      </div>
    </div>
  );
};
