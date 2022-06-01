import React from "react";
import { Route, Switch } from "react-router-dom";
import PublicRoute from "./components/createroute/PublicRoute";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import NotFound from "./components/pages/NotFound";
import Project from "./components/pages/Project";
import SignUp from "./components/pages/SignUp";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <>
      <AuthProvider>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/project" component={Project} />
          <PublicRoute exact path="/login" component={Login} />
          <PublicRoute exact path="/signup" component={SignUp} />
          <PublicRoute exact component={NotFound} />
        </Switch>
      </AuthProvider>
    </>
  );
}

export default App;
