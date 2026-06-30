import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const SUBDOMAIN_ROUTES: Record<string, string> = {
  hotelvidal: "hotel-vidal",
};

export function proxy(request: NextRequest) {
  const host = request.headers.get("host")?.split(":")[0] ?? "";
  const subdomain = getSubdomain(host);
  const slug = subdomain ? SUBDOMAIN_ROUTES[subdomain] : undefined;

  if (!slug) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();

  if (url.pathname === `/${slug}` || url.pathname.startsWith(`/${slug}/`)) {
    return NextResponse.next();
  }

  url.pathname = `/${slug}`;
  return NextResponse.rewrite(url);
}

function getSubdomain(host: string) {
  if (host.endsWith(".puntoqr.cl")) {
    return host.replace(".puntoqr.cl", "");
  }

  if (host.endsWith(".localhost")) {
    return host.replace(".localhost", "");
  }

  return null;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|puntoqr|.*\\.(?:png|jpg|jpeg|gif|webp|svg|ico|css|js|txt|xml|vcf)$).*)",
  ],
};
