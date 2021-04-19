import React, { Component } from "react";
import Classes from "../../styles/Cart/Checkout.module.css";
//LIBRARY FOR form Validations
import ReactFormInputValidation from "react-form-input-validation";

export class Checkout extends Component {
  //
  constructor(props) {
    super(props);
    this.state = {
      fields: {
        name: "",
        email: "",
        mobile: "",
        address: "",
        pincode: "",
      },
      errors: {},
    };
  }

  //
  render() {
    this.form = new ReactFormInputValidation(this);
    this.form.useRules({
      name: "required",
      email: "required|email",
      mobile: "required|numeric",
      address: "required",
      pincode: "required",
    });
    this.form.onformsubmit = (fields) => {
      placeOrder();
    };
    var {
      changePincode,
      changeName,
      changeMobile,
      changeEmail,
      changeAddress,
      placeOrder,
    } = this.props;
    //...............
    const { InputDialog, Modal, Button, Error, ErrorMessage } = Classes;
    //...............
    return (
      <div className={`container-fluid ${Modal}`}>
        <div className="row">
          <div className="col-md-12">
            <div className={InputDialog}>
              <form onSubmit={this.form.handleSubmit}>
                Email Address : *
                <input
                  type="text"
                  name="email"
                  placeholder="Enter your Email"
                  value={this.state.fields.email}
                  className={this.state.errors.email ? Error : null}
                  onChange={(event) => {
                    this.form.handleChangeEvent(event);
                    changeEmail(event);
                  }}
                />
                <span className={ErrorMessage}>
                  {this.state.errors.email ? this.state.errors.email : ""}
                </span>
                Name : *
                <input
                  type="text"
                  value={this.state.fields.name}
                  name="name"
                  placeholder="Enter your Name"
                  className={this.state.errors.name ? Error : null}
                  onChange={(event) => {
                    this.form.handleChangeEvent(event);
                    changeName(event);
                  }}
                />
                <span className={ErrorMessage}>
                  {this.state.errors.name ? this.state.errors.name : ""}
                </span>
                Mobile Number : *
                <input
                  type="Number"
                  value={this.state.fields.mobile}
                  name="mobile"
                  placeholder="Enter your Mobile"
                  className={this.state.errors.mobile ? Error : null}
                  onChange={(event) => {
                    this.form.handleChangeEvent(event);
                    changeMobile(event);
                  }}
                />
                <span className={ErrorMessage}>
                  {this.state.errors.mobile ? this.state.errors.mobile : ""}
                </span>
                Address : *
                <input
                  type="Address"
                  placeholder="Enter Your Address"
                  value={this.state.fields.address}
                  className={this.state.errors.address ? Error : null}
                  name="address"
                  onChange={(event) => {
                    this.form.handleChangeEvent(event);
                    changeAddress(event);
                  }}
                />
                <span className={ErrorMessage}>
                  {this.state.errors.address ? this.state.errors.address : ""}
                </span>
                PinCode : *
                <input
                  type="Address"
                  placeholder="Enter your Pincode"
                  value={this.state.fields.pincode}
                  className={this.state.errors.pincode ? Error : null}
                  name="pincode"
                  onChange={(event) => {
                    this.form.handleChangeEvent(event);
                    changePincode(event);
                  }}
                />
                <span className={ErrorMessage}>
                  {this.state.errors.pincode ? this.state.errors.pincode : ""}
                </span>
                <button type="submit" className={Button}>
                  Place Order
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Checkout;

// onClick={() => {
//   placeOrder();
// }}
