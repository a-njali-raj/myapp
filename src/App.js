
import './App.css';
import React from 'react';
import Header from './components/Header';
import Home from'./components/Home';
import States from './components/States';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return<div className='myapp'>
<Container>
<States name={'kerala'} language={'malayalam'} population={2000}/>
<States name={'Tamilnadu'}language={'tamil'} population={3000}/>
<States name={'Karntaka'}language={'kannada'} population={4000}/>

</Container>
  </div>
}
export default App;
