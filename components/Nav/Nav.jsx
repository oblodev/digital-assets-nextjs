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

function Nav() {
  const [toggleSide, setToggleSide] = useState(false);
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Link href="/">
          <Image
            src={logo}
            alt="logo"
            className={styles.logoImage}
            height={100}
            width={300}
          />
        </Link>
      </div>
      <div className={styles.linksWrapper}>
        <ul className={styles.links}>
          {["Statistiken", "Kryptowährungen", "News"].map((item) => (
            <li key={`link-${item}`}>
              <div></div>
              <Link href={`/#${item}`}>{item}</Link>
            </li>
          ))}
        </ul>
        <div className={styles.navbarSide}>
          <RiMenu4Fill
            onClick={() => setToggleSide(true)}
            className={styles.navbarSideIcon}
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
            className={styles.navbarModeIcon}
            onClick={() => setToggleSide(false)}
          />
        </div>
      </div>
    </div>
  );
}

export default Nav;
