// 1. Crea un sistema de puntuación para un juego. Si la puntuación es mayor o igual a 100, 
 //muestra "¡Felicidades, has ganado!". En caso contrario, muestra "Intentalo nuevamente para ganar.".

let puntuacion = prompt( "ingresa tu puntuacion");

if(puntuacion >= 100) {
alert("Felicidades, has ganado");
}

else {
    alert("intentalo cuando sirvas para algo");
    }


//2. CODIGO NUMERO SECRETO:

    let numeroSecreto = 8;
let numeroUsuario = prompt("Me indicas un numero entre 1 y 10 porfavor:");


if (numeroUsuario==numeroSecreto) {
    //Acertamos, fue verdadera la condicion
    alert(`Acertaste, el numero es: ${numeroUsuario}`)
}

else {
    //La condicion no se cumplio
    alert("Lo siento,no acertaste el numero");
}
    

// 3. Pregunta al usuario qué día de la semana es.Si la respuesta es "Sábado" o "Domingo", muestra "¡Buen fin de semana!".
// De lo contrario, muestra "¡Buena semana!".

  let diaDeLaSemana = prompt('¿Qué día de la semana es?');
if (diaDeLaSemana === 'Sábado' || diaDeLaSemana === 'Domingo') {
    alert('¡Buen fin de semana!');
} else {
    alert('¡Buena semana!');
}

// 4. Verifica si un número ingresado por el usuario es positivo o negativo. Muestra una alerta informativa.

let numero = prompt ("Ingresa tu numero");


if (numero > 0){
alert("Tu numero es positivo");
}
else if (numero < 0){
alert("tu numero es negativo");
}
else{
    alert("tu numero es 0");
} 

// 5. Crea un mensaje que informe al usuario sobre el saldo de su cuenta,
// utilizando un template string para incluir el valor del saldo.

let saldo = 500;{
alert(`tu saldo es: ${saldo}`);
}

// 6. Pide al usuario que ingrese su nombre mediante un prompt. Luego, muestra una alerta de bienvenida usando ese nombre.

let nombre = prompt("Ingresa tu nombre");{
    alert(`Bienvenid@ sr@ ${nombre}`);
}

