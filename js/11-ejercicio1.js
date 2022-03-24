'use strict'

/*
Hacer un programa que pida dos numero y diga cual es mayor, el menor y
si son iguales
PLUS: Si los datos nos son numeros o son menores o iguales a cero que
 los vuelva a pedir
*/




var numero1;
var numero2;

while (numero1 <= 0 ) {

    numero1 = parseInt(prompt("Inserte un valor:"));
    numero2 = parseInt(prompt("Inserte el otro valor"));
}

if (numero1 > numero2) {
    alert("El " + numero1 + " es mayor");
} else if (numero2 > numero1) {
    alert("El " + numero2 + " es mayor");
} else if (numero1 == numero2) {
    alert("Son iguales");
} else (
    alert("Inserte números correctos")
)

