
//função anônima ou function expression
//pois não tem nome

// //parameters
// const sum = function(number1, number2){
//     return (number1 + number2)

// }

// //sum(2,) //arguments
// console.log(sum(2,3))

//function scope

// let dream
// function showDream() {
//     dream = "Kiss"
// }

// console.log(dream)
// console.log(showDream())
// console.log(dream)

//function hoisting

// sayMyName()

// const Name = function () {
//     console.log('Jessie')

// }

//arrow function
// const sayMyname = (name) => {
//     console.log(name)
// }
// sayMyname('Jessie')

//callback function

// function calculateResult(number1, number2) {
    
//     console.log("I´m on a callback function =p")
//     return (number1 + number2)
// }


// function addResult(function1){
    
//     console.log("Before CallBack")
//     Total = 60 + function1(100,100)
//     console.log(Total)

// }


// addResult(calculateResult)

//Function constructor

// function Person(name){
//     this.name = name
//     this.walk = function(){
//         return "Walking"
//     }

// }
// const Jessie = new Person("Jessie")
// const Victor = new Person("João")
// console.log(Jessie)
// console.log(Victor)

// //Operador condicional/ternario

// let pao = true
// let queijo = true
// const niceBreakfast = pao && queijo ? 'Café bom': 'Café paia'
// console.log(niceBreakfast) 

//Controle

//if... else

// let temperature = 37

// if (temperature >= 37.5){
//     console.log("Febre alta")

// } else if(temperature <37.5 && temperature >=37){
//     console.log("Febre Moderada")
// } else {console.log("Saudavel")}

// //Codigo melhor construido

//  let temperature = 37
// let highTemperature = temperature >= 37.5
// let mediumTemperature = temperature <37.5 && temperature >=37

// if (highTemperature){
//     console.log("Febre Alta")
// } else if(mediumTemperature){
//     console.log("Febre Moderada")
// }else{
//     console.log("Saudável")
// }

//switch
//break é opcional, mas sinaliza encerramento

// let fruit = "Orange"
// let fruit = "apple"
// fruit = fruit.toLowerCase()
// switch(fruit){
//     case "banana":
//         console.log("Fruit that my husband likes very much")
//         break
//     case "orange":
//         console.log("Best juice in the world!")
//         break
//     default:
//         console.log("Default fruit.")
//         break

// }

// function sayMyName(name = '') {
//     if (name === ''){
//         throw new Error("Nome é necessário")
       
//     }
//     console.log(name)
    
// } 

//     //try.. catch
//  try{
//     sayMyName("Jessie")

// }catch(e){
//     console.log(e)
//     }
    
    
// console.log("Após o try/catch")

//Estrutura de repeticao
//for
//break - para a execução do loop
//continue - pula a execução do momento

// for (let index = 10; index>0; index--){
//     if (index==5){
//         continue;
//     }
//     console.log(index)

// }

// let index = 4985684278576
// while(index>10){
//     console.log(index)
//     index /= 35
// }

//for of
// let name = "Jessie"
// let names = ["João", "Paulo", "Tina"]

// for(let char of name){
//     console.log(char)
// }

// for(let name of names){
//     console.log(name)
// }

//for in

let person = {
    name: "Jessie",
    age: 29,
    weight: 65,
}

console.log(person["name"])
console.log(person.age)
// for (let property in person){
//     console.log(property)
//     console.log(person[property])
// }