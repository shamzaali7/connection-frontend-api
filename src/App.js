import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import Nav from './Nav'
import Login from './Login'

   
 
    function App() {
      return (
        <div className="app">
          <Header/>
          <Router>
            <Routes>
              <Route exact path="/" element={<Login />} />
              <Route exact path="/main" element={<Main />} />
            </Routes>
          </Router>
          <Footer/>
        </div>
      );
    }
 export default App;