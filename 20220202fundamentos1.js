// Operadores - son herramientas que nos van a servir para manipular o realizar acciones específicas con los diferentes tipos de datos.

// Términos: “unario”, “binario”, “operando”

// Un operando – es a lo que se aplican los operadores. Por ejemplo, en la multiplicación de 3 * 4 hay dos operandos: el operando izquierdo es 3 y el operando derecho es 4.

// ejemplo: operando operador operando2
//             3         *        4

console.log(3 * 4) // 12

// Un operador es unario si tiene un solo operando. Por ejemplo, la negación unaria - invierte el signo de un número: 
let x = 1

x = -x
console.log(x) // -1

// Un operador es binario si tiene dos operandos. El mismo negativo también existe en forma binaria:
let a = 1, b = 3
console.log(a - b) // -2

// Formalmente, estamos hablando de dos operadores distintos: la negación unaria (un operando: revierte el símbolo) y la resta binaria

// Operadores Aritmetícos
// + suma
// - resta
// * mutiplicación
// / división
// % resto
// ** exponenciación

console.log(2 + 4);
console.log(4 - 3);
console.log(5 / 2);
console.log(5 * 2);

// El operador resto %, a pesar de su apariencia, no está relacionado con porcentajes.

// El resultado de a % b es el resto de la división entera de a por b.

console.log(5 % 2); // 1 es un resto de 5 dividido por 2
console.log(8 % 3); // 2 es un resto de 8 dividido por 3

// El operador exponenciación 2 ** 2 eleva 2 a la potencia de 2.

// En matemáticas de la escuela, lo escribimos como 2².

console.log(2 ** 2); // 2 x 2
console.log(2 ** 3); // 2 x 2 x 2
console.log(2 ** 4); // 2 x 2 x 2 x 2

// Concatenación de cadenas con el binario +

// Ahora veamos características especiales de JavaScript que van más allá de las aritméticas escolares.

// Normalmente el operador +, suma números.

// Pero si se aplica el + binario a una cadena, los une (concatena):

let str = 'Mi nombre es ' + 'Jesús'
console.log(str); // Mi nombre es Jesús

// si uno de los operandos es una cadena, el otro es convertido a una cadena también.

console.log('1' + 1); // "11"
console.log(2 + 2 + '1'); // "41"
console.log('1' + 2 + 2); // "122"

// Conversión numérica, unario +
// La suma + existe en dos formas: la forma binaria que utilizamos arriba y la forma unaria.

// El unario suma o, en otras palabras, el operador suma + aplicado a un solo valor, no hace nada a los números. Pero si el operando no es un número, el unario suma lo convierte en un número.

// Sin efecto en números
let x = 1;
alert( +x ); // 1

let y = -2;
alert( +y ); // -2

// Convierte los no números
alert( +true ); // 1
alert( +"" );   // 0

// Realmente hace lo mismo que Number(...), pero es más corto.

let str = '4'
let str2 = '3'

// El operador binario suma los agregaría como cadenas:
console.log(str + str2); // "43"

// Si queremos tratarlos como números, necesitamos convertirlos y luego sumarlos:
console.log(+str + +str2); // 7

// console.log( Number(str) + Number(str2) ); // 7

// Si una expresión tiene más de un operador, el orden de ejecución se define por su precedencia o, en otras palabras, el orden de prioridad predeterminado de los operadores.

// Tabla de precedencia de los operadores
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

// Coerción de datos en Javascript
// https://www.etnassoft.com/2011/04/06/coercion-de-datos-en-javascript/

// Operadores de Asignación

// Tengamos en cuenta que una asignación = también es un operador. Está listado en la tabla de precedencia con la prioridad muy baja de 16.

// Es por eso que, cuando asignamos una variable, como resultado = 2 * 2 + 1, los cálculos se realizan primero y luego se evalúa el =, almacenando el resultado en la variable.

let resultado = 2 * 2 + 1
console.log(resultado) // 5

// Aquí hay una demostración que usa una asignación como parte de una expresión más compleja:
let a = 1;
let b = 2;

let c = 3 - (a = b + 1);

console.log( a ); // 3
console.log( c ); // 0

// En el ejemplo anterior, el resultado de la expresión (a = b + 1) es el valor asignado a a (es decir, 3). Luego se usa para evaluaciones adicionales.

// Asignaciones encadenadas
let a, b, c;
a = b = c = 2 + 2;

console.log( a ); // 4
console.log( b ); // 4
console.log( c ); // 4

