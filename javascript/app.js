
/*por valor y por referencia*/
var a=1;
var b=a;

console.log(b);

a = 7;

console.log(b);

/*a pesar de haber cambiado el valor de a, b sigue valiendo 1 y lo seguirá haciendo siempre
esto se llama por valor. ESto sucede en variables de tipo PRIMITIVA*/

/*A continuación veremos un cambio por referencia donde el valor de B cambia con respecto
a "a", esto es por referencia. Esto sucede en variables por OBJETO*/

 var c = {
    nombre: "Maria"
 }

 var d = c;

 console.log(d)

 c.nombre = "Teresa";

 console.log(d);

 /*esto nos sirve para comprender que el valor de los objetos se actualiza de inmediato
 pero el cambio de valor en las variables primitivas no cambia en las copias de la variable
 original*/

 /*El siguiente ejemplo nos muestra cómo crear objetos dentro de objetos y cómo llamarlos
 por notación de punto y de corchetes*/

 var persona = {
    edad: 30,
    estatura: '1.75cm',
    dirección: {
        pais: 'Colombia',
        ciudad: 'Medellín',
        edificio: {
            nombre: 'Kamikaze',
            lugar: 'Carrera 108 # 33-45',

        }
    }
 }

 console.log(persona.dirección.edificio.lugar); /*notacion de punto en cadena*/
 console.log( persona ['edad']); /*notacion de corchete se usa solo para mostrar un campo
 en especifico*/

 /*vamos a aprender el uso de new para crear objetos a partir de una función constructora*/

 function Persona(nombre, edad){
    this.nombre = nombre;
    this.edad = edad;
 }

    var persona1 = new Persona('Maria', 30);

    console.log(persona1);

    /*con new se crea un nuevo objeto a partir de la función constructora, se le asigna el valor de los parámetros
    y se devuelve el objeto creado. Esto es útil para crear múltiples objetos con la misma estructura pero con diferentes valores.*/

/* vamos a aprender a crear prototipos de objetos para compartir propiedades y métodos entre objetos creados a partir de una función constructora*/

function Persona(){
   this.nombre = 'Maria';
   this.apellido = 'Gomez';
   this.edad = 30;

   /*console.log('Hola, soy ' + this.nombre + ' ' + this.apellido + ' y tengo ' + this.edad + ' años.');*/
}

Persona.prototype.saludar = function(){
   console.log('Hola, soy ' + this.nombre + ' ' + this.apellido + ' y tengo ' + this.edad + ' años.');
}

var fer = new Persona();

console.log(fer.saludar());

/*gracias a este prototipo, todos los objetos creados a partir de la función
 constructora Persona tendrán acceso al método saludar, lo que nos permite compartir 
 código y evitar la duplicación de funciones en cada objeto creado. Ahorramos espacio*/

 (function(){
 var sss = 10;
 })();




function identifica (parametro) {
    console.log(typeof parametro);
    console.log(parametro instanceof Persona);
}

function Persona(){
    this.nombre = "Maria";
    this.edad = 30;
}

var maria = new Persona();
identifica(maria);

/*en este ejemplo se muestra el uso de typeof para identificar el tipo de dato
y el uso de instanceof para identificar si un objeto es una instancia de una función constructora
en este caso, maria es una instancia de Persona, por lo tanto, devuelve true*/

/*----------------------------------------------------------------*/

/*Vamos aprender a hacer arreglos y algunas de sus funciones*/

var arr = [1, 2, 3, 4, 5];
console.log(arr);

console.log(arr[0], arr[2]); /*accedemos a los elementos del arreglo por su índice*/

arr.reverse(); /*invierte el orden de los elementos del arreglo*/
console.log(arr);

arr.push(6); /*agrega un elemento al final del arreglo*/
console.log(arr);

arr.join('-'); /*une los elementos del arreglo en una cadena, separados por el carácter especificado*/
console.log(arr.join('-'));

arr.splice(2, 1); /*elimina un elemento del arreglo en la posición especificada*/
console.log(arr);

arr.unshift(0); /*agrega un elemento al inicio del arreglo*/
console.log(arr);

console.log(arr.toString()); /*convierte el arreglo en una cadena, separando los elementos por comas*/

arr.pop(); /*elimina el último elemento del arreglo*/
console.log(arr);

arr.splice(3, 2, 90, 80); /*elimina elementos del arreglo a partir de la posición especificada y agrega nuevos elementos en su lugar*/
console.log(arr);

arr.slice(1, 4); /*devuelve una copia de una parte del arreglo, desde la posición especificada hasta la posición final especificada (sin incluirla)*/
console.log(arr.slice(1, 4));

/*continuamos con el uso de los arreglos, y como pueden abarcar diferentes tipos de datos*/

