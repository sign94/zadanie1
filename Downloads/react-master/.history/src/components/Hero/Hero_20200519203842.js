import React from "react";
import styles from "./Hero.scss";
import space from "../assets/space";

class Hero extends React.Component {
  render() {
    const logo = "http://uploads.kodilla.com/bootcamp/fer/11.react/space.png";
    return (
      <header className={styles.component}>
        <h2 className={styles.title}>Things to do </h2>
        <img
          className={styles.image}
          src="http://uploads.kodilla.com/bootcamp/fer/11.react/space.png"
        />
        <img />
      </header>
    );
  }
}

export default Hero;
