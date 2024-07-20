import React from 'react'
import Child from './Child';

const Home = () => {
  return (
    <div>
        <h1>
            Home Component
            <Child/>
        </h1>
    </div>
  );
}

export default Home