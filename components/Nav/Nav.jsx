import styles from "../../styles/Nav.module.css";
import { useState } from "react";
import { RiMenu4Fill } from "react-icons/ri";
import { HiX } from "react-icons/hi";
import { BiBrightnessHalf } from "react-icons/bi";

import logo from "../../public/images/logo_400x140.png";
import logoLight from "../../public/images/DA_logo_light.png";

import Link from "next/link";
import Image from "next/image";

import { motion } from "framer-motion";

import { useTheme } from "../../hooks/useTheme";

function Nav() {
  const [toggleSide, setToggleSide] = useState(false);

  const { changeMode, mode } = useTheme();

  const toggleMode = () => {
    changeMode(mode === "light" ? "dark" : "light");
  };

  return (
    <div className={`${styles.container} ${styles[mode]}`}>
      <div className={styles.logo}>
        <Link href="/">
          <Image
            src={mode === "dark" ? logoLight : logo}
            alt="logo"
            className={styles.logoImage}
          />
        </Link>
      </div>
      <div className={styles.linksWrapper}>
        <ul className={styles.links}>
          <li key={`link-statistiken`}>
            <div></div>
            <Link href="/#Statistiken" className={styles[mode]} scroll={false}>
              Statistiken
            </Link>
          </li>
          <li key={`link-kryptowährungen`}>
            <div></div>
            <Link
              href="/#Kryptowaehrungen"
              className={styles[mode]}
              scroll={false}
            >
              Kryptowährungen
            </Link>
          </li>
          <li key={`link-news`}>
            <div></div>
            <Link href="/#News" className={styles[mode]} scroll={false}>
              News
            </Link>
          </li>
        </ul>
        <div className={styles.navbarSide}>
          <RiMenu4Fill
            onClick={() => setToggleSide(true)}
            className={`${styles.navbarSideIcon} ${styles[mode]}`}
          />
          {toggleSide && (
            <motion.div
              whileInView={{ x: [300, 0], opacity: [0, 1] }}
              transition={{ duration: 0.45, ease: "easeOut" }}
            >
              <HiX className={styles.x} onClick={() => setToggleSide(false)} />
              <ul>
                {["Statistiken", "Kryptowährungen", "News"].map((item) => (
                  <li key={`link-${item}`}>
                    <Link
                      href={`/#${item}`}
                      onClick={() => setToggleSide(false)}
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </div>
        <div className={styles.navbarMode}>
          <BiBrightnessHalf
            className={`${styles.navbarModeIcon} ${styles[mode]}`}
            onClick={toggleMode}
          />
        </div>
      </div>
    </div>
  );
}

export default Nav;
