// middleware.js
import { NextResponse } from 'next/server';

export function middleware(request) {
    const { pathname } = request.nextUrl;

    console.log('Middleware processing:', pathname);

    // Only protect the main admin dashboard, NOT the login page
    if (pathname === '/admin' || pathname === '/admin/') {
        const adminSession = request.cookies.get('admin_session');

        console.log('Checking session for admin dashboard...');

        if (!adminSession) {
            console.log('No session found, redirecting to login');
            return NextResponse.redirect(new URL('/admin/login', request.url));
        }

        try {
            const session = JSON.parse(adminSession.value);
            console.log('Session expires:', new Date(session.expires).toISOString());

            if (session.expires < Date.now()) {
                console.log('Session expired, redirecting to login');
                const response = NextResponse.redirect(new URL('/admin/login', request.url));
                response.cookies.delete('admin_session');
                return response;
            }

            console.log('Valid session, allowing access to admin dashboard');
            return NextResponse.next();

        } catch (error) {
            console.log('Invalid session format, redirecting to login');
            const response = NextResponse.redirect(new URL('/admin/login', request.url));
            response.cookies.delete('admin_session');
            return response;
        }
    }

    // Allow all other requests including /admin/login
    console.log('Allowing request to:', pathname);
    return NextResponse.next();
}

export const config = {
    matcher: [
        '/admin',
        '/admin/'
    ]
};