let str = '15'
let num = 5
let boolean = true
let obj = {}
let arr = []

console.log(typeof str)
console.log(typeof num)
console.log(typeof boolean)
console.log(typeof obj)
console.log(typeof arr)

console.log(typeof String(num))
console.log(typeof Number(str))
console.log(Boolean(1))

let obj2 = {
  propiedad: 'valor',
  propiedad2: 'valor2'
}

console.log(Object.keys(obj2))
console.log(Object.values(obj2))

let arr2 = []
console.log(Array.isArray(arr2))

let arrAnidados = [['a', ['b'], 'c']]
console.log(arrAnidados[0][1][0])

/*
0 platano
1 mango
2 uva
3 fresa
*/

let lista = [0, 2, 0, 3, 1, 2, 0]
let frutas = ['platano', 'mango', 'uva', 'fresa']

let nuevaLista = []

for (let i = 0; i < lista.length; i++) {
  nuevaLista.push(frutas[lista[i]])
}

console.log(nuevaLista)

let counter = {}

for (let i = 0; i < nuevaLista.length; i++) {
  if (counter[nuevaLista[i]]) { // si existe en counter, entonces incrementalo a 1
    counter[nuevaLista[i]]++
  } else { // si no, agregalo y colocale como valor 1
    counter[nuevaLista[i]] = 1
  }
}

let obj5 = {'platano': 3}

if (obj5['platano']) {
  obj5['platano']++
} else {
  obj5['platano'] = 1
}

console.log(obj5)

console.log(counter)


// let nuevaLista = []
// let listaFrutas = {}

// for(let i = 0; i < lista.length; i++) {
//   if (listaFrutas[frutas[lista[i]]]) {
//     listaFrutas[frutas[lista[i]]]++
//   } else {
//     listaFrutas[frutas[lista[i]]] = 1
//   }
//   // nuevaLista.push(frutas[lista[i]])
// }

// let values = Object.values(listaFrutas)

// let keys = Object.keys(listaFrutas)
// console.log(keys)

// for (let i = 0; i < keys.length; i++) {
//   console.log(keys[i])
// }

// console.log(keys)
// console.log(values)
// console.log(listaFrutas)

let jugadores = [
  {
    nombre: 'a',
    score: 18
  },
  {
    nombre: 'b',
    score: 8
  },
  {
    nombre: 'c',
    score: 12
  },
  {
    nombre: 'd',
    score: 7
  },
  {
    nombre: 'e',
    score: 12
  },
]

console.log(jugadores.sort(function (a, b) {return b.score - a.score }))

let winners = []
let losers = []

for (let i = 0; i < jugadores.length; i++) {
  if (jugadores[i].score > 9) {
    winners.push(jugadores[i])
  } else {
    losers.push(jugadores[i])
  }
}

let obj6 = {
  ganadores: winners.length, 
  perdedores: losers.length
}

console.log(obj6)

// {ganadores: 2, perdedores: 5}

console.log(winners)
console.log(losers)


// let winner = []
// let loser = []

// for (let i = 0; i < estudiantes.length; i++) {
//   if(estudiantes[i].score > 9) {
//     winner.push(estudiantes[i])
//   } else {
//     loser.push(estudiantes[i])
//   }
// }

// let result = {
//   winner: winner.length, 
//   loser: loser.length
// }

// console.log(result)


// let dias = [0, 1, 2, 3, 4, 5, 6]
// let diasTexto = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado', 'domingo']

// console.log(`Tu cita es el dia ${diasTexto[dias[6]]}`)

// let tvs = [{
//   email: 'Hisense',
//   price: 500,
//   quantity: 5
// }, // 0
// {
//   email: 'LG',
//   price: 700,
//   quantity: 4
// }, // 1
// {
//   email: 'Samnsung',
//   price: 800,
//   quantity: 2
// } // 2
// ]


// let newArray = []

// for (let i = 0; i < tvs.length; i++) {
//   newArray.push(tvs[i].email)
// }

// // newArray.push(tvs[0].model)
// // newArray.push(tvs[1].model)
// // newArray.push(tvs[2].model)

// console.log(newArray)

// let numeros = [1, 2, 3, 4, 5, 6, 7 ,8 , 9, 10]

// let middle = Math.floor(numeros.length / 2)

// console.log(numeros[middle -1])
// console.log(numeros[middle])
