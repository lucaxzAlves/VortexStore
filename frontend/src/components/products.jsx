import React from "react";
import { Link } from "react-router-dom";
import '../styles/products.css'

export function Products() {
    return(

    <section class="produtos" id="produtos">
      <h5>Ultimos produtos</h5>
         <Link to={'/addProductPage'}>
         <div class="more"><p>+</p></div>
         </Link>
         <div class="p">
          <img src="assets/product-15.png" alt=""/>
          <h1>COMPUTADOR HALLEY,AMD RYZEN 5 5600,GEFORCE RTX 4060 8GB, 16GB DDR4, SSD M.2 240GB</h1>
          <div class="stars"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half-stroke"></i></div>
          <h2>R$ 5.560,90</h2>
          <button class="add2cart">adicionar ao cart</button>
         </div>
           <div class="p">
            <img src="assets/product-7.png" alt=""/>
            <h1>CADEIRA GAMER PICHAU OMEGA S ASSASSINS CREED LEGACY, PRETO E VERMELHO</h1>
            <div class="stars"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i></div>
            <h2>R$ 1.699,90</h2>
            <button class="add2cart">adicionar ao cart</button>
         </div>
         <div class="p">
          <img src="assets/product-6.png" alt=""/>
          <h1>Controle Sony DualSense PS5, Sem Fio, Branco </h1>
          <div class="stars"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half-stroke"></i></div>
          <h2>R$ 560,60</h2>
          <button class="add2cart">adicionar ao cart</button>
         </div>
         <div class="p">
          <img src="assets/product-14.png" alt=""/>
          <h1> Console Playstation 5 Sony, SSD 825GB, Controle sem fio DualSense, Edição Digital, Branco</h1>
          <div class="stars"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></div>
          <h2>R$ 3.719,99</h2>
          <button class="add2cart">adicionar ao cart</button>
         </div>
    </section>

    )
}