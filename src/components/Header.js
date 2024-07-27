import React ,{useState}from 'react'
import {Button, Table, Accordion, Card, Navbar, Nav, Container, NavDropdown  } from 'react-bootstrap';
const Header = () => {
  const[color,setcolor]=useState("Green");
  const[count,setcount]=useState(0);
  const changecolor=()=>{
    setcolor('red');
  };
  const increment=()=>{
    setcount(count+1);
  };
 const decrement=()=>{
  setcount(count-1);
 };
  
  return (
   <>
   <h1 className='bg-warning text-white'>Usestate Hook</h1>
   <h2> My favourite color is {color}</h2>
   <Button onClick={changecolor}> change color</Button>
   <br/>
   <br/>
   <h1>Counter is {count}</h1>
   <Button onClick={increment}className='m=2 bg-success'>+</Button>
   <Button onClick={decrement}className='m=2 bg-danger'>-</Button>
   </>
  );
};

export default Header