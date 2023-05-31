console.log(document);
/** Desarrollo Ejercicio #1- Verificar Edad 
 * ENUNCIADO:
 * Crear una función que en base a la edad que ingreso el usuario devolver un mensaje 
 * si la persona es mayor de edad o no. Utilizar para la condición el operador ternario.
*/
function calcularEdad(){
    let resultado = document.querySelector('#resultado');
    let edad = document.querySelector('.edad');
    resultado = edad.value>=18?'Eres Mayor de Edad':'Eres Menor de Edad';
    document.getElementById('txtScreen').innerHTML = resultado;
}

/** Desarrollo Ejercicio #2- Calcular Nota Final 
 * ENUNCIADO:
 * Crear una función que determine la nota final de un alumno, la cual depende de lo siguiente: 
 * •	Examen =20%
 * •	tareas = 40%
 * •	asistencia = 10%
*  •	investigación = 30%
*  Al final deberá mostrar los datos del alumno, nombre, carnet y nota final.
*/
function CalNotaFin(){    
    let nombre = document.getElementById("nombre").value;
    let carnet = document.getElementById("carnet").value;
    let nota = parseFloat(document.getElementById("nota").value);    
    let examen = 0;
    let tareas = 0;
    let asisten = 0;
    let investig = 0;
    let sumanot = 0;
    let notatot = 0;
    let notafin = 0;

    examen = nota * 0.20;
    tareas = nota * 0.40;
    asisten = nota * 0.10;
    investig = nota * 0.30;

    sumanot= examen + tareas + asisten + investig;
    notatot = sumanot / 4;
    notafin = nota + notatot;

    txtScreen.HTML = document.getElementById('txtScreen');
    txtScreen.HTML.innerHTML = "<p>El Alumno: "   + nombre + "</p>" +
                               "<p> con Carnet No:  " + carnet + "</p>" +  
                               "<p> su Nota Final es: " + notafin + "</p>";
    
    //console.log(notafin);
}

/** Desarrollo Ejercicio #3- Calcular Aumento Salario de Trabajador 
 * ENUNCIADO:
 * CATEGORIA	AUMENTO
 *     A          15%
 *     B	      30%
 *     C	      10%
 *     D	      20%

 * Calcular el aumento de trabajador tomando en cuenta la tabla de categorías de aumento.
 * Para este ejercicio deberá de asignar las siguientes variables: Nombre, Salario, categoría y aumento. 
 * Deberá demostrar en html los datos del empleado y el aumento salarial.
*/
function aumentoSalario(nombre, salario, categoria){
    let aumento = 0;
    let porcentaje;
    let salariofin = 0;
    switch(categoria){
        case 'A':
            porcentaje = '15%'
            aumento = salario * 0.15;            
            salariofin = salario + aumento;
            break;
        case 'B':
            porcentaje = '30%'
            aumento = salario * 0.30;            
            salariofin = salario + aumento;
            break;
        case 'C':
            porcentaje = '10%'
            aumento = salario * 0.10;            
            salariofin = salario + aumento;
            break;
        default:
            categoria = 'D';
            porcentaje = '20%'
            aumento = salario * 0.20;            
            salariofin = salario + aumento;
            break;     
           
    }
    txtScreen.HTML = document.getElementById('txtScreen');
    txtScreen.HTML.innerHTML = "<p> El Trabajador: "   + nombre + "</p>" +
                               "<p> con salario de: " + salario + "</p>" +  
                               "<p> y Categoria: " + categoria + "</p>" + 
                               "<p> su aumento de Salario es del: " + porcentaje + "</p>" + 
                               "<p> y su nuevo Salario es de: " + salariofin + "</p>";
    //console.log(salariofin);
}

/** Desarrollo Ejercicio #4- Verificar Número Mayor
 * ENUNCIADO:
 * Crear una función que en base a 2 números enteros que ingrese el usuario, 
 * calcular cual número es el mayor y devolverlo. 
*/
function evaluarNumero(){
    let n1=parseInt(document.getElementById("num1").value);
    let n2=parseInt(document.getElementById("num2").value);
  
    if (n1>n2) {
        document.getElementById('txtScreen').innerHTML =  'El número mayor es '+n1;
    }else
    {
        document.getElementById('txtScreen').innerHTML =  'El número mayor es '+n2;
    }    
}
   
