import React from "react";
import { motion } from "framer-motion";
import styles from "../styles/Home.module.css";

export default function Scroll() {
  return (
    <motion.div
      initial={{ translateY: 0 }}
      animate={{ translateY: 40 }}
      transition={{ repeat: Infinity, duration: 1 }}
      className={styles.home_scrollmouse}
    >
      <svg
        viewBox="0 -0.5 17 17"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        className="si-glyph si-glyph-two-arrow-down"
        fill="#000000"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <title>1117</title> <defs> </defs>
          <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g transform="translate(3.000000, 0.000000)" fill="#000000">
              <path
                d="M5.002,11.854 L0.008,8.109 L0.008,12.049 L5.002,15.992 L9.967,11.95 L9.967,8.032 L9.955,8.021 L5.002,11.854 Z"
                className="si-glyph-fill"
              ></path>
              <path
                d="M5.002,4.07 L0.008,0.119 L0.008,4.058 L5.002,8.023 L9.967,3.959 L9.967,0.041 L9.955,0.031 L5.002,4.07 Z"
                className="si-glyph-fill"
              ></path>
            </g>
          </g>
        </g>
      </svg>
    </motion.div>
  );
}
