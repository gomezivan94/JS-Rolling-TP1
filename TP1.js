// EJERCICIO 1


/* alert("un mensaje")   */


// EJERCICIO 2

/* document.write("Hello World")  */

// EJERCICIO 3

/* document.write("el resultado de sumar ", 3 ,"+", 5, " es: " + (3+5))  */

// EJERCICIO 4

/* let usuario = prompt("Ingrese su nombre de usuario");
document.write("Hola " + usuario) */

// EJERCICIO 5

/* let num1 = parseInt(prompt("Ingresa el primer número: "));
let num2 = parseInt(prompt("Ingresa el segundo número: "));
document.write("La suma es: " + (num1 + num2)); */

// EJERCICIO 6

/* let num1 = parseInt(prompt("Ingresa el primer numero"));
let num2 = parseInt(prompt("Ingrese el segundo numero"));

if(num1 > num2){
    document.write("El " ,num1, " es el numero mas grande");
} else{
    document.write("El " ,num2, " es el numero mas grande");
} */

// EJERCICIO 7

/* let num1 = parseInt(prompt("Ingresa el primer numero"));
let num2 = parseInt(prompt("Ingrese el segundo numero"));
let num3 = parseInt(prompt("Ingrese el tercer numero")); 

if((num1 > num2) && (num1 > num3)){
    document.write(`El numero mayor es: ${num1}`);
} else if ((num2 > num1) && (num2 > num3)){
    document.write(`El numero mayor es: ${num2}`);
} else if ((num3 > num1) && (num3 > num2)){
    document.write(`El numero mayor es: ${num3}`);
} else {
    document.write("Todos los numeros son iguales")
} */

// EJERCICIO 8

/* let numero = parseInt(prompt("Ingrese un numero"))

let calculo = (numero%2)

if(calculo === 0){
    document.write("El numero es divisible por 2")
} else {
    document.write("El numero no es divisible por 2")
} */


// EJERCICIO 9



/* function extrarVocales(frase){

    frase = frase.toLowerCase();
    let vocalesEncontradas = "";

    for(let i = 0; i < frase.length; i++){
        let caracter = frase.charAt(i);

        if (caracter === 'a' || caracter === 'e' || caracter === 'i' || caracter === 'o' || caracter === 'u'){
            vocalesEncontradas += caracter;
        }
    } 

    return vocalesEncontradas;
}

let frase = prompt("Ingrese una frase");

let vocales = extrarVocales(frase);

document.write(`Las vocales son ${vocales}`) */


// EJERCICIO 10

/* let numero = parseInt(prompt("Ingresa un numero"))

switch(true){
    case numero % 2 === 0: 
        document.write(`El ${numero} es divisible por 2`)
    break

    case numero % 3 === 0: 
        document.write(`El ${numero} es divisible por 3`)
    break

    case numero % 5 === 0: 
        document.write(`El ${numero} es divisible por 5`)
    break
    
    case numero % 7 === 0: 
        document.write(`El ${numero} es divisible por 7`)
    break
    default: document.write("El numero no es divisible por ninguno de los divisores")
} */

// EJERCICIO 11

let numero = parseInt(prompt("Introduce un numero"));

switch (true) {
    case (numero % 2 === 0 && numero % 3 === 0 && numero % 5 === 0 && numero % 7 === 0):
        document.write("El número " + numero + " es divisible por 2, 3, 5 y 7.");
        break;
    case (numero % 2 === 0 && numero % 3 === 0 && numero % 5 === 0):
        document.write("El número " + numero + " es divisible por 2, 3 y 5.");
        break;
    case (numero % 2 === 0 && numero % 3 === 0 && numero % 7 === 0):
        document.write("El número " + numero + " es divisible por 2, 3 y 7.");
        break;
    case (numero % 2 === 0 && numero % 5 === 0 && numero % 7 === 0):
        document.write("El número " + numero + " es divisible por 2, 5 y 7.");
        break;
    case (numero % 2 === 0 && numero % 3 === 0):
        document.write("El número " + numero + " es divisible por 2 y 3.");
        break;
    case (numero % 2 === 0 && numero % 5 === 0):
        document.write("El número " + numero + " es divisible por 2 y 5.");
        break;
    case (numero % 2 === 0 && numero % 7 === 0):
        document.write("El número " + numero + " es divisible por 2 y 7.");
        break;
    case (numero % 3 === 0 && numero % 5 === 0):
        document.write("El número " + numero + " es divisible por 3 y 5.");
        break;
    case (numero % 3 === 0 && numero % 7 === 0):
        document.write("El número " + numero + " es divisible por 3 y 7.");
        break;
    case (numero % 5 === 0 && numero % 7 === 0):
        document.write("El número " + numero + " es divisible por 5 y 7.");
        break;
    case (numero % 2 === 0):
        document.write("El número " + numero + " es divisible por 2.");
        break;
    case (numero % 3 === 0):
        document.write("El número " + numero + " es divisible por 3.");
        break;
    case (numero % 5 === 0):
        document.write("El número " + numero + " es divisible por 5.");
        break;
    case (numero % 7 === 0):
        document.write("El número " + numero + " es divisible por 7.");
        break;
    default:
        document.write("El número " + numero + " no es divisible por 2, 3, 5 o 7.");
}