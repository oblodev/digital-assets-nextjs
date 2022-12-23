import styles from "../../styles/Footer.module.css";
import Image from "next/image";
import Link from "next/link";

import logo from "../../public/images/logo_400x140.png";
import logoLight from "../../public/images/DA_logo_light.png";

import { motion } from "framer-motion";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <motion.div
      whileInView={{ y: [40, 0], opacity: [0, 1] }}
      transition={{ duration: 0.65 }}
      className={styles.footer}
    >
      <Image src={logo} alt="logo" width={140} />
      <p>
        Created by <Link href="https://dkostka.dev">dkostka.dev</Link> &copy;{" "}
        {year}
      </p>
    </motion.div>
  );
}

export default Footer;
