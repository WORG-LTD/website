import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { surname, firstname, email, phone, description, subscribe } = body;

    // Validate required fields
    if (!surname || !firstname || !email) {
      return NextResponse.json(
        { message: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create a test account (in production, use real SMTP credentials)
    const testAccount = await nodemailer.createTestAccount();

    // Create a transporter object using the default SMTP transport
    const transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: testAccount.user, // generated ethereal user
        pass: testAccount.pass, // generated ethereal password
      },
    });

    // Email content
    const mailOptions = {
      from: `"${firstname} ${surname}" <${email}>`,
      to: 'info@worgltd.com', // WORG contact email
      subject: `New Contact Form Submission from ${firstname} ${surname}`,
      text: `
        Name: ${firstname} ${surname}
        Email: ${email}
        Phone: ${phone || 'Not provided'}
        Subscribed to updates: ${subscribe ? 'Yes' : 'No'}
        
        Message:
        ${description || 'No message provided'}
      `,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${firstname} ${surname}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Subscribed to updates:</strong> ${subscribe ? 'Yes' : 'No'}</p>
        <h3>Message:</h3>
        <p>${description || 'No message provided'}</p>
      `,
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);

    console.log('Message sent: %s', info.messageId);
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

    return NextResponse.json({
      message: 'Message sent successfully!',
      previewUrl: nodemailer.getTestMessageUrl(info)
    });

  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { message: 'Failed to send message', error: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
