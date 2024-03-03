// Gera o elemento DOM do produto
export default function generateProductDOM() {

    // Cria os elementos DOM
    const container = document.createElement('div');
    const productImgContainer = document.createElement('div');
    const productImg = document.createElement('img');
    const description = document.createElement('div');
    const descriptionName = document.createElement('div');
    const descriptionText = document.createElement('div');
    const descriptionPrice = document.createElement('div');
    
    // Aplica as classes CSS
    container.classList.add('product');
    productImgContainer.classList.add('product-img-container');
    productImg.classList.add('product-img');
    description.classList.add('description');
    descriptionName.classList.add('description-name');
    descriptionText.classList.add('description-text');
    descriptionPrice.classList.add('description-price');
    
    // Adiciona os atributos
    productImg.setAttribute('src', './img/light.png');
    productImg.setAttribute('alt', 'Imagem do produto');
    descriptionName.textContent = 'Lampada';
    descriptionText.textContent = 'Uma lampada minimalista e versátil.';
    descriptionPrice.textContent = 'R$ 22,99';
    
    // Adiciona os elementos no DOM
    productImgContainer.append(productImg);
    container.append(productImgContainer);
    container.append(description);
    description.append(descriptionName);
    description.append(descriptionText);
    description.append(descriptionPrice);

    // Retorna o elemento DOM
    return container;
}