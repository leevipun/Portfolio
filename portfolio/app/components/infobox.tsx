'use client';

import React from 'react';
import {FaStar} from 'react-icons/fa';
import {Socials} from './socials.tsx';
import {Button, Modal} from 'antd';
import {Form, Input} from 'antd';
const {TextArea} = Input;
const {confirm} = Modal;
import {MouseEventHandler} from 'react';
import Link from 'next/link';

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
  const [open, setOpen] = React.useState<boolean>(false);
  const [name, setName] = React.useState<string>('');
  const [email, setEmail] = React.useState<string>('');
  const [subject, setSubject] = React.useState<string>('');

  const handleOk = async () => {
    try {
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
      setOpen(false);
      Modal.success({
        content: 'Email sent!',
        footer: <Button onClick={() => Modal.destroyAll()}>Ok</Button>,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const skillList: SkillListItems[] = [
    {name: 'JavaScript', stars: 3},
    {name: 'TypeScript', stars: 2},
    {name: 'React', stars: 3},
    {name: 'Next.js', stars: 2},
    {name: 'Node.js', stars: 2},
    {name: 'Express.js', stars: 3},
    {name: 'HTML', stars: 4},
    {name: 'CSS', stars: 2},
  ];

  const overAllSkills: SkillListItems[] = [
    {name: 'Development', stars: 3},
    {name: 'Design', stars: 2},
    {name: 'Communication', stars: 3},
    {name: 'Problem solving', stars: 3},
    {name: 'Teamwork', stars: 4},
    {name: 'Leadership', stars: 3},
    {name: 'Time management', stars: 3},
    {name: 'Creativity', stars: 2},
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

  const showModal = () => {
    Modal.confirm({
      title: 'Contact form',
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
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            label='Name'
            name='Name'
            rules={[{required: true, message: 'Please input your Name!'}]}
          >
            <Input />
          </Form.Item>
          <Form.Item<FieldType>
            name='Subject'
            label='Subject'
            rules={[{required: true, message: 'Please input your subject!'}]}
          >
            <TextArea />
          </Form.Item>
        </Form>
      ),
      footer: <Button onClick={handleOk}>Submit</Button>,
    });
  };

  return (
    <div className='sm:w-1/3 min-w-[300px]'>
      <h1 className='text-4xl font-bold mb-4'>About me 🚀</h1>
      <div className='bg-gray-700 p-6 rounded-md'>
        <p className='text-lg'>
          A dynamic 17-year-old student currently enrolled at Kulosaari Upper
          Secondary School, driven by an unwavering passion for programming and
          a relentless aspiration to excel in the ever-evolving tech industry.
        </p>
        <div>
          <Button
            className='bg-blue-700 mt-4'
            type='primary'
            shape='round'
            size='large'
            onClick={showModal}
          >
            Contact
          </Button>
          <Button
            className='bg-blue-700 mt-4 ml-4'
            type='primary'
            shape='round'
            size='large'
          >
            <a
              href='https://drive.google.com/file/d/1eL2GgLNxu9VCd6lToE6jBt5c2nshBNh_/view'
              target='_blank'
            >
              Resume
            </a>
          </Button>
        </div>
      </div>
      <div className='2xl:flex justify-between'>
        <div className=' bg-gray-700 p-6 rounded-md mt-4'>
          <h2 className='text-2xl font-bold mb-4 mt-4'>Skills</h2>
          <div>
            <ul>{skillListItems}</ul>
          </div>
        </div>
        <div className='2xl:w-1/2 bg-gray-700 p-6 rounded-md mt-4'>
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
