import React from "react";
import { Link } from "react-router-dom";
import '../styles/header.css'
export function Header() {
    return(
        <header>
            <div className="logo">Vortex STORE</div>
                <ul className="links">
                <li><a href="#home">Home</a></li>
                <li><a href="#produtos">Products</a></li>
                <li><a href="#sobre">About</a></li>
                <li><a href="#contato">Contact</a></li>
                </ul>
                <Link to={"/loginPage"}>
     <button className="loginButton">Fazer login</button>
                </Link>
        </header>
    )
}