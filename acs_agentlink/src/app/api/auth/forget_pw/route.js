import axios from 'axios';
import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const formData = await req.formData();
    const jsonObject = {};

    // Convert formData to JSON object for external API
    formData.forEach((value, key) => {
      jsonObject[key] = value;
    });

    const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/forgot-password`, jsonObject);

    const nextResponse = NextResponse.json(response.data, { status: response.status });

      return nextResponse;
    } catch (error) {
    const status = error.response?.status || 500;
    const message = error.response?.data?.message || error.response?.data?.error || 'An unexpected error occurred.';
    return NextResponse.json({ error: message }, { status });
  }
}

export function GET() {
  return NextResponse.json({ message: 'Method Not Allowed' }, { status: 405 });
}
