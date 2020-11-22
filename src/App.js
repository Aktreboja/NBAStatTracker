import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css';

import Landing from "./Pages/Landing/Landing"
import Players from "./Pages/Players/Players"
import Player from "./Pages/Player/Player"
import Teams from "./Pages/Teams/Teams"
import Stats from "./Pages/Stats/Stats"


function App() {
  return (
    <Router>
<<<<<<< HEAD
        <Switch>
          <Route exact path = "/" render = {() => <Landing />} />
          <Route exact path = "/api/players" render = {() => <Players /> } />
          <Route exact path = "/api/teams"  render = {() => <Teams />}/>
          <Route exact path = "/api/stats" render = {() => <Stats />} />
          <Route path = "/api/player/" render = {() => <h1>Test Complete</h1>} />
          <Route path = "*"  render = {() => <h1>Eroror Page</h1>}/>
        </Switch>
=======
        <Route exact path = "/" render = {() => <Landing />} />
         <Route exact path = "/api/players" render = {() => <Players /> } />
         <Route exact path = "/api/teams"  render = {() => <Teams />}/>
         <Route exact path = "/api/stats" render = {() => <Stats />} />
         <Route path = "/api/players/:name" render = {()=> <Player />} />
>>>>>>> 344c4ca096ccfe543f2e57b467ec15658049005b
    </Router>

  );
}

export default App;