// Las asignaciones encadenadas evalúan de derecha a izquierda. Primero, se evalúa la expresión más a la derecha 2 + 2 y luego se asigna a las variables de la izquierda: c, b y a. Al final, todas las variables comparten un solo valor.

// Una vez más, con el propósito de la legibilidad es mejor separa tal código en unas pocas líneas:
let c = 2 + 2;
let b = c;
let a = c;
// Es más fácil de leer, especialmente cuando se hace de un vistazo.

// A veces necesitamos aplicar un operador a una variable y guardar el nuevo resultado en esa misma variable.

let x = 2;
x = x + 5;
x = x * 2;

// Esta notación puede ser acortada utilizando los operadores += y *=:

let x = 2;
x += 5; // ahora x = 7 (lo mismo que x = x + 5)
x *= 2; // ahora x = 14 (lo mismo que x = x * 2)

console.log(x); // 14

// Los operadores cortos “modifica y asigna” existen para todos los operadores aritméticos

let x = 2;

x *= 3 + 5; // 16 (lado derecho evaluado primero, lo mismo que x *= 8)
x = x * 3 + 5 // 11

console.log(x);

// Incremento/decremento
// Aumentar o disminuir un número en uno es una de las operaciones numéricas más comunes.

// Entonces, hay operadores especiales para ello:
// Incremento ++ incrementa una variable por 1:
let contador = 2;
contador++;      // funciona igual que contador = contador + 1, pero es más corto
console.log( contador ); // 3
// Decremento -- decrementa una variable por 1:
contador--;
console.log( contador ); // 2

/* Tip */
// Incremento/decremento sólo puede ser aplicado a variables. Intentar utilizarlo en un valor como 5++ dará un error.

// Los operadores ++ y -- pueden ser colocados antes o después de una variable.

// Cuando el operador va después de la variable, está en “forma de sufijo”: contador++.
// La “forma de prefijo” es cuando el operador va antes de la variable: ++contador.

// Ambas sentencias hacen la misma cosa: aumentar contador por 1.
let contador = 1;
let a = ++contador; // (*)

console.log(a);

// la forma sufijo contador++ también incrementa contador pero devuelve el antiguo valor (antes de incrementar).

let contador = 1;
let a = contador++; // (*) cambiado ++contador a contador++

console.log(a); // 1

// Si queremos aumentar un valor y usar inmediatamente el resultado del operador, necesitamos la forma de prefijo:
// Si queremos incrementar un valor pero usamos su valor anterior, necesitamos la forma sufijo:

// Respuestas del Ejercicio 1

// ¿Cuáles son los valores finales de todas las variables a, b, c y d después del código a continuación?

// let a = 1, b = 1

// let c = ++a
// let d = b++

// a = 2, incrementado una vez  
// b = 2, incrementado una vez 
// c = 2, la forma de prefijo devuelve el nuevo valor  
// d = 1, la forma de sufijo devuelve el antiguo valor

// ¿Cuáles son los valores de ‘a’ y ‘x’ después del código a continuación?

// let a = 2;

// let x = 1 + (a *= 2);

// a = 4 (multiplicado por 2)
// x = 5 (calculado como 1 + 4)


// Operadores de Comparación 

/* 
< menor que 
> mayor que
>= mayor o igual que
<= menor o igual que 
== igual
!= diferente a, en matemáticas la notación es ≠, pero en JavaScript se escribe como una asignación con un signo de exclamación delante
*/

// Como todos los demás operadores, una comparación retorna un valor. En este caso, el valor es un booleano.

// true – significa “sí”, “correcto” o “verdad”.
// false – significa “no”, “equivocado” o " no verdad".

console.log( 2 > 1 ); // true (correcto)
console.log( 2 == 1 ); // false (incorrecto)
console.log( 2 != 1 ); // true (correcto)

// El resultado de una comparación puede asignarse a una variable, igual que cualquier valor:
let resultado = 5 > 4; // asignar el resultado de la comparación
console.log(resultado); // true

// Comparación de cadenas
// Para ver si una cadena es “mayor” que otra, JavaScript utiliza el llamado orden “de diccionario” o “lexicográfico”.

// En otras palabras, las cadenas se comparan letra por letra.

// Por ejemplo:

console.log( 'o' > 'i' ); // true
console.log( 'Bueno' > 'Buenisimo' ); // true o es mayor que i. Detente aquí. La primera cadena es mayor.

