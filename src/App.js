import React, {useState} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import Nav from './Nav'
import Login from './Login'


  function App() {
    const [loggedOut, setLoggedOut] = useState(true)
  return (
    <div>
    <BrowserRouter>
      <Routes>
        {/* format for route Route path = "/URLNAME" element = {<COMPONENT  stateIfNeeded ={stateIfNeeded}/>} /> */}
        <Route path="/" />
        <Route path ="main" element={<Main/>}/>
        {/* <Route path = "main/:id" element={<Contact />}/>
        <Route path = "intro" element= {<Intro />}/> */}
      </Routes>
      
     <div className="login">
      <Header/>
     {loggedOut ? 
          <Login setLoggedOut={setLoggedOut} /> 
          : <Main />
        }
      <Footer/>
     </div>
     
</BrowserRouter>
</div>
  );
}

export default App;
