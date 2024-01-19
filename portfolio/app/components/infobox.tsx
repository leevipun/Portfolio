'use client';

import {Button} from 'antd';
import React from 'react';
import {
  FaGithub,
  FaGlobe,
  FaInstagram,
  FaLinkedin,
  FaStar,
} from 'react-icons/fa';

interface SkillListItems {
  name: string;
  stars: number;
}

export const InfoBox: React.FC = () => {
  const skillList: SkillListItems[] = [
    {name: 'React', stars: 4},
    {name: 'Next.js', stars: 3},
    {name: 'Node.js', stars: 2},
    {name: 'Express.js', stars: 3},
    {name: 'HTML', stars: 4},
    {name: 'CSS', stars: 2},
  ];

  const skillListItems = skillList.map((skill) => {
    const starList = Array.from({length: skill.stars}, (_, i) => (
      <FaStar key={i} color='yellow' />
    ));
    return (
      <li key={skill.name} className='flex mb-2'>
        <p className='mr-5'>{skill.name}</p>
        {starList}
      </li>
    );
  });

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
    <div className='w-1/3 min-w-[300px]'>
      <h1 className='text-4xl font-bold mb-4'>About me 🚀</h1>
      <div className='bg-gray-700 p-6 rounded-md'>
        <p className='text-lg'>
          A dynamic 17-year-old student currently enrolled at Kulosaari Upper
          Secondary School, driven by an unwavering passion for programming and
          a relentless aspiration to excel in the ever-evolving tech industry.
        </p>
      </div>
      <h2 className='text-2xl font-bold mb-4 mt-4'>Skills </h2>
      <div className='bg-gray-700 p-6 rounded-md'>
        <ul>{skillListItems}</ul>
      </div>
      <div>
        <h2 className='text-2xl font-bold mb-4 mt-4'>Socials </h2>
        <div className='bg-gray-700 p-6 rounded-md'>
          <div
            className='flex mb-2 hover:cursor-pointer hover:bg-gray-600 rounded-md mb-2'
            onClick={handleRedirectToLinkedIn}
          >
            <FaLinkedin className='mr-4' size='2em' />
            <p className='text-lg'>Leevi Puntanen</p>
          </div>
          <div
            className='flex mb-2 hover:cursor-pointer hover:bg-gray-600 rounded-md mb-2'
            onClick={handleRedirectToGitHub}
          >
            <FaGithub className='mr-4' size='2em' />
            <p className='text-lg'>leevipun</p>
          </div>
          <div
            className='flex hover:cursor-pointer hover:bg-gray-600 rounded-md mb-2'
            onClick={handleRedirectToInstagram}
          >
            <FaInstagram className='mr-4' size='2em' />
            <p className='text-lg'>__leepu</p>
          </div>
        </div>
      </div>
    </div>
  );
};
