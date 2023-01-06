import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import Desgin from './Desgin'
import Marketing from './Marketing';
import Development from './Development';
import Dashboard from './Dashboard';


function App() {
  return (
    <div className="App">
    <Router>
    <Routes>
      <Route path="/" element={<Dashboard />}>
        <Route path="desgin"element={<Desgin />}/>
        <Route path="marketing" element={<Marketing />} />
        <Route path="development" element={<Development />} />
      </Route>
    </Routes>
    </Router>
    </div>
  );
}

export default App;
