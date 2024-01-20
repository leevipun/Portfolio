'use client';

import React, {useEffect} from 'react';
import {FaGithub, FaGlobe, FaInstagram} from 'react-icons/fa';
import {Button} from 'antd';

interface Projects {
  name: string;
  description: string;
  github: string;
  instagram: string;
  website: string;
}

export const ProjectsDisplay: React.FC = ({}) => {
  const [projects, setProjects] = React.useState<Projects[] | null>(null);
  useEffect(() => {
    const getProjectsData = async () => {
      const projects = (await fetch('/api/project', {
        method: 'GET',
      }).then((res) => res.json())) as Projects[];
      console.log(projects);
      setProjects(projects);
    };
    getProjectsData();
  }, []);

  const projectListItems = projects ? (
    projects.map((project) => (
      <div key={project.title} className='bg-gray-700 p-6 rounded-md ml-4 mt-4'>
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
    <div className='justify-center flex align-middle'>
      <h1 className='text-4xl font-bold mb-4'>No projects to display</h1>
    </div>
  );
  return (
    <div className='sm:w-2/3 min-w-[300px]'>
      <h1 className='text-4xl font-bold mb-4'>Projects 🚀</h1>
      <div className='bg-gray-800 p-6 rounded-md'>{projectListItems}</div>
    </div>
  );
};
