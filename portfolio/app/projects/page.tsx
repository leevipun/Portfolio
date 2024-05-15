import { revalidatePath } from 'next/cache';
import NavigationBar from '../components/navigation';
import { ProjectsDisplay } from '../components/Projects';
import { checkEnviorment } from '../utils/email';

export default async function Page() {
  const projects = [
    {
      _id: '65ac2f7941bb07508ea182ba',
      title: 'Portfolio',
      description:
        'My personal portfolio website built with Next.js and Tailwind CSS.',
      github: 'https://github.com/leevipun/Portfolio',
      instagram: '-',
      website: 'https://portfolio-neon-kappa-94.vercel.app/',
      stack: 'Next.js and MongoDB',
      __v: 0,
    },
    {
      _id: '65ac2fab41bb07508ea182bc',
      title: 'Habit Tracker',
      description:
        'Creating an advanced Habit Tracker using Next.js, TypeScript, and Ant Design, blending tech passion with a dedication to positive habits. A transformative self-improvement project.',
      github: 'https://github.com/leevipun/Habbit-Tracker',
      instagram: '-',
      website: 'https://habbit-tracker-lyart.vercel.app/',
      stack: 'Next.js And MongoDB',
      __v: 0,
    },
    {
      _id: '65ac2fe341bb07508ea182be',
      title: 'E-commarance website',
      description:
        'Creating a C2C website for my university course using React and Express. Learning payment integration, database management, and web maintenance. Not aiming for production readiness, but gaining valuable insights into web development intricacies. Exciting learning experience with uncertain but promising outcomes.',
      github: 'https://github.com/leevipun/Courseproject',
      instagram: 'https://www.instagram.com/p/C1aUZomIOyn/',
      website: 'https://courseproject-ten.vercel.app/',
      stack: 'React.js, Express.js MongoDB and CSS',
      __v: 0,
    },
  ];
  return (
    <div>
      <NavigationBar />
      <div className='flex justify-center bg-gray-800 text-white'>
        <ProjectsDisplay projects={projects} />
      </div>
    </div>
  );
}
