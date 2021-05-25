import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "../Components/Helpers/Layout";
import Home from "../Pages/Home"
import { CandC, DairyDrop, Flux8, HoverHavoc, PlanetMiner, Servico, SocialSender, UniformExchange, VentureTax, Vrrrr, WebSpares } from "../Pages/Projects";

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
          <Route path="/HoverHavoc">
            <HoverHavoc />
          </Route>
          <Route path="/WebSpares">
            <WebSpares />
          </Route>
          <Route path="/UniformExchange">
            <UniformExchange />
          </Route>
          <Route path="/SocialSender">
            <SocialSender />
          </Route>
          <Route path="/DairyDrop">
            <DairyDrop />
          </Route>
          <Route path="/Servico">
            <Servico />
          </Route>
          <Route path="/VentureTax">
            <VentureTax />
          </Route>
        </Switch>
      </Router>
    </Layout>
  );
}

export default App;