var arr = [
   true,
   {
      nombre: "Sebastián",
      apellido: "González"
   },
   function(){
      console.log("Hola, soy una función dentro de un arreglo");
   },
   function(persona){
      console.log("Hola, soy " + persona.nombre + " " + persona.apellido);
   },
   ["Sebastián", "Valentina", "Sofía", ["Pedro", "Vanessa", "Jerónimo"], "Mateo"]
];

console.log (arr);
console.log(arr[0]); /*accedemos al valor booleano*/
console.log(arr[1].nombre + " " + arr[1].apellido); /*accedemos al valor del objeto dentro del arreglo*/

arr[2](); /*ejecutamos la función dentro del arreglo*/

arr[3](arr[1]); /*ejecutamos la función dentro del arreglo, pasando el objeto como argumento*/
console.log(arr[4][3][1]); /*accedemos al valor del arreglo dentro del arreglo*/

/*----------------------------------------------------------------*/

/*aplicaremos parametros en una funcion y miraremos la operatividad de los parametros*/

var argument = 10;

function miFuncion(a,b,c,d){

   if( arguments.length !== 4 ){
      console.error("La función requiere 4 argumentos, pero se han proporcionado " + arguments.length);
      return;
   }

   console.log( a + b + c + d);
}

miFuncion(10, 20, 30, 40); /*ejecutamos la función con los argumentos correctos*/

miFuncion(10, 20); /*ejecutamos la función con menos argumentos de los requeridos*/

/*----------------------------------------------------------------*/

/*sobrecarga de operadores, en js no se puede, el nombre de la ultima funcion con el mismo nombre es la que prevalece*/

function crearProducto(nombre, precio){
   nombre = nombre || "Producto genérico";
   precio = precio || 0;

   console.log("Producto creado: " + nombre + " con precio: " + precio);
}

function crearProducto100(nombre){
   crearProducto(nombre, 100);
}

function crearPantalon(precio){
   crearProducto("Pantalón", precio);
}

crearProducto("Lápiz"); /*creamos un producto con el nombre especificado y el precio por defecto*/
crearProducto100("Cuchara"); /*creamos un producto con el nombre especificado y el precio de 100*/
crearPantalon(150); /*creamos un producto con el nombre de "Pantalón" y el precio especificado*/

/*-----------------------------------------------------------------*/

function crearFunciones(){

   var arr = [];
   var numero = 1;

   for(var numero = 1; numero<=5; numero++){
      arr.push(
         (function(numero){
            return function(){
               console.log(numero);
            }
         })(numero)
      );
   }

   return arr;
}

var funciones = crearFunciones();

funciones[0](); /*imprime 1*/
funciones[1]();   /*imprime 2*/
funciones[2]();   /*imprime 3*/

/*------------------------------------------------------------------*/
/*objeto number, con sus propiedades y métodos*/

var e= new Number(10.484568); /*creamos un objeto number con el valor de 10.484568*/

console.log(e); /*imprime el valor del objeto number*/
console.log(e.toString()); /*convierte el número a una cadena de texto*/
console.log(e.toFixed(2)); /*devuelve una cadena que representa el número con un número específico de decimales*/
console.log(e.toPrecision(3)); /*devuelve una cadena que representa el número con un número específico de dígitos significativos*/

/*-------------------------------------------------------------------*/
/*Vamos a aprender sobre el objeto string, con sus propiedades y métodos*/

var d = "Gonzalez";
var e  = new String("Juan Sebastián"); /*creamos un objeto string con el valor de "Gonzalez"*/
console.log(e); /*imprime el valor del string*/

console.log(e.toUpperCase()); /*convierte el string a mayúsculas*/
console.log(e.toLowerCase()); /*convierte el string a minúsculas*/

var i = e.indexOf("Sebastián"); /*encuentra la posición de la subcadena "Sebastián" en el string*/
console.log(i); /*imprime la posición de la subcadena*/  

i = e.lastIndexOf("a"); /*encuentra la última posición de la subcadena "a" en el string*/
console.log(i); /*imprime la última posición de la subcadena*/ 

var split= e.split(" "); /*divide el string en un array de caracteres*/
console.log(split); /*imprime el array de caracteres*/
console.log(split.length); /*imprime la longitud del array de caracteres*/

var substring = e.substring(5, 10); /*devuelve una parte del string entre las posiciones especificadas*/
console.log(substring); /*imprime la parte del string devuelta por substring*/

document.write(e.italics()); /*devuelve el string con formato de cursiva*/

/*-------------------------------------------------------------------*/


/*Funciones con fecha*/

var hoy = new Date(); /*creamos un objeto date con la fecha y hora actual*/
var fMili = new Date(10000000000000); /*creamos un objeto date con una fecha específica en milisegundos desde el 1 de enero de 1970*/
var fFija = new Date(1952, 3, 21, 45, 12, 23, 4); /*creamos un objeto date con una fecha específica, en este caso el 21 de abril de 1952 (los meses empiezan desde 0)*/

