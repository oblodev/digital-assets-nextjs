import Head from "next/head";
import Image from "next/image";

import styles from "../styles/Home.module.css";

import Statistiken from "../components/Statistiken";
import CryptoPrices from "../components/CryptoPrices";
import News from "../components/News";

import { useTheme } from "../hooks/useTheme";

export default function Home({ stats, cryptos, germanNews }) {
  const { changeMode, mode } = useTheme();

  const toggleMode = () => {
    changeMode(mode === "light" ? "dark" : "light");
  };
  return (
    <>
      <Head>
        <title>
          Digitalassets.at - Aktuelle Informationen über den Kryptomarkt //
        </title>
        <meta
          name="description"
          content="Aktuelle Kurse und Informationen über den Kryptomarkt"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${styles[mode]}`}>
        <Statistiken stats={stats} />
        <CryptoPrices cryptos={cryptos} />
        <News germanNews={germanNews} />
      </main>
    </>
  );
}

export async function getStaticProps() {
  const resStats = await fetch("https://api.coingecko.com/api/v3/global");
  const dataStats = await resStats.json();

  const resCrypto = await fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d"
  );
  const dataCrypto = await resCrypto.json();

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "965544b128msh602fdb4437bf366p1faec3jsnd3773b9075b7",
      "X-RapidAPI-Host": "german-cryptonews-api.p.rapidapi.com",
    },
  };
  const resNews = await fetch(
    "https://german-cryptonews-api.p.rapidapi.com/news",
    options
  );
  const newsData = await resNews.json();

  return {
    props: {
      stats: dataStats,
      cryptos: dataCrypto,
      germanNews: newsData,
    },
  };
}
