const inputMin = document.querySelector(".input-min");
const inputMax = document.querySelector(".input-max");
const buttonSortear = document.getElementsByTagName("button")[0];

function sortearNumero() {
    const min = parseInt(inputMin.value);
    const max = parseInt(inputMax.value);
    const numero = Math.floor(Math.random() * (max - min + 1)) + min;
    const h1 = document.querySelector("h1");
    h1.textContent = `${numero}`;
}

buttonSortear.addEventListener("click", sortearNumero);