console.log(hoy); /*imprime la fecha y hora actual*/
console.log(fMili); /*imprime la fecha correspondiente a los milisegundos especificados*/
console.log(fFija); /*imprime la fecha especificada*/ 

console.log(hoy.getFullYear()); /*devuelve el año de la fecha*/
console.log(hoy.getMonth()); /*devuelve el mes de la fecha (los meses empiezan desde 0)*/
console.log(hoy.getDate()); /*devuelve el día del mes de la fecha*/
console.log(hoy.getHours()); /*devuelve la hora de la fecha*/
console.log(hoy.getMinutes()); /*devuelve los minutos de la fecha*/
console.log(hoy.getSeconds()); /*devuelve los segundos de la fecha*/
console.log(hoy.getMilliseconds()); /*devuelve los milisegundos de la fecha*/

var inicio = new Date(); /*creamos un objeto date con la fecha y hora actual*/

for(var i=0; i<15000; i++){ /*realizamos un ciclo que se ejecute 15000 veces para medir el tiempo que tarda en ejecutarse*/
   console.log("algo...");
}

var fin = new Date(); /*creamos un objeto date con la fecha y hora actual después de ejecutar el ciclo*/

console.log (inicio); /*imprime la fecha y hora de inicio*/
console.log (fin); /*imprime la fecha y hora de fin*/

var duration = fin.getTime() - inicio.getTime(); /*calculamos la duración del ciclo en milisegundos*/
console.log("Duración del ciclo: " + duration + " milisegundos"); /*imprime la duración del ciclo en milisegundos*/
console.log("Duracion en segundos: " + (duration / 1000) + " segundos"); /*imprime la duración del ciclo en segundos*/
 
var fecha = new Date(2016, 9, 20); /*creamos un objeto date con una fecha específica, en este caso el 20 de octubre de 2016*/
console.log(fecha); /*imprime la fecha especificada*/

fecha.setDate(25); /*cambia el día del mes de la fecha a 25*/
console.log(fecha); /*imprime la fecha con el día cambiado a 25*/

Date.prototype.sumarDias = function(dias){ /*creamos un método para sumar días a una fecha*/
   this.setDate(this.getDate() + dias);
   return this; /*devolvemos la fecha con los días sumados*/
}
console.log(fecha); /*imprime la fecha actual, que es el resultado de haber cambiado el día a 25*/
console.log(fecha.sumarDias(5)); /*sumamos 5 días a la fecha y la imprimimos*/   
console.log(fecha.sumarDias(-10)); /*restamos 10 días a la fecha y la imprimimos*/  

Date.prototype.sumaranios = function(anios){ /*creamos un método para sumar años a una fecha*/
   this.setFullYear(this.getFullYear() + anios);
   return this; /*devolvemos la fecha con los años sumados*/
}
console.log(fecha); /*imprime la fecha actual, que es el resultado de haber sumado días a la fecha anterior*/
console.log(fecha.sumaranios(2)); /*sumamos 2 años a la fecha y la imprimimos*/
console.log(fecha.sumaranios(-5)); /*restamos 5 años a la fecha y la imprimimos*/

/*-------------------------------------------------------------------*/

/*Objeto math, con sus propiedades y métodos*/
/*windows.math es un objeto global que proporciona propiedades y métodos para realizar operaciones matemáticas.*/

var PI = Math.PI; /*devuelve el valor de pi*/
var E = Math.E; /*devuelve el valor de euler*/

console.log(PI); /*imprime el valor de pi*/
console.log(E); /*imprime el valor de euler*/   

var num1 = 10.56789;

console.log(num1);
console.log(Math.round(num1)); /*redondea el número al entero más cercano*/
console.log(Math.round(num1 * 100) / 100); /*redondea el número a dos decimales*/
console.log(Math.floor(num1)); /*redondea el número hacia abajo al entero más cercano*/

var rnd = Math.random(); /*devuelve un número aleatorio entre 0 (inclusive) y 1 (exclusive)*/
console.log(rnd); /*imprime el número aleatorio generado*/

function randomEntre(min, max){ /*creamos una función para generar un número aleatorio entre un rango específico*/
   return Math.floor(Math.random() * (max - min + 1)) + min; /*devuelve un número aleatorio entre min y max, ambos inclusive*/
};
console.log(randomEntre(200, 400)); /*imprime un número aleatorio entre 200 y 400*/
console.log (Math.sqrt(16)); /*devuelve la raíz cuadrada de un número*/
console.log (Math.pow(2, 3)); /*devuelve el resultado de elevar un número a una potencia específica*/

/*--------------------------------------------------------------------*/

/* EXPRESIONES REGULARES, son patrones utilizados para buscar y manipular cadenas de texto.*/

/*var reg1 = RegExp("a"); /*creamos una expresión regular utilizando el constructor RegExp, que busca la letra "a" en una cadena de texto*/
var reg2 = /a/; /*creamos una expresión regular utilizando la sintaxis de barra, que busca la letra "a" en una cadena de texto*/

