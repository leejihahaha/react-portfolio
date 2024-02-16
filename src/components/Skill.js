import React from "react";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import { FaCss3 } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { SiReactquery } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiFramer } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import styles from "../styles/Skill.module.css";
import { motion } from "framer-motion";

const boxVariants = {
  start: {
    opacity: 0,
    scale: 0.5,
  },
  end: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 0.5,
      bounce: 0.5,
      delayChildren: 0.5,
      staggerChildren: 0.2,
    },
  },
};
const circleVariants = {
  start: {
    opacity: 0,
    y: 10,
  },
  end: {
    opacity: 1,
    y: 0,
  },
};

export default function Skill() {
  return (
    <motion.div
      variants={boxVariants}
      initial="start"
      animate="end"
      className={styles.content}
    >
      <motion.div variants={circleVariants} className={styles.skill}>
        <IoLogoJavascript />
      </motion.div>
      <motion.div variants={circleVariants} className={styles.skill}>
        <FaReact />
      </motion.div>
      <motion.div variants={circleVariants} className={styles.skill}>
        <IoLogoFirebase />
      </motion.div>
      <motion.div variants={circleVariants} className={styles.skill}>
        <FaCss3 />
      </motion.div>
      <motion.div variants={circleVariants} className={styles.skill}>
        <FaHtml5 />
      </motion.div>
      <motion.div variants={circleVariants} className={styles.skill}>
        <SiReactquery />
      </motion.div>
      <motion.div variants={circleVariants} className={styles.skill}>
        <SiTailwindcss />
      </motion.div>
      <motion.div variants={circleVariants} className={styles.skill}>
        <SiFramer />
      </motion.div>
      <motion.div variants={circleVariants} className={styles.skill}>
        <SiTypescript />
      </motion.div>
    </motion.div>
  );
}
