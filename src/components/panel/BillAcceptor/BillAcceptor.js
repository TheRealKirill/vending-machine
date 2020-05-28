import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import s from "./BillAcceptor.module.css";
import { setBanknote } from "../../../lib/info";

const suitableBills = [50, 100, 200, 500, 1000];

const BillAcceptor = () => {
  const dispatch = useDispatch();

  const disabled = useSelector((state) => state.info.disabled);

  const [insBanknot, setInsBanknotes] = useState("");
  const [amount, setAmount] = useState(0);
  const [err, setErr] = useState(false);
  const [message, setMessage] = useState(false);

  useEffect(() => {
    if (!disabled) {
      setInsBanknotes("");
      setAmount(0);
      setErr(false);
      setMessage(false);
    }
  }, [disabled]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const err = !suitableBills.includes(+insBanknot);
    setErr(err);
    if (!err) {
      setAmount(amount + +insBanknot);
      dispatch(setBanknote(amount + +insBanknot));
      setMessage(insBanknot);
    }
  };

  const insertBank = (event) => {
    setInsBanknotes(event.target.value);
    if (message) {
      setMessage(false);
    }
  };

  return (
    <form className={s.panel} onSubmit={handleSubmit}>
      <div className={s.window}>
        {err
          ? "Неизвестная банкнота!"
          : message
          ? `Вставленная купюра: ${amount}`
          : "Вставьте купюру"}
      </div>
      <input
        className={s.input}
        onChange={insertBank}
        value={insBanknot}
        disabled={disabled && "disabled"}
      ></input>
      <div className={s.description}>
        Available banknotes: 50, 100, 200, 500 or 1000 R. The machine gives
        change in 1, 2, 5 and 10 R coins.
      </div>
    </form>
  );
};

export default BillAcceptor;