var texto = "Hola, mi nombre es Sebastián González y me gusta la programación.";

var arr = texto.match(reg2); /*buscamos la primera ocurrencia de la letra "a" en el texto utilizando la expresión regular reg2*/

/*var arr = texto.match( /^a/); /*buscamos la letra "a" al inicio del texto utilizando la expresión regular reg2*/
/*var arr = texto.match( /a$/); /*buscamos la letra "a" al final del texto utilizando la expresión regular reg2*/
/*var arr = texto.match( /.../); /*buscamos cualquier secuencia de tres caracteres en el texto utilizando la expresión regular reg2 con el modificador g (global)*/
/*var arr = texto.match( /.o/); /*buscamos cualquier secuencia de dos caracteres que termine con "o" en el texto utilizando la expresión regular reg2 con el modificador g (global)*/
/*var arr = texto.match( /[0-9]/); /*buscamos cualquier dígito en el texto utilizando la expresión regular reg2 con el modificador g (global)*/
/*var arr = texto.match( /a-z/); /*buscamos cualquier letra minúscula en el texto utilizando la expresión regular reg2 con el modificador g (global)*/
/*var arr = texto.match( /[aeiou].$/); /*buscamos cualquier vocal seguida de cualquier carácter al final del texto utilizando la expresión regular reg2 con el modificador g (global)*/
/*var arr = texto.match( /a-zA-Z/); /*buscamos cualquier letra en el texto utilizando la expresión regular reg2 con el modificador g (global)*/
/*var arr = texto.match( /\s/); /*buscamos cualquier carácter de espacio en el texto utilizando la expresión regular reg2 con el modificador g (global)*/
/*var arr = texto.match( /\w/); /*buscamos cualquier carácter alfanumérico en el texto utilizando la expresión regular reg2 con el modificador g (global)*/
/*var arr = texto.match( /\d/); /*buscamos cualquier dígito (número) en el texto utilizando la expresión regular reg2 con el modificador g (global)*/
/*var arr = texto.match( /[aeiou]/g); /*buscamos cualquier vocal en el texto utilizando la expresión regular reg2 con el modificador g (global)*/
/*var arr = texto.match( /[aeiou]/ig); /*buscamos cualquier vocal en el texto utilizando la expresión regular reg2 con los modificadores i (ignore case) y g (global)*/
/*var arr = texto.match( /0+/g); /*buscamos cualquier secuencia de ceros en el texto utilizando la expresión regular reg2 con el modificador g (global)*/
/*var arr = texto.match( /o?/g); /*buscamos cualquier secuencia de "
/*var arr = texto.match( /o{2}/); /*buscamos cualquier secuencia de dos "o" en el texto utilizando la expresión regular reg2 con el modificador g (global)*/
/*var arr = texto.match( /\d/|respuesta/g); /*buscamos cualquier dígito o la palabra "respuesta" en el texto utilizando la expresión regular reg2 con el modificador g (global)*/
/*var arr = texto.match( /o{2,5}/g); /*buscamos cualquier secuencia de
/*var arr = texto.match( /a/g); /*buscamos todas las ocurrencias de la letra "a" en el texto utilizando la expresión regular reg2 con el modificador g (global)*/
console.log(arr); /*imprime el resultado de la búsqueda, que es un array con la letra "a" encontrada*/

/*--------------------------------------------------------------------*/
/*USO DEL ";"*/
/*En JavaScript, el punto y coma (;) se utiliza para separar las instrucciones. Aunque en algunos casos es opcional, es recomendable usarlo para evitar 
errores de interpretación por parte del motor de JavaScript. El punto y coma indica el final de una instrucción, lo que ayuda a mejorar la legibilidad del código y a prevenir problemas de ejecución. 
Es especialmente importante en situaciones donde las instrucciones están en la misma línea o cuando se utilizan estructuras de control como bucles o condicionales.*/

function getNumero(){
   return 10;
}

console.log(getNumero()); /*imprime el número 10 devuelto por la función getNumero*/


/*--------------------------------------------------------------------*/
/*COMENTARIOS EN JAVASCRIPT*/
/*hay otra manera de hacer comentarios en js, con "//" para comentarios de una sola línea*/

// kmklmklmk....

//Al subir el codigo a la web, no me conviene que la gente lo vea. Se puede usar smaller,
//  se carga el codigo y se muestra el resultado, pero no el codigo. Es una forma de proteger el codigo, aunque no es infalible, 
// ya que alguien con conocimientos puede acceder al codigo fuente de la página web. 
// Sin embargo, es una medida de seguridad básica para evitar que el código sea fácilmente visible para los usuarios comunes.
/*Existe compressor, un programa 


/*--------------------------------------------------------------------*/

//manejo de errors en js
//el try catch se usa cuando quiero prevenir posibles errores que no puedo controlar, para los quie puedo controlar no se usa.

