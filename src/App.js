import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Catalog from "./components/Catalog";
import DetailCard from "./components/DetailCard";
import NotFound from "./components/NotFound";
import PhoneForm from "./components/PhoneForm";
import './assets/css/app.css'

function App() {
  return (
    <div className="app__container">
      <Switch>
        <Route path="/catalog/edit/:id" component={PhoneForm} />
        <Route path="/catalog/:id" component={DetailCard} />
        <Route path="/catalog" render={(props) => <Catalog {...props} />} />
        <Route path="/not-found" component={NotFound} />
        <Redirect from="/" exact to="/catalog" />
        <Redirect to="/not-found" />
      </Switch>
    </div>
  );
}

export default App;
