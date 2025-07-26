import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'

function Login() {
    const [form,setForm]=useState({username:"",password:""})
    const navigate=useNavigate()
    function handleLogin(){
       try{
           axios.get(`http://localhost:3001/users?username=${form.username}&password=${form.password}`)
        .then((res)=>{
            if(res.data.length>0){
                const user=res.data[0]
                localStorage.setItem("user",JSON.stringify(user))
                alert("login Successfull")
                // if(user.role==='admin'){
                // navigate("/manageproducts")
                // }
                // else{
                //     navigate("/")
                // }
                navigate("/")
            }
            else{
                alert("invalid username or password")
            }
        })
       }
       catch(e){
          console.log("error in fetching..",e)
       }
    }
  return (
    <div><h1>Login</h1>
        <input type="text" placeholder='Enter your username' onChange={(e)=>setForm({...form,username:e.target.value})}/><br />
        <input type="password" placeholder='Enter the password' onChange={(e)=>setForm({...form,password:e.target.value})}/><br />
        <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Login