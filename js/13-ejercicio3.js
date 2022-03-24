'use strict'

/* 
Hace un programa que muestre todos los numeros entre dos numeros
introducidos por el usuario
*/

var numero1 = parseInt(prompt("Insterte el primer numero"));
var numero2 = parseInt(prompt("Inserte el segundo numero"));

for(let i = numero1; i <= numero2; i++){
    alert(i);
}