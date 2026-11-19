/* eslint-disable @typescript-eslint/no-require-imports */

const { initOpenNextCloudflareForDev } = require("@opennextjs/cloudflare");

/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = nextConfig;

initOpenNextCloudflareForDev();
