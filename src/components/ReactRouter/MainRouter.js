import React from 'react'
import Home from './Pages/Home'
import About from './Pages/About'
import Services from './Pages/Services'
import Contact from './Pages/Contact'
import Notfoung from './Pages/Notfoung'
import { Routes,Route,Link } from 'react-router-dom'
const MainRouter = () => {
  return (
    <div>
        <ul>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='About'>About</Link>
            </li>
            <li>
                <Link to='Services'>Services</Link>
            </li>
            <li>
                <Link to='Contact'>Contact</Link>
            </li>
            
        </ul>
        <Routes>
           <Route path="/" element={<Home/>}/>
           <Route path="about" element={<About/>}/>
           <Route path="services" element={<Services/>}/>
           <Route path="contact" element={<Contact/>}/>
           <Route path="*" element={<Notfoung/>}/>
</Routes>
    </div>
  );
};

export default MainRouter