import React from "react";
// import { motion } from "framer-motion";
import styles from "../styles/About.module.css";

export default function about() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.bar}></div>
        <h2 className={styles.title}>About Me</h2>
        <span className={styles.subtitle}>My introduction</span>
        <div className={styles.desc}>
          <p>
            지식을 지속적으로 축적하기 위해 끊임없는 학습 곡선을 그리고
            있습니다.
          </p>
        </div>
      </div>
    </section>
  );
}
