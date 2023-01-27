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
      "media1.faz.net",
      "ibs.orf.at",
      "img.netzwelt.de",
      "crops.giga.de",
      "www.tagesspiegel.de",
      "assets.t3n.de",
      "www.horizont.net",
      "www.jungewelt.de",
      "static.politico.com",
      "img.nzz.ch",
      "static.dw.com",
      "mma.prnewswire.com",
      "image.stern.de",
      "www.wiwo.de",
    ],
  },
  env: {
    NEWS_API_KEY: "f2f74f91d1d641d6beb41e834687baf0",
  },
};

module.exports = nextConfig;
