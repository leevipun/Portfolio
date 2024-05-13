'use client';

import React from 'react';
import { Form, Input } from 'antd';

export default function ContactForm() {
  return (
    <div className='flex justify-center'>
      <Form
        name='contact'
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        className='text-gray-700 p-6 bg-white w-full max-w-lg rounded-lg shadow-lg'
        autoComplete='off'
      >
        <Form.Item
          label={<label className='text-gray-800'>Email</label>}
          name='email'
          rules={[
            {
              required: true,
              message: 'Please input valid email!',
              type: 'email',
            },
          ]}
        >
          <Input className='input-style' />
        </Form.Item>
        <Form.Item
          label={<label className='text-gray-800'>Name</label>}
          name='name'
          rules={[{ required: true, message: 'Please input your Name!' }]}
        >
          <Input className='input-style' />
        </Form.Item>
        <Form.Item
          name='subject'
          label={<label className='text-gray-800'>Subject</label>}
          rules={[{ required: true, message: 'Please input your subject!' }]}
        >
          <Input.TextArea className='input-style' />
        </Form.Item>
        <Form.Item
          name='additionalInfo'
          label={
            <label className='text-gray-800'>Additional Information</label>
          }
        >
          <Input.TextArea className='input-style' />
        </Form.Item>
      </Form>
    </div>
  );
}