/** Desarrollo Ejercicio #5- Calcular Descuento Auto
 * ENUNCIADO:
 * Realizar una función para una tienda de coches en donde se deberá calcular: 
 * Si el coche a la venta es un FORD FIESTA, aplicar un 5% de descuento en la compra. 
 * Si el coche a la venta es un FORD FOCUS, el descuento será del 10% y 
 * si es un FORD ESCAPE el descuento será del 20%. 
 * Mostrar en html el coche seleccionado y el descuento que se 
 * aplicara en base a lo que selecciono el usuario.
*/
function descuentoAuto(auto){
    let descuento = 0;
    let precio = 0;
    let preciodes = 0;
    let preciototal = 0;
    let tipo;   
    switch(auto){
        case 'FORD FIESTA':
            tipo = "FORD FIESTA";
            descuento = '5%';
            precio = 22546.92;
            preciodes = Math.round(precio * 0.05);
            preciototal = precio - preciodes;
            break;
        case 'FORD FOCUS':
            tipo = "FORD FOCUS";
            descuento = '10%';
            precio = 27772.85;
            preciodes = Math.round(precio * 0.10);
            preciototal = precio - preciodes;
            break;
        default:
            tipo = "FORD ESCAPE";
            descuento = '20%';
            precio = 38455.00;
            preciodes = Math.round(precio * 0.20);
            preciototal = precio - preciodes;
            break;
            //parrafo.textcontent ="elige"
        }

    txtScreen.HTML = document.getElementById('txtScreen');
    txtScreen.HTML.innerHTML = "<h2>Datos de la Compra:</h2>" +
                               "<p> Auto a Comprar: " + tipo + "</p>" +  
                               "<p> Precio Venta: " + precio + "</p>" + 
                               "<p> Descuento: " + descuento + "</p>" + 
                               "<p> Nuevo Precio: " + preciototal + "</p>";
}

/** Desarrollo Ejercicio #6- Calcular Descuento Viajes
 * ENUNCIADO:
 * Crear una Función para calcular el descuento en viajes turísticos tomando en cuenta lo siguiente: 
 * Si el usuario introduce como origen la ciudad de Palma y como destino La costa del Sol, el descuento será de 5%, 
 * si el destino es Panchimalco el descuento será del 10% 
 * y si el destino es Puerto el Triunfo el descuento será del 15%.

*/
function descuentoViajes(destino){
    let descuento = 0;
    let precio = 0;
    let preciodes = 0;
    let preciototal = 0;
    let origen = 'La Palma';
    switch(destino){
        case 'Costa del Sol':
            tipo = "Costa del Sol";
            descuento = '5%';
            precio = 38.00;
            preciodes = Math.round(precio * 0.05);
            preciototal = precio - preciodes;
            break;
        case 'Panchimalco':
            tipo = "Panchimalco";
            descuento = '10%';
            precio = 12.85;
            preciodes = Math.round(precio * 0.10);
            preciototal = precio - preciodes;
            break;
        default:
            tipo = "Puerto El Triunfo";
            descuento = '15%';
            precio = 15.00;
            preciodes = Math.round(precio * 0.15);
            preciototal = precio - preciodes;
            break;
        }
    txtScreen.HTML = document.getElementById('txtScreen');
    txtScreen.HTML.innerHTML = "<h2>Datos de Viaje Turistico:</h2>" +
                               "<p> Lugar Origen: " + origen + "</p>" +  
                               "<p> Lugar Destino: " + destino + "</p>" +
                               "<p> Precio Venta: " + precio + "</p>" + 
                               "<p> Descuento: " + descuento + "</p>" + 
                               "<p> Nuevo Precio: " + preciototal + "</p>";
}

