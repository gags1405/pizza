import React, { Component } from "react";
import Classes from "../../../styles/HomeScreen/Section4/Section4.module.css";

export class Section4 extends Component {
  render() {
    const { Section4, InfoDiv, FreshImage } = Classes;
    return (
      <section className={Section4}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4" style={{ padding: "0px" }}>
              <img
                src="/assets/fresh_image.jpg"
                alt="Fresh Pizza"
                className={`${FreshImage} mobile-hidden`}
              />
            </div>
            <div className="col-md-8" style={{ padding: "0px" }}>
              <div className={InfoDiv}>
                <h1>We use only fresh ingredients</h1>
                <hr />
                <p className="text-muted">
                  Collaboratively benchmark multifunctional methodologies
                  vis-a-vis effective imperatives. Completely morph proactive
                  bandwidth vis-a-vis highly efficient niches. Competently
                  empower clicks-and-mortar data via timely systems. Completely
                  unleash top-line services via emerging e-business
                </p>
                <div>
                  <img src="/assets/ingredient_01.png" alt="Ingredient 01" />
                  <img src="/assets/ingredient_02.png" alt="Ingredient 02" />
                  <img src="/assets/ingredient_03.png" alt="Ingredient 03" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Section4;
