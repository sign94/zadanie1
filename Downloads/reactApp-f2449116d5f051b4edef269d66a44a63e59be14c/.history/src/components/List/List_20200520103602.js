import React from "react";
import styles from "./List.scss";
import Hero from "../Hero/Hero";
import PropTypes from "prop-types";
import Column from "../Column/Column";
import { settings } from "../../data/dataStore";

class List extends React.Component {
  state = {
    columns: this.props.columns || [],
  };
  static propTypes = {
    description: PropTypes.node,
    columns: PropTypes.array,
  };
  static defaultProps = {
    children: <p>I can do all the things!!!</p>,
  };
  render() {
    return (
      <section className={styles.component}>
        <Hero titleText={this.props.title} logo={this.props.image} />
        <div className={styles.description}>{this.props.children}</div>;
        <div className={styles.columns}>
          {this.state.columns.map(({ key, ...columnProps }) => (
            <Column key={key} {...columnProps} />
          ))}
        </div>
      </section>
    );
  }
}

export default List;
