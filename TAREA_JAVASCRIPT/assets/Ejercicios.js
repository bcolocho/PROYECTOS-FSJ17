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

/** Ejercicio #2
 * Crear una función que determine la nota final de un alumno, la cual depende de lo siguiente: 
 * Examen =20%
 * tareas = 40%
 * asistencia = 10%
 * investigación = 30%
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
    txtScreen.HTML.innerHTML = "<p>Alumno(a): "   + nombre + "</p>" + "<p> con Carnet No:  " + carnet + "</p>" +  "<p> su Nota Final es: " + notafin + "</p>";
    
    //console.log(notafin);
}


/**Ejercicio #3
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
    txtScreen.HTML.innerHTML = "<p> El Trabajador: "   + nombre + "</p>" + "<p> con salario de: " + salario + "</p>" +  "<p> Categoria: " + categoria + "</p>" + "<p> EL aumento de Salario es de: " + porcentaje + "</p>" + "<p> Nuevo Salario es de: " + salariofin + "</p>";
   
}


/**Ejercicio #4
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

   
/**Ejercicio #5-
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
        }

    txtScreen.HTML = document.getElementById('txtScreen');
    txtScreen.HTML.innerHTML = "<h2>Datos de la Compra:</h2>" +
                               "<p> Vehiculo a Comprar: " + tipo + "</p>" +  
                               "<p> Precio Venta: " + precio + "</p>" + 
                               "<p> Descuento: " + descuento + "</p>" + 
                               "<p> Nuevo Precio: " + preciototal + "</p>";
}

/**Ejercicio #6
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


/**Ejercicio #7
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

/**Ejercicio #9
*se realiza la carga de 10 valores enteros por teclado. se desea conocer;
* •	La cantidad de valores negativos ingresados.
* •	La cantidad de valores positivos ingresados.
* •	La cantidad de múltiplos de 15.
* •	El valor acumulado de los números ingresados que son pares.
*/

function verificarNumero(){
    var numeros = [];
    let numneg = 0;
    let numpos = 0;
    let nummul = 0;
    let numpar = 0;
    // Obtener los valores de los campos de entrada
    for (var i = 1; i <= 10; i++) {
      var inputId = "num" + i;
      var num = parseInt(document.getElementById(inputId).value);
  
      // Verificar si el número ingresado es válido
      if (!isNaN(num)) {
        numeros.push(num);
      } else {
        alert("El valor ingresado en el campo " + i + " no es un número válido. Por favor, inténtelo nuevamente.");
        return; // Salir de la función si se encuentra un número inválido
      }
    }
  
    // Utilizar el arreglo de números como desees
    console.log(numeros);       



for (var j = 0; j < numeros.length; j++) {
    var numarray = numeros[j];

    if (numarray < 0) {
      numneg++;
    } else if (numarray > 0) {
      numpos++;
    }

    if (numarray % 15 === 0) {
      nummul++;
    }

    if (numarray % 2 === 0) {
      numpar += numarray;
    }
  }
  txtScreen.HTML = document.getElementById('txtScreen');
  txtScreen.HTML.innerHTML =  "<p> Números Negativos: " + numneg + "</p>" +  
                               "<p> Números Positivos: " + numpos + "</p>" +
                               "<p> Números Múltiplos de 15: " + nummul + "</p>" + 
                               "<p> Númers Pares: " + numpar + "</p>";
}


/**Ejercicio #10
 * Se cuenta con la siguiente información: 
 * •    Las edades de 5 estudiantes del turno mañana. 
 * •    Las edades de 6 estudiantes del turno tarde. 
 * •    Las edades de 11 estudiantes del turno noche. 
 * 
 * Nota: Las edades de cada estudiante se deberán ingresar por la web. 
 * Lo que queremos devolver:
 * •    Obtener el promedio de las edades de cada turno (tres promedios).
 * •    Imprimir dichos promedios (promedio de cada turno).
 * •    Mostrar por pantalla un mensaje que indique cuál de los tres turnos tiene un promedio de edades mayor
*/

function calcularPromedios() {
    // Obtener las edades de los estudiantes de cada turno
    var manana1 = parseInt(document.getElementById("manana1").value);
    var manana2 = parseInt(document.getElementById("manana2").value);
    var manana3 = parseInt(document.getElementById("manana3").value);
    var manana4 = parseInt(document.getElementById("manana4").value);
    var manana5 = parseInt(document.getElementById("manana5").value);
  
    var tarde1 = parseInt(document.getElementById("tarde1").value);
    var tarde2 = parseInt(document.getElementById("tarde2").value);
    var tarde3 = parseInt(document.getElementById("tarde3").value);
    var tarde4 = parseInt(document.getElementById("tarde4").value);
    var tarde5 = parseInt(document.getElementById("tarde5").value);
    var tarde6 = parseInt(document.getElementById("tarde6").value);
  
    var noche1 = parseInt(document.getElementById("noche1").value);
    var noche2 = parseInt(document.getElementById("noche2").value);
    var noche3 = parseInt(document.getElementById("noche3").value);
    var noche4 = parseInt(document.getElementById("noche4").value);
    var noche5 = parseInt(document.getElementById("noche5").value);
    var noche6 = parseInt(document.getElementById("noche6").value);
    var noche7 = parseInt(document.getElementById("noche7").value);
    var noche8 = parseInt(document.getElementById("noche8").value);
    var noche9 = parseInt(document.getElementById("noche9").value);
    var noche10 = parseInt(document.getElementById("noche10").value);
    var noche11 = parseInt(document.getElementById("noche11").value);
  
    // Calcular los promedios de cada turno
    var promedioManana = (manana1 + manana2 + manana3 + manana4 + manana5) / 5;
    var promedioTarde = (tarde1 + tarde2 + tarde3 + tarde4 + tarde5 + tarde6) / 6;
    var promedioNoche = (noche1 + noche2 + noche3 + noche4 + noche5 + noche6 + noche7 + noche8 + noche9 + noche10 + noche11) / 11;
  
    // Obtener el turno con el promedio mayor
    var turnoMayorPromedio = "";
    var mayorPromedio = 0;
  
    if (promedioManana > promedioTarde && promedioManana > promedioNoche) {
      turnoMayorPromedio = "Mañana";
      mayorPromedio = promedioManana;
    } else if (promedioTarde > promedioManana && promedioTarde > promedioNoche) {
      turnoMayorPromedio = "Tarde";
      mayorPromedio = promedioTarde;
    } else if (promedioNoche > promedioManana && promedioNoche > promedioTarde) {
      turnoMayorPromedio = "Noche";
      mayorPromedio = promedioNoche;
    }
  
    // Mostrar los resultados
    var txtScreen = "Promedio de edades - Mañana: " + promedioManana.toFixed(0) + "<br>" +
                    "Promedio de edades - Tarde: " + promedioTarde.toFixed(0) + "<br>" +
                    "Promedio de edades - Noche: " + promedioNoche.toFixed(0) + "<br><br>" +
                    "El turno con el promedio de edades mayor es: " + turnoMayorPromedio + " (Promedio: " + mayorPromedio.toFixed(0) + ")";
                     document.getElementById("txtScreen").innerHTML = txtScreen;
  }