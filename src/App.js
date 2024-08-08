
import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Products from './components/Products/product';
import { Container } from "react-bootstrap"

function App() {
  
  return(
 <div className='myapp'>
  <Container><Products/></Container>
 
  </div>
);
}
export default App;
