import React from "react";
import '../styles/contacts.css'

export function Contacts() {
    return(

     <section class="contato" id="contato">
      <div class="contato-text">
        <h1>Gostaria de entrar em contato?</h1>
        <p>Estamos aqui para ajudar! Entre em contato conosco para esclarecer suas dúvidas e escolha a opção abaixo que melhor atenda às suas necessidades. Estamos ansiosos para ouvir de você!</p>
      </div>
      <div class="cnt-princ">
        <div class="perguntas">
          <img src="assets/undraw_questions_re_1fy7.svg" alt=""/>
          <div class="cnt-text">
            <h1>Perguntas gerais</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro officiis, sunt voluptatum alias odit earum molestiae magni doloremque s consequatur unde fuga nulla quia.</p>
            <input type="button" value="entre em contato"/>
          </div>
        </div>
        <div class="especialista">
          <img src="assets/undraw_conference_speaker_re_1rna.svg" alt=""/>
          <div class="cnt-text">
            <h1>Fale com um especialista</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro officiis, sunt voluptatum alias odit earum molestiae distinctio illo consequatur unde fuga nulla quia.</p>
            <input type="button" value="entre em contato"/>
          </div>
        </div>

      </div>
    </section>

    )
}