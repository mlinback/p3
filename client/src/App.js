import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Ingredients from "./pages/Ingredients";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Ingredients} />
          <Route exact path="/ingredients" component={Ingredients} />
          <Route exact path="/ingredients/:id" component={Detail} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
