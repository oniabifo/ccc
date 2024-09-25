import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  const body = await request.json();

  const {
    fullName,
    email,
    phone,
    message,
    recaptchaToken,
    'g-recaptcha-response': gRecaptchaResponse,
  } = body;

  const token = recaptchaToken || gRecaptchaResponse;

  if (!token) {
    return NextResponse.json(
      { message: 'reCAPTCHA token is missing' },
      { status: 400 },
    );
  }

  try {
    // Verify reCAPTCHA token
    // const verificationURL = 'https://www.google.com/recaptcha/api/siteverify';
    // const verificationBody = new URLSearchParams({
    //   secret: process.env.RECAPTCHA_SECRET_KEY!,
    //   response: recaptchaToken,
    //   // Optionally, you can include the user's IP address if available
    //   // remoteip: request.headers.get('x-forwarded-for') || request.ip,
    // });

    // const recaptchaVerify = await fetch(verificationURL, {
    //   method: 'POST',
    //   body: verificationBody,
    //   headers: {
    //     'Content-Type': 'application/x-www-form-urlencoded',
    //   },
    // });

    // const recaptchaResult = await recaptchaVerify.json();

    // console.log('reCAPTCHA verification result:', recaptchaResult);

    // if (!recaptchaResult.success) {
    //   console.error(
    //     'reCAPTCHA verification failed:',
    //     recaptchaResult['error-codes'],
    //   );
    //   return NextResponse.json(
    //     {
    //       message: 'reCAPTCHA verification failed',
    //       errors: recaptchaResult['error-codes'],
    //     },
    //     { status: 400 },
    //   );
    // }

    //   console.log('recp:', recaptchaToken);
    //   console.log('secret', process.env.RECAPTCHA_SECRET_KEY);

    // Create Nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Send email
    await transporter.sendMail({
      from: `"Cloud Consult" <${process.env.SMTP_USER}>`,
      to: process.env.RECIPIENT_EMAIL,
      subject: 'New Contact From Submission',
      text: `
        Name: ${fullName}
        Email: ${email}
        Phone: ${phone}
        Message: ${message}
      `,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    return NextResponse.json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { message: 'Error sending email' },
      { status: 500 },
    );
  }
}
