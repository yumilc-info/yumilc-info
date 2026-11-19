/* eslint-disable @typescript-eslint/no-require-imports */

const { initOpenNextCloudflareForDev } = require("@opennextjs/cloudflare");

/** @type {import('next').NextConfig} */
const nextConfig = {
	// Cloudflare Images の契約なしで動かすため、画像は元のファイルをそのまま配信する
	images: { unoptimized: true },
};

module.exports = nextConfig;

initOpenNextCloudflareForDev();
