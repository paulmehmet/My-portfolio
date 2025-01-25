import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Frontend Developer working at a desk"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
          <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                With two years of experience, I specialize in creating dynamic and responsive web interfaces using modern frameworks like React. I strive to translate user needs into intuitive designs and functional code.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
          <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Passion for UI/UX</h3>
              <p>
                I am passionate about crafting engaging user experiences. From wireframes to polished interfaces, I focus on designing clean layouts and ensuring accessibility for all users.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
          <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Continuous Learning</h3>
              <p>
                In my two years as a developer, I’ve consistently updated my skillset with the latest tools and best practices, including modern CSS frameworks, JavaScript ES6+, and version control systems like Git.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
