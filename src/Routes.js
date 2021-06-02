import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import HomePage from "./pages/HomePage";
import QuestionsPage from "./pages/QuestionsPage";
import ReportPage from "./pages/ReportPage";

const Routes = () => {
  
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path = {"/"}>
          <HomePage />
        </Route>
        <Route exact path = {"/questions"}>
          <QuestionsPage />
        </Route>
        <Route exact path = {"/report"}>
          <ReportPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );

};

export default Routes;
