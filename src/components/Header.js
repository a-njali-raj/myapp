import React from 'react'

const Header = () => {
  const headingstyle={color:'blue'};
  return (
    <div>
        <h1 style={{color:'red'}}>component 1</h1>
        <h1 style={headingstyle}>component</h1>
    </div>
  );
};

export default Header