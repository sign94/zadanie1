import React from "react";
import styles from "./Hero.scss";

class Hero extends React.Component {
  render() {
    return (
      <header className={styles.component}>
        <h2 className={styles.description}>Things to do </h2>
        <image src="http://uploads.kodilla.com/bootcamp/fer/11.react/space.png" >
       
      </header>
    );
  }
}

export default Hero;
