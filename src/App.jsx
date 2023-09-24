import React from 'react';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import Service from './Service';
import Navbar from './Navbar';
import Common from './Common';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import {Routes, Route, Navigate} from 'react-router-dom';
import Footer from './Footer';
import "./index.css";
const App = () => {
  return(
    <>
      <Navbar/>
      <Routes> 
        <Route path = "/" element={<Home/>}/>
        <Route path = "/about" element = {<About/>}/>
        <Route path = "/contact" element = {<Contact/>}/>
        <Route path = "/service" element = {<Service/>}/>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App;