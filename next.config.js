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
      "www.businessinsider.de",
    ],
  },
  env: {
    NEWS_API_KEY: "f2f74f91d1d641d6beb41e834687baf0",
  },
};

module.exports = nextConfig;
