import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

//Components
import { Home } from "./Components/Home";
import { Product } from "./Components/Product";
import { ProductInfo } from "./Components/ProductInfo";
import { NavBar } from "./Components/NavBar";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Product" component={Product} />
        <Route exact path="/Product/:id" component={ProductInfo} />
        <Route path="*" component={() =>{<h2>Page Not found</h2>}} />
      </Switch>
    </Router>
  );
}

export default App;
