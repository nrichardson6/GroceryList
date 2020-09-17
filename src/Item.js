import React from "react";

const Todo = (props) => {
  return (
    <li
      style={
        props.complete ? { ...styles.todo, ...styles.complete } : styles.todo
      }
      onClick={() => props.todoClick(props.id)}
    >
      {props.name}
    </li>
  );
};

const styles = {
  todo: { cursor: "pointer", color: "#333" },
  complete: {
    textDecoration: "line-through",
  },
};
export default Todo;