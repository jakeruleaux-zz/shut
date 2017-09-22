import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./Header";
import Shut from "./Shut";
import Instructions from "./Instructions";

function App() {
  return (
    <div>
        <Header/>
        <Switch>
          <Route exact path="/" component={Shut} />
          <Route path="/instructions" component={Instructions} />
        </Switch>
    </div>
  );
}

export default App;