try {
   // Código que puede generar un error
   var resultado = 10 / 0 ; // Esto generará un error de división por cero
   console.log(resultado);
} catch (e) {
   // Código para manejar el error
   console.log("Error de catch: " + e);
}
finally {
   // Código que siempre se ejecuta, independientemente de si hubo un error o no
   console.log("Este código siempre se ejecuta");
}


try {
   throw new Error("Este es un error personalizado"); // Lanzamos un error personalizado y se verá en el "e"
   console.log("esta parte nunca se ejecutará");
}
catch (e) {
   console.log("Error de catch: " + e.message); // Imprime el mensaje del error personalizado
}
finally {
   console.log("Este código siempre se ejecuta");
}


/*--------------------------------------------------------------------*/

//COOKIES, son pequeños archivos de texto que se almacenan en el navegador del usuario para guardar información sobre su sesión, preferencias o actividad en un sitio web.
//se debe correr en un servidor local para que funcione, no se puede correr en un archivo local, ya que las cookies no funcionan en archivos locales por razones de seguridad.

document.cookie = "nombre=Juan Sebastián"; /*creamos una cookie con el nombre "nombre" y el valor "Juan Sebastián"*/

var cookies = document.cookie;
console.log(cookies); /*imprime todas las cookies almacenadas en el navegador*/

//se debe ponerles una fecha de expiracion. Algunas solo cierran al cerrar el navegador, pero otras pueden tener una fecha de expiracion para que se mantengan por un tiempo determinado.

//si busco en chrome (chrome://settings/cookies) puedo ver las cookies almacenadas en el navegador, y puedo eliminarlas si quiero. 

function crearCookie(nombre, valor) {
   valor = escape(valor); /*escapamos el valor para evitar problemas con caracteres especiales*/
   var hoy = new Date();
   hoy.setMonth(hoy.getMonth() + 1); /*establecemos la fecha de expiracion de la cookie a un mes a partir de hoy*/
   document.cookie = nombre + "=" + valor + "; expires=" + hoy.toUTCString(); /*creamos la cookie con el nombre, valor y fecha de expiracion*/
}

function borrarCookie(nombre) {
   var hoy = new Date();
   hoy.setMonth(hoy.getMonth() -1); /*establecemos la fecha de expiracion de la cookie a un mes atrás para eliminarla*/
   document.cookie = nombre + "=; expires=" + hoy.toUTCString(); /*creamos la cookie con el nombre y una fecha de expiracion pasada para eliminarla*/
}

function getCookie(nombre){
   var cookies = document.cookie;
   var cookieArr =cookies.split(";"); /*dividimos las cookies en un array de cookies individuales*/
   console.log(cookieArr); /*imprime el array de cookies individuales*/
   
   for( var i=0; i<cookieArr.length; i++){
      var parArr = cookieArr[i].split("="); /*dividimos cada cookie en un array de nombre y valor*/
      cookieArr[i] = parArr; /*reemplazamos cada cookie en el array de cookies individuales por su array de nombre y valor*/

      if( parArr[0] === nombre){
         return unescape(parArr[1]); /*devuelve el valor de la cookie con el nombre especificado, escapando los caracteres especiales*/
      }
   
   }
   
   return undefined; /*devuelve undefined si no se encuentra la cookie con el nombre especificado*/

}

crearCookie("nombre", "Sebastian"); /*creamos una cookie con el nombre "nombre" y el valor "Sebastian"*/
borrarCookie("nombre"); /*eliminamos la cookie con el nombre "nombre"*/



/*uso del bind para crear una función con un contexto específico*/

var carro = {
   color: "rojo",
   marca: "Toyota",
   modelo: "Corolla",
   imprimir: function(){
      var salida = this.marca + " - " + this.color;
      return salida;
   }
}

console.log(carro.imprimir());

var logCarro = function( arg1, arg2){

   console.log("carro: " + this.imprimir() )
   console.log("argumentos: ", arg1, arg2);
}

var ahoraLogCarro = logCarro.bind(carro); /*creamos una nueva función llamada ahoraLogCarro que es el resultado de aplicar el método bind a la función logCarro, pasando el objeto carro como contexto. Esto significa que cuando llamemos a ahoraLogCarro, el valor de this dentro de logCarro se referirá al objeto carro, lo que nos permitirá acceder a sus propiedades y métodos desde logCarro.*/
ahoraLogCarro("abc", "xyz"); /*imprime el resultado de la función logCarro con el contexto del objeto carro y los argumentos especificados*/

//otra manera de hacerlo es usando call o apply, pero bind es más recomendable porque devuelve una nueva función con el contexto específico, mientras que call y apply ejecutan la función inmediatamente con el contexto especificado.

ahoraLogCarro.call(carro, "123", "456"); /*ejecuta la función logCarro con el contexto del objeto carro y los argumentos especificados*/
ahoraLogCarro.apply(carro, ["ggg", "hhh"]); /*ejecuta la función logCarro con el contexto del objeto carro y los argumentos especificados, pero en este caso los argumentos se pasan como un array*/

