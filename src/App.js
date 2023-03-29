import React, {useState} from 'react';
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import './App.css';
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import Nav from './Nav'
import Login from './Login'
import Update from'./updateContact'
import Intro from './Intro'
import Signup from './Signup'

import { AuthContextProvider } from "./Firebase-Config/AuthContext";
import ProtectedRoute from "./ProtectedRoute";
import Account from './Account'
import ProtectedNav from './ProtectedNav'

  function App() {
    const [loggedOut, setLoggedOut] = useState(true)
   const [contact, setContact] = useState([])
    
  return (
    <div className="app">
      <main>
        <Header />
        <AuthContextProvider>
       
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />

            <Route
              exact
              path="/main/"
              element={
                <ProtectedRoute>
                  <Main />
                </ProtectedRoute>
              }
            />
          
            
            <Route path="/main/:id" element={<Update />} />

            <Route exact path="/Intro" element={<Intro />} />
          </Routes>
        </AuthContextProvider>

        <Footer />
      </main>
    </div>
  );
}
export default App
