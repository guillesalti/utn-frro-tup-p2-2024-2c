//  // 1. programa de una sola línea: alert que diga “Hello World”
//  alert("Hello Mundo!");
//  // 2. programa de una sola línea: escriba en la pantalla un texto que diga “Hello World” (document.write)
//  document.write("Hello Mundo!");
//  // 3. programa de una sola línea: escriba en la pantalla el resultado de sumar 3 + 5.
//  document.write("<br>El resultado de la suma entre 3 y 5 es: ", 3 + 5);
//  // 4. dos lineas: que pida el nombre del usuario con un prompt y escriba un texto que diga “Hola nombreUsuario”
//  var nombre = prompt("Ingresa tu nombre", " ");
//  document.write("<br>Hello " + nombre + "! How are you?");
//  // 5. tres líneas que pida un número, pida otro número y escriba el resultado de sumar estos dos números.
//  var num1 = parseInt(prompt("Ingresa un número:", " "));
//  var num2 = parseInt(prompt("Ingresa otro número:", " "));
//  document.write("<br>La suma de los números ingresados es: ", num1 + num2);
// //6. Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor
//     if(num1>num2){
//         document. write("<br>el primer numero ingresado es mayor", num1);
//         esMayor=num1;
//     }else{
//         document.write("<br>el segundo numero ingresado es mayot", num2);
//         esMayor=num2;
//     }
// // 7. Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.
// var num3 = parseInt(prompt("Ingresa otro número: ", " "));
// if(esMayor>num3){
//     document.write("<br>El numero mayor de los 3 es: ", esMayor);
// }else{
//     document.write("<br>El numero mayor de los 3 es: ", num3);
// }
// //8. Escribe un programa que pida un número y diga si es divisible por 2
// var numeroPar = parseInt(prompt("Ingresa un número:"));
// if(numeroPar%2 == 0){

//     document.write("<br>El numero es par ", numeroPar);
// }else{
//     document.write("<br>El numero es impar ", numeroPar);
// }
//9. Escribe un programa que pida una frase y escriba cuantas veces aparece la letra a
var frase = prompt("Escribe una frase")
frase = frase.toLowerCase();
var contador=0;
for (var i = 0; i < frase.length; i++) {
    if(frase[i]=='a'){
        contador++;
    }
}
document.write("<br>En la frase <b>",frase, "</b> hay ", contador, " letras A");
//10. Escribe un programa que pida una frase y escriba las vocales que aparecen
letraA=0
letraE=0
letraI=0
letraO=0
letraU=0
for (var i=0; i<frase.length;i++){
    if(frase[i]=='a'){
       letraA++
    }else if (frase[i] == 'e'){
        letraE++
        contador++
    }else if(frase[i] == 'i'){
        letraI++
        contador++
    }else if(frase[i] == 'o'){
        letraO++
        contador++
    }else if(frase[i] == 'u'){
        letraU++
        contador++
    }
}
document.write("<br>En la frase <b>",frase, "</b> hay <br>", letraA, " letras A, <br>", letraE, " letras E, <br>", letraI, " letras I, <br>", letraO, " letras O, <br>", letraU, " letras U");
//11. Escribe un programa que pida una frase y escriba cuántas de las letras que tiene son vocales
document.write("<br>En la frase <b>",frase, "</b> hay ", contador, " vocales");

