'use strict'

/*
Mostrar todos los numero divisores de un numero introduce en promt
*/

var numero = parseInt(prompt("Introduce un numero:" ));

for(let i = 1; i <= numero ; i++){
    if( numero % i == 0) {
        console.log(i + " es divisor de " + numero);
    }
}