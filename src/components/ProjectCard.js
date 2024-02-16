import React from "react";
import styles from "../styles/ProjectCard.module.css";

export default function ProjectCard({
  project: { name, image, description, tags, source_code, github_page, memo },
}) {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.img_wrap}>
          <img src={image} className={styles.card_img} alt={description} />
        </div>
        <div className={styles.card_content}>
          <h4 className={styles.card_title}>{name}</h4>
          <p className={styles.card_desc}>{description}</p>
          <div className={styles.tags_wrap}>
            {tags.map((item, idx) => {
              return (
                <span className={styles.skill_tag} key={idx}>
                  #{item}
                </span>
              );
            })}
          </div>

          {memo && (
            <a
              className={styles.momo}
              href={memo}
              target="_blank"
              rel="noreferrer"
            >
              정리한 내용
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
          {memo && (
            <a
              className={styles.github_page}
              href={github_page}
              target="_blank"
              rel="noreferrer"
            >
              github_page
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
