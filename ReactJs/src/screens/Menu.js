import React, { Component } from "react";
import Classes from "../styles/Menu/Menu.module.css";
//Import a component that shows the Pizzas available in our Menu
import PizzaList from "../components/Menu/PizzaList";
import { connect } from "react-redux";
import { setCurrency } from "../store/actions/actions";
import { PRODUCTS_API } from "../constants/constants";
import axios from "../hoc/axios";

export class Menu extends Component {
  state = {
    data: [],
    conversionRate: 1,
    loading: true,
  };
  componentDidMount() {
    axios.get(PRODUCTS_API).then((res) => {
      var changedData = res.data.result;
      //eslint-disable-next-line
      res.data.result.map((element, index) => {
        changedData[index] = { ...element, sizeIndex: 0 };
      });

      this.setState({
        data: changedData,
        conversionRate: res.data.conversionRate,
        loading: false,
      });
    });
  }
  render() {
    const { data, conversionRate, loading } = this.state;
    const { Menu, Active } = Classes;

    const alterSize = (Index, sizeIndex) => {
      var changedData = data;

      changedData[Index] = { ...changedData[Index], sizeIndex: sizeIndex };

      this.setState({
        data: changedData,
      });
    };
    return (
      <section className={Menu}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <h1>Our Menu</h1>
            </div>
            <div className="col-md-11 offset-md-1 text-muted">
              <br />
              Filter Price :
              <i
                className={
                  this.props.currency === "euros"
                    ? `${Active} fas fa-euro-sign`
                    : `fas fa-euro-sign`
                }
                onClick={() => {
                  this.props.SetCurrency("euros");
                }}
              ></i>
              <i
                className={
                  this.props.currency === "dollars"
                    ? `${Active} fas fa-dollar-sign`
                    : `fas fa-dollar-sign`
                }
                onClick={() => {
                  this.props.SetCurrency("dollars");
                }}
              ></i>
              <br />
              <br />
            </div>
            {loading === false ? (
              <PizzaList
                data={data}
                conversionRate={conversionRate}
                alterSize={alterSize}
              />
            ) : (
              <></>
            )}
          </div>
        </div>
      </section>
    );
  }
}

const dispatchToProps = (dispatch) => {
  return {
    SetCurrency: (currency) => {
      dispatch(setCurrency(currency));
    },
  };
};

const stateToProps = (state) => {
  return {
    currency: state.currency,
  };
};
export default connect(stateToProps, dispatchToProps)(Menu);
