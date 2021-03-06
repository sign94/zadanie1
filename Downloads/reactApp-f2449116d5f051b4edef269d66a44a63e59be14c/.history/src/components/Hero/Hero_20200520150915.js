import React from "react";
import styles from "./Hero.scss";

const Hero = (props) => {
  //const logo = "http://uploads.kodilla.com/bootcamp/fer/11.react/space.png";
  return (
    <header className={styles.component}>
      <h2 className={styles.titleText}>{props.titleText}</h2>
      <img className={styles.image} src={props.image} />
      <img />
    </header>
  );
};

export default Hero;
