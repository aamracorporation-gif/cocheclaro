import { NextResponse } from "next/server";
import { ADMIN_SESSION_COOKIE, checkAdminPassword, createSessionToken } from "@/lib/admin-auth";

export async function POST(request: Request) {
  const form = await request.formData();
  const password = String(form.get("password") ?? "");
  const from = String(form.get("from") ?? "/admin");

  if (!process.env.ADMIN_PASSWORD) {
    return NextResponse.redirect(
      new URL(`/admin/login?error=no-config`, request.url),
      { status: 303 },
    );
  }

  if (!checkAdminPassword(password)) {
    const url = new URL("/admin/login", request.url);
    url.searchParams.set("error", "invalid");
    if (from.startsWith("/admin")) url.searchParams.set("from", from);
    return NextResponse.redirect(url, { status: 303 });
  }

  const session = await createSessionToken();
  const target = from.startsWith("/admin") ? from : "/admin";
  const response = NextResponse.redirect(new URL(target, request.url), { status: 303 });
  response.cookies.set(ADMIN_SESSION_COOKIE, session.value, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: session.maxAge,
  });
  return response;
}
