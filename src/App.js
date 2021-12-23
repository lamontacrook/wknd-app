import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import { Theme } from "./theme";
import Adventures from "./screens/Adventures";
import AdventureDetail from "./screens/AdventureDetail";
import Index from "./screens/Index";
import Magazine from "./screens/Magazine";
import MagazineDetail from "./screens/MagazineDetail";
import Settings from "./screens/Settings";
import TabBar from "./components/TabBar";
import { contentPath } from "./utils";

import './App.css';

export default function App() {

  return (
    <div id="app-container" style={styles.container}>
      <HashRouter>
        <Switch>
          <Route exact path="/adventures">
            <Adventures />
          </Route>
          <Route path="/detail">
            <AdventureDetail />
          </Route>
          <Route path="/magazine">
            <Magazine />
          </Route>
          <Route path={`${contentPath}/magazine/:id`}>
            <MagazineDetail />
          </Route>
          <Route path="/settings">
            <Settings />
          </Route>
          <Route path="/">
            <Index />
          </Route>
        </Switch>
        <TabBar />
      </HashRouter>
    </div>
  );
}

const styles = {
  container: {
    position: "relative",
    backgroundColor: Theme.colors.background,
    paddingTop: "10px",
    color: Theme.colors.text,
  },
}