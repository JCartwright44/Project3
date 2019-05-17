import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Counting from "./pages/Counting";
import Addition from "./pages/Addition";
import Subtraction from "./pages/Subtraction";
import Multiplication from "./pages/Multiplication";
import Division from "./pages/Division";
import NoMatch from "./pages/NoMatch";
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Nav from "./components/Nav";
import NavList from "./components/NavList";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <NavList />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/counting" component={Counting} />
          <Route exact path="/addition" component={Addition} />
          <Route exact path="/subtraction" component={Subtraction} />
          <Route exact path="/multiplication" component={Multiplication} />
          <Route exact path="/division" component={Division} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
