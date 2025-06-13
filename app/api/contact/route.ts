import { NextResponse } from 'next/server';

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

    const MAILTRAP_API_TOKEN = process.env.MAILTRAP_API_TOKEN || '641f128d30e764a5b0404d7d5086718d';
    const MAILTRAP_TEMPLATE_UUID = 'a6262619-825e-417f-a479-7b834835628d';
    const MAILTRAP_FROM_EMAIL = 'info@worgltd.com';
    const MAILTRAP_FROM_NAME = 'WORG Contact Form';
    const MAILTRAP_TO_EMAIL = 'info@worgltd.com';

    const response = await fetch('https://send.api.mailtrap.io/api/send', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${MAILTRAP_API_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: {
          email: MAILTRAP_FROM_EMAIL,
          name: MAILTRAP_FROM_NAME
        },
        to: [{ email: MAILTRAP_TO_EMAIL }],
        template_uuid: MAILTRAP_TEMPLATE_UUID,
        template_variables: {
          company_info_name: 'WORG Ltd',
          name: `${firstname} ${surname}`,
          company_info_address: '', // Add actual company address if available
          company_info_city: '',    // Add actual company city if available
          company_info_zip_code: '', // Add actual company zip code if available
          company_info_country: '',  // Add actual company country if available
          // Additional fields from the contact form
          email: email,
          phone: phone || 'Not provided',
          message: description || 'No message provided',
          subscribed: subscribe ? 'Yes' : 'No'
        }
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Mailtrap API error:', errorData);
      throw new Error(`Mailtrap API error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    console.log('Email sent successfully:', data);

    return NextResponse.json({
      message: 'Message sent successfully!',
      data: data
    });

  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { 
        message: 'Failed to send message', 
        error: error instanceof Error ? error.message : 'Unknown error' 
      },
      { status: 500 }
    );
  }
}
