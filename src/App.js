import './App.css';
import Home from './components/Home';
import ConfirmacionPago from './components/ConfirmacionPago'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
      <Router basename={process.env.PUBLIC_URL}>
        <Routes>
        <Route path="/" exact element={<Home />}/>
        <Route path="/pago-confirmacion" exact element={<ConfirmacionPago />}/>
        </Routes>
      </Router>
  );
}

export default App;
