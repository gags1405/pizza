import React, { Component } from "react";
//Importing Different Sections for the Homepage
import Section1 from "../components/HomeScreen/Section1/Section1";
import Section2 from "../components/HomeScreen/Section2/Section2";
import Section4 from "../components/HomeScreen/Section4/Section4";

export class HomeScreen extends Component {
  render() {
    return (
      <section>
        <Section1 />
        <Section2 />
        <Section4 />
      </section>
    );
  }
}

export default HomeScreen;
