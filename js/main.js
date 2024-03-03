import generateProductDOM from "./components/generateProductDOM.js";

// Quantidade de produtos gerados
const productQuantity = 10;

// Elemento DOM que guarda a lista de produtos
const productListDOM = document.querySelector('.product-list');

// Gera uma lista de produtos DOM
const newProductListContent = Array(productQuantity).fill(null).map(generateProductDOM);

// Insere os produtos no DOM
productListDOM.append(...newProductListContent);