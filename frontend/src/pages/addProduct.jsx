import React from "react";
import '../styles/addProduct.css'

export function AddProductsPage() {
    return (
    <form className="addPform" method="POST">
        <img src="#" alt="" id="imagePreview" style="display: none;"/>
        <button id="uploadButton">Escolher Foto</button>
        <input type="file" id="fileInput" style="display: none;" accept="image/¨*"/>
        <input type="text" class="inp-text" placeholder="nome do produto"/>
        <input type="number" class="inp-text" placeholder="preço"/>
        <button type="submit" class="add">Adicionar produto</button>
    </form>
    )
}