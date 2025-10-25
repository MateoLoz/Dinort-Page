import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { checkLocale } from "./lib/middleware/i18n";


export function middleware(request:NextRequest) {
  const localeResponse = checkLocale(request)
 
  return NextResponse.redirect(new URL(`${localeResponse}`, request.url ));
}

export const config = {
  matcher: ['/','/profile','/dashboard'],

};
