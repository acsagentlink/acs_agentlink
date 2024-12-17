import axios from 'axios';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function GET(req) {
  try {
// Access the cookie
const cookieStore = cookies();
const token = cookieStore.get('token')?.value; // Ensure you get the value

if (!token) {
  return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
}

    // Make the request to your external API
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/kyc`, {
      headers: {
        Authorization: `Bearer ${token}`,
      }, withCredentials: true
    });

    return NextResponse.json(response.data, { status: response.status }); 

  } catch (error) {
    const status = error.response?.status || 500;
    const message = error.response?.data?.message || error.response?.data?.error || 'An unexpected error occurred.';
    return NextResponse.json({ error: message }, { status });
  }
}