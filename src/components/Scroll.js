import React from "react";
import { motion } from "framer-motion";
import styles from "../styles/Home.module.css";
import { RiArrowDownDoubleFill } from "react-icons/ri";
export default function Scroll() {
  return (
    <motion.div
      initial={{ translateY: 0 }}
      animate={{ translateY: 40 }}
      transition={{ repeat: Infinity, duration: 1 }}
    >
      <RiArrowDownDoubleFill className={styles.home_scroll} />
    </motion.div>
  );
}
