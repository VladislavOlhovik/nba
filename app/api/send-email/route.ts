import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

import { parseForm } from '@/lib/utils';

const login = process.env.SMTP_LOGIN || '';
const pass = process.env.SMTP_PASSWORD || '';
const receiverEmail = process.env.RECEIVER_EMAIL || '';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: login,
    pass: pass,
  },
});

export async function POST(req: NextRequest) {
  try {
    const formData = await parseForm(req);
    const {
      fullName,
      email,
      phone,
      company,
      message,
      file,
    } = formData;

    const emailHtml = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Contact Form Submission</title>
        <style>
              body {
                  font-family: Arial, sans-serif;
                  line-height: 1.6;
                  background-color: #f4f4f4;
                  margin: 0;
                  padding: 20px;
              }
              .container {
                  max-width: 600px;
                  margin: 0 auto;
                  background: #fff;
                  padding: 20px;
                  border-radius: 8px;
                  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
              }
              .header {
                  text-align: center;
                  padding: 10px 0;
              }
              .header h1 {
                  margin: 0;
                  font-size: 24px;
                  color: #333;
              }
              .content {
                  padding: 20px;
              }
              .content p {
                  font-size: 16px;
                  margin: 10px 0;
              }
              .footer {
                  text-align: center;
                  padding: 10px 0;
                  color: #777;
              }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>New Contact Form Submission</h1>
            </div>
            <div class="content">
                <p><strong>Full Name:</strong> ${fullName}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Company name:</strong> ${company}</p>
                <p><strong>How can we help you?:</strong> ${message}</p>
                ${file ? `<p><strong>File Attached:</strong> ${file.name}</p>` : ''}
            </div>
            <div class="footer">
                <p>NBA Soft</p>
                <p><a href="https://nba.com">nba.com</a></p>
            </div>
        </div>
    </body>
    </html>
  `;

    type mailOptionsType = {
      to: string;
      subject: string;
      html: string;
      attachments?: [any];
    };

    const mailOptions: mailOptionsType = {
      to: receiverEmail,
      subject: 'New Contact Form Submission',
      html: emailHtml,
    };

    if (file) {
      mailOptions.attachments = [
        {
          filename: file.name,
          content: file.data,
          contentType: file.type,
        },
      ];
    }

    await transporter.sendMail(mailOptions);

    return NextResponse.json({
      message: 'Message sent successfully.',
    });
  } catch (error) {
    console.error('Failed to send message', error);
    return NextResponse.json(
      { error: 'Failed to send message, try again later.' },
      { status: 500 }
    );
  }
}
