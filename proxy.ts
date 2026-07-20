import NextAuth from 'next-auth';
import { authConfig } from './auth.config';

// Using the NextAuth shorthand as the proxy makes the `authorized` callback
// in auth.config.ts run for every matched request, protecting /dashboard.
export default NextAuth(authConfig).auth;

export const config = {
  // https://nextjs.org/docs/app/api-reference/file-conventions/proxy#matcher
  // Exclude static assets and image files explicitly. A broad matcher causes a
  // known Next.js 16 dev-server bug where valid app routes return 404.
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};
