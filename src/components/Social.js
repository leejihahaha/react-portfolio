import React from "react";
import styles from "../styles/Home.module.css";

export default function Social() {
  return (
    <div className={styles.home_social}>
      <a
        href="https://github.com/leejihahaha"
        target="_blank"
        className="home_social_icon"
        rel="noreferrer"
      >
        Github
      </a>
      <a
        href="https://www.notion.so/77716f6ca06e4e48b1c62fd128549d27"
        target="_blank"
        className="home_social_icon"
        rel="noreferrer"
      >
        Notion
      </a>
      <a
        href="https://blog.naver.com/zhsclq5324"
        target="_blank"
        className="home_social_icon"
        rel="noreferrer"
      >
        Blog
      </a>
    </div>
  );
}
