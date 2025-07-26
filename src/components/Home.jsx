import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
    const navigate=useNavigate()
    function handleLogout(){
        localStorage.removeItem("user")
        navigate("/")
        alert("Logout successfull")
    }
    const user=JSON.parse(localStorage.getItem("user"))
  return (
    <div>
      {localStorage.getItem("user")?
      <>
      {user.role==="admin"?<>
      <h1>Welcome Admin...!!!!</h1> 
      <button onClick={()=>navigate("/manageproducts")}>Manage Products</button>
      <button onClick={handleLogout}>Logout</button>
      </>:
      <>
        <h1>Welcome User...!!!!</h1> 
      <button onClick={()=>navigate("/products")}>view products</button>
      <button onClick={handleLogout}>Logout</button>
      </>}
      
      </>:
      <>
      <h1>Welcome..</h1> 
      <button onClick={()=>navigate("/login")}>Login</button>
      </>
      }
    </div>
  )
}

export default Home