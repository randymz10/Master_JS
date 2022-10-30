'use strict'

//Arrays

let nombre = 'Randy Muñoz';

let nombres = ['Randy Muñoz', 'Victor Robles', 'Juan Pérez'];

let lenguajes = new Array('Java', 'Go', 'Javascript', 'C#');

console.log(lenguajes);

let elemento = parseInt(prompt('Que elemento del array quieres?'));

if(elemento >= nombres.length){
    alert(`Introduce un numero menor a ${nombres.length}`);
} else {
    alert(`El usuario selecionado es: ${nombres[elemento]}`);
}

const body = document.body;

const h1 = document.createElement('h1');

h1.innerHTML = 'Lenguajes de programación del 2022';
body.append(h1);