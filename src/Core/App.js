import React from "react";
import { PageNames } from '../Components/Helpers/Constants';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "../Components/Helpers/Layout";
import Home from "../Pages/Home"
import { AzureSalesAnalyst, CandC, DairyDrop, DocumentDigitization, Flux8, HoverHavoc, MarineTest, PlanetMiner, Servico, SocialSender, UniformExchange, VentureTax, Vrrrr, WebSpares } from "../Pages/Projects";

function App() {

  return (
    <Layout>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path={`/${PageNames.Flux8}`}>
            <Flux8 />
          </Route>
          <Route path={`/${PageNames.CandC}`}>
            <CandC />
          </Route>
          <Route path={`/${PageNames.PlanetMiner}`}>
            <PlanetMiner />
          </Route>
          <Route path={`/${PageNames.Vrrrr}`}>
            <Vrrrr />
          </Route>
          <Route path={`/${PageNames.HoverHavoc}`}>
            <HoverHavoc />
          </Route>
          <Route path={`/${PageNames.WebSpares}`}>
            <WebSpares />
          </Route>
          <Route path={`/${PageNames.UniformExchange}`}>
            <UniformExchange />
          </Route>
          <Route path={`/${PageNames.SocialSender}`}>
            <SocialSender />
          </Route>
          <Route path={`/${PageNames.DairyDrop}`}>
            <DairyDrop />
          </Route>
          <Route path={`/${PageNames.Servico}`}>
            <Servico />
          </Route>
          <Route path={`/${PageNames.VentureTax}`}>
            <VentureTax />
          </Route>
          <Route path={`/${PageNames.AzureSalesAnalyst}`}>
            <AzureSalesAnalyst />
          </Route>
          <Route path={`/${PageNames.DocumentDigitization}`}>
            <DocumentDigitization />
          </Route>
          <Route path={`/${PageNames.MarineTest}`}>
            <MarineTest />
          </Route>
          <Route >
            <Home />
          </Route>
        </Switch>
      </Router>
    </Layout>
  );
}

export default App;
