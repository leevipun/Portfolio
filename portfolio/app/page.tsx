'use client';

import React from 'react';
import {ProjectsDisplay} from './components/Projects.tsx';
import {InfoBox} from './components/infobox.tsx';
import ServiceCard from './components/ServiceCard.tsx';
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
      <main className='flex flex-col bg-gray-800'>
        <div className=' bg-gray-800 p-8 text-white min-h-screen sm:flex'>
          <InfoBox />
          <ProjectsDisplay />
        </div>
        <div className=' bg-gray-800 p-8 text-white min-h-screen sm:flex'>
          <ServiceCard />
        </div>
      </main>
    </>
  );
}
