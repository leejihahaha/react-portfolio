import React from "react";
import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.contain}>
      <p>본 사이트는 개인포트폴리오용으로 제작되었습니다.</p>
      <p>Copyright 2024. All rights reserved.</p>
    </footer>
  );
}
