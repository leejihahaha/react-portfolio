import React from "react";
import { motion } from "framer-motion";
import styles from "../styles/ProjectCard.module.css";

export default function ProjectCard({ project }) {
  const {
    name,
    image,
    description,
    type,
    tags,
    source_code,
    github_page,
    memo,
  } = project;

  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.2 }}
      className={styles.img_motion}
    >
      <li className={styles.container}>
        <div className={styles.card}>
          <div className={styles.img_wrap}>
            <img src={image} className={styles.card_img} alt={description} />
          </div>
        </div>
        <div className={styles.card_content}>
          <span className={styles.card_type}>{type}</span>
          <h2 className={styles.card_title}>{name}</h2>
          <div className={styles.card_description}>{description}</div>
          <div className={styles.tags_wrap}>
            <p className={styles.skill_tag_title}>Tech Stacks</p>
            {tags.map((item, idx) => {
              return (
                <span className={styles.skill_tag} key={idx}>
                  #{item}
                </span>
              );
            })}
          </div>

          <div className={styles.card_link}>
            {memo && (
              <a
                className={styles.memo}
                href={memo}
                target="_blank"
                rel="noreferrer"
              >
                회고 보러가기
              </a>
            )}
            {source_code && (
              <a
                className={styles.source_code}
                href={source_code}
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
            )}
            {github_page && (
              <a
                className={styles.github_page}
                href={github_page}
                target="_blank"
                rel="noreferrer"
              >
                Demo
              </a>
            )}
          </div>
        </div>
      </li>
    </motion.div>
  );
}
