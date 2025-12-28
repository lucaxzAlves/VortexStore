import React from "react";
import { useState } from "react";
import '../styles/register.css'

export function RegisterPage() {

        const [emailState, setEmail] = useState('')
        const [nameState, setName] = useState('')
        const [passwordState, setPassword] = useState('')
        const [error, setError] = useState('false')
      

   function handleSubmit(e) {

     e.preventDefault()

       if(!emailState || !nameState || !passwordState) {
        setError(true)
       }
       
        fetch('http://localhost:3000/register'), {
          method:'POST',
          body: JSON.stringify({
            name: nameState,
            email: emailState,
            password: passwordState
          })
        }

   }

    return(
         <form action="/login/registrar" class="form" method="POST">
        <h1>Seja bem vindo.</h1>
        <h2>Crie sua conta agora conosco!</h2>
        <div class="form-group">
          
          <label ><i class="fa-solid fa-envelope"></i></label>
          <input type="email" onChange={(e) => {setEmail(e.target)}} class="form-control" placeholder="Email" name="email"/>
        </div>
        <div class="form-group">
          
          <label ><i class="fa-regular fa-user"></i></label>
          <input type="text" class="form-control" onChange={(e) => {setName(e.target)}} placeholder="Usuario" name="user"/>
        </div>
        <div class="form-group">
          <label><i class="fa-solid fa-key"></i></label>
          <input type="password" class="form-control" placeholder="Senha" onChange={(e) => {setPassword(e.target)}} name="password"/>
        </div>
        <p style={{ display: error ? 'block' : 'none' }}>preencha todos os campos corretamente</p>
        <button type="submit" onSubmit={handleSubmit()} class="btn btn-primary">Criar conta</button>
       
      </form>
    )
}