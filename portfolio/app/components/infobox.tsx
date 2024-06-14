import React from 'react';
import { Card, Rate } from 'antd';

// Sample data
const skillList = [
  { name: 'JavaScript', stars: 5 },
  { name: 'TypeScript', stars: 4 },
  { name: 'React', stars: 4 },
  { name: 'Next.js', stars: 4 },
  { name: 'Node.js', stars: 4 },
  { name: 'MongoDB', stars: 3 },
  { name: 'HTML & CSS', stars: 4 },
];

const overAllSkills = [
  { name: 'Development', stars: 4 },
  { name: 'Design', stars: 4 },
  { name: 'Communication', stars: 5 },
  { name: 'Problem solving', stars: 4 },
  { name: 'Teamwork', stars: 4 },
  { name: 'Leadership', stars: 3 },
  { name: 'Time management', stars: 4 },
  { name: 'Creativity', stars: 3 },
];

// Helper function to render stars
const renderStars = (stars) => (
  <Rate 
    disabled 
    defaultValue={stars} 
    className="custom-rate" 
  />
);

const SkillCard = ({ title, skills }) => (
  <Card
    title={<h2 className="text-2xl font-bold text-white mb-6">{title}</h2>}
    className="bg-black-100 text-white p-6 rounded-lg shadow-lg transition-all duration-300"
    bordered={false}
  >
    <ul>
      {skills.map((skill, index) => (
        <li
          key={index}
          className="flex items-center justify-between mb-4"
        >
          <span className="skill-name text-lg">{skill.name}</span>
          {renderStars(skill.stars)}
        </li>
      ))}
    </ul>
  </Card>
);

const SkillsSection = () => (
  <section id="skills">
  <div className="flex flex-col lg:flex-row lg:space-x-4 mt-8">
    <div className="mb-8 lg:mb-0 w-full">
      <SkillCard title="Skills" skills={skillList} />
    </div>
    <div className="w-full">
      <SkillCard title="Overall skills" skills={overAllSkills} />
    </div>
  </div>
  </section>
);

export default SkillsSection;
