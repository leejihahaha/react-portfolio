import React from "react";
import { motion } from "framer-motion";
import styles from "../styles/Home.module.css";

export default function Profile() {
  return (
    <>
      <motion.div
        className={styles.home_img}
        initial={{ y: 0 }}
        animate={{ y: [-20, 20, -20] }}
        transition={{
          duration: 2,
          ease: "linear",
        }}
      ></motion.div>
    </>
  );
}
