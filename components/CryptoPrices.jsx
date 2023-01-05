import styles from "../styles/CryptoPrices.module.css";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import CryptoTable from "./CryptoTable";
import { useTheme } from "../hooks/useTheme";

function CryptoPrices({ cryptos }) {
  const { changeMode, mode } = useTheme();

  const toggleMode = () => {
    changeMode(mode === "light" ? "dark" : "light");
  };
  return (
    <div className={styles.cryptos}>
      <motion.div
        whileInView={{ y: [40, 0], opacity: [0, 1] }}
        transition={{ duration: 0.65 }}
        className={`${styles.heading} ${styles[mode]}`}
      >
        <div id="Kryptowaehrungen">
          <h1>
            <span>{"//"} </span>Die 10 besten Kryptowährungen nach
            Marktkapitalisierung
          </h1>
        </div>
      </motion.div>
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.65 }}
      >
        <CryptoTable cryptos={cryptos} />
      </motion.div>

      <Link
        href="/kryptowaehrungen"
        className={`${styles.more} ${styles[mode]}`}
      >
        Mehr Kryptos
      </Link>
    </div>
  );
}

export default CryptoPrices;
