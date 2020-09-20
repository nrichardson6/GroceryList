import React from "react";

const Item = (props) => {
  return (
    <li
      style={
        props.complete ? { ...styles.item, ...styles.complete } : styles.item
      }
      onClick={() => props.itemClick(props.id)}
    >
      {props.name}
    </li>
  );
};

const styles = {
  item: { cursor: "pointer", color: "#333" },
  complete: {
    textDecoration: "line-through",
  },
};
export default Item;