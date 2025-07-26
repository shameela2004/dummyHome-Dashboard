import React, { useEffect, useState } from 'react'
import axios from "axios"
function Products() {
    const [products,setProducts]=useState([])
    const [cart,setCart]=useState([])
    useEffect( ()=>{
        async function fetchdata(){
        try{
        
        const res= await axios.get("http://localhost:3001/products")
        setProducts(res.data)
        
        
        }
        catch(e){
            console.log(e)
        }
    }
         fetchdata()
    },[])
    function handleCart(prod){
        setCart([...cart,prod])
        alert('added to cart')
    }
    function removeCart(prod){
        const updated=cart.filter(product=>product.id!==prod.id)
        setCart(updated)
        alert('removed from cart')
    }
  return (
    <div><h1>Products</h1>

    {products.map((prod)=>(
        <div style={{backgroundColor:'white',color:'black',width:"100px",height:"100px",margin:"20px"}}>

        <li key={prod.id}>
            <strong>{prod.name} -</strong>{prod.price}
            <br />
            <button onClick={()=>handleCart(prod)}>Add to cart</button>
        </li>
        </div>
    ))}

    <br /><br /><br />
     <h2>Cart</h2>
       {cart.map((prod)=>(
        <div style={{backgroundColor:'white',color:'black',width:"100px",height:"100px",margin:"20px"}}>

        <li key={prod.id}>
            <strong>{prod.name} -</strong>{prod.price}
            <br />
            <button onClick={()=>removeCart(prod)}>Remove</button>
        </li>
        </div>
    ))}
    </div>
  )
}

export default Products