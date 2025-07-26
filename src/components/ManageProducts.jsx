import React, { useState } from 'react'

function ManageProducts() {
    const [item,setItem]=useState("")
    const [products,setProducts]=useState([])
    const [editValue,setEditValue]=useState("")
    const [editindex,setEditindex]=useState(null)
    function handleUpdate(){
        const updated=[...products]
        updated[editindex]=editValue
        setProducts(updated)
        setEditValue("")
        setEditindex(null)
    }
    function handleDelete(index){
        const filtered=products.filter((val,i)=>i!=index)
        setProducts(filtered)
        // axios.delete(`http://localhost:3001/products/${index}`)
    }
  return (
    <div>
        <h1>Add Product</h1>
        <input type="text" placeholder='Enter a product to add' value={item} onChange={(e)=>setItem(e.target.value)} />
        <button onClick={()=>{
            setProducts([...products,item])
            setItem("")
            }}>Add</button><br /><br /><br />
        <h2>ManageProducts</h2>
        <ul>
            {/* <li key={index}>{product}</li> */}
        {products.map((prod,ind)=>(
            <li key={ind}>
            {editindex===ind?<>
               <input type="text" onChange={(e)=>setEditValue(e.target.value)}/>
               <button onClick={handleUpdate}>Update</button>
            </>
            :<>{prod}
            <button onClick={()=>handleDelete(ind)}>Delete</button><button onClick={()=>setEditindex(ind)}>Edit</button>
            </>
            }
            </li>
        ))}
        </ul>
        </div>
  )
}

export default ManageProducts