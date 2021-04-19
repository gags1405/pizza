import { setItem, getItem, parse, stringify } from "../../constants/constants";
export const SHOW_ALERT = "SHOW_ALERT";
export const ADD_ITEM = "ADD_ITEM";
export const SET_CURRENCY = "SET_CURRENCY";
export const ALTER_QUANTITY = "ALTER_QUANTITY";
export const ADD_CHECKOUT = "ADD_CHECKOUT";
export const DELETE_PIZZA = "DELETE_PIZZA";
export const DELETE_LOCALDATA = "DELETE_LOCALDATA";

export const storeItem = (id, size) => {
  return function (dispatch) {
    var cartArray = [];
    if (!getItem("Cart")) {
      setItem("Cart", stringify(cartArray));
    }
    cartArray = parse(getItem("Cart"));
    var updatedCart = [...cartArray, { id: id, size: size, quantity: 1 }];
    setItem("Cart", stringify(updatedCart));
    dispatch({ type: ADD_ITEM });
  };
};

export const setCurrency = (Currency) => {
  return function (dispatch) {
    setItem("Currency", Currency);
    dispatch({ type: SET_CURRENCY, value: Currency });
  };
};

export const alterQuantity = (quantity, id) => {
  var cartArray = parse(getItem("Cart"));
  cartArray[id] = {
    ...cartArray[id],
    quantity: Math.max(1, cartArray[id].quantity + quantity),
  };

  var updatedCart = [...cartArray];
  setItem("Cart", stringify(updatedCart));
  return function (dispatch) {
    dispatch({ type: ALTER_QUANTITY, quantity, id });
  };
};

export const addCheckout = (value) => {
  return function (dispatch) {
    dispatch({ type: ADD_CHECKOUT, value });
  };
};

export const deletePizza = (id, ElementId) => {
  var cartArray = parse(getItem("Cart"));
  cartArray[id] = null;
  var updatedCart = cartArray.filter((ele) => {
    return ele !== null;
  });
  setItem("Cart", stringify(updatedCart));
  //eslint-disable-next-line
  for (Element of Object.entries(localStorage)) {
    if (parseInt(Element[1]) === ElementId) {
      localStorage.removeItem(Element[0]);
      break;
    }
  }
  return function (dispatch) {
    dispatch({ type: DELETE_PIZZA, id });
  };
};

export const DeleteLocalData = (dispatch) => {
  localStorage.removeItem("Cart");
  return function (dispatch) {
    dispatch({ type: DELETE_LOCALDATA });
  };
};
