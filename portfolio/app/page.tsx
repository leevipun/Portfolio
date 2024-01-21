'use client';

import React from 'react';
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
  return (
    <>
      <main className='flex flex-col bg-gray-800 overflow-auto'>
        <div className=' bg-gray-800 p-8 text-white h-screen sm:flex'>
          <InfoBox />
          <ProjectsDisplay />
        </div>
      </main>
    </>
  );
}
