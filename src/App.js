import React from 'react';
import Home from './pages/Home'
import { Switch, Route } from 'react-router-dom';
import Offers from './pages/Offers';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import Adress from './pages/Adress';
import Adresatka from "./pages/Products/Adresatka";
import PortfelDetail from "./pages/Products/PortfelDetail";
import TorebkaDetail from "./pages/Products/TorebkaDetail";
import Zestaw from "./pages/Products/Zestaw";
import SmyczDetail from "./pages/Products/SmyczDetail";
import PsiaObrozaDetail from "./pages/Products/PsiaObrozaDetail";
function App() {

  return (
    <div className="App">
      <Switch>
        <Route exact path="/"> <Home/> </Route>
        <Route path="/offers"> <Offers/> </Route>
        <Route path="/contact"> <Contact/> </Route>
        <Route path="/cart"> <Cart/> </Route>
        <Route path="/adress"> <Adress/> </Route>
        <Route path="/Obroze/:productName"> <PsiaObrozaDetail/> </Route>
        <Route path="/Adresatki/:productName"> <Adresatka/> </Route>
        <Route path="/Zestawy/:productName"> <Zestaw/> </Route>
        <Route path="/Torebki/:productName"> <TorebkaDetail/> </Route>
        <Route path="/Portfele/:productName"> <PortfelDetail/> </Route>
        <Route path="/Smycze/:productName"> <SmyczDetail/> </Route>
      </Switch>
    </div>
  );
}

export default App;
