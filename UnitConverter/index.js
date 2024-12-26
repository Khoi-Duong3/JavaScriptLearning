const tempBox = document.getElementById("tempBox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const tempResult = document.getElementById("tempResult")

let temp;

const massBox = document.getElementById("massBox");
const tolbs = document.getElementById("tolbs");
const tokg = document.getElementById("tokg");
const massResult = document.getElementById("massResult");


let mass;


const heightBox = document.getElementById("heightBox");
const inchesBox = document.getElementById("inches");
const toft = document.getElementById("toft");
const tocm = document.getElementById("tocm");
const heightResult = document.getElementById("heightResult");

let height;
let inches;
let feet;

const distanceBox = document.getElementById("distanceBox");
const tomile = document.getElementById("tomile");
const tokm = document.getElementById("tokm");
const distanceResult = document.getElementById("distanceResult");

let distance;

function convertTemp(){
    if (toFahrenheit.checked){
        temp = Number(tempBox.value);
        temp = temp * (9/5);
        temp += 32;
        tempResult.textContent = temp.toFixed(1) + "°F";

    } else if (toCelsius.checked){
        temp = Number(tempBox.value);
        temp -= 32
        temp = temp * (5/9);
        tempResult.textContent = temp.toFixed(1) + "°C";

    } else {
        tempResult.textContent = "Select a unit";
    }
}

function convertMass(){
    if (tolbs.checked){
        mass = Number(massBox.value);
        mass = mass * 2.205
        massResult.textContent = mass.toFixed(1);

    } else if (tokg.checked){
        mass = Number(massBox.value);
        mass = mass / 2.205
        massResult.textContent = mass.toFixed(1);

    } else{
        massResult.textContent = "Select a unit";
    }
}

function toggleInchesBox() {
    if (toft.checked) {
        inchesBox.style.visibility = "hidden"; // Hide inches input box
    } else if (tocm.checked) {
        inchesBox.style.visibility = "visible"; // Show inches input box
    }
}

// Attach event listeners to the radio buttons
toft.addEventListener("change", toggleInchesBox);
tocm.addEventListener("change", toggleInchesBox);

// Initial toggle to set the correct state
toggleInchesBox();

function convertHeight(){
    if (tocm.checked){
        height = Number(heightBox.value);
        inches = Number(inchesBox.value);


        inches += height * 12;
        height = inches * 2.54;
        heightResult.textContent = height.toFixed(1) + " cm";

    } else if (toft.checked){
        height = Number(heightBox.value);
    
        inches = height / 2.54;
        feet = Math.floor(inches / 12);
        inches = inches - (feet * 12);
        heightResult.textContent = feet.toFixed(0) + " ft " + inches.toFixed(0) + " in";


    } else {
        heightResult.textContent = "Select a unit";
    }
}

function convertDistance(){
    if (tokm.checked){

        distance = Number(distanceBox.value);
        distance = distance * 1.609;
        distanceResult.textContent = distance.toFixed(2);

    } else if (tomile.checked){

        distance = Number(distanceBox.value);
        distance = distance / 1.609;
        distanceResult.textContent = distance.toFixed(2);

    } else {
        distanceResult.textContent = "Select a unit";
    }

}