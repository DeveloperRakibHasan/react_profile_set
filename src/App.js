import React from "react";
import { Switch } from "react-router-dom";
import PrivetRoute from "./components/createroute/PrivetRoute";
import PublicRoute from "./components/createroute/PublicRoute";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import NotFound from "./components/pages/NotFound";
import Profile from "./components/pages/Profile";
import Project from "./components/pages/Project";
import SignUp from "./components/pages/SignUp";
import Users from "./components/pages/Users";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <>
      <AuthProvider>
        <Navbar />
        <Switch>
          <PrivetRoute exact path="/" component={Home} />
          <PrivetRoute exact path="/profile" component={Profile} />
          <PrivetRoute exact path="/project" component={Project} />
          <PrivetRoute exact path="/user" component={Users} />
          <PublicRoute exact path="/login" component={Login} />
          <PublicRoute exact path="/signup" component={SignUp} />
          <PublicRoute exact component={NotFound} />
        </Switch>
      </AuthProvider>
    </>
  );
}

export default App;
