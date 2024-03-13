const prompt = require('prompt-sync')();12

// QUE 1
let marks = {
    Harry : 98,
    Rohan : 70,
    Aakash: 7

}
for(let i = 0; i<Object.keys(marks).length; i++){
    console.log("The marks of " + Object.keys(marks)[i]+ " are " + marks[Object.keys(marks)[i]])
}

// Que 3.
let cn = 43
let i 
while (i != cn) {
    console.log("Try again")
    i = prompt("Enter the number: ")
    
}
console.log("You have entered a correct number")

// QUE 4.
function MeanOfNum(a, b, c, d){
    return (a + b + c + d) / 4
}
console.log(MeanOfNum(3, 4, 5, 6))