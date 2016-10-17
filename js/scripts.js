/*var add =  function(number1, number2) {
return number1 + number2;
};

var number1 = parseInt(prompt("Enter a number: "));
var number2 = parseInt(prompt("Enter a second number: "));

var subtract =  function(number1, number2) {
return number1 - number2;
};

var multiply =  function(number1, number2) {
return number1 * number2;
};

var divide =  function(number1, number2) {
return number1 / number2;
};

var result = divide(number1, number2);
alert(result);


var bodyMI = function(weight, height){
  return weight / height;
};*/

/*var height  = parseInt(prompt("Enter your height in inches: "))*0.025;
var weight  = parseInt(prompt("Enter your weight in pounds: "))*0.45;

var bodyMassCalc = function(height, weight) {
  return (weight/(height^2));
};

var showBMI= bodyMassCalc(height, weight);
alert(showBMI)*/

var temperature  = parseInt(prompt("Enter temperature:"))
var unitType  = prompt("Enter (F) for Faranheit or (C) for Celcius:  ")

var TempFar = ((temperature*1.8)+32);
var TempCelc = ((temperature-32) / 1.8);

  if (unitType === "F") {
      alert("The temperature in Celcius equals " + TempCelc)
} else if (unitType === "C"){
      alert("The temperature in Farenheit equals" + TempFar)
 } else {
      alert("Please enter either in Fereinheit or Celcius")
 }
