import React from "react";
import { useSelector, useDispatch } from "react-redux";
import s from "./FinalPanel.module.css";
import { setDisabled, setBanknote, setProduct } from "../../../lib/info";

const FinalPanel = () => {
  const dispatch = useDispatch();

  const disabled = useSelector((state) => state.info.disabled);
  const selectedProduct = useSelector((state) => state.info.selectedProduct);
  const amount = useSelector((state) => state.info.amount);

  const remains = amount - selectedProduct.price;

  const findRemains = () => {
    let tenCoins = 0;
    let fiveCoins = 0;
    let twoCoins = 0;
    let oneCoins = 0;
    tenCoins = Math.floor(remains / 10);
    let debt = remains - tenCoins * 10;
    if (debt) {
      fiveCoins = Math.floor(debt / 5);
      debt = remains - (tenCoins * 10 + fiveCoins * 5);
    }
    if (debt) {
      twoCoins = Math.floor(debt / 5);
      debt = remains - (tenCoins * 10 + fiveCoins * 5 + twoCoins * 2);
    }
    if (debt) {
      oneCoins = Math.floor(debt / 5);
      debt =
        remains - (tenCoins * 10 + fiveCoins * 5 + twoCoins * 2 + oneCoins * 1);
    }

    return (
      <div>
        {!!tenCoins && <p className={s.remains}>{`10P: ${tenCoins}`}</p>}
        {!!fiveCoins && <p className={s.remains}>{`5P: ${fiveCoins}`}</p>}
        {!!twoCoins && <p className={s.remains}>{`2P: ${twoCoins}`}</p>}
        {!!oneCoins && <p className={s.remains}>{`1P: ${oneCoins}`}</p>}
      </div>
    );
  };

  const takeProduct = () => {
    dispatch(setDisabled(false));
    dispatch(setBanknote(0));
    dispatch(setProduct(false));
  };

  return (
    <div className={s.panel}>
      <div className={s.window}>{disabled ? "Спасибо за покупку" : "."}</div>
      <div className={s.extradition}>
        <div className={s.block}>{findRemains()}</div>
        <div className={s.block}>
          {disabled && (
            <div className={s.item} onClick={takeProduct}>
              <div>{selectedProduct.name}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FinalPanel;
