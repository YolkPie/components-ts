import React from "react";
import PropTypes from "prop-types";
import "./index.css";

const Template = ({ text }) => {
  return <div className="template">{text}</div>;
};

Template.defaultProps = {};

Template.propTypes = {
  text: PropTypes.string
};

export default Template;
