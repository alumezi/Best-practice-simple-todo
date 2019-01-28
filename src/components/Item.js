import React from "react";
import PropTypes from "prop-types";
import { partial } from "../lib/utils";

export function Item(props) {
  const handleUpdate = partial(props.handleUpdate, props.id);
  const handleRemove = partial(props.handleRemove, props.id);
  return (
    <li>
      <button onClick={handleRemove}>X</button>
      <input
        type="checkbox"
        defaultChecked={props.defaultChecked}
        onChange={handleUpdate}
      />
      {props.name}
    </li>
  );
}

export default Item;

Item.propTypes = {
  defaultChecked: PropTypes.bool,
  name: PropTypes.string
};
