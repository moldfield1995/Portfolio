import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "../Components/Helpers/Layout";
import Home from "../Pages/Home"
import { CandC, Flux8, PlanetMiner, Vrrrr, WebSpares } from "../Pages/Projects";

function App() {

  return (
    <Layout>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/Flux8">
            <Flux8 />
          </Route>
          <Route path="/CandC">
            <CandC />
          </Route>
          <Route path="/PlanetMiner">
            <PlanetMiner />
          </Route>
          <Route path="/Vrrrr">
            <Vrrrr />
          </Route>
          <Route path="/WebSpares">
            <WebSpares />
          </Route>
        </Switch>
      </Router>
    </Layout>
  );
}

export default App;
