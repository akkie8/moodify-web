import { NextResponse } from 'next/server';

export async function POST() {
  const response = NextResponse.json({ message: 'Cache cleared' });
  response.cookies.set('supabase-auth-token', '', { maxAge: 0 });
  return response;
}
