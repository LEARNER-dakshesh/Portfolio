import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./About.module.css";

const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About ME</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/me-sitting.jpg")}
          alt="Me"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursor.png")} alt="cursor-icon" />
            <div className={styles.aboutItemText}>
              <h3>Fronted Developer</h3>
              <p>
                Frontend Developer with experience in building responsive and
                optimized sites
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/server.png")} alt="server-icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                I have experience building fast and optimized back-end systems
                and APIs
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/mobile.png")} alt="mobile-icon" />
            <div className={styles.aboutItemText}>
              <h3>Flutter Developer</h3>
              <p>I have developed Multiple cross platform Apps using Flutter</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
