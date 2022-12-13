import React, {useState} from 'react';
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import './App.css';
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import Nav from './Nav'
import Login from './Login'
import Update from'./updateContact'
import { auth, signInWithGoogle, db, logout } from "./Firebase-Config/config.js";

  function App() {
    const [loggedOut, setLoggedOut] = useState(true)
   const [contact, setContact] = useState([])
    
  return (
    <div className="app"> 
          <Header/>
           <main>
            {/* <button>
              <Login onClick={() => setLoggedOut(false)} setLoggedOut={setLoggedOut} exact path="/main"></Login>
              </button> */}
             
                <Routes>
                  <Route exact path="/" element={<Login />} />
                  <Route exact path="/main" element={<Main />} />
                  <Route path="/main/:id" element={<Update contact={contact}  />} />
                </Routes>
                <Nav/>
                
              <Footer/>
              </main>
    </div>
  );
}
function ProtectedRoute(props) {
 
  const { path } = props
  console.log('path', path)
  const location = useLocation()
  console.log('location state', location.state)

  if (
    path === '/Login' 
  ) {
    return auth ? (
      <Navigate to={location.state?.from ?? '/main'} />
    ) : (
      <Route {...props} />
    )
  }
  return auth ? (
    <Route {...props} />
  ) : (
    <Navigate
      to={{
        pathname: '/Login',
        state: { from: path },
      }}
    />
  )
}

export default App;
