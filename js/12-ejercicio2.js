'use strict'

/*
Utilizando un bucle, mostrar la media y la suma de los número introducidos
 por el usuario hasta que metamos un número negativo negativo

*/

var suma = 0;
var contador = 0;

do{
    var numero = parseInt(prompt("Introduce numero haste que metas uno negativo"));

    if(isNaN(numero)){
        numero = 0
    }else if(numero >= 0){
        suma = suma + numero;
        //suma += numero;

        contador++;
    }
}while(numero>=0)

alert("La suma de todos los números es: " + suma);
alert("La media de todos los numeros es: "+ (suma/contador));