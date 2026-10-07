// middleware.js
import { NextResponse } from "next/server";
import { COOKIE_NAME } from "@/lib/auth";

export function middleware(request) {
  const token = request.cookies.get(COOKIE_NAME);

  if (request.nextUrl.pathname.startsWith("/admin") && !token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/admin/:path*",
};