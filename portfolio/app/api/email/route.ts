import {type NextRequest, NextResponse} from 'next/server';
import nodemailer from 'nodemailer';
const pass = process.env.EMAILPASS;

const transporter = nodemailer.createTransport({
  service: 'hotmail',
  auth: {
    user: 'nordicexchange@outlook.com',
    pass: pass,
  },
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    console.log(body);

    const mailData = {
      from: 'nordicexchange@outlook.com',
      to: 'nordicexchange@outlook.com',
      subject: 'New contact from portfolio',
      html: `
                <h1>Portfolio Contact</h1>
                <p>Name: ${body.name}</p>
                <p>Email: ${body.email}</p>
                <p>Message: ${body.subject}</p>`,
    };
    transporter.sendMail(mailData, function (err, info) {
      if (err) console.log(err);
      else console.log(info);
    });
    return new NextResponse(`Email sent`, {status: 200});
  } catch (error) {
    console.error(error);
    return new NextResponse('Error sending email', {status: 500});
  }
}
