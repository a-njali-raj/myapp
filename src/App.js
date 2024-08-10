
import './App.css';
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const[posts,setPosts]=useState([])
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(posts => setPosts(posts.splice(0,10)))//splice for getting 10 data
  

  },[])
  
  return(
 <div className='myapp'>
  
<h1 className='bg-primary text-white'>fetch API data</h1>
{posts.map((post)=>
  <div key={post.id}className='bg-dark'>
<h1 className='text-info'>{post.title}</h1>
<p className='text-white'>{post.body}</p>
</div>
)}
  </div>
);
}
export default App;
