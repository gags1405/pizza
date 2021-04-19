import * as actionTypes from "../actions/actions";
import { getItem, parse, format } from "../../constants/constants";

var cartItems = getItem("Cart") !== null ? parse(getItem("Cart")) : [];

const cartLength = Math.max(0, cartItems.length);

const currency = getItem("Currency") ? getItem("Currency") : "dollars";

const calculateCheckoutPrice = (data) => {
  var sum = 0;
  //eslint-disable-next-line
  data.map((ele) => {
    var price = ele.checkoutPrice;
    sum = parseFloat(sum) + parseFloat(price);
  });
  return format(sum);
};

const initialState = {
  cartItems: cartLength,
  localData: cartItems,
  currency,
  checkout: [],
  checkoutPrice: 0,
};

const reducer = (state = initialState, action) => {
  //GLOBAL TERMS
  var cartItems = getItem("Cart") !== null ? parse(getItem("Cart")) : [];
  var oldCheckout = state.checkout;
  var { id } = action;
  switch (action.type) {
    case actionTypes.SHOW_ALERT: {
      var showAlert = !state.showAlert;
      return {
        ...state,
        showAlert,
      };
    }

    case actionTypes.ADD_ITEM: {
      return {
        ...state,
        cartItems: state.cartItems + 1,
        localData: cartItems,
      };
    }
    case actionTypes.SET_CURRENCY: {
      return {
        ...state,
        currency: action.value,
      };
    }

    case actionTypes.ALTER_QUANTITY: {
      var { quantity } = action;
      var oldPizzaData = state.checkout[id];
      var oldPizzaQuantity = state.checkout[id].quantity;
      quantity = Math.max(1, oldPizzaQuantity + quantity);
      var currentPizzaData = {
        ...oldPizzaData,
        quantity,
        checkoutPrice: format(state.checkout[id].minCheckoutPrice * quantity),
      };
      oldCheckout[id] = currentPizzaData;
      var newCheckout = [...oldCheckout];

      return {
        ...state,
        checkout: newCheckout,
        localData: cartItems,
        checkoutPrice: calculateCheckoutPrice(newCheckout),
      };
    }

    case actionTypes.ADD_CHECKOUT:
      return {
        ...state,
        checkout: action.value,
        localData: cartItems,
        checkoutPrice: calculateCheckoutPrice(action.value),
      };

    case actionTypes.DELETE_PIZZA: {
      //eslint-disable-next-line

      oldCheckout[id] = null;
      //eslint-disable-next-line
      var newCheckout = oldCheckout.filter((ele) => {
        return ele !== null;
      });

      return {
        ...state,
        cartItems: cartItems.length,
        localData: cartItems,
        checkout: newCheckout,
        checkoutPrice: calculateCheckoutPrice(newCheckout),
      };
    }
    case actionTypes.DELETE_LOCALDATA: {
      return {
        ...state,
        cartItems: cartItems.length,
        localData: cartItems,
      };
    }
    default:
  }

  return state;
};

export default reducer;
