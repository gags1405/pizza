import React, { Component } from "react";
import Classes from "../../../styles/HomeScreen/Section1/Section1.module.css";
import { Link } from "react-router-dom";
export class Section1 extends Component {
  render() {
    const {
      Section1,
      Layer_1,
      Layer_2,
      bottomDeco,
      tomatoes,
      leaves,
    } = Classes;
    return (
      <section className={Section1}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <img
                src="/assets/layer_03.png"
                className={leaves}
                alt="Leave 2"
                style={{ left: "10%", top: `30%`, maxWidth: "30px" }}
              />
              <center>
                <img
                  src="/assets/layer_1.png"
                  alt="Layer_1"
                  className={Layer_1}
                />
                <img
                  src="/assets/layer_02.png"
                  className={leaves}
                  alt="Leave 2"
                  style={{ right: "5%", top: `70%` }}
                />
              </center>
            </div>
            <div className="col-md-12 text-center">
              <Link to="/menu">
                <button>See Pizzas</button>
              </Link>
            </div>
            <div className="col-md-12 text-center">
              <img
                src="/assets/layer_2.png"
                alt="Layer_2"
                className={Layer_2}
              />
            </div>
          </div>
        </div>
        <img src="/assets/tomatoes.png" className={tomatoes} alt="Tomatoes" />
        <img
          src="/assets/bottom_deco.png"
          className={bottomDeco}
          alt="Bottom Deco"
        />
      </section>
    );
  }
}

export default Section1;
