// Middleware temporalmente deshabilitado para pruebas
// import NextAuth from 'next-auth';
// import { authConfig } from './auth.config';

// export default NextAuth(authConfig).auth;

// Middleware vacío que no hace nada
export default function middleware() {
  // No hace nada - permite acceso libre
}

export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
  runtime: 'nodejs',
};