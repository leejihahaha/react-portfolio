import React from "react";
import { motion } from "framer-motion";
import styles from "../styles/Home.module.css";

// const animate = {
//   scale: [1, 1.1, 1, 1],
//   rotate: [0, 10, 1, 10, 0],
// };

export default function Profile() {
  return (
    <>
      <motion.div
        className={styles.home_img}
        initial={{ y: 0 }}
        animate={{ y: [-20, 20, -20] }}
        transition={{
          // repeat: Infinity,
          duration: 2,
          ease: "linear",
        }}
      ></motion.div>
    </>
  );
}
