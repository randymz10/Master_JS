'use strict'

//Transformacion de textos

var numero = 444;
var texto1 = "Bienvendo al curso de JavaScript de Victor Robles";
var texto2 = "es muy buen curso";

var dato = numero.toString();
    dato = texto1.toUpperCase();
    dato = texto1.toLowerCase();

console.log(dato);

// Calcular longitud de un texto

var nombre = "Randy Munoz";

console.log(nombre.length);

//Concatenar texto

var textoTotal = texto1 + " " + texto2;
    textoTotal = texto1.concat(" " + texto2);
    textoTotal = `${texto1}  ${texto2}`;

 console.log(textoTotal);

// Metodos de búsqueda

var busqueda = texto1.indexOf("curso");
    busqueda = texto1.lastIndexOf("curso");
    busqueda = texto1.search("curso");
    busqueda = texto1.match("curso");
    busqueda = texto1.substr(14,15);
    busqueda = texto1.charAt(44);
    busqueda = texto1.startsWith("r");
    busqueda = texto1.includes("Victor")
console.log(busqueda);