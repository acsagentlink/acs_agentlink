import { NextResponse } from 'next/server';

export function middleware(req) {
  const cookie = req.cookies.get('form_submitted');
  const isSuccessPage = req.nextUrl.pathname === '/become-an-agent/success';

  // Access the cookie value as a string
  const cookieValue = cookie ? cookie.value : null;

  // Allow access to the success page if the cookie is present
  if (isSuccessPage) {
    if (cookieValue === 'true') {
      return NextResponse.next(); // Allow access to the success page
    } else {
      return NextResponse.redirect(new URL('/', req.url)); // Redirect if no cookie
    }
  }

  return NextResponse.next(); // Allow all other requests
}

export const config = {
  matcher: ['/become-an-agent/success'],
};
