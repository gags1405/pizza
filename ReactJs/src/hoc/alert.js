import React, { Component } from "react";
import Classes from "../styles/Alert.module.css";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Alert extends Component {
  render() {
    const { Message, GoToCart } = Classes;
    return (
      <div
        className={`${Message}`}
        style={
          this.props.cartItems > 0 ? { bottom: `0px` } : { bottom: `-50px` }
        }
      >
        <i className="fas fa-shopping-cart Orange"></i>
        &nbsp;&nbsp;&nbsp;
        <span>
          {this.props.cartItems} {this.props.cartItems === 1 ? "Item" : "Items"}{" "}
          in Cart
        </span>
        <div className={`${GoToCart}`}>
          <Link to="/cart">Go to Cart</Link>
        </div>
      </div>
    );
  }
}
const stateToProps = (state) => {
  return {
    cartItems: state.cartItems,
  };
};
export default connect(stateToProps)(Alert);
