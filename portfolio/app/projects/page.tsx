import NavigationBar from '../components/navigation';
import { ProjectsDisplay } from '../components/Projects';
import { checkEnviorment } from '../utils/email';

export default async function Page() {
  const response = await fetch(checkEnviorment().concat('/api/project'), {
    method: 'GET',
  });
  const projects: any = await response.json();
  return (
    <div>
      <NavigationBar />
      <div className='flex justify-center bg-gray-800 text-white'>
        <ProjectsDisplay projects={projects} />
      </div>
    </div>
  );
}
