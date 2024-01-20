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
  const projects: Projects[] = [
    {
      name: 'Portfolio',
      description:
        'My personal portfolio website built with Next.js and Tailwind CSS.',
      github: 'https://github.com/leevipun/Portfolio',
      instagram: '',
      website: 'https://portfolio-neon-kappa-94.vercel.app/',
    },
    {
      name: 'Habit Tracker',
      description:
        'Creating an advanced Habit Tracker using Next.js, TypeScript, and Ant Design, blending tech passion with a dedication to positive habits. A transformative self-improvement project.',
      github: 'https://github.com/leevipun/Habit-Tracker',
      instagram: '',
      website: 'https://courseproject-ten.vercel.app/',
    },
    {
      name: 'E-commarance website',
      description:
        'E-commarance website built for a university course project. Made with React, Node.js, Express.js, and MongoDB.',
      github: 'https://github.com/leevipun/Courseproject',
      instagram: '',
      website: 'https://courseproject-ten.vercel.app/',
    },
  ];

  return (
    <main className='flex flex-col bg-gray-800 overflow-auto'>
      <div className=' bg-gray-800 p-8 text-white h-screen sm:flex'>
        <InfoBox />
        <ProjectsDisplay projects={projects} />
      </div>
    </main>
  );
}
