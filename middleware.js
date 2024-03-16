import { getToken } from 'next-auth/jwt';
import { NextResponse } from 'next/server';

export async function middleware(req) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  const protectedPaths = ['/lecture', '/information', '/category', '/bookmark', '/test', '/profile']
  if (protectedPaths.some(path => req.nextUrl.pathname.startsWith(path))) {
    if (!token) {
      return NextResponse.redirect(new URL(process.env.STARTOE_URL, req.url));
    }
  }
  return NextResponse.next();
}
