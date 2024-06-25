import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
    const path = req.nextUrl.pathname;

    const isPublicPath = path === '/login' || path === '/signup'

    let token = req.cookies.get('token')?.value || "";

    // if (typeof token === "undefined" || token === "") {
    //   token = "";
    // }

    if (isPublicPath && token) {
        return NextResponse.redirect(new URL ('/dashboard', req.nextUrl))
    }

        if (!isPublicPath && !token) {
        return NextResponse.redirect(new URL ('/login', req.nextUrl))
    }
}

export const config = {
    matcher: [
        '/',
        '/accountSetup',
        '/contestCalendar',
        '/dashboard',
        '/login',
        '/savedProblems',
        '/signup',
        '/userProblems',
    ]
}