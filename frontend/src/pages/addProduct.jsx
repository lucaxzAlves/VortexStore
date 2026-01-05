import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/addProduct.css'

export function AddProductsPage() {
   
  const [name, setName] = useState("")
  const [desc, setDesc] = useState("")
  const [price, setPrice] = useState("")
  const [stock, setStock] = useState("")
  const [available, setAvailable] = useState(false)
  const [error, setError] = useState(false)

  const navigate = useNavigate();

  function handleSubmit(e) {
  e.preventDefault()

  if(!name || !desc || !price || !stock) {
   setError(true)
   console.log("preencha todos os campos")
  }

  fetch("http://localhost:3000/products/register", {
    method: "POST",
     headers: {
    'Content-Type': 'application/json'
  }, body: JSON.stringify({
    name,
    price,
    desc,
    stock,
    available
  })
  }
)
  }


    return (
      <div className="Addcontainer">
      <div className="Addcard">
        <h2>New Product</h2>

        <form onSubmit={handleSubmit} className="addForm">
          <label>Name</label>
          <input onChange={(e)=> {setName(e.target.value)}} type="text" />

          <label>Price</label>
          <input type="number" onChange={(e)=> {setPrice(e.target.value)}} />

          <label>Description</label>
          <textarea onChange={(e)=> {setDesc(e.target.value)}} rows="3"></textarea>

          <label>Stock</label>
          <input type="number" onChange={(e)=> {setStock(e.target.value)}} />

          <div className="checkbox">
            <input type="checkbox" checked={available} onChange={(e) => setAvailable(e.target.checked)} />
            <span>Available</span>
          </div>

          <button className="addBtn" type="submit">Submit</button>
        </form>
      </div>
    </div>
    )
}