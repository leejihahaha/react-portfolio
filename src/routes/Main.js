import React, { useRef } from "react";
// import styles from "../styles/Home.module.css";

import Navbar from "../components/Navbar";
import About from "../components/About";
import Projects from "../components/Projects";
import Home from "../components/Home";
import Contact from "../components/Contact";

export default function Main() {
  const home = useRef(null);
  const about = useRef(null);
  const projects = useRef(null);
  const contact = useRef(null);

  return (
    <>
      <Navbar home={home} about={about} projects={projects} contact={contact} />
      <div>
        <div ref={home}>
          <Home />
        </div>
        <div ref={about}>
          <About />
        </div>
        <div ref={projects}>
          <Projects />
        </div>
        <div ref={contact}>
          <Contact />
        </div>
      </div>
    </>
  );
}
