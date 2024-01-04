import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hii, I'm a Dakshesh </h1>
        <p className={styles.description}>
          I'm a tech enthusiast with interest in Web and Android Technologies.
          Reach out if you'd like to learn more!
        </p>
        <a href="mailto:daksheshgupta4@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/about-img.jpg")}
        alt="Me"
        className={styles.HeroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

export default Hero;
