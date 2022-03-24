'use strict'

/*
Mostrar todos los numeros impares que hay entre dos numero introducidos por el usuario
*/

var numero1 = parseInt(prompt("Inserte el un numero:"));
var numero2 = parseInt(prompt("Inserte otro numero:" ));

for(let i = numero1; i <= numero2 ; i++){
    if( (i % 2) != 0 )
    alert(i);
}