import React from "react";
import { Switch, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage/LoginPage";

import UserForm from "./components/Form/UserForm";
import Dashboard from "./components/UserPage/Dashboard";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route path="/registration" component={UserForm} />
        <Route path="/user" component={Dashboard} />
      </Switch>
    </div>
  );
}

export default App;
