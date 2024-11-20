import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// ルートパス（/）を除外
const publicPaths = ['/', '/login', '/about', '/notice', '/terms', '/policy', '/contact'];

export function middleware(request: NextRequest) {
  console.log('middleware called:', request.nextUrl.pathname);

  const session = request.cookies.get('session');
  const pathname = request.nextUrl.pathname;

  // 静的ファイルやAPI関連は除外
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.includes('.') // .js, .css などのファイル
  ) {
    return NextResponse.next();
  }

  // public pathsの確認
  if (publicPaths.includes(pathname)) {
    console.log('public path accessed:', pathname);
    return NextResponse.next();
  }

  // セッションチェック
  if (!session) {
    console.log('no session, redirecting from:', pathname);
    return NextResponse.redirect(new URL('/login', request.nextUrl.origin));
  }

  return NextResponse.next();
}

// matcherも修正
export const config = {
  matcher: [
    // API routes を除外
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
