'use strict'

/*
Hacer una calculadora
- Pida dos numeros
- Si metemos uno mal que los vuelva a pedir
- mostrar en el cuerpo de la página en una alerta 
y por la consola el resultado de sumar restar multiplicar y 
dividir las dos cifras.
*/

var numero1 = parseInt(prompt("Inserte el primer numero"));
var numero2 = parseInt(prompt("Inserte el segundo numero"));

while(isNaN(numero1) || isNaN(numero2)){
    numero1 = parseInt(prompt("Inserte el primer numero"));
    numero2 = parseInt(prompt("Inserte el segundo numero"));
}

alert("La suma es: " + (numero1 + numero2));
alert("La resta es: " + (numero1 - numero2));
alert("La multiplicacion es: " + (numero1 * numero2));
alert("La division es: " + (numero1 / numero2));

console.log("La suma es: " + (numero1 + numero2));
console.log("La resta es: " + (numero1 - numero2));
console.log("La multiplicacion es: " + (numero1 * numero2));
console.log("La division es: " + (numero1 / numero2));