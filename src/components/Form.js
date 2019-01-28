import React from "react";
import PropTypes from "prop-types";

export const Form = props => (
  <form onSubmit={props.handleSubmit}>
    <input
      type="text"
      onChange={props.handleChange}
      value={props.currentTodo}
    />
  </form>
);

Form.propTypes = {
  currentTodo: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
};
