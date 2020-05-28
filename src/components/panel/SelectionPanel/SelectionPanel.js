import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import s from "./SelectionPanel.module.css";
import { setDisabled, setProduct } from "../../../lib/info";

const SelectionPanel = () => {
  const dispatch = useDispatch();

  const items = useSelector((state) => state.info.menu);
  const disabled = useSelector((state) => state.info.disabled);

  const [selProduct, setSelProduct] = useState("");
  const [err, setErr] = useState(false);
  const [message, setMessage] = useState(false);

  useEffect(() => {
    if (!disabled) {
      setSelProduct("");
      setErr(false);
      setMessage(false);
    }
  }, [disabled]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const err = !items.some(
      (item) => item.id === +selProduct && item.availability
    );
    setErr(err);
    if (!err) {
      dispatch(setDisabled(true));
      dispatch(setProduct(+selProduct));
    }
    setMessage(true);
  };

  const chooseProduct = (event) => {
    setSelProduct(event.target.value);
    setMessage(false);
  };

  return (
    <form className={s.panel} onSubmit={handleSubmit}>
      <div className={s.window}>
        {err
          ? "Вставьте купюру или выберете другой товар"
          : message
          ? "Успех!"
          : "."}
      </div>
      <input
        className={s.input}
        onChange={chooseProduct}
        value={selProduct}
        disabled={disabled && "disabled"}
      ></input>
    </form>
  );
};

export default SelectionPanel;
