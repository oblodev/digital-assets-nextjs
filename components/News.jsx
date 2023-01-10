import styles from "../styles/News.module.css";
import Image from "next/image";
import Link from "next/link";
import NewsImg from "../public/images/News.png";
import { motion } from "framer-motion";
import moment from "moment";
import "moment/locale/de";

import { useTheme } from "../hooks/useTheme";

function News({ germanNews }) {
  const germanNewss = germanNews.articles;

  const { changeMode, mode } = useTheme();

  const toggleMode = () => {
    changeMode(mode === "light" ? "dark" : "light");
  };

  return (
    <div className={styles.news}>
      <motion.div
        whileInView={{ y: [40, 0], opacity: [0, 1] }}
        transition={{ duration: 0.65 }}
        className={styles.heading}
      >
        <h2 className={`${styles.newsHeader} ${styles[mode]}`} id="News">
          <span>{"//"} </span>Aktuelle Krypto-News
        </h2>
        <div></div>
      </motion.div>
      <motion.div
        whileInView={{ y: [40, 0], opacity: [0, 1] }}
        transition={{ duration: 0.65 }}
        className={styles.newsShow}
      >
        {germanNewss ? (
          germanNewss.slice(0, 9).map((news) => (
            <Link
              href={news.url}
              target="_blank"
              rel="noreferrer"
              className={styles.newsLink}
              key={news.id}
            >
              <div className={styles.newsCard}>
                <div className={styles.newsHead}>
                  <Image
                    src={news?.urlToImage || NewsImg}
                    alt="news-image"
                    className={styles.newsImage}
                    width={260}
                    height={120}
                  />
                  <h3>{news.title}</h3>
                </div>

                <div className={styles.newsInfo}>
                  <p className={styles.newsRights}>{news.source.name}</p>
                  <p className="news-time">
                    {moment(news.publishedAt).startOf("hour").fromNow()}
                  </p>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <div>
            <p>Test</p>
          </div>
        )}
      </motion.div>
    </div>
  );
}

export default News;
