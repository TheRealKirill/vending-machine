import { SET_BANKNOTE, SET_DISABLED, SET_PRODUCT } from "./";

const initialState = {
  menu: [
    {
      id: 1,
      name: "Cola",
      price: 130,
      availability: false,
    },
    {
      id: 2,
      name: "Evian",
      price: 90,
      availability: false,
    },
    {
      id: 3,
      name: "Durex",
      price: 600,
      availability: false,
    },
    {
      id: 4,
      name: "Snickers",
      price: 105,
      availability: false,
    },
    {
      id: 5,
      name: "Wagon Wheels",
      price: 165,
      availability: false,
    },
    {
      id: 6,
      name: "Snickers",
      price: 200,
      availability: false,
    },
    {
      id: 7,
      name: "Fanta",
      price: 130,
      availability: false,
    },
  ],
  disabled: false,
  selectedProduct: false,
  amount: 0,
};

const infoReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BANKNOTE: {
      const newMenu = state.menu.map((item) => ({
        ...item,
        availability: item.price <= action.amount,
      }));

      return {
        ...state,
        menu: newMenu,
        amount: action.amount,
      };
    }

    case SET_DISABLED: {
      return {
        ...state,
        disabled: action.disabled,
      };
    }

    case SET_PRODUCT: {
      const newSelectedProduct = state.menu.find(
        (item) => item.id === action.id
      );
      return {
        ...state,
        selectedProduct: { ...newSelectedProduct },
      };
    }

    default: {
      return state;
    }
  }
};

export default infoReducer;
