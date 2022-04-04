/** @type {import('next').NextConfig} */

// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require("next-pwa")

const nextConfig = {
  reactStrictMode: true,
  ...withPWA({
    pwa: {
      dest: "public"
      //disable: process.env.NODE_ENV === "development"
    }
  })
}

module.exports = nextConfig
