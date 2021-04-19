import React, { Component } from "react";
import Classes from "../../styles/MyOrders/OrdersList.module.css";
import { getCurrencySymbol } from "../../constants/constants";

export class OrdersList extends Component {
  render() {
    const { data } = this.props;
    const {
      OrdersList,
      OrderID,
      OrderDate,
      Products,
      Image,
      Name,
      Size,
      Quantity,
      Price,
      TotalPrice,
      ElementClass,
    } = Classes;
    return (
      <>
        {Object.values(data).map((Element) => {
          return (
            <div className="col-md-12" key={Element.order_id}>
              <div className={OrdersList}>
                <div className={OrderID}>Order ID : {Element.order_id}</div>
                <div className={OrderDate}>Date : {Element.order_at}</div>
                <div className={Products}>
                  {Object.values(Element.products).map((ele, index) => {
                    return (
                      <div key={index} className={ElementClass}>
                        <div className={Image}>
                          <img
                            src={ele.image}
                            alt={ele.product_name}
                            width="100"
                          />
                        </div>
                        <div className={Name}>{ele.product_name}</div>
                        <div className={Size}>Size : {ele.ordered_size}</div>
                        <div className={Quantity}>Qty : {ele.quantity}</div>
                        <div className={Price}>
                          <b>
                            {getCurrencySymbol(Element.currency)}
                            &nbsp;
                            {ele.product_order_price}
                          </b>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className={TotalPrice}>
                  <span
                    style={{
                      fontSize: "15px",
                      fontWeight: "100",
                      marginTop: "-10px",
                    }}
                  >
                    {getCurrencySymbol(Element.currency)}
                    {Element.deliveryCharge} Delivery Charges
                  </span>
                  <br />
                  Total : &nbsp;
                  {getCurrencySymbol(Element.currency)}
                  &nbsp; {Element.totalPrice}
                </div>
              </div>
              <br />
              <hr style={{ marginTop: "3rem" }} />
            </div>
          );
        })}
      </>
    );
  }
}

export default OrdersList;
