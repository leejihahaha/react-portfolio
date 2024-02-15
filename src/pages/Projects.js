import React, { useEffect, useState } from "react";
import styles from "../styles/Projects.module.css";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  const [project, setProject] = useState(null);

  async function fetchData() {
    //캡슐화
    const response = await (
      await fetch(
        "https://raw.githubusercontent.com/leejihahaha/myapi/master/myapi/project.json"
      )
    ).json();
    setProject(response);
    // console.log(response);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className={styles.container}>
        {project &&
          project.map((item, idx) => {
            return <ProjectCard project={item} key={idx} />;
          })}
      </div>
    </>
  );
}
