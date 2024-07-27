
import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  let num=1;
  return(
 <div className='myapp'>
  {num>0?<h1>positive</h1>:num<0?<h1>negative</h1>:<h1>Zero</h1>};
  </div>
);
}
export default App;
