import React from "react";
import HomeScreen from "./screens/HomeScreen";
import Menu from "./screens/Menu";
import Cart from "./screens/Cart";
import { BrowserRouter } from "react-router-dom";
import { Route, Switch } from "react-router";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Alert from "./hoc/alert";
import MyOrders from "./screens/MyOrders";

function App() {
  return (
    <BrowserRouter>
      <section style={{ position: "relative" }}>
        <Header />
        <Route path="/" exact component={HomeScreen} />
        <Route path="/menu" component={Menu} />
        <Route path="/myOrders" component={MyOrders} />
        <Switch>
          <Route path="/checkout">
            <Cart />
            <Footer />
          </Route>
          <Route path="/cart">
            <Cart />
            <Footer />
          </Route>
          <Route path="*">
            <Footer />
            <Alert />
          </Route>
        </Switch>
      </section>
    </BrowserRouter>
  );
}

export default App;
