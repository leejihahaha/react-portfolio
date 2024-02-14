import React from "react";
import styles from "../styles/Home.module.css";
import Social from "../components/Social";
import Scroll from "../components/Scroll";
import Profile from "../components/Profile";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.title}>
          <div className={styles.main_title}>Front End Developer</div>
          <div className={styles.title_line}></div>
          <p className={styles.sub_title}>
            안녕하세요 이지하 입니다
            <br />
            항상 배우고 성장하는 것을 지향합니다.
          </p>
          <Social />
        </div>
        <div>
          <Profile />
        </div>
      </div>
      <Scroll />
      <p className={styles.home_scroll_name}>Scroll Down</p>
    </div>
  );
}
