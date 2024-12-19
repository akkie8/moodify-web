// src/middleware.ts
import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const publicPaths = ['/', '/login', '/about', '/notice', '/terms', '/policy', '/contact'];

export async function middleware(request: NextRequest) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req: request, res });

  console.log('middleware called:', request.nextUrl.pathname);
  const pathname = request.nextUrl.pathname;

  if (pathname.startsWith('/_next') || pathname.startsWith('/api') || pathname.includes('.')) {
    return res;
  }

  if (publicPaths.includes(pathname)) {
    console.log('public path accessed:', pathname);
    return res;
  }

  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session && !publicPaths.includes(pathname)) {
    console.log('no session, redirecting from:', pathname);
    return NextResponse.redirect(new URL('/login', request.nextUrl.origin));
  }

  return res;
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
