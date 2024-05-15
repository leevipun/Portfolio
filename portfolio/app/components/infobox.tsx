'use client';

import React from 'react';
import {
  FaStar,
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaCode,
  FaPuzzlePiece,
  FaUsers,
  FaClock,
  FaLightbulb,
  FaComments,
} from 'react-icons/fa';
import { Socials } from './socials.tsx';
import { Button } from 'antd';

type FieldType = {
  Email?: string;
  Name?: string;
  Subject?: string;
};

interface SkillListItems {
  name: string;
  stars: number;
}

export const InfoBox: React.FC = () => {
  const skillList: SkillListItems[] = [
    { name: 'JavaScript', stars: 4 },
    { name: 'React', stars: 3 },
    { name: 'Node.js', stars: 3 },
    { name: 'MongoDB', stars: 3 },
    { name: 'TypeScript', stars: 3 },
    { name: 'HTML', stars: 4 },
    { name: 'CSS', stars: 2 },
  ];

  const overAllSkills: SkillListItems[] = [
    { name: 'Development', stars: 3 },
    { name: 'Design', stars: 2 },
    { name: 'Communication', stars: 3 },
    { name: 'Problem solving', stars: 3 },
    { name: 'Teamwork', stars: 4 },
    { name: 'Leadership', stars: 3 },
    { name: 'Time management', stars: 3 },
    { name: 'Creativity', stars: 3 },
  ];

  const renderStars = (stars: number) => {
    const filledStars = Array.from({ length: stars }, (_, i) => (
      <FaStar key={i} color='yellow' />
    ));
    const emptyStars = Array.from({ length: 5 - stars }, (_, i) => (
      <FaStar key={i + stars} color='gray' />
    ));
    return (
      <>
        {filledStars}
        {emptyStars}
      </>
    );
  };

  return (
    <div className='container mx-auto px-4 lg:px-0'>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
        <div className='lg:col-span-2'>
          <div className='bg-gray-900 p-8 rounded-md text-white'>
            <h1 className='text-4xl font-bold mb-6 text-center lg:text-left'>
              About me 🚀
            </h1>
            <p className='text-lg'>
              Hi, I&apos;m Leevi, a 17-year-old tech enthusiast and student at
              Kulosaari Upper Secondary School. Currently, I&apos;m engaged in
              personal tech projects and actively seeking opportunities as a
              junior full stack developer. Described as hardworking, motivated,
              and quick to learn, I bring dedication, diligence, and effective
              communication to any team. I&apos;m excited about the prospect of
              contributing to your organization and eager to discuss potential
              collaborations.
            </p>
            <div className='mt-8 text-center lg:text-left'>
              <a
                href='https://drive.google.com/file/d/1eL2GgLNxu9VCd6lToE6jBt5c2nshBNh_/view'
                target='_blank'
                rel='noopener noreferrer'
                className='inline-block bg-blue-700 text-white py-3 px-8 rounded-md text-lg hover:bg-blue-600 transition duration-300 ease-in-out'
              >
                Resume
              </a>
            </div>
          </div>
          <Socials />
        </div>
        <div>
          <div className='bg-gray-900 p-8 mb-8 rounded-md text-white'>
            <h2 className='text-2xl font-bold mb-6'>Skills</h2>
            <ul>
              {skillList.map((skill, index) => (
                <li
                  key={index}
                  className='flex items-center justify-between mb-4'
                >
                  <span className='skill-name'>{skill.name}</span>
                  {renderStars(skill.stars)}
                </li>
              ))}
            </ul>
          </div>
          <div className='bg-gray-900 p-8 rounded-md text-white mt-8 lg:mt-0'>
            <h2 className='text-2xl font-bold mb-6'>Overall skills</h2>
            <ul>
              {overAllSkills.map((skill, index) => (
                <li
                  key={index}
                  className='flex items-center justify-between mb-4'
                >
                  <span className='skill-name'>{skill.name}</span>
                  {renderStars(skill.stars)}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoBox;
