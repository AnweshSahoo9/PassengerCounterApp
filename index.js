// To Do
// initialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count

let countEl = document.getElementById("count-el") //pass in argument
let count = 0
function increment() {
    count=count+1
    countEl.innerText=count
}

//create a function, save(), which logs out the count when it's called
function save() {
    console.log(count)
}

//Create a variable message, that stores the string: "You have three new notifications"
let username="per"
let message="You have three new notifications"



//Create a variable messageToUser, that contains the message we have logged

let messageToUser=message+", "+username+"!"
console.log(messageToUser)












// document.getElementById("count-el").innerText=5

// let firstBatch =5
// let secondBatch = 7

// let count = firstBatch+secondBatch
// console.log(count)

//1.
// create a variable myAge and set its value as your age
// let myAge=22

// log the myAge variable to the console
// console.log(myAge)

//2.
// a) Create two variables, myAge and humanDogRatio
// b) multiply the two together and store the result to myDogAge
// c) Log myDogAge to the console

// Ans
// let myAge = 22
// let humanDogRatio =7
// let myDogAge = myAge * humanDogRatio
// console.log(myDogAge)


