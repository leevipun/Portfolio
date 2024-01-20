'use client';

import React from 'react';
import {FaStar} from 'react-icons/fa';
import {Socials} from './socials';

interface SkillListItems {
  name: string;
  stars: number;
}

export const InfoBox: React.FC = () => {
  const skillList: SkillListItems[] = [
    {name: 'JavaScript', stars: 4},
    {name: 'TypeScript', stars: 3},
    {name: 'React', stars: 4},
    {name: 'Next.js', stars: 3},
    {name: 'Node.js', stars: 2},
    {name: 'Express.js', stars: 3},
    {name: 'HTML', stars: 4},
    {name: 'CSS', stars: 2},
  ];

  const overAllSkills: SkillListItems[] = [
    {name: 'Development', stars: 4},
    {name: 'Design', stars: 3},
    {name: 'Communication', stars: 4},
    {name: 'Problem solving', stars: 4},
    {name: 'Teamwork', stars: 5},
    {name: 'Leadership', stars: 3},
    {name: 'Time management', stars: 4},
    {name: 'Creativity', stars: 4},
  ];

  const skillListItems = skillList.map((skill) => {
    const filledStars = Array.from({length: skill.stars}, (_, i) => (
      <FaStar key={i} color='yellow' />
    ));

    const emptyStars = Array.from({length: 5 - skill.stars}, (_, i) => (
      <FaStar key={i + skill.stars} color='grey' />
    ));

    return (
      <li key={skill.name} className='flex mb-2'>
        <p className='mr-5'>{skill.name}</p>
        {filledStars}
        {emptyStars}
      </li>
    );
  });

  const overAllSkillsItems = overAllSkills.map((skill) => {
    const filledStars = Array.from({length: skill.stars}, (_, i) => (
      <FaStar key={i} color='yellow' />
    ));

    const emptyStars = Array.from({length: 5 - skill.stars}, (_, i) => (
      <FaStar key={i + skill.stars} color='grey' />
    ));

    return (
      <li key={skill.name} className='flex mb-2'>
        <p className='mr-5'>{skill.name}</p>
        {filledStars}
        {emptyStars}
      </li>
    );
  });

  return (
    <div className='sm:w-1/3 min-w-[300px]'>
      <h1 className='text-4xl font-bold mb-4'>About me 🚀</h1>
      <div className='bg-gray-700 p-6 rounded-md'>
        <p className='text-lg'>
          A dynamic 17-year-old student currently enrolled at Kulosaari Upper
          Secondary School, driven by an unwavering passion for programming and
          a relentless aspiration to excel in the ever-evolving tech industry.
        </p>
      </div>
      <div className='2xl:flex justify-between'>
        <div className='bg-gray-700 p-6 rounded-md mt-4'>
          <h2 className='text-2xl font-bold mb-4 mt-4'>Skills</h2>
          <div>
            <ul>{skillListItems}</ul>
          </div>
        </div>
        <div className='bg-gray-700 p-6 rounded-md mt-4'>
          <h2 className='text-2xl font-bold mb-4 mt-4'>Overall skills</h2>
          <div>
            <ul>{overAllSkillsItems}</ul>
          </div>
        </div>
      </div>
      <Socials />
    </div>
  );
};
