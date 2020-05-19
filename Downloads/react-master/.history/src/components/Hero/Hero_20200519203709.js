import React from "react";
import styles from "./Hero.scss";
import space from "../assets/space.png";

class Hero extends React.Component {
  render() {
    const logo = space;
    return (
      <header className={styles.component}>
        <h2 className={styles.title}>Things to do </h2>
        <img className={styles.image} src={logo} />
        <img />
      </header>
    );
  }
}

export default Hero;
