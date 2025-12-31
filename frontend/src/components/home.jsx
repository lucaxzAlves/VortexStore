import React from "react";
import '../styles/home.css'

export function Home() {
    return (

     <section className="home" id="home">
  
      <div className="home-text">
        <div className="text-anim">
         <span className="span-anim">Seja bem-vindo a Vortex Store.</span>
        </div>
       <h1>Potencialize sua vitória com os melhores eletrônicos para gamers. Desempenho extraordinário.</h1>
         <h2>Explore a excelência em tecnologia gamer: produtos de última geração para elevar sua experiência e superar limites, nosso estoque conta com uma vastidão de produtos. </h2>
         <div className="home-input">acessar agora</div>
      </div>
      <div className="img-home">
      <img src="./assets/homeimage.png" className="image-home" alt=""/>
      </div>
    </section>


    )
}