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

  const token = req.cookies.get('token'); // Retrieve token from cookies
  const isDashboardPage = req.nextUrl.pathname.startsWith('/dashboard'); // Check if it's the dashboard

  // Redirect to login if token is missing on protected pages
  if (isDashboardPage && !token) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  // Public access restriction
  const url = req.nextUrl;

    // Exclude `/launching-soon` from processing
    if (url.pathname === '/launching-soon') {
      return NextResponse.next();
    }

  const accessKey = url.searchParams.get('accesskey');
  const allowedKey = '233223'; 

  // Allow access if the accesskey matches
  if (accessKey === allowedKey) {
      const response = NextResponse.next();
      response.cookies.set('access_granted', 'true', { path: '/', httpOnly: true });
      return response;
  }

  // Check if the cookie exists
  const accessGranted = req.cookies.get('access_granted')?.value === 'true';
  if (accessGranted) {
      return NextResponse.next();
  }

  // Redirect to the launching soon page
  url.pathname = '/launching-soon';
  url.search = ''; // Remove query params for clean redirect
  return NextResponse.redirect(url);

  // return NextResponse.next(); // Allow all other requests
  
}

export const config = {
  matcher: ['/((?!api|static|_next|favicon.ico|launching-soon).*)', '/dashboard/:path*', '/become-an-agent/success']
};
