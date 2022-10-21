import './App.css';
import React, {useEffect } from 'react';
import Home from './components/Home';
import ConfirmacionPago from './components/ConfirmacionPago'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ReactGA from 'react-ga';
  const TRACKING_ID = "UA-152807118-1";
  ReactGA.initialize(TRACKING_ID);


function App() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  return (
      <Router basename={process.env.PUBLIC_URL} >
        <Routes>
        <Route path="/" exact element={<Home />}/>
        <Route path="/pago-confirmacion" exact element={<ConfirmacionPago />}/>
        <Route path='*' exact={true} element={<Home />} />
        </Routes>
      </Router>
  );
}

export default App;
