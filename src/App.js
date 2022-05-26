import React from 'react'
import Header from './components/Header';
import './styles.css';

import { BrowserRouter as Router } from "react-router-dom";

import Routes from './routes';


function App() {
  return (
       
    <div className="App">
    
     <Router>
     <Routes></Routes>  
      </Router> 


</div>
  );

}

export default App;
