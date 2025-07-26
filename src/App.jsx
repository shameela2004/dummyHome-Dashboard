import React from 'react'
import Login from './login'
import {Route, Routes} from "react-router-dom"
import Home from './components/Home'
import ManageProducts from './components/ManageProducts'
import Products from './components/Products'


function App() {
  return (
    <>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/manageproducts" element={<ManageProducts/>}/>
      <Route path="/products" element={<Products/>}/>

     </Routes>
    </>
  )
}

export default App