import React from "react";
import s from "./ItemMenu.module.css";

const ItemMenu = (props) => {
  return (
    <div
      className={s.item}
      style={{
        color: props.color && "green",
        borderColor: props.color && "green",
      }}
    >
      <div>{props.id}</div>
      <div>{props.name}</div>
      <div>{`${props.price}P`}</div>
    </div>
  );
};

export default ItemMenu;
