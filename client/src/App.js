import React from 'react';
import NavBar from "./Components/Navbar";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from "./Components/Home";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Todos from "./Components/Todo";
import Admin from "./Components/Admin";
import PrivateRoute from "./Hocs/PrivateRoute";
import PublicRoute from "./Hocs/PublicRoute";

function App() {

  return (

    <Router>
      <NavBar/>
      <Route exact path="/" component={Home}/>
      <PublicRoute path="/login" component={Login}/>
      <PublicRoute path="/register" component={Register}/>
      <PrivateRoute path="/todos" roles={["user", "admin"]} component={Todos}/>
      <PrivateRoute path="/admin" roles={["admin"]} component={Admin}/>
    </Router>
    
  );
}

export default App;
