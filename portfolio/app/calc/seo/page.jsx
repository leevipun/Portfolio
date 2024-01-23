'use client';

// pages/index.js
import {useState} from 'react';
import {Form, Select, Checkbox, Button, InputNumber} from 'antd';

const {Option} = Select;

const PriceCalculator = () => {
  const [totalPrice, setTotalPrice] = useState(0);

  const onFinish = (values) => {
    // Logic for calculating the price based on form values
    const basePrice = 1000; // Adjust this based on your pricing model
    const customizationMultiplier =
      values.customization === 1 ? 1 : values.customization === 2 ? 1.5 : 2;
    const techStackMultiplier =
      values.techStack === 'nextjs'
        ? 1.2
        : values.techStack === 'react'
        ? 1.1
        : 1;
    const durationMultiplier =
      values.duration === 1 ? 1 : values.duration === 2 ? 1.2 : 1.5;
    const maintenanceMultiplier = values.maintenance ? 1.2 : 1;
    const monthlyMaintenanceCost = values.maintenance
      ? values.monthlyMaintenanceCost
      : 0;

    // Additional features
    const responsiveDesignMultiplier = values.responsiveDesign ? 1.1 : 1;
    const eComFunctionalityMultiplier = values.eCommerceFunctionality ? 1.3 : 1;

    const price =
      basePrice *
        customizationMultiplier *
        techStackMultiplier *
        durationMultiplier *
        maintenanceMultiplier *
        responsiveDesignMultiplier *
        eComFunctionalityMultiplier +
      monthlyMaintenanceCost;

    setTotalPrice(price);
  };

  return (
    <div>
      <h1>Website Project Price Calculator</h1>
      <Form onFinish={onFinish}>
        <Form.Item
          label='How customized do you want your website to be?'
          name='customization'
          initialValue={1}
        >
          <Select>
            <Option value={1}>Basic</Option>
            <Option value={2}>Moderate</Option>
            <Option value={3}>Highly Customized</Option>
          </Select>
        </Form.Item>

        <Form.Item
          label='What stack should I use?'
          name='techStack'
          initialValue='nextjs'
        >
          <Select>
            <Option value='nextjs'>Next.js</Option>
            <Option value='react'>React</Option>
            <Option value='other'>Other</Option>
          </Select>
        </Form.Item>

        <Form.Item
          label='How long should it take to finish?'
          name='duration'
          initialValue={1}
        >
          <Select>
            <Option value={1}>1 month</Option>
            <Option value={2}>2 months</Option>
            <Option value={3}>3 months or more</Option>
          </Select>
        </Form.Item>

        <Form.Item
          label='Do you want maintenance?'
          name='maintenance'
          valuePropName='checked'
          initialValue={false}
        >
          <Checkbox />
        </Form.Item>

        {totalPrice > 0 && (
          <Form.Item
            label='Monthly Maintenance Cost'
            name='monthlyMaintenanceCost'
            initialValue={50}
          >
            <InputNumber min={0} />
          </Form.Item>
        )}

        <Form.Item
          label='Responsive Design'
          name='responsiveDesign'
          valuePropName='checked'
          initialValue={true}
        >
          <Checkbox />
        </Form.Item>

        <Form.Item
          label='E-commerce Functionality'
          name='eCommerceFunctionality'
          valuePropName='checked'
          initialValue={false}
        >
          <Checkbox />
        </Form.Item>

        <Form.Item>
          <Button type='primary' htmlType='submit'>
            Calculate Price
          </Button>
        </Form.Item>
      </Form>

      {totalPrice > 0 && (
        <div>
          <h2>Total Price: ${totalPrice}</h2>
        </div>
      )}
    </div>
  );
};

export default PriceCalculator;
