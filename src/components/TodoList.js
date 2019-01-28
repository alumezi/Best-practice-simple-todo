import React from "react";
import PropTypes from "prop-types";
import { Item } from "./Item";

export function TodoList(props) {
  return (
    <ul>
      {props.todos.map(item => (
        <Item
          name={item.name}
          key={item.id}
          id={item.id}
          defaultChecked={item.checked}
          handleUpdate={props.handleUpdate}
          handleRemove={props.handleRemove}
        />
      ))}
    </ul>
  );
}

export default Item;

TodoList.propTypes = {
  todos: PropTypes.array.isRequired
};
