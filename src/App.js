import './App.css'
import logo from "./logo.svg";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./Pages/Homepage";
import Title from "./Pages/Title";
import Menu from "./Pages/Menu";
import Page1 from "./Pages/Page1";
import Page2 from "./Pages/Page2";

function App() {
  return (
    <div className="App">
      <Title />
      <Router>
        <Menu />
        <Switch>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/Name-to-Flag-game" element={<Page1 game="Name-to-Flag-game" />} />
          <Route exact path="/Flag-to-Name-game" element={<Page1 game="Flag-to-Name-game" />} />
          <Route exact path="/Flag-to-Name-game/game" element={<Page2 game="Flag-to-Name-game" />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
