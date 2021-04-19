import React, { Component } from "react";
import Classes from "../../styles/Cart/ItemsList.module.css";
import { Route } from "react-router";
//ITEM COMPONENT
import ItemsList1 from "./ItemsList1";
import Checkout from "./Checkout";
import { Link } from "react-router-dom";

export class ItemsList extends Component {
  render() {
    var {
      data,
      alterQuantity,
      alterSize,
      deletePizza,
      changePincode,
      changeName,
      changeMobile,
      changeEmail,
      changeAddress,
      placeOrder,
    } = this.props;
    const { ItemsList, Button } = Classes;
    return (
      <>
        <div className={ItemsList}>
          <Route path="/cart">
            <h3>Cart.</h3>
            <hr />
            <ItemsList1
              data={data}
              alterQuantity={alterQuantity}
              alterSize={alterSize}
              deletePizza={deletePizza}
            />

            <Link
              to="/checkout"
              className={Button}
              onClick={() => {
                this.setState({ placeOrder: true });
              }}
            >
              Proceed to Checkout
            </Link>
          </Route>
          <Route path="/checkout">
            <h3>Enter Your Details.</h3>
            <hr />
            <Checkout
              changeAddress={changeAddress}
              changeEmail={changeEmail}
              changeMobile={changeMobile}
              changeName={changeName}
              changePincode={changePincode}
              placeOrder={placeOrder}
            />
          </Route>
        </div>
      </>
    );
  }
}

export default ItemsList;
