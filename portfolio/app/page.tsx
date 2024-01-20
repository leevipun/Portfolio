'use client';

import React from 'react';
import {Button} from 'antd';
import {ProjectsDisplay} from './components/Projects';
import {InfoBox} from './components/infobox';

interface Projects {
  name: string;
  description: string;
  github: string;
  instagram: string;
  website: string;
}

export default function Home() {
  const [title, setTitle] = React.useState<string>('');
  const [description, setDescription] = React.useState<string>('');
  const [github, setGithub] = React.useState<string>('');
  const [instagram, setInstagram] = React.useState<string>('');
  const [website, setWebsite] = React.useState<string>('');
  const [stack, setStack] = React.useState<string>('');

  const handleSubmit = async () => {
    try {
      const project = {
        title,
        description,
        github,
        instagram,
        website,
        stack,
      };
      const res = await fetch('/api/project', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(project),
      });
      console.log(res);
      if (res.status === 201) {
        setTitle('');
        setDescription('');
        setGithub('');
        setInstagram('');
        setWebsite('');
        setStack('');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main className='flex flex-col bg-gray-800 overflow-auto'>
      <div className=' bg-gray-800 p-8 text-white h-screen sm:flex'>
        <InfoBox />
        <ProjectsDisplay />
      </div>
    </main>
  );
}
