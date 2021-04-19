import React, { Component } from "react";
import { connect } from "react-redux";
import Classes from "../styles/Cart/Cart.module.css";
//Import Items to be shown on the left side of Checkout page.
import ItemsList from "../components/Cart/ItemsList";
//Import Order Summary to be shown on the right side of Checkout page.
import Overview from "../components/Cart/Overview";
//Import Redux Actions
import * as actionTypes from "../store/actions/actions";
import axios from "../hoc/axios";
import {
  PLACE_ORDER_API,
  PRODUCTS_API,
  DELIVERY_CHARGES,
  format,
} from "../constants/constants"; //Constants are used for the terms need to be used several times in our code

export class Cart extends Component {
  state = {
    data: [],
    conversionRate: 1,
    email: "",
    name: "",
    mobile: "",
    address: "",
    pincode: "",
    loading: false,
    orderMessage: "Placing Order",
  };

  componentDidMount = () => {
    this.setState({ loading: false });
    axios.get(PRODUCTS_API).then((res) => {
      const { result, conversionRate } = res.data;
      this.setState({
        data: result,
        conversionRate: conversionRate,
        loading: false,
      });
      const { localData, AddCheckout, currency } = this.props;
      const getConversionRate = () => {
        return currency === "euros" ? conversionRate : 1;
      };

      var checkout = [];
      var data = result;
      //eslint-disable-next-line
      data.map((ele) => {
        //eslint-disable-next-line
        localData.map((Element) => {
          //eslint-disable-next-line
          if (ele.id === Element.id) {
            //eslint-disable-next-line
            var price;
            //eslint-disable-next-line
            ele.sizes.map((sizes) => {
              if (sizes.size === Element.size) {
                price = format(sizes.price * getConversionRate());
              }
            });

            checkout = [
              ...checkout,
              {
                ...ele,
                quantity: Element.quantity,
                size: Element.size,
                minCheckoutPrice: price,
                checkoutPrice: format(price * Element.quantity),
              },
            ];
            AddCheckout(checkout);
          }
        });
      });
    });
  };

  getValue = (event) => {
    return event.target.value;
  };
  changeEmail = (event) => {
    this.setState({ email: this.getValue(event) });
  };
  changeMobile = (event) => {
    this.setState({ mobile: this.getValue(event) });
  };
  changeName = (event) => {
    this.setState({ name: this.getValue(event) });
  };
  changeAddress = (event) => {
    this.setState({ address: this.getValue(event) });
  };
  changePincode = (event) => {
    this.setState({ pincode: this.getValue(event) });
  };

  render() {
    const { conversionRate } = this.state;
    const {
      email,
      name,
      mobile,
      address,
      pincode,
      loading,
      orderMessage,
    } = this.state;

    const { Cart } = Classes;

    const {
      cartLength,
      AlterQuantity,
      checkoutPrice,
      checkout,
      currency,
      DeletePizza,
      localData,
    } = this.props;
    const getConversionRate = () => {
      return currency === "euros" ? conversionRate : 1;
    };
    const deliveryCharges = () => {
      return format(DELIVERY_CHARGES * getConversionRate());
    };
    const placeOrder = () => {
      this.setState({ loading: true });
      localStorage.setItem("mobile", mobile);
      var order = [];
      //eslint-disable-next-line
      localData.map((element, index) => {
        order = [
          ...order,
          { ...element, price: checkout[index].checkoutPrice },
        ];
      });

      const data = {
        name: name,
        email: email,
        mobile: mobile,
        address: `${address} ${pincode}`,
        order: order,
        currency: currency,
        totalPrice: format(
          parseFloat(checkoutPrice) + parseFloat(deliveryCharges())
        ).toString(),
        deliveryCharge: deliveryCharges().toString(),
      };

      axios
        .post(PLACE_ORDER_API, data)
        .then((response) => {
          this.props.DeleteLocalData();
          this.setState({
            orderMessage: "done",
          });
          setTimeout(() => {
            window.location.href = "/myOrders";
          }, 3000);
        })
        .catch(() => {
          this.setState({
            orderMessage: "Unable to Place Order - Try Again Later",
          });
          // setTimeout(() => {
          //   window.location.href = "/myOrders";
          // }, 3000);
        });
    };

    return (
      <section className={Cart}>
        {loading ? (
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12 text-center text-muted">
                <img
                  src="/assets/pizza_slice.jpg"
                  width="200px"
                  alt="Pizza slice"
                />
                <br />
                <br />
                {orderMessage === "done" ? (
                  <div style={{ color: "green" }}>
                    <i className="fas fa-check-circle"></i> &nbsp;&nbsp;Order
                    Successfully Placed. <br />
                    <span style={{ fontSize: "10px" }}>Redirecting...</span>
                  </div>
                ) : (
                  <>{orderMessage}</>
                )}
                <br />
                <br />
              </div>
            </div>
          </div>
        ) : (
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12 text-center">
                <img
                  src="/assets/pizza_slice.jpg"
                  width="100px"
                  alt="Pizza slice"
                />
                <br />
                <br />

                <h3>You have {cartLength} Pizzas in Cart</h3>
              </div>
              {cartLength !== 0 ? (
                <>
                  <div className="col-md-6">
                    <ItemsList
                      data={checkout}
                      alterQuantity={AlterQuantity}
                      deletePizza={DeletePizza}
                      changeAddress={this.changeAddress}
                      changeEmail={this.changeEmail}
                      changeMobile={this.changeMobile}
                      changeName={this.changeName}
                      changePincode={this.changePincode}
                      placeOrder={placeOrder}
                    />
                  </div>
                  <div className="col-md-5 offset-md-1">
                    <Overview
                      data={checkout}
                      conversionRate={getConversionRate()}
                      checkoutPrice={checkoutPrice}
                      deliveryCharges={deliveryCharges}
                      currency={currency}
                    />
                  </div>
                </>
              ) : null}
            </div>
          </div>
        )}
      </section>
    );
  }
}

const dispatchToProps = (dispatch) => {
  return {
    AlterQuantity: (quantity, id) => {
      dispatch(actionTypes.alterQuantity(quantity, id));
    },
    AddCheckout: (value) => {
      dispatch(actionTypes.addCheckout(value));
    },
    DeletePizza: (id, elementId) => {
      dispatch(actionTypes.deletePizza(id, elementId));
    },
    DeleteLocalData: () => {
      dispatch(actionTypes.DeleteLocalData());
    },
  };
};

const stateToProps = (state) => {
  const { cartItems, localData, checkout, currency, checkoutPrice } = state;
  return {
    cartLength: cartItems,
    localData,
    checkout,
    currency,
    checkoutPrice,
  };
};

export default connect(stateToProps, dispatchToProps)(Cart);
