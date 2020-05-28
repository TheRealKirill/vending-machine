import React from "react";
import BillAcceptor from "./BillAcceptor/BillAcceptor";
import SelectionPanel from "./SelectionPanel/SelectionPanel";
import FinalPanel from "./FinalPanel/FinalPanel";
import s from "./Panel.module.css";

const Panel = () => {
  return (
    <div className={s.panel}>
      <BillAcceptor />
      <SelectionPanel />
      <FinalPanel />
    </div>
  );
};

export default Panel;
