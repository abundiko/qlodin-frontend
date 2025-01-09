import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  return NextResponse.rewrite(
    new URL(`https://${process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN}`)
  );
}

export async function POST(req: NextRequest) {
  return NextResponse.rewrite(
    new URL(`https://${process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN}`)
  );
}
