import React from 'react'
import {Button, Table, Accordion, Card, Navbar, Nav, Container, NavDropdown  } from 'react-bootstrap';
const Header = () => {
  const clickHandle=()=>
  {
    console.log("you clicked me");
  };
  const DbClickHandle=(name)=>
  {
    alert("Hello" + name);
  };
  const onChange=(name)=>
    {
      alert("you typed in textbox");
    };
    const onMouseOver=(name)=>
      {
        alert("you mouseover the elemnt");
      };
    const onKeyDown=()=>
    {
      alert("you pressed the key");
    };
  return (
   <>
   
   <h1 className="bg-success text-white">Learn react events</h1>
   <Button onClick={clickHandle}>Click Me</Button>
   <h1 onDoubleClick={() => DbClickHandle("Anjali")}>Double click</h1>
   <input onChange={onChange} type="text" />
   <h1 onMouseOver={onMouseOver}>MouseOver</h1>
   <input onKeyDown={onKeyDown} type="text"/>
   </>
  );
};

export default Header