import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import '../styles/products.css'

export function Products() {

  const products = fetch('http://localhost:3000/api/products')
  console.log(products)
    return(

    <section class="produtos" id="produtos">
      <h5>Ultimos produtos</h5>
         <Link to={'/addProductPage'}>
         <div class="more"><p>+</p></div>
         </Link>
         
    </section>

    )
}