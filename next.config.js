/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "images.finanzen.net",
      "i.wfcdn.de",
      "media0.faz.net",
      "image.futurezone.at",
      "www.basicthinking.de",
      "heise.cloudimg.io",
      "www.tagesschau.de",
      "www.welt.de",
      "www.diepresse.com",
      "cdn.businessinsider.de",
      "images.bild.de",
    ],
  },
  env: {
    NEWS_API_KEY: "@news-api-key",
  },
};

module.exports = nextConfig;
