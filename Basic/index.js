//console.log(`Hello`);
//console.log(`Bruh`);

//window.alert(`This is an alert`);
//window.alert(`A second alert has hit the website`);

document.getElementById("Para1").textContent = `Bruh what?`;

const pi = 3.1415926535

let x = 25;
let y = "xdd";
let cooked = true;

let fullName = "Emil An John Stromler";
let age = 20;
let isStudent = true;
let student;

const IncreaseButton = document.getElementById("IncreaseButton");
const resetButton = document.getElementById("ResetButton");
const DecreaseButton = document.getElementById("DecreaseButton");
const count = document.getElementById("Count");
let counter = 0;11

IncreaseButton.onclick = function() {
    counter++
    count.textContent = counter;
}

DecreaseButton.onclick = function() {
    counter--
    count.textContent = counter;
}

resetButton.onclick = function() {
    counter = 0
    count.textContent = counter;
}

age++ //+= 1 also works and does the same thing as ++, therefore, -- and -= 1 also do the same thing

if (isStudent){
    student = "True";
} else {
    student = "False";
}

document.getElementById("FullName").textContent = fullName;
document.getElementById("Age").textContent = age;
document.getElementById("Student").textContent = student;

console.log(`The number is ${x}`);
console.log(typeof x);
console.log(typeof y);
console.log(typeof cooked);
console.log(`Am I cooked? ${cooked}`);

let userInput;

document.getElementById("Submit1").onclick = function(){
    userInput = document.getElementById("UserInput1").value
    document.getElementById("Header1").textContent = `Welcome ${userInput}`;
    
}

let radius = window.prompt("Enter in the radius");
radius = Number(radius);

document.getElementById("AreaOfCircle").textContent = `The area of the circle with given input is ${areaOfCircle(radius, pi)} 
                        and circumference is ${circumference(radius, pi)}`;

function areaOfCircle(radius, pi){
    return (radius * radius * pi).toFixed(2);
}

function circumference(radius, pi){
    return (radius * 2 * pi).toFixed(2);
}

