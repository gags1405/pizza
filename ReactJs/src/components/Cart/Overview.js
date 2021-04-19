import React, { Component } from "react";
import Classes from "../../styles/Cart/Overview.module.css";
//CONSTANTS
import { format, getCurrencySymbol } from "../../constants/constants";

class Overview extends Component {
  state = {
    placeOrder: true,
  };
  render() {
    const { Overview, ItemsList, TotalPrice, SubPrice } = Classes;

    const { data, currency, checkoutPrice, deliveryCharges } = this.props;

    return (
      <div className={Overview}>
        <h3>Summary.</h3>
        <hr />
        <div className={ItemsList}>
          <b>Items :</b>
          <div>
            {Object.values(data).map((element, index) => {
              return (
                <span key={index}>
                  <i className="fas fa-pizza-slice"></i>
                  {element.name}
                  <b>
                    {getCurrencySymbol(currency) + " " + element.checkoutPrice}
                  </b>
                  <p className="text-muted">
                    {element.size} - {element.quantity} Quantity
                  </p>
                </span>
              );
            })}
          </div>
        </div>
        <hr />
        <div className={SubPrice}>
          Sub Amount
          <b>{getCurrencySymbol(currency) + " " + checkoutPrice}</b>
        </div>
        <div className={SubPrice}>
          Delivery Charges
          <b>{getCurrencySymbol(currency) + " " + deliveryCharges()}</b>
        </div>
        <hr />
        <div className={TotalPrice}>
          Total Amount{" "}
          <b>
            {getCurrencySymbol(currency) +
              " " +
              format(parseFloat(checkoutPrice) + parseFloat(deliveryCharges()))}
          </b>
        </div>
        <hr />
      </div>
    );
  }
}

export default Overview;
