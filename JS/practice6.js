
const prompt = require('prompt-sync')();12

//QUE 1
// let age= prompt("Enter Your Ege")
// age = Number.parseInt(age)


// const canDrive = (age)=>{
//     return age>18?true:false
// }
// if(canDrive(age)){
//     alert("You can Drive")
// }
// else{
//     alert("You cannot Drive")
// }

//QUE 2
let runAgain = true;
const canDrive = (age)=>{
    return age>18?true:false
}
while(runAgain){
let age= prompt("Enter Your Ege")
age = Number.parseInt(age)

if(age<0){
    console.error("Please Enter A valid Age")
}

if(canDrive(age)){
    alert("You can Drive")
}
else{
    alert("You cannot Drive")
}
runAgain = confirm("Do you want to play again?")
}

//QUE 4
let number = prompt("Enter your number")
number = Number.parseInt(number)

if(number>4){
    location.href = "http://google.com" 
}

//QUE 5
let color = prompt("Enter the page color")
document.body.style.background = color