import React from "react";
import styles from "../styles/About.module.css";
import { motion } from "framer-motion";
import Line from "../components/Line";

export default function about() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.bar}></div>
        <h2 className={styles.title}>About Me 🙂</h2>
        <span className={styles.subtitle}>My introduction</span>
      </div>
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
        className={styles.img_motion}
      >
        <div className={styles.about_content}>
          <div>
            <div className={styles.image}></div>
          </div>
          <div className={styles.about_desc_content}>
            <div className={styles.about_desc}>
              <Line />
              <br />
              - 공유하는 개발자 문화를 좋아하고 지향합니다.
              <br />
              - 자기 주도 학습 능력을 기르기 위해 교육기관없이 진행했습니다.
              <br />- 배운 내용과 과정을 기록합니다.
            </div>

            <div className={styles.about_desc}>
              <Line />
              <br />
              - 사용하는 기술의 장점을 살려 활용하는 것에 집중합니다.
              <br />
              - css module, tailwind, framer-motion을 다룰 수 있습니다.
              <br />
              - 재사용성과 확장성을 고려하고 고민하여 컴포넌트 개발을 합니다.
              <br />
              - 브라우저 렌더링을 고려하여 문제를 개선한 경험이 있습니다.
              <br />
              - Git의 명령어를 사용해 프로젝트를 관리했습니다.
              <br />
              - Lighthouse의 Largest Contentful Paint의 속도를 약 79.41% 줄여
              최적화한 경험이 있습니다.
              <br />- 리액트의 내장 API인 Context API를 사용하여 상태를
              전역적으로 관리합니다.
            </div>
            <div className={styles.about_desc}>
              <Line />
              <br />
              - 빠른 시간 내에 오류를 해결해 나갈 수 있는 TDD기법에 관심이
              있습니다.
              <br />- Typescript의 interface와 type의 차이를 이해하며 강의를
              통해 익히고 있습니다.
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
