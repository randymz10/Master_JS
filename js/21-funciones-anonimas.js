'use strict'

//Funciones anonimas
//ES una funcion que no tiene nombre

var pelicula = function(nombre){
    return "La pelicula es: " + nombre;
}

function sumame(num1, num2, sumaYmuestra, sumaPorDos){
    var sumar = num1 + num2;

    sumaYmuestra(sumar);
    sumaPorDos(sumar);
    return sumar;
}


sumame(5, 7, function(dato){
    console.log("La suma es: ", dato);
},
function(dato){
    console.log("La suma por dos es: ", (dato*2));
});