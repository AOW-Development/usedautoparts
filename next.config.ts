import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    // SMTP — forwarded from Amplify env vars to Next.js Lambda runtime
    SMTP_HOST: process.env.SMTP_HOST,
    SMTP_PORT: process.env.SMTP_PORT,
    SMTP_USER: process.env.SMTP_USER,
    SMTP_PASS: process.env.SMTP_PASS,
    SMTP_FROM: process.env.SMTP_FROM,
    SMTP_TO: process.env.SMTP_TO,

    // Leads API — server-side
    LEADS_API_URL: process.env.LEADS_API_URL,
  },
};

export default nextConfig;
