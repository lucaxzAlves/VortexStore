import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import '../styles/login.css'

export function LoginPage() {

          const[name, setName] = useState('')
          const[password, setPassword] = useState('')
          const [error, setError] = useState('false')

          function handleSubmit(e) {
           e.preventDefault()
           if(!name || !password) {
           setError(true)
           }

           fetch('http://localhost:3000/register'), {
            method: 'POST',
            body: {
             name: name,
             password: password
            }
           }
          }

    return(

       <section className="loginsection">
     <div className="login-img">
         <img src="assets/reshot-illustration-system-user-login-GTQRL8HFXU.png" alt=""/>
         <p>Seja bem vindo, acesse e aproveite todo o conteudo, somos uma equipe de profissionais empenhados em trazer o melhor conteudo direcionado a voce usuario</p>
     </div>
     <div className="login">
       <h1>Olá.</h1>
       <h2>Seja bem vindo de volta!</h2>
       <h3>faça seu login agora.</h3>
       <div className="user">
           <i className="fa-solid fa-user"></i>
           <input type="text" name="user" onChange={(e) => {setName(e.target)}} placeholder="usuario"/>
       </div>
       <div className="senha">
        <i className="fa-solid fa-key"></i>
        <input type="text" name="senha" onChange={(e) => {setPassword(e.target)}} id="" placeholder="senha"/>  
       </div>
       <p style={{ display: error ? 'block' : 'none' }}>preencha todos os campos corretamente</p>
       <input type="button" value="login" className="btn-login"/>
       <Link to={"/registerPage"}>
        <p className="criar">criar uma conta</p>
        </Link>
     </div>
    </section>
        
    )
}