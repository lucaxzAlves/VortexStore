import React from "react";
import { useState } from "react";
import '../styles/register.css'

export function RegisterPage() {

        const [emailState, setEmail] = useState('')
        const [nameState, setName] = useState('')
        const [passwordState, setPassword] = useState('')
        const [error, setError] = useState(false)
      
     

   function handleSubmit(e) {

     e.preventDefault()

       console.log(emailState, nameState, passwordState)

       if(!emailState || !nameState || !passwordState) {
        setError(true)
        console.log('erro')
       }
       
        fetch('http://localhost:3000/register', {
          method:'POST',
          headers: {
    'Content-Type': 'application/json'
  },
          body: JSON.stringify({
            name: nameState,
            email: emailState,
            password: passwordState
          })
        })

   }

    return(
         <form className="registerForm" onSubmit={handleSubmit}>
        <h1>Seja bem vindo.</h1>
        <h2>Crie sua conta agora conosco!</h2>
        <div className="form-group">
          
          <label ></label>
          <input type="email" onChange={(e) => {setEmail(e.target.value)}} className="form-control" placeholder="Email" name="email"/>
        </div>
        <div className="form-group">
          
          <label ></label>
          <input type="text" className="form-control" onChange={(e) => {setName(e.target.value)}} placeholder="Usuario" name="user"/>
        </div>
        <div className="form-group">
          <label></label>
          <input type="password" className="form-control" placeholder="Senha" onChange={(e) => {setPassword(e.target.value)}} name="password"/>
        </div>
        <p>preencha todos os campos corretamente</p>
        <button type="submit" className="btn btn-primary">Criar conta</button>
       
      </form>
    )
}