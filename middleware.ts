import { getToken } from "next-auth/jwt"
import type { NextRequest } from "next/server"
import { NextResponse } from "next/server"

const secret = process.env.NEXTAUTH_SECRET

export async function middleware(req: NextRequest) {
  const session = await getToken({req, secret})
  if( req.nextUrl.pathname.startsWith("/signUp") || req.nextUrl.pathname.startsWith("/login")){
    if( session ){
      return NextResponse.redirect(new URL("/", req.url));
    }
  }
}

export const config = {
  matcher: ["/login/:path*", "/signUp/:path*"],
}