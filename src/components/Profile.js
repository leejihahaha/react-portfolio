import React from "react";
import { motion } from "framer-motion";
import styles from "../styles/Home.module.css";

const animate = {
  scale: [1, 1.1, 1, 1],
  rotate: [0, 10, 1, 10, 0],
};

export default function Profile() {
  return (
    <>
      <motion.div
        className={styles.home_img}
        animate={animate}
        transition={{
          duration: 0.8,
          ease: "easeInOut",
          // times: [0, 0.2, 0.5, 0.8, 1],
          // repeat: Infinity,
          repeatDelay: 1,
        }}
      ></motion.div>
    </>
  );
}
