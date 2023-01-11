// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  let today = new Date();
  let yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);
  let isoString = yesterday.toISOString();
  let formattedDate = isoString.slice(0, 10);
  const data = await fetch(
    `https://newsapi.org/v2/everything?q=krypto+OR+blockchain&language=de&from=${formattedDate}&sortBy=publishedAt&apiKey=${process.env.NEWS_API_KEY}`
  ).then((response) => response.json());

  res.json(data);
  console.log(data);
}
