import styles from "../styles/CryptoPrices.module.css";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import CryptoTable from "./CryptoTable";

function CryptoPrices({ cryptos }) {
  return (
    <div className={styles.cryptos}>
      <motion.div
        whileInView={{ y: [40, 0], opacity: [0, 1] }}
        transition={{ duration: 0.65 }}
        className={styles.heading}
      >
        <h1 className={styles.header} id="Kryptowährungen">
          <span>// </span>Die 10 besten Kryptowährungen nach
          Marktkapitalisierung
        </h1>
      </motion.div>
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.65 }}
      >
        <CryptoTable cryptos={cryptos} />
      </motion.div>
      <div className={styles.more}>
        <Link href="/kryptowaehrungen">Mehr Kryptos</Link>
      </div>
    </div>
  );
}

export default CryptoPrices;
