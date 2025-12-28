import React from "react";
import '../styles/about.css'

export function About() {
    return(
         <section class="sobre" id="sobre">
      <h3>SOBRE NÓS</h3>
      <div class="text-sobre">
        <div class="txt-sobre1">
          <img src="assets/undraw_undraw_shopping_bags_2ude_-1-_mnw3.svg" alt=""/>
      <h1>Produtos Exclusivos</h1>
       <p>Explore nossa vasta gama de produtos cuidadosamente selecionados, desde teclados mecânicos de última geração até headsets com som surround imersivo. Não importa se você é um gamer casual ou um competidor dedicado, temos o equipamento perfeito para aprimorar sua jogabilidade.</p>
       <input type="button" value="ler mais"/>
        </div>
        <div class="text-principal">
          <img src="assets/undraw_video_game_night_8h8m.svg" alt=""/>
      <h1>Quem Somos</h1>
       <p>Somos apaixonados por games e tecnologia. Combinamos nossa paixão pela jogatina com um compromisso inabalável em fornecer os melhores produtos para atender às necessidades de gamers de todos os níveis. Nosso objetivo é ser sua principal fonte para equipamentos e acessórios que não apenas atendam, mas superem suas expectativas.</p>
       <input type="button" value="ler mais"/>
        </div>
        <div class="txt-sobre2">
          <img src="assets/undraw_deliveries_2r4y.svg" alt=""/>
      <h1>Qualidade Garantida</h1>
        <p>Na Vortex Store, qualidade é nossa prioridade. Trabalhamos em estreita colaboração com marcas renomadas no universo gamer para assegurar que cada produto em nosso catálogo atenda aos mais altos padrões de desempenho e durabilidade.</p>
        <input type="button" value="ler mais"/>
      </div>
     </div>
    </section>
    )
}