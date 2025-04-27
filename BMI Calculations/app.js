let weight = prompt("Enter weight of a person in kilograms:");
weight = parseFloat(weight);

let height = prompt("Enter height of a person in meters:");
height = parseFloat(height);

let BMI = weight / (height ** 2);
alert("BMI Calculation for the height: " + height + " and weight: " + weight + " is = " + BMI);
