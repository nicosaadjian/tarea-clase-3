// Tarea 1:
// Preguntarle al usuario su nombre.
// Si el nombre del usuario es el mismo que  el  de ustedes
// Imprimir "Hola, Tocayo! Yo también me llamo " y su nombre.
// Elijan otro nombre, puede ser de un pariente, amigo, conocido.
// Si el nombe del usuario es el mismo que el que nombre que eligieron
// Imprimir "Hola " y el nombre, " te llamás igual que mi ..."
// Si no, simplemente imprimir "Hola " + nombre!

//COMENTARIO MIO: Me estaba dando mal el resultado porque me
//habia olvidado de poner los parentesis a la funcion .toLowerCase()
/* 
let miNombre = "Nicolas";
let nombreAmigo = "Mole";
let nombreUsuario = (prompt("Cual es tu nombre?") || "").toLowerCase(); */
//let nombre = prompt("Cual es tu nombre?");

/* if (nombreUsuario === miNombre.toLowerCase()) {
	console.log(`Hola, Tocayo! Yo tambien me llamo ${miNombre}`);
} else if (nombreUsuario === nombreAmigo.toLowerCase()) {
	console.log(`Hola ${nombreUsuario}! Te llamas como mi amigo`);
} else if (nombreUsuario.trim().length === 0) {
	console.log(`Ingresa un nombre valido por favor`);
} else {
	console.log(`Hola ${nombreUsuario}!`);
} */

//console.log(nombre);
//console.log(nombreUsuario);

/* const MI_NOMBRE = 'fabricio';
const NOMBRE_MADRE = 'teresa';

const nombreUsuario = (prompt("Como te llamas?") || '').toLowerCase();

if (MI_NOMBRE === nombreUsuario){
    console.log
}

 */

//Tarea 2:
// Preguntar la edad del usuario
// Hacerle saber si tiene más, menos ó la misma edad que nosotros.

/* let preguntarEdad = Number(prompt("cuantos años tenes?"));
let miEdad = 23;

function decirEdad(edad) {
	if (edad === 23) {
		console.log("Tenemos la misma edad!");
	} else if (edad < 23) {
		console.log("Sos mas chicx que yo");
	} else if (edad > 23) {
		console.log("Sos mas grande que yo");
	} else {
		console.log("No ingresaste una edad valida");
	}
}

console.log(decirEdad(preguntarEdad)); */

//Tarea 3:
// Preguntarle al usuario si tiene documento, y que conteste con "si" o "no".
// Si dice si, preguntarle la edad.
// Si la edad es mayor a 18, dejarlo entrar al bar.
// Si la edad es menor a 18, no dejarlo entrar al bar.
// Si no tiene documento, no dejarlo entrar al bar.
// Si no entendemos la respuesta, le decimos que no entendimos la respuesta.
// Punto bonus: SI, NO, Si, No, si, no. //funcion .toLowerCase()

let preguntarDocumento = prompt("Tenes documento?").toLowerCase(); //Pregunta 1
let preguntarEdad = Number(prompt("Cuantos años tenes")); //Pregunta 2

function permitirIngreso(documento) {
	if (documento === "si") {
		if (preguntarEdad >= 18) {
			return "Podes pasar";
		} else if (preguntarEdad < 18) {
			return "NO PASAS, sos menor";
		} else {
			return "No entendi lo que pusiste";
		}
	} else if (documento === "no") {
		return "No podes pasar sin documento";
	} else {
		return "No entendi lo que pusiste";
	}
}

console.log(permitirIngreso(preguntarDocumento));
