import React from "react";
import { useSelector } from "react-redux";
import ItemMenu from "./ItemMenu/ItemMenu";
import s from "./Menu.module.css";

const Menu = () => {
  const items = useSelector((state) => state.info.menu);

  const products = () => {
    return items.map((item) => (
      <ItemMenu
        key={item.id}
        id={item.id}
        name={item.name}
        price={item.price}
        color={item.availability}
      />
    ));
  };
  return <div className={s.menu}>{products()}</div>;
};

export default Menu;
