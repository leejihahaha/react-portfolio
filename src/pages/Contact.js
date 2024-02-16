import React from "react";
import styles from "../styles/Contact.module.css";
import { RiMailSendLine } from "react-icons/ri";

export default function Contact() {
  return (
    <section className={styles.container}>
      <h2 className={styles.contact_title}>
        <span>
          <RiMailSendLine />
        </span>
        Contact Me
      </h2>

      <div className={styles.contact_container}>
        <div className={styles.contact_content}></div>
        <div className={styles.contact_content}>
          <h3 className={styles.title}>
            <form className={styles.contact_form}>
              <div className={styles.contact_form_div}>
                <label htmlFor="" className={styles.contact_form_tag}>
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  className={styles.contact_form_input}
                  // placeholder="insert your name"
                />
              </div>

              <div className={styles.contact_form_div}>
                <label htmlFor="" className={styles.contact_form_tag}>
                  Your Mail
                </label>
                <input
                  type="email"
                  name="email"
                  className={styles.contact_form_input}
                  // placeholder="insert your email"
                />
              </div>

              <div className={styles.contact_form_div}>
                <label htmlFor="" className={styles.contact_form_tag}>
                  Message
                </label>
                <textarea
                  name="message"
                  cols="30"
                  rows="10"
                  className={`${styles.contact_form_area} ${styles.contact_form_input}`}
                  // placeholder="Write your message"
                ></textarea>
              </div>
              <button href="#contact" className={styles.button}>
                Send Message
                {/* <span>
                  <IoIosSend />
                </span> */}
              </button>
            </form>
          </h3>
        </div>
      </div>
    </section>
  );
}
