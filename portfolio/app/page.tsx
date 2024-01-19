import {InfoBox} from './components/infobox';
import {Projects} from './components/Projects';

export default function Home() {
  return (
    <main className='flex flex-col'>
      <div className='flex bg-gray-800 p-8 text-white h-screen'>
        <InfoBox />
        <Projects />
      </div>
    </main>
  );
}
