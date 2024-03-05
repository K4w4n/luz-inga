import generateProductDOM from "./components/generateProductDOM.js";

// Quantidade de produtos gerados
const productQuantity = 10;

// Elemento DOM que guarda a lista de produtos
const productListDOM = document.querySelector('.product-list');

// Gera uma lista de produtos DOM
const newProductListContent = Array(productQuantity).fill(null).map(generateProductDOM);

// Insere os produtos no DOM
productListDOM.append(...newProductListContent);

const inputName = document.querySelector('#name');
const inputEmail = document.querySelector('#email');
const inputObservation = document.querySelector('#observation');
const submitButton = document.querySelector('button#submit');

const createValidation = (isValid, message) => ({ isValid: true, message });
const validationName = createValidation();
const validationEmail = createValidation();
const validationObservation = createValidation();

submitButton.addEventListener('click', handleOnSubmit);


function handleOnSubmit(e) {
    e.preventDefault();

    validateName();
    validateEmail();
    ValidateObservation();

    if (validationName.isValid && validationEmail.isValid && validationObservation.isValid) {
        console.log({
            name: inputName.value,
            email: inputEmail.value,
            observation: inputObservation.value
        });
        alert('Mensagem enviada com sucesso!');
    }

}

function ValidateObservation() {
    const observation = inputObservation.value;
    validationObservation.isValid = observation.length > 0;
    validationObservation.message = validationObservation.isValid ? "" : 'Por favor, preencha o campo observação';

    inputObservation.parentNode.classList.remove('has-error');
    if (!validationObservation.isValid) inputObservation.parentNode.classList.add('has-error');
    inputObservation.parentNode.querySelector('span.input-error-message').innerHTML = validationObservation.message;
}

function validateEmail() {
    const email = inputEmail.value;
    validationEmail.isValid = email.length > 0;
    validationEmail.message = validationEmail.isValid ? '' : 'Por favor, preencha o campo email';

    if (validationEmail.isValid) {
        validationEmail.isValid = isEmail(email);
        validationEmail.message = validationEmail.isValid ? '' : 'Informe um email valido';
    }

    inputEmail.parentNode.classList.remove('has-error');
    if (!validationEmail.isValid) inputEmail.parentNode.classList.add('has-error');
    inputEmail.parentNode.querySelector('span.input-error-message').innerHTML = validationEmail.message;
}

function validateName() {
    const name = inputName.value;
    validationName.isValid = name.length > 0;
    validationName.message = !validationName.isValid ? 'Por favor, preencha o campo nome' : '';

    inputName.parentNode.classList.remove('has-error');
    if (!validationName.isValid) inputName.parentNode.classList.add('has-error');

    inputName.parentNode.querySelector('span.input-error-message').innerHTML = validationName.message;
}

function isEmail(email) {
    const res = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return res.test(String(email).toLowerCase());
}

inputName.addEventListener('input', validateName);

inputEmail.addEventListener('input', validateEmail);

inputObservation.addEventListener('input', ValidateObservation);