// Comparación de diferentes tipos
// Al comparar valores de diferentes tipos, JavaScript convierte los valores a números.

// Por ejemplo:
console.log( '2' > 1 ); // true, la cadena '2' se convierte en el número 2
console.log('01' == 1); // true, la cadena '01' se convierte en el número 1

// Para valores booleanos, true se convierte en 1 y false en 0.
console.log( true == 1 ); // true
console.log( false == 0 ); // true

// Igualdad estricta
// Una comparación regular de igualdad == tiene un problema. No puede diferenciar 0 de `falso’:

console.log( 0 == false ) // true
console.log( '' == false ) // true
console.log( '2' == 2 ) // true
console.log( '' == 0 ) // true

// Esto sucede porque los operandos de diferentes tipos son convertidos a números por el operador de igualdad ==. Una cadena vacía, al igual que false, se convierte en un cero.

// Un operador de igualdad estricto === comprueba la igualdad sin conversión de tipo

console.log( 0 === false ) // false
console.log( '' === false ) // false
console.log( '2' === 2 ) // false
console.log( '' === 0 ) // false

// En otras palabras, si a y b son de diferentes tipos, entonces a === b retorna inmediatamente false sin intentar convertirlos.

let a = '2'
let b = 2

console.log(a === b) // false

// Tipo de Datos null y undefined

// El valor “null” (nulo)
// El valor especial null no pertenece a ninguno de los tipos descritos anteriormente.

// Forma un tipo propio separado que contiene sólo el valor null:

let user = null;

// Es sólo un valor especial que representa “nada”, “vacío” o “valor desconocido”.
// El código anterior indica que el valor de user es desconocido o está vacío por alguna razón.

// El valor “undefined” (indefinido)
// El valor especial undefined también se distingue. Hace un tipo propio, igual que null.
// El significado de undefined es “valor no asignado”.

// Si una variable es declarada pero no asignada, entonces su valor es undefined:

let variable;

console.log(variable); // undefined

// Comparación con nulos e indefinidos
// Hay un comportamiento no intuitivo cuando se compara null o undefined con otros valores.

// Estos valores son diferentes, porque cada uno de ellos es de un tipo diferente.
console.log( null === undefined )

// Hay una regla especial: son iguales entre sí (en el sentido de ==), pero no a ningún otro valor.
console.log( null == undefined )


console.log( null > 0 ); // false
console.log( null == 0 ); // false
console.log( null >= 0 ); // true

// Es extraño. El último resultado afirma que "null es mayor o igual a cero", así que en una de las comparaciones anteriores debe ser true, pero ambas son falsas.

// Una comparación de igualdad == y las comparaciones > < >= <= funcionan de manera diferente. Las comparaciones convierten a null en un número, tratándolo como 0. 

// Es por eso que null >= 0 es verdadero 
// y null > 0 es falso.

// Por otro lado, el control de igualdad == para undefined y null se define de tal manera que, sin ninguna conversión, son iguales entre sí y no son iguales a nada más es falso. 

// Es por eso que null == 0 es falso.

// El valor undefined no debe compararse con otros valores:

console.log( undefined > 0 ); // false
console.log( undefined < 0 ); // false
// Retornan falso porque no definido se convierte en NaN y NaN es un valor numérico especial que retorna falso para todas las comparaciones.

console.log( undefined == 0 ); // false
// La comparación de igualdad retorna falso porque undefined sólo equivale a null y a ningún otro valor.

// Resumen
// Los operadores de comparación retornan un valor booleano.
// Las cadenas se comparan letra por letra en el orden del “diccionario”.
// Cuando se comparan valores de diferentes tipos, se convierten en números (excepto un control de igualdad estricta).
// Los valores null y undefined son iguales == entre sí y no equivalen a ningún otro valor.
// Ten cuidado al usar comparaciones como > o < con variables que ocasionalmente pueden ser null/undefined. Revisar por separado si hay null/undefined es una buena idea.

// Respuestas Ejercicio 2
// 5 > 4 → true, 5 es mayor que 4
// "apple" > "pineapple" → false, "a" es menor que "p"
// "2" > "12" → true, el primer carácter de "2" es mayor que el primer carácter de "1"
// undefined == null → true, los valores null y undefined son iguales entre sí solamente.
// undefined === null → false, la igualdad estricta diferentes tipos
// null == "\n0\n" → false, null solamente es igual a undefined o a el mismo.
// null === +"\n0\n" → false, igualdad estricta de diferentes tipos como el número 5
