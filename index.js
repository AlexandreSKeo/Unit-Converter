/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const lengthEL = document.getElementById("length-result");
const volumeEL = document.getElementById("volume-result");
const massEL = document.getElementById("mass-result");

const convertBtn = document.getElementById("convertion-btn");
let inputNumber;

convertBtn.addEventListener("click", function() {
    inputNumber = Number(document.getElementById("convertion-input").value);
    
    lengthEL.innerHTML = lengthConvertion();
    volumeEL.innerHTML = volumeConvertion();
    massEL.innerHTML = massConvertion();
})

function lengthConvertion() {
    let meter;
    let feet;
    let result;
    
    meter = (inputNumber * (1/3.281)).toFixed(3);
    feet = (inputNumber * 3.281).toFixed(3);
    
    results = `${inputNumber} meters = ${feet} feet | ${inputNumber} feet = ${meter} meters`;
    
    return results;
}

function volumeConvertion() {
    let liter;
    let gallon;
    let result;
    
    liter = (inputNumber * (1/0.264)).toFixed(3);
    gallon = (inputNumber * 0.264).toFixed(3);
    
    results = `${inputNumber} liters = ${gallon} gallons | ${inputNumber} gallons = ${liter} liters`;
    
    return results;
}

function massConvertion() {
    let kilo;
    let pound;
    let result;
    
    kilo = (inputNumber * (1/2.204)).toFixed(3);
    pound = (inputNumber * 2.204).toFixed(3);
    
    results = `${inputNumber} kilos = ${pound} pounds | ${inputNumber} pounds = ${kilo} kilos`;
    
    return results;
}
