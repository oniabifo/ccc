import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  const secret = process.env.RECAPTCHA_SECRET_KEY!;
  const body = await request.json();
  const { fullName, email, phone, message, recaptchaToken } = body;

  if (!recaptchaToken) {
    return NextResponse.json(
      { message: 'reCAPTCHA token is missing' },
      { status: 400 },
    );
  }

  //   console.log('recp:', recaptchaToken);
  //   console.log('secret', process.env.RECAPTCHA_SECRET_KEY);

  // Verify reCAPTCHA token
  const verificationURL = 'https://www.google.com/recaptcha/api/siteverify';
  const verificationBody = new URLSearchParams({
    secret: process.env.RECAPTCHA_SECRET_KEY!,
    response: recaptchaToken,
    // Optionally, you can include the user's IP address if available
    // remoteip: request.headers.get('x-forwarded-for') || request.ip,
  });

  try {
    const verificationUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`;

    request.post(verificationUrl, (error, response, body) => {
      if (error) {
        console.error(error);
        // Handle error
      }

      const verificationResponse = JSON.parse(body);

      if (
        verificationResponse.success &&
        verificationResponse.score >= 0.5 &&
        verificationResponse.action === 'YOUR_ACTION_NAME'
      ) {
        // reCAPTCHA verification successful
        // Proceed with the user's request
      } else {
        // reCAPTCHA verification failed
        // Handle the failure (e.g., display an error message)
      }
    });
    const recaptchaResult = await recaptchaVerify.json();

    console.log('reCAPTCHA verification result:', recaptchaResult);

    if (!recaptchaResult.success) {
      console.error(
        'reCAPTCHA verification failed:',
        recaptchaResult['error-codes'],
      );
      return NextResponse.json(
        {
          message: 'reCAPTCHA verification failed',
          errors: recaptchaResult['error-codes'],
        },
        { status: 400 },
      );
    }

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
      from: `"Your Website" <${process.env.SMTP_USER}>`,
      to: process.env.RECIPIENT_EMAIL,
      subject: 'New Contact Form Submission',
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
