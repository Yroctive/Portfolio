// // let myAge = 23
// // let dogAge = 7

// // let myDogAge = myAge * dogAge

// // console.log(myDogAge)

// // let bonusPoint = 50
// // bonusPoint = bonusPoint + 50

// // bonusPoint = bonusPoint - 75

// // bonusPoint = bonusPoint + 45

// // console.log(bonusPoint)

// // function increment(){
// //     console.log('This button was clicked')
// // }

// // let lapCompleted = 0

// // function lapIncrement(){
// //     lapCompleted = lapCompleted + 1
// // }
// // lapIncrement()
// // lapIncrement()
// // lapIncrement()
// // console.log(lapCompleted)
// // document.getElementById('count-el').innerText
// // countEl = document.getElementById('count-el')
// // // console.log(countEl)
// // let count = 0

// // function increment(){
// //     // console.log('This button was clicked')
// //     count = count + 1
// //     countEl.innerText = count
// //     console.log(count)
// // }

// // document.getElementById('count-el').innerHTML

// // let countEl = document.getElementById('count-el')
// // let saveEl = document.getElementById('save-el')

// // let count = 0

// // // console.log(saveEl)

// // function increment(){
// //     count += 1
// //     countEl.textContent = count
// //     console.log(count)
// // }


// // function save(){
// //      let passengerCount = count + " - "
// //      saveEl.textContent += passengerCount
// //     // console.log(count)
// //     countEl.textContent = 0
// //     count = 0
// // }

// // let firstName = 'Victory'
// // let lastName = 'Ugbaja'
// // let fullName = firstName + " " + lastName
// // console.log(fullName)

// // let name = 'Linda'
// // let greeting = 'Hi there'

// // function salutation(){
// //     console.log(greeting + ", " + name + "!")
// // }

// // salutation()

// // let myPoints = 3

// // function addPoints(){
// //     myPoints += 3
// // }

// // function removePoints(){
// //     myPoints -= 1
// // }

// // addPoints()
// // addPoints()
// // addPoints()
// // removePoints()
// // removePoints()

// // console.log(myPoints)

// let num1 = 8
// let num2 = 2

// document.getElementById('num1-el').textContent = num1
// document.getElementById('num2-el').textContent = num2
// let sumEl = document.getElementById('sum-el')


// function add() {
//     let count = num1 + num2
//     sumEl.textContent = "Sum: " + count
//     console.log(count)
// }

// function subtract() {
//     let count = num1 - num2
//     sumEl.textContent = "Sum: " + count
//     console.log(count)
// }

// function divide() {
//     let count = num1 / num2
//     sumEl.textContent = "Sum: " + count
//     console.log(count)
// }

// function multiply() {
//    let count = num1 * num2
//     sumEl.textContent = "Sum: " + count
//     console.log(count)
// }

let firstNumber = 9
let secondNumber = 9
let cards = [firstNumber, secondNumber]
let sum = firstNumber + secondNumber
//to save the state of the game: declare the variables 'hasBlackJack' and if Alive 'isAlive' 
let hasBlackJack = false
let isAlive = true
//declare the variable to console the message out 'message'
let message = ""
let messageEl = document.getElementById('message-el')
let cardsEl = document.getElementById('cards-el')
let sumEl = document.getElementById('sum-el')

function startGame(){
    renderGame()
}
 
function renderGame(){
        if (sum <= 20) {
        message = "Do you want to draw a new card?"
    }else if (sum === 21){
        message = "You've got Blackjack!"
        hasBlackJack = true
    }else{
        message = "You're out of the game...!"
        isAlive = false
}

messageEl.textContent = message
 cardsEl.textContent = "Cards: "

 for (let i = 0; i < cards.length; i++){
    cardsEl.textContent += cards[i] + " "
 }
sumEl.textContent = "Sum: " + sum
}


function drawCard(){
    let newCard = 3
    sum += newCard
    cards.push(newCard)

   console.log("Drawing a new card from Deck!")

   renderGame()

}

//Array is zero insexed
// let profile = [
//     'experience',
//     'education',
//     'licenses',
//     'skills'
// ]

// console.log(profile[0])
// console.log(profile[1])
// console.log(profile[2])
// console.log(profile[3])

// for (let i = 10; i < 101; i += 10){
//     console.log(i)
// }

// let pards = [5,7,9]

// for (i = 0; i < pards.length; i++){
//     console.log(pards[i])
// }

// let sentence = ["Hello ", "my ", "name ", "is ", "Per"]
// let greetingEl = document.getElementById("greeting-el")

// for (i = 0; i < sentence.length; i++){
//     greetingEl.textContent += sentence[i]
// }

function rollDice(){
    let randomNumber = Math.floor(Math.random()*6) + 1
    return randomNumber
}

console.log(rollDice())

let hasSolvedChallenge = false
let hasHintsLeft = false

function showSolution (){
    console.log("Showing solution...")
}

if (hasSolvedChallenge === false && hasHintsLeft === false){
    console.log(showSolution ())
}

let person = {
    name: "Victory",
    age: 23,
    country: "Nigeria"
}
 function logData(){
    console.log (person.name + " is " + person.age + " years old and lives in " + person.country)
 }

 logData()