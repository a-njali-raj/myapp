
import './App.css';
import React from 'react';
import Header from './components/Header';
import Home from'./components/Home';
import States from './components/States';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  const states=[
    {name:'kerala',language:'malayalam',population:2000},
    {name:'tamilnadu',language:'tamil',population:3000},
    {name:'karnataka',language:'kannada',population:4000},
  ]
  return<div className='myapp'>
<Container>
<States states={states}/>


</Container>
  </div>
}
export default App;
