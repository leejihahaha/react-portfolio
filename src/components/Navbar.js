import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Navbar.module.css";

export const Navbar = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <Link to="/" className={styles.title}>
          JH's Portfolio
        </Link>
        <div className={styles.menu}>
          <ul className={styles.menuItems}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>

            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/notion">Notion</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
