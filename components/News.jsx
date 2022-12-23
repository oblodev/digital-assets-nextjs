import styles from "../styles/News.module.css";
import Image from "next/image";
import NewsImg from "../public/images/News.png";
import { motion } from "framer-motion";
import moment from "moment";
import "moment/locale/de";

function News({ germanNews }) {
  console.log(germanNews);
  return (
    <div className={styles.news}>
      <motion.div
        whileInView={{ y: [40, 0], opacity: [0, 1] }}
        transition={{ duration: 0.65 }}
        className={styles.heading}
      >
        <h2 className={styles.newsHeader} id="News">
          <span>// </span>Aktuelle Krypto-News
        </h2>
        <div></div>
      </motion.div>
      <motion.div
        whileInView={{ y: [40, 0], opacity: [0, 1] }}
        transition={{ duration: 0.65 }}
        className={styles.newsShow}
      >
        {germanNews ? (
          germanNews.slice(0, 6).map((news) => (
            <a href={news.url} target="_blank" rel="noreferrer">
              <div className={styles.newsCard}>
                <div className={styles.newsHead}>
                  <Image
                    src={news?.image || NewsImg}
                    alt="news-image"
                    className={styles.newsImage}
                    width={260}
                    height={120}
                  />
                  <h3>{news.title}</h3>
                </div>

                <div className={styles.newsInfo}>
                  <p className={styles.newsRights}>{news.source}</p>
                  <p className="news-time">
                    {moment(news.date).startOf("hour").fromNow()}
                  </p>
                </div>
              </div>
            </a>
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