//para que sirve? para funciones prestadas 

/* if else*/

var edad = 18;

if(edad < 18){
   console.log("menor de edad");
} else {
   console.log("mayor de edad");
}

//hay otar manera de hacerlo

var rr =10;
var ss=20;

var vv = (rr < ss) ? rr : ss; /*operador ternario, es una forma abreviada de escribir un if else. Si la condición rr < ss es verdadera, vv tomará el valor de rr, de lo contrario, vv tomará el valor de ss*/
console.log(vv); /*imprime el valor de vv, que es el menor de los dos números*/

function getAlguno(nombre){
   var nomb = nombre || "Desconocido"; /*si el valor de nombre es falsy (undefined, null, 0, "", etc.), nomb tomará el valor de "Desconocido", de lo contrario, tomará el valor de nombre*/
   console.log(nomb); /*imprime el valor de nomb, que es el valor de nombre o "Desconocido" si nombre es falsy*/
}


/*switch*/

var mes = 20; ;

switch(mes){
   case (10<5? 40:1) : /*en este caso, la condición 10<5 es falsa, por lo tanto, el valor de la case será 1, y como mes es igual a 40, no se ejecutará ningún case*/
      console.log("Enero");
      break;

   case 2:
      console.log("Febrero");
      break;      

   case 3:
      console.log("Marzo");
      break;

   case 4:
      console.log("Abril");
      break;
   
   default:
      console.log("Mes no válido");
}


/*JSON y breve historia*/

//se puede convertir un objeto a JSON con JSON.stringify() y convertir un JSON a un objeto con JSON.parse()

var objetoJS = {
   nombre: "Sebastian",
   edad: 30,
   ciudad: "Medellin"
}

console.log("Objeto litera", objetoJS); /*imprime el objeto literal*/

var jsonString = JSON.stringify(objetoJS); /*convierte el objeto literal a una cadena JSON*/
console.log(jsonString); /*imprime la cadena JSON*/

var objetoDesdeJSON = JSON.parse(jsonString); /*convierte la cadena JSON de vuelta a un objeto literal*/
console.log("Objeto desde JSON", objetoDesdeJSON); /*imprime el objeto literal creado a partir de la cadena JSON*/


/*ciclo while*/

var i = 0;

while (i<=6){
   i++;

   if (i === 4){
      continue; /*si i es igual a 4, se salta el resto del código dentro del ciclo y se continúa con la siguiente iteración*/
      /*break;*/ /*si i es igual a 4, se rompe el ciclo y no se ejecuta el resto del código dentro del ciclo*/
   }
   console.log(i);
   
}

/*for y for in*/

for(var j=0; j<=5; j++){

   if(j === 4){
      break; /*si j es igual a 4, se rompe el ciclo y no se ejecuta el resto del código dentro del ciclo*/
   }

   console.log(j);
}

//for in se usa para iterar sobre las propiedades de un objeto, no se recomienda usarlo para iterar sobre los elementos de un array, ya que puede generar resultados inesperados.
 
var Persona = function(){
   this.nombre = "Juan";
   this.apellido = "Gonzalez";
   this.edad = 30;
};

var juan = new Persona();
for(var prop in juan){
   console.log(prop + ": " + juan[prop]); /*imprime el nombre de la propiedad y su valor para cada propiedad del objeto juan*/
}

//juan.prototype.direccion = "Medellín"; /*agregamos una propiedad al prototipo de Persona, lo que hace que esta propiedad esté disponible para todos los objetos creados a partir de Persona, incluyendo juan*/


for( prop in juan){
   if(juan.hasOwnProperty(prop)){ /*verificamos que la propiedad sea propia del objeto juan y no heredada de su prototipo*/
      console.log(prop + ": " + juan[prop]); /*imprime el nombre de la propiedad y su valor para cada propiedad propia del objeto juan*/
   }
}

for( num in [1,2,3,4,5,6,7,8,9,10]){
   console.log(num); /*imprime el índice de cada elemento del array, no se recomienda usar for in para iterar sobre arrays, ya que puede generar resultados inesperados*/
}

[1,2,false,4,5,true,7,8,9,"10"].forEach(function(val){
   console.log(val); /*imprime el valor de cada elemento del array, se recomienda usar forEach para iterar sobre arrays*/
});


/*ROTULACION DE CICLOS*/

var k = 0;

bucle1: while(k<3){
   console.log("Bucle 1, k = " + k);
   var j = 0;
   bucle2: while(j<3){
      console.log("Bucle 2, j = " + j);
      if(j === 1){
         break bucle1; /*si j es igual a 1, se rompe el bucle1, lo que hace que se termine la ejecución de ambos bucles*/
      }
      j++;
   }
   k++;
}  

/*funciones de tiempo en js*/

