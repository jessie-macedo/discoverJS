//Este é um comentário
/*Comentarios longos com
mais de uma linha*/
console.log("Benvindos ao Starter!")

//Cadeia de caracteres

//"" aspas duplas
//'' aspas simples
//`` crases - template literals ou template strings - bom para interpolação

//console.log("Disciplina e Constancia")
//console.log(`""Disciplina" & "Constancia""`)

/*

Numbers


33 - inteiros
12.5 - float ou reais
NaN - Not a Number
Infinity - infinito


*/

/*Object
Dado estrutural

{ propriedade: "valor"}

*/

// console.log({
//     name: "Mayk",
//     idade: 36,
//     andar: function(){
//         console.log('andar')
//     }
// })

/*Array (Vetores)
 - Uma lista
 - Um agrupamento de dados
 ["Mayk", 36]

*/
// console.log([
//     "Leite",
//     "ovos",
//     2,
//     3
// ])

/* Variaveis */

// var clima = "Quente"
// console.log(clima)
// clima = "Frio"
// console.log(clima)

/* Scope */

// console.log('>existe x antes do bloco?', x)

// {
//     var x = 0
// }

// console.log('>existe x antes do bloco?', x)


// let y = 1;

// {
// 	let y = 0
// 	console.log('existe y', y)
// }

// console.log('>existe y depois do bloco?', y)

var nameOfClient = "Mike"
console.log(typeof nameOfClient)

//declaracoes conjuntas
let age, isHuman
age = 29
isHuman = true
console.log(nameOfClient,age, isHuman)

//concatenando valores
console.log('O ' + nameOfClient + ' tem ' + age + ' anos.')

//interpolando valores com template literals or template strings

console.log(`O ${nameOfClient} tem ${age} anos.`)

//Object

const person = {

    nameOfPerson: 'John',
    age: 30,
    weight:88.6,
    isADdmin: true

}

console.log(`${person.nameOfPerson} has ${age} years.`)

//Array
const animals = [
    'Lion',
    'Monkey',
    'Cat'
]

//acessar valores dentro do Array
console.log(animals[0])
console.log(animals.length)

//Podemos adicionar um objeto dentro do array

const plushies = [
    'Lion',
    'Monkey',
    'Cat',
    {
        form: 'Unicorn',
        price: 20
    }
]
// console.log(plushies[3].form)

//Exercicio
let weight
//a variavel acima é do tipo undefined

let userApp = {
    nameUser: 'Joana',
    ageUser: 22,
    stars: 5,
    isSubscribed: true,
}

// console.log( `${userApp.nameUser} de idade ${userApp.ageUser} tem ${userApp.stars} estrelas`)

usersApp = []
usersApp = [
    userApp
]
console.log(usersApp[0])

let user2App = {
    nameUser: 'John',
    ageUser: 23,
    stars: 5,
    isSubscribed: true,
}

usersApp[1] = user2App

console.log(usersApp)