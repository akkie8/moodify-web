import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const publicPaths = ['/', '/login', '/about', '/notice', '/terms', '/policy', '/contact'];

export async function middleware(request: NextRequest) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req: request, res });

  console.log('Middleware path:', request.nextUrl.pathname);

  const {
    data: { session },
  } = await supabase.auth.getSession();

  const pathname = request.nextUrl.pathname;

  if (pathname.startsWith('/_next') || pathname.startsWith('/api') || pathname.includes('.')) {
    return res;
  }

  if (publicPaths.includes(pathname)) {
    if (session && pathname === '/login') {
      console.log('Redirecting to dashboard');
      return NextResponse.redirect(new URL('/dashboard', request.nextUrl.origin));
    }
    return res;
  }

  if (!session) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return res;
}
