export const MOBILE_NUMBER = "+91 3795373837";
export const COMPANY_NAME = "Pizzeria";
export const COMPANY_HEADLINE = "We deliver the Tastes";
export const COMPANY_EMAIL = "orders@pizzeria.com";
export const DELIVERY_CHARGES = 3;
export const MYORDERS_API = "/pizza/public/api/orders";
export const PRODUCTS_API = "/pizza/public/api/products";
export const PLACE_ORDER_API = "/pizza/public/api/checkout";

export const setItem = (id, value) => {
  localStorage.setItem(id, value);
};
export const getItem = (value) => {
  return localStorage.getItem(value);
};

export const parse = (value) => {
  return JSON.parse(value);
};
export const stringify = (value) => {
  return JSON.stringify(value);
};

export const format = (num) => num.toFixed(2);

export const getCurrencySymbol = (currency) => {
  if (currency === "dollars") {
    return "$";
  } else if (currency === "euros") {
    return "€";
  } else {
    return "$";
  }
};
