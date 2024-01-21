import React, {FC} from 'react';
import ServiceCard from '../components/ServiceCard';

const Services: React.FC = () => {
  return (
    <div className='bg-gray-900 h-screen'>
      <div className='flex justify-center'>
        <h1 className='text-4xl font-bold mt-4 text-white'>Services</h1>
      </div>
      <ServiceCard />
    </div>
  );
};

export default Services;
