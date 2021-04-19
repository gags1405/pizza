import React, { Component } from "react";
import Classes from "../styles/MyOrders/MyOrders.module.css";
import axios from "../hoc/axios";
import { MYORDERS_API } from "../constants/constants";
//Import a component that shows the list of Orders
import OrdersList from "../components/MyOrders/OrdersList";

export class MyOrders extends Component {
  //
  state = {
    data: [],
    loader: true,
  };

  componentDidMount() {
    axios
      .post(MYORDERS_API, { mobile: localStorage.getItem("mobile") })
      .then((Response) => {
        this.setState({ data: Response.data.result, loader: false });
      })
      .catch((error) => {
        this.setState({ data: [], loader: false });
      });
  }

  render() {
    //

    const { MyOrders } = Classes;
    const { data, loader } = this.state;
    return (
      <section className={MyOrders}>
        <div className="container-fluid">
          <div className="row">
            {data.length === 0 && !loader ? (
              <div className="col-md-12">
                <h3>You don't have any Orders</h3>
              </div>
            ) : (
              <>
                <div className="col-md-12">
                  <h3>My Orders</h3>
                </div>
                <OrdersList data={data} />
              </>
            )}
          </div>
        </div>
      </section>
    );
  }
}

export default MyOrders;
