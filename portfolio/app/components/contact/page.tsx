import { Form, Input } from 'antd';
import ContactForm from '../contactForm';
const { TextArea } = Input;

export default function Contact() {
  return (
    <div className='bg-gray-800 min-h-screen'>
      <h1 className='text-4xl font-bold text-white'>Contact</h1>
      <div className='text-white'>
        <p>
          If you would like to get in touch, please fill out the form below.
        </p>
        <p>I will get back to you as soon as possible.</p>
      </div>
      <ContactForm />
    </div>
  );
}
