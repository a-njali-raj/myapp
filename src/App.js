
import './App.css';
import React from 'react';
import Header from './components/Header';
import Home from'./components/Home';
import States from './components/States';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  const Checknum = ({ number })=>{
    if(number>0){
      return <h1>positive number</h1>;
    }
    else if(number<0){
      return<h1>negative number</h1>;
    }
    else{
      return<h1>Zero</h1>;
    }
  }
  return(
 <div className='myapp'>
  <Checknum number={-5}/>
  </div>
);
}
export default App;
