import React from 'react';

interface Services {
  title: string;
  description: string;
  price: string;
  maintenance: string;
}

const ServiceCard: React.FC = () => {
  const services: Services[] = [
    {
      title: 'Custom Website Development',
      description:
        'Get a unique and fully customized website tailored to your business needs. I use the latest technologies like React, Next.js, and TailwindCSS to ensure a modern and responsive design. Stack Can be customized to your needs.',
      price: 'Can vary',
      maintenance: '$50/month',
    },
    {
      title: 'E-commerce Solution',
      description:
        'Boost your online presence with a powerful e-commerce website. I specialize in creating seamless shopping experiences using React, Next.js, and TailwindCSS. Let your business thrive in the digital marketplace. Stack Can be customized to your needs.',
      price: 'Can vary',
      maintenance: '$75/month',
    },
    {
      title: 'Portfolio Website',
      description:
        "Showcase your skills and achievements with a stunning portfolio website. I'll design and develop a visually appealing site using React, Next.js, and TailwindCSS to make a lasting impression. Stack Can be customized to your needs.",
      price: 'Can vary',
      maintenance: '$40/month',
    },
    {
      title: 'Mobile App Development',
      description:
        'Reach a wider audience with a mobile app for your business. I specialize in developing cross-platform mobile apps using React Native, ensuring a seamless user experience on both iOS and Android devices. Stack Can be customized to your needs.',
      price: 'Can vary',
      maintenance: '$60/month',
    },
  ];

  const serviceCards = services.map((service) => (
    <div
      key={service.title}
      className='bg-gradient-to-r from-purple-700 via-purple-600 to-purple-700 p-6 rounded-md shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out mx-4 my-4'
    >
      <h2 className='text-3xl font-extrabold text-white mb-4'>
        {service.title}
      </h2>
      <p className='text-lg text-yellow-300 mb-2'>{`Price: ${service.price}`}</p>
      <p className='text-gray-300 mb-4'>{service.description}</p>
      <p className='text-gray-400'>{`Maintenance: ${service.maintenance}`}</p>
    </div>
  ));

  return (
    <div className='bg-gray-900 min-h-screen flex items-center justify-center'>
      <div className='max-w-4xl w-full'>
        <div className='flex flex-wrap justify-around'>{serviceCards}</div>
      </div>
    </div>
  );
};

export default ServiceCard;
