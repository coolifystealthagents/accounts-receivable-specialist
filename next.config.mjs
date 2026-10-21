/** @type {import('next').NextConfig} */
const securityHeaders = [
  { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), payment=()' },
  { key: 'Content-Security-Policy', value: "default-src 'self'; script-src 'self' 'unsafe-inline' https://acrtracking.stealthagents.us; style-src 'self' 'unsafe-inline'; img-src 'self' data:; connect-src 'self' https://acrtracking.stealthagents.us; frame-src https://go.oncehub.com; font-src 'self' data:; base-uri 'self'; form-action 'self'; frame-ancestors 'none'; upgrade-insecure-requests" }
];
const nextConfig = {
  output: 'standalone',
  images: { unoptimized: true, formats: ['image/avif', 'image/webp'] },
  async headers() { return [{ source: '/(.*)', headers: securityHeaders }]; },
  async redirects() { return [{ source: '/:path*', has: [{ type: 'host', value: 'www.accountsreceivablespecialist.com' }], destination: 'https://accountsreceivablespecialist.com/:path*', permanent: true }]; }
};
export default nextConfig;
