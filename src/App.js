import React from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import UpdateProfile from "./components/UpdateProfile";
import PrivateRoute from "./PrivateRoute";


function App() {
  return (
    <div>
      <BrowserRouter>
        <PrivateRoute path="/" exact component={Dashboard} />
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={Signup} />
        <PrivateRoute path="/update-profile" exact component={UpdateProfile} /> 
      </BrowserRouter>
    </div>
  );
}

export default App;
