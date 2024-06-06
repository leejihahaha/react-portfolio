import React from "react";
import styles from "../styles/Home.module.css";
import Social from "../components/Social";
import Scroll from "../components/Scroll";
import Profile from "../components/Profile";
import Skill from "../components/Skill";
import { Cursor, Typewriter } from "react-simple-typewriter";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.title_content}>
          <h1 className={styles.main_title}>
            <Typewriter
              words={["I'm Web Developer"]}
              delaySpeed={1000}
              typeSpeed={150}
              cursorStyle={"|"}
            />
            <Cursor cursorColor="#1a4f7a" />
          </h1>
          <div className={styles.title_line}></div>
          <p className={styles.sub_title}>
            <span>Front End Developer</span>
            <p className={styles.sub_comment}>안녕하세요! 이지하입니다.</p>
            <p> 항상 배우고 성장하는 것을 지향합니다.</p>
          </p>
          <Social />
          <div className={styles.skill}>
            <Skill />
          </div>
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
