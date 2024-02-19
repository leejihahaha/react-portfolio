//레이아웃
import React, { useRef } from "react";
import Navbar from "../components/Navbar";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Home from "../pages/Home";
import Contact from "../pages/Contact";

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
