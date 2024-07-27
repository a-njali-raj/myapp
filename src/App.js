
import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  let isloggedin=false;
  return(
 <div className='myapp'>
  {isloggedin?<h1>welcome to website</h1>:<h1>please login</h1>};
  </div>
);
}
export default App;
