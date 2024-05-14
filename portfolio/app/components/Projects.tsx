'use client';

import React, { useEffect } from 'react';
import { FaGithub, FaGlobe, FaInstagram } from 'react-icons/fa';
import { Button, Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

export const ProjectsDisplay = ({ projects }: { projects: any }) => {
  const projectListItems = projects ? (
    projects.map((project: any) => (
      <div key={project.title} className='bg-gray-700 p-6 rounded-md ml-4 mt-4'>
        <h2 className='text-2xl font-bold m-4'>{project.title}</h2>
        <p className='text-lg mb-4'>{project.description}</p>
        <Button
          className='mr-4 bg-purple-700 mt-4'
          type='primary'
          shape='round'
          icon={<FaGithub />}
          size='large'
          href={project.github}
          target='_blank'
        >
          Github
        </Button>
        <Button
          className='bg-blue-700 mt-4'
          type='primary'
          shape='round'
          icon={<FaGlobe />}
          size='large'
          href={project.website}
          target='_blank'
        >
          Visit the website
        </Button>
      </div>
    ))
  ) : (
    <div className='justify-center flex align-middle'>
      <h1 className='text-4xl font-bold mb-4'>No projects to display</h1>
    </div>
  );
  return (
    <div className='sm:w-2/3 min-w-[300px] min-h-screen 2xl:overflow-auto'>
      <h1 className='text-4xl font-bold mb-4'>Projects 🚀</h1>
      <div className='bg-gray-800 p-6 rounded-md'>{projectListItems}</div>
    </div>
  );
};
