import React from "react";
import styles from "../styles/Contact.module.css";
import { RiMailSendLine } from "react-icons/ri";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Footer from "../components/Footer";

export default function Contact() {
  const email_public_key = process.env.REACT_APP_YOUR_PUBLIC_KEY;
  const email_serviceId = process.env.REACT_APP_YOUR_SERVICE_ID;
  const email_template_id = process.env.REACT_APP_YOUR_TEMPLATE_ID;
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      `${email_serviceId}`,
      `${email_template_id}`,
      form.current,
      `${email_public_key}`
    );
    e.target.reset();
  };
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
            <form
              ref={form}
              onSubmit={sendEmail}
              className={styles.contact_form}
            >
              <div className={styles.contact_form_div}>
                <label htmlFor="" className={styles.contact_form_tag}>
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  className={styles.contact_form_input}
                  required
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
                  required
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
                  required
                ></textarea>
              </div>
              <button href="#contact" className={styles.button}>
                Send Message
              </button>
            </form>
          </h3>
        </div>
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </section>
  );
}
