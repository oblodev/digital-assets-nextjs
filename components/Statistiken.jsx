import styles from "../styles/Statistiken.module.css";
import { motion } from "framer-motion";
import { NumericFormat } from "react-number-format";
import { useTheme } from "../hooks/useTheme";

function Statistiken({ stats }) {
  const { changeMode, mode } = useTheme();

  const toggleMode = () => {
    changeMode(mode === "light" ? "dark" : "light");
  };
  const globalStats = stats.data;
  return (
    <div className={`${styles.statistiken} ${styles[mode]}`}>
      <motion.div
        whileInView={{ y: [40, 0], opacity: [0, 1] }}
        transition={{ duration: 0.65 }}
        className={styles.heading}
      >
        <h1 className={`${styles.header} ${styles[mode]}`} id="Statistiken">
          <span>// </span>Globale Krypto-Statistiken
        </h1>

        <div></div>
      </motion.div>
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className={styles.stats}
      >
        <div className={styles.card}>
          <h3>Krypto-Marktkapitalisierung</h3>
          <p className={styles.text}>
            <NumericFormat
              thousandsGroupStyle="thousand"
              value={globalStats.total_market_cap.usd.toFixed(2)}
              decimalSeparator="."
              displayType="text"
              type="text"
              thousandSeparator={true}
              allowNegative={true}
            />
            $
          </p>
          <p
            className={
              globalStats.market_cap_change_percentage_24h_usd > 0
                ? styles.green
                : styles.red
            }
          >
            {stats
              ? globalStats.market_cap_change_percentage_24h_usd.toFixed(2)
              : "Ermittle ..."}
            % <span> in den letzten 24h</span>
          </p>{" "}
        </div>
        <div className={styles.card}>
          <h3>24-Stunden-Volumen</h3>
          <p className={styles.text}>
            <NumericFormat
              thousandsGroupStyle="thousand"
              value={globalStats.total_volume.usd.toFixed(2)}
              decimalSeparator="."
              displayType="text"
              type="text"
              thousandSeparator={true}
              allowNegative={true}
            />
            $
          </p>
          <p className={styles.none}>.</p>
        </div>
        <div className={styles.card}>
          <h3>
            BTC Marktkapitalisierungs-
            <br />
            dominanz
          </h3>
          <p className={styles.text}>
            {stats
              ? globalStats.market_cap_percentage.btc.toFixed(2)
              : "Ermittle ..."}
            %
          </p>
          <p className={styles.none}>.</p>
        </div>
        <div className={styles.card}>
          <h3>Anzahl Kryptowährungen</h3>
          <p></p>
          <p className={styles.text}>
            {stats ? globalStats.active_cryptocurrencies : "Ermittle ..."}
          </p>
          <p className={styles.none}>.</p>
        </div>
      </motion.div>
    </div>
  );
}

export default Statistiken;
