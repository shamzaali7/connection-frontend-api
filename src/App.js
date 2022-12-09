import react from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import Nav from './Nav'



function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* format for route Route path = "/URLNAME" element = {<COMPONENT  stateIfNeeded ={stateIfNeeded}/>} /> */}
        <Route path="/" />
        <Route path ="main" element={<Main/> }/>
        {/* <Route path = "main/:id" element={<Contact />}/>
        <Route path = "intro" element= {<Intro />}/> */}
      </Routes>

     <div className="App">
       <Header/>
        <Nav/>
       <Main/>
       <Footer/>
      
     </div>


    </BrowserRouter>
  );
}

export default App;
