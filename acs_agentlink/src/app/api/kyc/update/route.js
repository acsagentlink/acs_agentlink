import axios from 'axios';
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST(req) {
  try {
    const cookieStore = cookies();
    const token = cookieStore.get('token')?.value; // Ensure you get the value

    if (!token) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }
    const formData = await req.formData(); // Use formData to handle multipart/form-data
    const jsonObject = {};
    const axiosFormData = new FormData();


    // Convert formData to JSON object for external API
    formData.forEach((value, key) => {
      // jsonObject[key] = value;
       axiosFormData.append(key, value);
    });

    const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/submit-kyc`, axiosFormData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${token}`,
      }
    });

    const nextResponse = NextResponse.json(response.data, { status: response.status });

      return nextResponse;
    } catch (error) {
    console.log(error)
    const status = error.response?.status || 500;
    const message = error.response?.data?.message || error.response?.data?.error || 'An unexpected error occurred.';
    return NextResponse.json({ error: message }, { status });
  }
}

export function GET() {
  return NextResponse.json({ message: 'Method Not Allowed' }, { status: 405 });
}
