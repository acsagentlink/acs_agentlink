import axios from 'axios';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function GET(req) {
  try {
    // Access the cookie
    const cookieStore = cookies();
    const token = cookieStore.get('token')?.value;

    if (!token) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    // Make the request to your external API
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/contract-pdf`, {
      responseType: 'arraybuffer', // Fetch the binary data
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/pdf', // Explicitly request a PDF
      },
      withCredentials: true,
    });

    // Create a proper response to stream the PDF
    const pdfResponse = new Response(response.data, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf', // Set PDF content type
        'Content-Disposition': 'inline; filename="contract.pdf"', // Provide a filename for the browser
      },
    });

    return pdfResponse;
  } catch (error) {
    const status = error.response?.status || 500;
    const message = error.response?.data?.message || error.response?.data?.error || 'An unexpected error occurred.';
    return NextResponse.json({ error: message }, { status });
  }
}
