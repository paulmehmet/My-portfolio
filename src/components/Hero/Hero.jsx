import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I am Mercy </h1>
        <p className={styles.description}>
        I’m a Frontend Engineer with 2 years of hands-on experience in React, Node.js, HTML, CSS, and JavaScript. 
        Feel free to connect if you’d like to learn more!
        </p>
        <a href="mailto:paullymerlceey25@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
