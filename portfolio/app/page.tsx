'use client';

import React from 'react';
import InfoBox from './components/infobox.tsx';
import NavigationBar from './components/navigation.tsx';
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
        <NavigationBar />
        <div className=' bg-gray-800 p-8 text-white min-h-screen sm:flex'>
          <InfoBox />
        </div>
      </main>
    </>
  );
}
