import Navbar from './NavbarHome'
import Footer from './Footer'
import MyApp from './App'
import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import App from './App'
import Routing from './Routing';
import Head from './Head';
import { HashRouter } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <Routing/>
    </HashRouter>
  </React.StrictMode>
);
