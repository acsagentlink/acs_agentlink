import { NextResponse } from 'next/server';

export function middleware(req) {

  const cookie = req.cookies.get('form_submitted');
  const isSuccessPage = req.nextUrl.pathname === '/become-an-agent/success' || req.nextUrl.pathname === '/hire-an-agent/success';

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
  const url = req.nextUrl.clone();
  const { pathname, searchParams } = url;

  if (pathname === '/launching-soon') {
    return NextResponse.next();
  }

  // Check for the "access" query parameter or cookie
  const accessToken = searchParams.get('access');
  const cookieToken = req.cookies.get('access-token');

  // Allow access if token exists in query or cookie
  if (accessToken === 'secret-token' || cookieToken === 'true') {
    if (accessToken === 'secret-token') {
      // Set a cookie for future access
      const response = NextResponse.next();
      response.cookies.set('access-token', 'true', { path: '/' });
      return response;
    }
    return NextResponse.next();
  }

  // Redirect unauthorized users to "Launching Soon" page
  if (pathname !== '/launching-soon') {
    url.pathname = '/launching-soon';
    return NextResponse.redirect(url);
  }

  return NextResponse.next(); // Allow all other requests
  
}

export const config = {
  matcher: ['/', '/dashboard/:path*', '/become-an-agent/success', '/hire-an-agent/success'],
};
