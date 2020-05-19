import React from "react";
import styles from "./Hero.scss";

class Hero extends React.Component {
  render() {
    const logo = "http://uploads.kodilla.com/bootcamp/fer/11.react/space.png";
    return (
      <header className={styles.component}>
        <h2 className={styles.description}>Things to do </h2>
        <img className={styles.@media} src={logo} />
        <img />
      </header>
    );
  }
}

export default Hero;
