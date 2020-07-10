import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from 'react-router-dom'
import {Provider} from "react-redux"
import store from "./redux"
import Menu from './components/Menu'
import Footer from './components/Footer'

ReactDOM.render(
  <React.StrictMode>
    <Router >
      <Provider store={store}>
        <Menu></Menu>
          <App />
        <Footer></Footer>
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
