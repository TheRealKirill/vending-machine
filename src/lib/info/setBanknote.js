import { SET_BANKNOTE } from "./";

const setBanknote = (amount) => ({
  type: SET_BANKNOTE,
  amount,
});

export default setBanknote;
