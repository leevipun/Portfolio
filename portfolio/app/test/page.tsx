'use client';

import React from 'react';
import {Modal, Button} from 'antd';

const YourComponent: React.FC = () => {
  const showModal = () => {
    Modal.confirm({
      title: 'Your Modal Title',
      content: 'Your modal content goes here.',
      footer: null as React.ReactNode,
      style: {
        opacity: 0.4,
        filter: 'grayscale(100%)',
      },
    });
  };

  return (
    <div>
      <Button onClick={showModal}>Show Modal</Button>
    </div>
  );
};

export default YourComponent;
