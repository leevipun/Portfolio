'use client';

import React, {useEffect} from 'react';
import {FaGithub, FaGlobe, FaInstagram} from 'react-icons/fa';
import {Button, Spin} from 'antd';
import {LoadingOutlined} from '@ant-design/icons';

interface Projects {
  title: string;
  description: string;
  github: string;
  instagram: string;
  website: string;
}

export const ProjectsDisplay: React.FC = ({}) => {
  const [projects, setProjects] = React.useState<Projects[] | null>(null);
  const [loading, setLoading] = React.useState<boolean>(false);

  useEffect(() => {
    const getProjectsData = async () => {
      setLoading(true);
      try {
        const response = await fetch('/api/project', {
          method: 'GET',
        });
        if (!response.ok) {
          throw new Error('Failed to fetch projects data');
        }
        const projects = (await response.json()) as Projects[];
        console.log(projects);
        setProjects(projects);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    getProjectsData();
  }, []);

  const projectListItems = projects ? (
    projects.map((project) => (
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
        <Spin
          spinning={loading}
          fullscreen
          tip='Loading...'
          indicator={
            <LoadingOutlined
              style={{
                fontSize: 24,
              }}
              spin
            />
          }
        >
          <div className='content' />
        </Spin>
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
      <Spin
        spinning={loading}
        fullscreen
        tip='Loading...'
        indicator={
          <LoadingOutlined
            style={{
              fontSize: 24,
            }}
            spin
          />
        }
      >
        <div className='content' />
      </Spin>
    </div>
  );
};
