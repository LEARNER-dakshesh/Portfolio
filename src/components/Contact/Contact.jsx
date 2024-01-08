import React from "react";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/email.png")} alt="Email Icon" />
          <a href="mailto:daksheshgupta4@gmail.com">daksheshgupta4@gmail.com</a>
        </li>

        <li className={styles.link}>
          <img src={getImageUrl("contact/linkedin.png")} alt="LinkedIn" />
          <a href="https://www.linkedin.com/in/daksheshgupta/">
            linkedin.com/daksheshgupta
          </a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/github.png")} alt="Github Icon" />
          <a href="https://github.com/LEARNER-dakshesh">
            https://github.com/LEARNER-dakshesh
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Contact;
