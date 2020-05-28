import React from "react";
import Menu from "./menu/Menu";
import Panel from "./panel/Panel";
import s from "./Display.module.css";

const Display = () => {
  return (
    <div className={s.display}>
      <Menu />
      <Panel />
    </div>
  );
};

export default Display;
