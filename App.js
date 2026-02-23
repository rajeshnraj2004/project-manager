import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import './App.css';
import Login from './pages/login';
import Signup from './pages/Signup';
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path='/Signup' element={<Signup/>}/>
          <Route path='/Dashboard' element={<Dashboard/>}/> 
           </Routes>
          

        
      </div>
      
    </Router>
  );

}
    

export default App;