import React from 'react';
import Home from './pages/Home'
import { Switch, Route } from 'react-router-dom';
import Offers from './pages/Offers';
import Contact from './pages/Contact';
function App() {

  return (
    <div className="App">
      <Switch>
        <Route exact path="/"> <Home/> </Route>
        <Route  path="/offers"> <Offers/> </Route>
        <Route path="/contact"> <Contact/> </Route>
      </Switch>
    </div>
  );
}

export default App;
