import {NextResponse} from 'next/server';

interface formData {
  name: string;
  email: string;
  message: string;
}

export async function sendContactMail(data: formData) {
  try {
    await fetch('/api/email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return new NextResponse('Email sent', {status: 200});
  } catch (err) {
    return new NextResponse('Email sending failed', {status: 500});
  }
}
