// app/api/submit/route.js

import axios from 'axios';
import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const formData = await req.formData(); // Use formData to handle multipart/form-data
    const jsonObject = {};

    // Convert formData to JSON object for external API
    formData.forEach((value, key) => {
      jsonObject[key] = value;
    });

    const response = await axios.post('https://admin.acsagentlink.com/api/become-an-agent', jsonObject, {
      });

    return NextResponse.json(response.data, { status: response.status });
  } catch (error) {
    const status = error.response?.status || 500;
    const message = error.response?.data?.message || error.response?.data?.error || 'An unexpected error occurred.';
    return NextResponse.json({ error: message }, { status });
  }
}

export function GET() {
  return NextResponse.json({ message: 'Method Not Allowed' }, { status: 405 });
}