/** Desarrollo Ejercicio #7- Calculo de Nota Media
 * ENUNCIADO:
 * Realizar programa para una web, en el cual el usuario introduce 2 notas y su valor ponderado 
 * (como cuando un examen vale un 30% y otro examen el 70%). 
 * Pulsando el botón “Calcula”, la web muestra como resultado la nota media ponderada.

*/
function CalNotaPon(){    
    let nota1 = parseFloat(document.getElementById("nota1").value);   
    let nota2 = parseFloat(document.getElementById("nota2").value);  
    var porcentaje1 = parseFloat(document.getElementById('porcentaje1').value);
    var porcentaje2 = parseFloat(document.getElementById('porcentaje2').value);
    let notamed = 0;
    let notapor = 0;
    let notapon = 0;

    notamed = (nota1 * porcentaje1 + nota2 * porcentaje2);
    notapor = (porcentaje1 + porcentaje2);
    notapon = notamed / notapor;

    document.getElementById('txtScreen').innerHTML = "La nota media ponderada es: " + notapon.toFixed(2);
}

/** Desarrollo Ejercicio #8- Calculo de Temperatura Fahrenheit
 * ENUNCIADO:
 * Crear programa donde se introduce una temperatura en Celsius y salga el resultado en Fahrenheit, 
 * una vez teniendo la temperatura en Fahrenheit deberá devolver lo siguiente:
•	Si ºF está entre 14 y 32, sale la frase “Temperatura baja”
•	Si ºF está entre 32 y 68, sale la frase “Temperatura adecuada”
•	Si ºF está entre 68 y 96, sale la frase “Temperatura alta”
•	Si no está entre ningún caso anterior la frase “Temperatura desconocida”
*/
function CalTemperatura(){
    let temperaturaCelsius = parseFloat(document.getElementById('temperaturaCelsius').value);
    var temperaturaFahrenheit = temperaturaCelsius * 9 / 5 + 32;
    document.getElementById('txtScreen').innerHTML = "La temperatura en Fahrenheit es: " + temperaturaFahrenheit.toFixed(2);
    if (temperaturaFahrenheit >= 14 && temperaturaFahrenheit <= 32) {
        document.getElementById('mensaje').innerHTML = "Temperatura baja";
    } else if (temperaturaFahrenheit > 32 && temperaturaFahrenheit <= 68) {
        document.getElementById('mensaje').innerHTML = "Temperatura adecuada";
    } else if (temperaturaFahrenheit > 68 && temperaturaFahrenheit <= 96) {
        document.getElementById('mensaje').innerHTML = "Temperatura alta";
    } else {
        document.getElementById('mensaje').innerHTML = "Temperatura desconocida";
    }
   
}

/** Desarrollo Ejercicio #9- Verificando Números
 * ENUNCIADO:
 * Crear programa donde se introduce una temperatura en Celsius y salga el resultado en Fahrenheit, 
 * una vez teniendo la temperatura en Fahrenheit deberá devolver lo siguiente:
•	Si ºF está entre 14 y 32, sale la frase “Temperatura baja”
•	Si ºF está entre 32 y 68, sale la frase “Temperatura adecuada”
•	Si ºF está entre 68 y 96, sale la frase “Temperatura alta”
•	Si no está entre ningún caso anterior la frase “Temperatura desconocida”
*/

function verificarNumero(){
    let n1=parseInt(document.getElementById("num1").value);
    let n2=parseInt(document.getElementById("num2").value);
    let n3=parseInt(document.getElementById("num3").value);
    let n4=parseInt(document.getElementById("num4").value);
    let n5=parseInt(document.getElementById("num5").value);
    let n6=parseInt(document.getElementById("num6").value);
    let n7=parseInt(document.getElementById("num7").value);
    let n8=parseInt(document.getElementById("num8").value);
    let n9=parseInt(document.getElementById("num9").value);
    let n10=parseInt(document.getElementById("num10").value);
  
    if (n1>n2) {
        document.getElementById('txtScreen').innerHTML =  'El número mayor es '+n1;
    }else
    {
        document.getElementById('txtScreen').innerHTML =  'El número mayor es '+n2;
    }    
}