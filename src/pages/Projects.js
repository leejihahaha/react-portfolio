// import React, { useEffect, useState } from "react";
import styles from "../styles/Projects.module.css";
import ProjectCard from "../components/ProjectCard";
import { useQuery } from "@tanstack/react-query";
import { getData } from "../api";

export default function Projects() {
  const {
    isPending,
    data: project,
    error,
  } = useQuery({ queryKey: ["project"], queryFn: getData });

  return (
    <>
      {isPending && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <div className={styles.container}>
        {project &&
          project.map((item, idx) => {
            return <ProjectCard project={item} key={idx} />;
          })}
      </div>
    </>
  );
}
