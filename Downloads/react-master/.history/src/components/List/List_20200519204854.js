import React from "react";
import styles from "./List.scss";
import Hero from "../Hero/Hero";

class List extends React.Component {
  render() {
    return (
      <section className={styles.component}>
        <Hero titleText={this.props.title} />
        <div className={styles.description}>{this.props.children}</div>;
      </section>
    );
  }
}

export default List;
