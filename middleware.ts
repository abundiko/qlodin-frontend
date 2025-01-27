import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { __cookies, __paths } from "./utils";
// import { __cookies, paths } from "./utils";

export async function middleware(req: NextRequest) {
  // debugLog(`middleware-------------${Date.now()}`)
  const pathname = req.nextUrl.pathname;
  const hasAccessToken = req.cookies.has(__cookies.user_token);
  if (pathname.includes("api")) {
    return NextResponse.next();
  }
  //   if this is a user protected path
  if (
    userProtectedPaths.map((path) => pathname.startsWith(path)).includes(true)
  ) {
    if (!hasAccessToken) {
      (await cookies()).set(
        __cookies.alert_toast,
        JSON.stringify({ type: "error", message: "Login to continue" })
      );
      return NextResponse.redirect(new URL(__paths.signIn, req.url));
    }
  }
  //   else if (pathname === paths.admin || pathname.startsWith(paths.admin + "/")) {
  //     if (!(_hasAccessToken || _hasAccessId))
  //       return NextResponse.redirect(new URL(paths.adminLogin, req.url));
  //   }
  // else if (authPaths.map((item)=>pathname.startsWith(item)).includes(true)) {
  // if (hasAccessToken && hasAccessId) return NextResponse.redirect(new URL(paths.dashboard, req.url));
  // }
}

const userProtectedPaths = [__paths.user];

// const authPaths = [
//   paths.login,
//   paths.signup,
//   paths.forgotPassword,
//   paths.resetPassword,
// ]
