'use strict'
/*
Hacere un programa que diga si un numero es para o impar
1. Ventana prompt
2. Si no es valido que pida de nuevo el numero
*/

var numero = parseInt(prompt("Inserte un numero: "));


while(isNaN(numero)){
    numero = parseInt(prompt("Inserte un numero: "))
}

if(numero % 2 == 0){
    alert("El numero es par");
}else{
    alert("El numero es impar");
}