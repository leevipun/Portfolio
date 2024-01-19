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
    <div className='bg-gray-800 p-8 text-white flex'>
      <div className='w-1/3'>
        <h1 className='text-4xl font-bold mb-4'>About me 🚀</h1>
        <div className='bg-gray-700 p-6 rounded-md'>
          <p className='text-lg'>
            A dynamic 17-year-old student currently enrolled at Kulosaari Upper
            Secondary School, driven by an unwavering passion for programming
            and a relentless aspiration to excel in the ever-evolving tech
            industry.
          </p>
        </div>
        <h2 className='text-2xl font-bold mb-4 mt-4'>Skills </h2>
        <div className='bg-green-900 p-6 rounded-md'>
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
      <div className='w-2/3'>
        <h1 className='text-4xl font-bold mb-4'>Projects</h1>
        <div className='bg-purple-800 p-6 rounded-md m-4'>
          <h2 className='text-2xl font-bold m-4'>Portfolio</h2>
          <p className='text-lg mb-4'>
            My personal portfolio website built with Next.js and Tailwind CSS.
          </p>
          <Button
            className='mr-4'
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
            className='mr-4 custom-btn'
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
            className='custom-btn'
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
            Habbit Tracker build with Next.js and Tailwind CSS. The app is used
            to track habbits and goals.
          </p>
          <Button
            className='mr-4'
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
            className='mr-4'
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
            E-commarance website built for a university course project. Made
            with React, Node.js, Express.js and MongoDB.
          </p>
          <Button
            className='mr-4'
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
            className='mr-4'
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
    </div>
  );
};
