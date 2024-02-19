import styles from "../styles/Projects.module.css";
import ProjectCard from "../components/ProjectCard";
import { useQuery } from "@tanstack/react-query";
import { fetchData } from "../api";

export default function Projects() {
  const {
    isPending,
    data: project,
    error,
  } = useQuery({ queryKey: ["project"], queryFn: fetchData });

  return (
    <section className={styles.container}>
      {isPending && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <div className={styles.title_wrap}>
        <h2 className={styles.projects_title}>Projects💡</h2>
        <span className={styles.projects_subtitle}>Most recent work</span>
      </div>

      <div className={styles.content}>
        {project &&
          project.map((item, idx) => {
            return <ProjectCard project={item} key={idx} />;
          })}
      </div>
    </section>
  );
}
