import React, { Component } from "react";
import Classes from "../styles/Footer.module.css";
import * as Constants from "../constants/constants";

export class Footer extends Component {
  render() {
    const { Footer, bottomDeco, ContentDiv } = Classes;
    return (
      <footer className={Footer}>
        <img
          src="/assets/bottom_deco.png"
          className={bottomDeco}
          alt="Bottom Deco"
        />
        <div className={`container-fluid ${ContentDiv}`}>
          <div className="row">
            <div className="col-md-4">
              <h4>
                {Constants.COMPANY_NAME},
                <br />
                Sec.7 110074,
                <br />
                New Delhi -India
              </h4>
            </div>
            <div className="col-md-4 Orange">
              <h4>
                {Constants.MOBILE_NUMBER}
                <br />
                {Constants.COMPANY_EMAIL}
              </h4>
            </div>
            <div className="col-md-4 text-center">
              <i className="fab fa-facebook-f fa-2x" />
              <i className="fab fa-twitter fa-2x" />
              <i className="fab fa-linkedin fa-2x" />
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
