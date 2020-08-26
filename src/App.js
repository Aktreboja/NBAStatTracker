import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';

import Landing from "./Pages/Landing/Landing"
import Players from "./Pages/Players/Players"
import Teams from "./Pages/Teams/Teams"
import Stats from "./Pages/Stats/Stats"

import Navbar from "./Components/Navbar/Navbar"

function App() {
  return (
    <Router>
        <Route exact path = "/" render = {() => <Landing />} />
         <Route exact path = "/api/players" render = {() => <Players /> } />
         <Route exact path = "/api/teams"  render = {() => <Teams />}/>
         <Route exact path = "/api/stats" render = {() => <Stats />} />
    </Router>

  );
}

export default App;
