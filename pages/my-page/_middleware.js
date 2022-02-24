import { NextResponse } from 'next/server';

export async function middleware(req, ev) {
  const response = NextResponse.next();

  await new Promise((res) => setTimeout(res, 500));

  console.log('middleware called');

  return response;
}
