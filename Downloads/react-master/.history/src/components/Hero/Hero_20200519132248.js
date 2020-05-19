import React from "react";
import styles from "./Hero.scss";

class Hero extends React.Component {
  render() {
    return (
      <>
        <head className={styles.component}>
          <h2 className={styles.description}>Things to do </h2>
          <image src="http://uploads.kodilla.com/bootcamp/fer/11.react/space.png" />
        </head>
      </>
    );
  }
}

export default Hero;
