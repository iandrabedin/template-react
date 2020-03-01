import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import { Homepage } from "./pages";

const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Homepage}></Route>
        <Route exact path="/homepage" component={Homepage}></Route>
      </Switch>
    </Router>
  );
}

export default App;
