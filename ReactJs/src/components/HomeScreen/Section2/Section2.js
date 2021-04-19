import React, { Component } from "react";
import Classes from "../../../styles/HomeScreen/Section2/Section2.module.css";

export class Section2 extends Component {
  state = {
    leaveTop: "",
    PizzaSliceBottom: "",
  };
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = (event) => {
    let scrollTop = window.scrollY,
      leaveMax = Math.max(-50, scrollTop - 300),
      leaveTop = Math.min(100, leaveMax);

    let pizzaSliceMax = Math.max(0, scrollTop - 550),
      pizzaSlice = Math.min(100, pizzaSliceMax);

    this.setState({
      leaveTop: leaveTop,
      PizzaSliceBottom: pizzaSlice,
    });
  };

  render() {
    const { Section2, leaves, IntroBox, PizzaSlice, card } = Classes;
    const { leaveTop, PizzaSliceBottom } = this.state;
    return (
      <section className={Section2}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className={IntroBox}>
                <h1>Welcome to Our Pizzeria</h1>
                <span className="text-muted">
                  Collaboratively benchmark multifunctional methodologies
                  vis-a-vis effective imperatives. Completely morph proactive
                  bandwidth vis-a-vis highly efficient niches
                </span>
              </div>
            </div>
            <div className="col-md-12">
              <img
                src="/assets/pizza_slice.jpg"
                className={`${PizzaSlice} mobile-hidden`}
                alt="PizzaSlice"
                style={{ bottom: `${PizzaSliceBottom}px` }}
              />
            </div>
            <div className="col-md-10 offset-md-1 col-12">
              <div className={card}>
                <img
                  src="/assets/img_01.jpg"
                  alt="img_01"
                  style={{ bottom: `${PizzaSliceBottom}px` }}
                />
                Italian Flavours
              </div>
              <div className={card}>
                <img
                  src="/assets/img_02.jpg"
                  alt="img_02"
                  style={{ bottom: `${PizzaSliceBottom}px` }}
                />
                Home Delivery
              </div>
              <div className={card}>
                <img
                  src="/assets/img_03.jpg"
                  alt="img_03"
                  style={{ bottom: `${PizzaSliceBottom}px` }}
                />
                Enjoy With Your Friends
              </div>
            </div>
          </div>
        </div>
        <img
          src="/assets/layer_02.png"
          className={leaves}
          alt="Leave"
          style={{ top: `${leaveTop}px` }}
        />
      </section>
    );
  }
}

export default Section2;
