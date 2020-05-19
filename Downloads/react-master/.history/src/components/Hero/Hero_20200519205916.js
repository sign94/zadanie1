import React from "react";
import styles from "./Hero.scss";

const Hero = (props) => {
  //const logo = "http://uploads.kodilla.com/bootcamp/fer/11.react/space.png";
  return (
    <header className={styles.component}>
      <h2 className={styles.title}>{props.titleText}</h2>
      <img
        className={styles.image}
        {props.logo}
      />
      <img />
    </header>
  );
};

export default Hero;
