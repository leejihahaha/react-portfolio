import React from "react";
import styles from "../styles/Home.module.css";
// import profile from "../assets/profile.png";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.typewriter}>
        <h1>포트폴리오 테스트 중 입니다</h1>
        <span>항상 배우고 성장하는 것을 지향합니다.</span>
      </div>
      {/* <img src={profile} alt="Profile" /> */}
    </div>
  );
}
