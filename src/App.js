import React from 'react';
import Menu from './components/Menu'
import Home from './pages/Home'
import Footer from './components/Footer'
import { Switch, Route } from 'react-router-dom';
import Offers from './pages/Offers';
import Contact from './pages/Contact';
function App() {
  return (
    <div className="App">

      <Menu></Menu>
      <Switch>
        <Route exact path="/"> <Home/> </Route>
        <Route  path="/offers"> <Offers/> </Route>
        <Route path="/contact"> <Contact/> </Route>
      </Switch>
      <Footer></Footer>
    </div>
  );
}

export default App;
