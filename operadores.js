//OPERADOR &&

let edad = 25;
let tieneLicencia = true;

// si la edad es mayor de 18 y tiene una licencia...
if (edad > 18&& tieneLicencia) {
  console.log("Puede conducir!");
} else {
  console.log("No puede conducir!");
}

// OPERADOR OR ||

let santy = true;
let sofia = false;

 if(santy||sofia){
 console.log("son hermanos");
 }

 else{
  console.log("Son personas");

 }

//

 let tieneManzana = false;
 let tieneBanana = false;

if (tieneManzana|| tieneBanana) {
  console.log("Tienes frutas!");
} else {
  console.log("No tienes frutas.");
}

//Operador "?"

let palabraPersona = (cantidadPersonas == 1) ? "persona" : "personas"; 