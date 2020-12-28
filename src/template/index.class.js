import React from "react";
import PropTypes from "prop-types";
import "./index.css";

export default class Template extends React.Component {
  constructor(props) {
    super(props);
  }

  static defaultProps = {};

  static propTypes = {
    text: PropTypes.string
  };

  componentWillMount() {
    console.log("mount");
  }

  componentDidMount() {
    console.log("update");
  }

  componentWillUpdate() {
    console.log("update");
  }

  componentWillUnmount() {
    console.log("unmount");
  }

  render() {
    const { text } = this.props;
    return <div className="count-down">{text}</div>;
  }
}
