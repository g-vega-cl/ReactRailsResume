import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../components/Home/Home";
import Project from "../components/Project/Project";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/projects/:slug" component={Project} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
