import PropTypes from "prop-types";
import Column from "../Column/Column";

class List extends React.Component {
  static propTypes = {
    title: PropTypes.node,
    children: PropTypes.node,
  };
  static defaultProps = {
    children: <p>I can do all the things!!!</p>,
  };
  render() {
    return (
      <section className={styles.component}>
        <Hero titleText={this.props.title} logo={this.props.img} />
        <div className={styles.description}>{this.props.children}</div>;
        <div className={styles.columns}>
          <Column name="jedzenie" />
          <Column name="chemia" />
          <Column name="picie" />
        </div>
      </section>
    );
  }
}

export default List;
