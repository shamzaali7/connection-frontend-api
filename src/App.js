import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import Nav from './Nav'
import Login from './Login'

  function App() {
    const [loggedOut, setLoggedOut] = useState(true)
  return (
    <div className="app"> 
          <Header/>
            <Router>
            {/* <button>
              <Login onClick={() => setLoggedOut(false)} setLoggedOut={setLoggedOut} exact path="/main"></Login>
              </button> */}
             
                <Routes>
                  <Route exact path="/" element={<Login />} />
                  <Route exact path="/main" element={<Main />} />
                 
                </Routes>
                <Nav/>
              <Footer/>
            </Router>
    </div>
  );
}

export default App;
