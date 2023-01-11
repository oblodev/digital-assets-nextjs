// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  console.log(process.env.NEWS_API_KEY);
  const data = await fetch(
    `https://newsapi.org/v2/everything?q=krypto&language=de&from=2023-01-10&sortBy=publishedAt&apiKey=${process.env.NEWS_API_KEY}`
  ).then((response) => response.json());

  res.json(data);
}
