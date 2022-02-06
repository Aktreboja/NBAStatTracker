import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './css/App.css';

import Landing from "./Pages/Landing"
import Players from "./Pages/Players"
import Player from "./Pages/Player"
import Teams from "./Pages/Teams"
import Stats from "./Pages/Stats"
// Tester

function App() {
  return (
    <Router>
        <Route exact path = "/" render = {() => <Landing />} />
         <Route exact path = "/api/players" render = {() => <Players /> } />
         <Route exact path = "/api/teams"  render = {() => <Teams />}/>
         <Route exact path = "/api/stats" render = {() => <Stats />} />
         <Route path = "/api/players/:name" render = {()=> <Player />} />
    </Router>
  );
}

export default App;
