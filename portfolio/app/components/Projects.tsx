import React from 'react';
import {FaGithub, FaGlobe, FaInstagram} from 'react-icons/fa';
import {Button} from 'antd';

interface Projects {
  name: string;
  description: string;
  github: string;
  instagram: string;
  website: string;
}

export const ProjectsDisplay: React.FC<{projects: Projects[]}> = ({
  projects,
}) => {
  const projectListItems = projects ? (
    projects.map((project) => (
      <div key={project.name} className='bg-gray-700 p-6 rounded-md ml-4 mt-4'>
        <h2 className='text-2xl font-bold m-4'>{project.name}</h2>
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
          className='mr-4 bg-purple-700 mt-4'
          type='primary'
          shape='round'
          icon={<FaInstagram />}
          size='large'
          href={project.instagram}
          target='_blank'
        >
          Post
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
    <div>
      <h1>No projects to display</h1>
    </div>
  );
  return (
    <div className='sm:w-2/3 min-w-[300px]'>
      <h1 className='text-4xl font-bold mb-4'>Projects 🚀</h1>
      <div className='bg-gray-800 p-6 rounded-md'>{projectListItems}</div>
    </div>
  );
};
