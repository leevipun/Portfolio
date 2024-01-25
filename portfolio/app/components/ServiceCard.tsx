'use client';

import React from 'react';
import {
  FaDesktop,
  FaShoppingCart,
  FaImage,
  FaSearch,
  FaShareAlt,
} from 'react-icons/fa';
import {IconType} from 'react-icons';
import {BsPeople} from 'react-icons/bs';
import {Button} from 'antd';
import {Modal, Form, Input} from 'antd';
const {TextArea} = Input;
const {confirm} = Modal;

type FieldType = {
  Email?: string;
  Name?: string;
  Subject?: string;
};

interface Services {
  title: string;
  description: string;
  price: string;
  maintenance: string;
  href?: string;
}

const ServiceCard: React.FC = () => {
  const [name, setName] = React.useState<string>('');
  const [email, setEmail] = React.useState<string>('');
  const [subject, setSubject] = React.useState<string>('');
  const services: Services[] = [
    {
      title: 'Custom Website Development',
      description:
        'Get a unique and fully customized website tailored to your business needs. I use the latest technologies like React, Next.js, and TailwindCSS to ensure a modern and responsive design. Stack can be customized to your needs.',
      price: 'Starting from $500', // Adjust the starting price
      maintenance: '$50/month',
      href: '/calc/cwd',
    },
    {
      title: 'E-commerce Solution',
      description:
        'Boost your online presence with a powerful e-commerce website. I specialize in creating seamless shopping experiences using React, Next.js, and TailwindCSS. Let your business thrive in the digital marketplace. Stack can be customized to your needs.',
      price: 'Starting from $1000', // Adjust the starting price
      maintenance: '$75/month',
      href: '/calc/ecs',
    },
    {
      title: 'Portfolio Website',
      description:
        "Showcase your skills and achievements with a stunning portfolio website. I'll design and develop a visually appealing site using React, Next.js, and TailwindCSS to make a lasting impression. Stack can be customized to your needs.",
      price: 'Starting from $300', // Adjust the starting price
      maintenance: '$40/month',
      href: 'calc/pwd',
    },
    {
      title: 'Customer Management System (CRM)',
      description:
        'Streamline your customer interactions and boost relationships with a tailored CRM solution. I design and implement customer management systems using robust technologies like Salesforce, HubSpot, or a custom-built solution. Manage leads, track interactions, and enhance customer satisfaction with personalized CRM features. Customize the CRM to align with your business processes and goals.',
      price: 'Starting from $1200',
      maintenance: '$80/month',
      href: '/calc/crm',
    },
    {
      title: 'Social Media Integration',
      description:
        'Enhance your online presence by integrating social media features into your website or app. Connect with your audience and boost engagement through seamless social media integration.',
      price: 'Starting from $150',
      maintenance: '$20/month',
      href: '/calc/smi',
    },
  ];

  const serviceCards = services.map((service) => {
    const icons: {[key: string]: IconType} = {
      'Custom Website Development': FaDesktop,
      'E-commerce Solution': FaShoppingCart,
      'Portfolio Website': FaImage,
      'SEO Optimization': FaSearch,
      'Social Media Integration': FaShareAlt,
      'Customer Management System (CRM)': BsPeople,
    };
    const Icon = icons[service.title];

    return (
      <div
        key={service.title}
        className='bg-gradient-to-r from-purple-700 via-purple-600 to-purple-700 p-6 rounded-md shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out mx-4 my-4'
      >
        <Icon className='text-4xl text-white mb-4' />
        <h2 className='text-2xl font-extrabold mb-4'>{service.title}</h2>
        <p className='text-lg text-yellow-300 mb-2'>{`Price: ${service.price}`}</p>
        <p className='text-gray-300 mb-4'>{service.description}</p>
        <p className='text-gray-400'>{`Maintenance: ${service.maintenance}`}</p>
        {service.href && (
          <Button
            className='bg-gradient-to-r from-blue-700 via-blue-600 to-blue-700 mt-4 mr-4'
            type='primary'
            shape='round'
            size='large'
            href={service.href}
          >
            Calculate personalized price
          </Button>
        )}
        <Button
          className='bg-gradient-to-r from-blue-700 via-blue-600 to-blue-700 mt-4'
          type='primary'
          shape='round'
          size='large'
          onClick={() => showModal(service.title)}
        >
          Contact
        </Button>
      </div>
    );
  });

  const handleOk = async () => {
    try {
      console.log(name, email, subject);
      const response = await fetch('/api/email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({name, email, subject}),
      });
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      Modal.destroyAll();
      Modal.success({
        content: 'Email sent!',
        footer: (
          <Button className='mt-4' onClick={() => Modal.destroyAll()}>
            Ok
          </Button>
        ),
      });
    } catch (err) {
      console.log(err);
    }
  };

  const handleCancel = () => {
    setName('');
    Modal.destroyAll();
  };

  const showModal = (title: string) => {
    setName(title);
    console.log(title);
    Modal.confirm({
      keyboard: false,
      title: title,
      content: (
        <Form
          name='basic'
          labelCol={{span: 8}}
          wrapperCol={{span: 16}}
          style={{padding: 20, backgroundColor: 'white'}}
          initialValues={{remember: true}}
          autoComplete='off'
        >
          <Form.Item<FieldType>
            label='Email'
            name='Email'
            rules={[
              {
                required: true,
                message: 'Please input valid email!',
                type: 'email',
              },
            ]}
          >
            <Input onChange={(e) => setEmail(e.target.value)} value={email} />
          </Form.Item>

          <Form.Item<FieldType>
            name='Subject'
            label='Subject'
            rules={[{required: true, message: 'Please input your subject!'}]}
          >
            <TextArea
              onChange={(e) => setSubject(e.target.value)}
              value={name}
            />
          </Form.Item>
        </Form>
      ),
      footer: (
        <div className='flex justify-between'>
          <Button onClick={handleCancel}>Cancel</Button>
          <Button onClick={handleOk}>Submit</Button>
        </div>
      ),
    });
  };

  return (
    <div className='text-white'>
      <h1 className='text-5xl font-bold mb-8'>Services</h1>
      <div className='grid gap-6 sm:grid-cols-2 md:grid-cols-3'>
        {serviceCards}
      </div>
    </div>
  );
};

export default ServiceCard;