setTimeout(function(){
   console.log("Esto se ejecuta después de 2 segundos");
}, 2000); /*ejecuta la función después de un tiempo especificado en milisegundos, en este caso, después de 2000 milisegundos (2 segundos)*/

var segundos = 0;
var intervalo = setInterval(function(){
   segundos++;
   console.log("Han pasado " + segundos + " segundos");

   if(segundos === 5){
      clearInterval(intervalo); /*detiene la ejecución del intervalo después de 5 segundos*/
   }
}, 1000); /*ejecuta la función repetidamente cada cierto tiempo especificado en milisegundos, en este caso, cada 1000 milisegundos (1 segundo)*/


var juan = {
   nombre: "Juan",
   edad: 30,
   imprimir: function(){

      var self = this; /*guardamos el valor de this en una variable para poder acceder a él dentro de la función anidada*/

      setTimeout(function(){
         console.log("Hola, soy " + self.nombre + " y tengo " + self.edad + " años."); /*accedemos a las propiedades del objeto juan utilizando la variable self*/
      }, 2000);
   }
}

juan.imprimir(); /*ejecuta el método imprimir del objeto juan, que a su vez ejecuta una función después de 2 segundos que imprime un mensaje utilizando las propiedades del objeto juan*/

/*los eventos son acciones o sucesos que ocurren en el navegador, como hacer clic en un botón, cargar una página, mover el mouse, etc. Los eventos permiten a los desarrolladores crear interactividad en sus páginas web al responder a las acciones del usuario o a cambios en el estado de la página. En JavaScript, se pueden manejar eventos utilizando métodos como addEventListener para asignar funciones que se ejecutarán cuando ocurra un evento específico. Por ejemplo, se puede usar addEventListener para ejecutar una función cuando un usuario haga clic en un botón, lo que permite realizar acciones como mostrar un mensaje, cambiar el contenido de la página o enviar datos a un servidor.*/
//en los recursos del curso estan los eventos para js

function evento( arg){
   console.log("me disparé");//disopara el evento con un clic en el botón con id "myButton"
   console.log( arg );  
} 

function evento2( arg){
   console.log("me disparé 2"); //dispara el evento copn doble clic en el botón con id "myButton2"
   console.log( arg );  
}

function evento3( arg){
   console.log("me disparé 3"); //dispara el evento con el mouseout en el input de texto, es decir, cuando el mouse sale del input de texto, se dispara el evento
   console.log( arg ); 
}

function evento4( arg){
   console.log("me disparé 4");
   console.log( arg.x, arg.y ); //dispara el evento con el mousemove en el input de texto, es decir, cuando el mouse se mueve dentro del input de texto, se dispara el evento y se muestra la posición del mouse en la consola
}

var objeto = document.getElementById("objDemo"); /*obtenemos el elemento con id "myButton" para asignarle un evento*/

/*objeto.addEventListener("click", evento);*/ /*asignamos el evento de clic al elemento, de modo que cuando se haga clic en el elemento, se ejecutará la función evento*/

//es una manera de asignar eventos a los elementos del DOM, lo que permite crear interactividad en la página web al responder a las acciones del usuario. En este caso, se asigna un evento de clic al elemento con id "objDemo", lo que hace que se ejecute la función evento cada vez que se haga clic en ese elemento.


/*bloquear el clic derecho del mouse en la página web*/

document.onmousedown = function(arg){

   if(arg.button===2){
   alert("Click bloqueado"); /*muestra una alerta cada vez que se hace clic con el botón derecho del mouse en la página web*/
   return;
   }
   console.log("no hay problema"); /*imprime el evento del clic en la consola, lo que puede ser útil para depurar o analizar el comportamiento del clic bloqueado*/

}

document.onmouseup = function(){
   var texto=window.getSelection().toString(); /*obtiene el texto seleccionado por el usuario en la página web*/
   console.log("Texto seleccionado: " + texto); /*imprime el texto seleccionado en la consola, lo que puede ser útil para depurar o analizar el comportamiento de la selección de texto en la página web*/  
}

/*el metodo onsubmit se utiliza para manejar el evento de envío de un formulario. Cuando un usuario envía un formulario, se ejecuta la función asignada a onsumbit, lo que permite realizar acciones como validar los datos del formulario, mostrar mensajes de error o enviar los datos a un servidor. Por ejemplo, se puede usar onsumbit para evitar que un formulario se envíe si los campos requeridos no están completos, mostrando un mensaje de error al usuario. Esto mejora la experiencia del usuario al proporcionar retroalimentación inmediata sobre los errores en el formulario antes de que se intente enviar la información.*/

//ya existen metodos para hacer lo siguiente en angular u otroas frameworks, pero es importante entender cómo funciona el manejo de eventos en JavaScript para poder utilizarlo de manera efectiva en el desarrollo web.

