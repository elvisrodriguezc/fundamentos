// Ejercicios con String

// (1) tenemos la siguiente frase en una variable
const phrase = "Hola me llamo Jhon";
// tenemos la siguiente palabra en una variable
const word = "Jhon";

console.log(phrase.indexOf(word) !== -1);

// Mi código debe de generar como resultado true ya que
// la palabra sí existe en la frase

// Si cambio el valor de phrase o de word, no debo de tener la necesidad de
// cambiar el código para generar la solución correcta, por ejemplo:
const phrasex = "Hola tengo 20 años";
// tenemos la siguiente palabra en una variable
const wordx = "Gato";

console.log(phrasex.indexOf(wordx) !== -1);

// (2) Obtener la longitud de la última palabra de una frase cualquiera puede ser la frase que quieras

 const phrase = `Mejora tu productividad con Gmail. Ahora está integrado con Google Chat, Google Meet y otros servicios`
 console.log(phrase.substring(phrase.lastIndexOf(' ')+1, phrase.length).length);
 console.log(phrase.slice(phrase.lastIndexOf(" "), phrase.lastIndexOf()).length);


// (3) Reemplazar la última palabra de una frase cualquiera por la palabra gato la frase que quieras

 const phrase = `Mejora tu productividad con Gmail. Ahora está integrado con Google Chat, Google Meet y otros servicios`
 const word = 'gato'
 console.log(phrase.replace(phrase.substring(phrase.lastIndexOf(' ')+1, phrase.length),word));
 console.log(phrase.replace(phrase.slice(phrase.lastIndexOf(" ") + 1,phrase.length),word));
 //='Mejora tu productividad con Gmail. Ahora está integrado con Google Chat, Google Meet y otros gato'

// (4) Que valores obtendriamos de las siguientes operaciones lógicas

null || 2 || undefined // ?? 2
1 || 2 || 3 // ?? 1
1 && null && 2 // ?? null
1 && 2 // ?? 2
null || 2 && 3 || 4 // ?? 3

/* Participantes
Alivier Alejandro Zapata Tovar
Elvis Rodríguez Cornejo 
*/

