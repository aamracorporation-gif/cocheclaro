import { fileURLToPath } from "node:url";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // Evita que Next infiera una raíz de workspace equivocada si hay otros
  // lockfiles en carpetas superiores.
  outputFileTracingRoot: fileURLToPath(new URL(".", import.meta.url)),
  eslint: {
    // Lint is run explicitly in CI via `npm run lint`; don't block production builds on it.
    ignoreDuringBuilds: true,
  },
  async redirects() {
    return [];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
        ],
      },
    ];
  },
};

export default nextConfig;