function validar(){
   var nombre = document.getElementById("txtnombre").value; /*obtenemos el valor del campo de texto con id "nombre" para validar que no esté vacío*/
   var apellido = document.getElementById("txtapellido").value; /*obtenemos el valor del campo de texto con id "apellido" para validar que no esté vacío*/

   if(nombre.length<1){
      return false; /*si el campo de texto "nombre" está vacío, se devuelve false para evitar que el formulario se envíe*/
   }
   if(apellido.length<1){
      return false; /*si el campo de texto "apellido" está vacío, se devuelve false para evitar que el formulario se envíe*/  
   }
   return true; /*si ambos campos de texto tienen al menos un carácter, se devuelve true para permitir que el formulario se envíe*/
}

console.log(window.location.search); /*imprime la cadena de consulta de la URL actual, que es la parte de la URL que sigue al signo de interrogación (?) y contiene los parámetros de búsqueda*/


//en el material adjunto se encuentra una funcion para obtener parametro del url, que puede ser útil para manejar eventos relacionados con la URL, como obtener valores de parámetros de búsqueda para personalizar el contenido de la página o realizar acciones específicas según los parámetros proporcionados en la URL.



/*cajas de dialogo en js*/
//js cuanta con 3 tipos de estas, pero se recomienda usar unas fabricadas por los navegadores, como las de bootstrap o materialize, ya que son más personalizables y tienen un mejor diseño.
alert("Hola, esto es una alerta"); /*muestra una alerta con el mensaje especificado, bloqueando la interacción con la página hasta que el usuario cierre la alerta*/

var acepto = confirm("¿Aceptas los términos y condiciones?"); /*muestra una ventana de confirmación con el mensaje especificado y dos botones: "Aceptar" y "Cancelar". Devuelve true si el usuario hace clic en "Aceptar" y false si hace clic en "Cancelar". Es útil para obtener una respuesta del usuario antes de realizar una acción, como eliminar un elemento o enviar un formulario.*/

console.log(acepto); /*imprime el valor de acepto, que es true si el usuario aceptó los términos y condiciones, o false si no los aceptó*/
 
var nombre = prompt("¿Cuál es tu nombre?"); /*muestra una ventana de entrada con el mensaje especificado y un campo de texto para que el usuario ingrese su respuesta. Devuelve la cadena de texto ingresada por el usuario, o null si el usuario cancela la entrada. Es útil para obtener información del usuario de manera interactiva, como su nombre, edad o cualquier otro dato que se necesite para personalizar la experiencia en la página web.*/

console.log(nombre); /*imprime el valor de nombre, que es la cadena de texto ingresada por el usuario o null si el usuario canceló la entrada*/
/*alert, muestra un mensaje al usuario en una ventana emergente con un botón de "Aceptar". Es útil para mostrar información importante o advertencias, pero no permite al usuario interactuar con la página hasta que cierre la ventana de alerta.*/

//se recomienda usar el sweetalert, que es una librería de JavaScript que permite crear alertas personalizadas y más atractivas visualmente que las alertas nativas del navegador. SweetAlert ofrece una amplia variedad de opciones para personalizar el diseño, los botones y el comportamiento de las alertas, lo que lo convierte en una excelente opción para mejorar la experiencia del usuario al mostrar mensajes importantes o interactuar con ellos de manera más efectiva.
//tambien javascript notifications, que son una forma de mostrar mensajes al usuario fuera de la ventana del navegador, como en el escritorio o en la barra de tareas. Las notificaciones pueden ser útiles para alertar al usuario sobre eventos importantes, como la llegada de un nuevo mensaje, una actualización disponible o cualquier otra información relevante. Para usar las notificaciones en JavaScript, se puede utilizar la API de Notificaciones, que permite crear y mostrar notificaciones personalizadas con diferentes opciones de diseño y comportamiento. Es importante tener en cuenta que el uso de notificaciones requiere el permiso del usuario, por lo que es necesario solicitarlo antes de mostrar cualquier notificación.


/* hacer que js sea estricto, para eso se debe poner "use strict"; al inicio del archivo o de una función, lo que hace que el código se ejecute en modo estricto, lo que ayuda a prevenir errores comunes y a mejorar la seguridad del código. En modo estricto, se prohíben ciertas prácticas como el uso de variables no declaradas, la asignación a variables read-only, la eliminación de variables o funciones, entre otras restricciones que ayudan a evitar errores y a escribir un código más limpio y seguro. Es recomendable usar "use strict"; en todos los archivos de JavaScript para aprovechar sus beneficios y mejorar la calidad del código.*/
// sin embargo, es importante tener en cuenta que el modo estricto puede generar errores en código antiguo o en bibliotecas que no estén diseñadas para ser compatibles con él, por lo que es necesario revisar y adaptar el código existente antes de habilitar el modo estricto en un proyecto.

//es importando usarlo encapsulado para que no afecte todo el archivo, sino solo la función o el bloque de código donde se necesite, lo que permite aprovechar sus beneficios sin generar problemas de compatibilidad con código antiguo o bibliotecas que no estén diseñadas para ser compatibles con el modo estricto.




