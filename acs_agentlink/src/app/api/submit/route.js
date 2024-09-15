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

    const staticData = {
      name: "test",
      email: "test",
      phone: "tesasdfasdfat",
      password: "tkljkklkjest",
      country: "test",
      telegram: "test",
      resume: "test.pdf",
      work_experience: "I have lots of experience",
      availability: "yes",
      preferred_time: "8am - 11am",
      full_time: "yes",
      construct_message: "yes",
      prompt_response: "yes",
      trading_knowledge: "I have trading knowledge",
      has_pc: "yes",
      pc_consistent: "no",
      internet: "yes",
      type: "1"
    };

    // Log static data
    console.log('Static Data:', staticData);

    const response = await axios.post('https://admin.acsagentlink.com/api/become-an-agent', staticData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return NextResponse.json(response.data, { status: response.status });
  } catch (error) {
    const status = error.response?.status || 500;
    const message = error.response?.data?.message || 'An unexpected error occurred.';
    return NextResponse.json({ error: message }, { status });
  }
}

export function GET() {
  return NextResponse.json({ message: 'Method Not Allowed' }, { status: 405 });
}
