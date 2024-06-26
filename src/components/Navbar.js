import React, { useState } from "react";
import styles from "../styles/Navbar.module.css";
import { FaHamburger } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

export default function Navbar({ home, projects, about, contact }) {
  const [menuClicked, setMenuClicked] = useState(false);

  const toggleMunuClick = () => {
    setMenuClicked(!menuClicked);
  };

  const scrollToSection = (elelmentRef) => {
    window.scrollTo({
      top: elelmentRef.current.offsetTop,
      behavior: "smooth",
    });
    setMenuClicked(false);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <div className={styles.title} onClick={() => scrollToSection(home)}>
          <a href="#!">JH's Portfolio</a>
        </div>
        {menuClicked ? (
          <IoClose
            size={25}
            className={styles.menuItemsBtn}
            onClick={toggleMunuClick}
          />
        ) : (
          <FaHamburger
            size={25}
            className={styles.menuItemsBtn}
            onClick={toggleMunuClick}
          />
        )}
        <ul
          className={
            menuClicked
              ? `${styles.menuItems} ${styles.menuItems__active}`
              : `${styles.menuItems}`
          }
        >
          <li>
            <a href="#home" onClick={() => scrollToSection(home)}>
              Home
            </a>
          </li>
          <li>
            <a href="#projects" onClick={() => scrollToSection(projects)}>
              Projects
            </a>
          </li>
          <li>
            <a href="#about" onClick={() => scrollToSection(about)}>
              About
            </a>
          </li>
          <li>
            <a href="#contact" onClick={() => scrollToSection(contact)}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
