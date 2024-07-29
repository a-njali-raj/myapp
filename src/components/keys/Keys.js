import React, { useState } from 'react'


    const products=[
        {id:1,name:'laptop',brand:'dell',qty:1},
        {id:2,name:'laptop',brand:'asus',qty:1},
        {id:3,name:'laptop',brand:'hp',qty:1},
    ];
    const Keys = () => {
        const[items,setItem] = useState(products);
        const changeqty = (id) => {
            const newItem = items.map((item)=>
                item.id==id?{...item,qty:item.qty+1}:item
            );
            
        setItem(newItem);
    }
  return (
    <div>
        {items.map((product)=>(
         <div className='bg-success text-white m-2'key={product.id}>
         <h1>{product.name}</h1>
        <h3>{product.brand}</h3>
        <h4>{product.qty}</h4>
        <button onClick={()=>changeqty(product.id)} type='button'>+</button></div>   
        ))}
        
    </div>
  );
};

export default Keys