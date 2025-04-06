import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req: NextRequest) {
    // Extract session token
    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

    const protectedRoutes = ["/auth/signin", "/auth/signup"]; // Routes inaccessible when logged in

    if (token && protectedRoutes.includes(req.nextUrl.pathname)) {
        return NextResponse.redirect(new URL("/", req.url)); // Redirect to home/dashboard
    }

    return NextResponse.next();
}

// Apply middleware to specific routes
export const config = {
    matcher: ["/auth/signin", "/auth/signup"], // Adjust based on pages you want to protect
};
