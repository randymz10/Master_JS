'use strict'

// Funciones

// Una funcion es una agrupación reutilizabre de un conjunto de instrucciones 

//Defino la función
function calculadora(numero1, numero2){

    //Conjunto de instrucciones a ejecutar
    console.log("Suma: " + (numero1 + numero2));
    console.log("Resta: " + (numero1 - numero2));
    console.log("Multiplicación: " + (numero1 * numero2));
    console.log("División: " + (numero1 / numero2));
    console.log("**********************************")

    return "Hola soy la calculadora"
}

// Invocar o llamar a la función
calculadora(12, 8);
calculadora(98, 2);

for(let i = 1; i <= 10; i++){
    calculadora(i, 8)
}