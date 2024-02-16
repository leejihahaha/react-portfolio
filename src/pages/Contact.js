import React from "react";
import styles from "../styles/Contact.module.css";
import { MdOutlineAttachEmail } from "react-icons/md";
import { IoIosSend } from "react-icons/io";

export default function Contact() {
  return (
    <section className={styles.container}>
      <h2 className={styles.contact_title}>Contact Me</h2>
      <span className={styles.contact_subtitle}>Most recent work</span>
      <div className={styles.contact_container}>
        <div className={styles.contact_content}>
          <h3>Talk to me</h3>
          <span>
            <MdOutlineAttachEmail />
          </span>
        </div>
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
                  placeholder="insert your name"
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
                  placeholder="insert your name"
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
                  className={styles.contact_form_input}
                  placeholder="Write your message"
                ></textarea>
              </div>
              <button href="#contact" className={styles.button}>
                Send Message
                <span>
                  <IoIosSend />
                </span>
              </button>
            </form>
          </h3>
        </div>
      </div>
    </section>
  );
}
