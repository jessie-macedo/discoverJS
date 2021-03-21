/* Sistema de gastos familiar
Crie um objeto que possuirá 2 propriedades, ambas to tipo array:
    *receitas[]
    *despesas[]
    Agora, crie uma função que irá calcular o total de receitas
    e despesas e irá mostrar umamensagem se a familia está com 
    saldo positivo ou negativo, seguido do valor de saldo
    */


// const registerIncome = (income)=>{
//     familiarExpenses.monthIncome.push(income)

// }

// const registerExpense = (expense)=>{
//     familiarExpenses.monthExpenses(expense)

// }

const calculateMonthlyBalance = (monthIncome, monthExpenses)=>{
    const sumArray = (totalArray, currentValueArray) =>  totalArray + currentValueArray
    let totalExpense = familiarExpenses.monthExpenses.reduce(sumArray)
    let totalIncome = familiarExpenses.monthIncome.reduce(sumArray)
    //Or like below, using the arrow function inside the reduce
    // let totalExpense = familiarExpenses.monthExpenses.reduce((totalArray, currentValueArray)=> { return totalArray + currentValueArray})
    // let totalIncome = familiarExpenses.monthIncome.reduce((totalArray, currentValueArray)=> { return totalArray + currentValueArray})
    let balance = totalIncome - totalExpense
    return balance
}

let familiarExpenses = {
    monthIncome:[],
    monthExpenses:[]
}
familiarExpenses.monthIncome.push(3000)
familiarExpenses.monthIncome.push(2000)
familiarExpenses.monthExpenses.push(200)
familiarExpenses.monthExpenses.push(1000)
familiarExpenses.monthExpenses.push(800)
familiarExpenses.monthExpenses.push(3500)

const monthlybalance = calculateMonthlyBalance(familiarExpenses.monthIncome, familiarExpenses.monthExpenses)
positiveBalance = monthlybalance > 0
// negativeBalance = monthlybalance < 0
if (positiveBalance) {console.log("Saldo positivo! Você ainda tem: R$", monthlybalance)}
//else{ console.log("Saldo negativo! Você está devendo: R$", Math.abs(monthlybalance))}
else{ console.log("Saldo negativo! Você está devendo: R$", monthlybalance)}

//test Ok
// monthExpenses = [50, 20, 30, 100]
// const sumArray = (totalArray, currentValueArray) => totalArray + currentValueArray
// let balance = monthExpenses.reduce(sumArray)
// console.log(balance)