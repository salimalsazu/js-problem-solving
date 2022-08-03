/// 1st Problem

var fruits = ['Apple', 'Banana', 'Orange'];

var position = fruits.indexOf("Banana");
console.log(position);

fruits[1] = 'Mango'
console.log(fruits);
fruits.pop();
fruits.push('Watermelon');
console.log(fruits);


/// 2d Problem

var me = 35;
var Tom = 66;
var Jane = 95;
var peter = 56;
var john = 40;


if (me >= 80) {
    console.log("Result is A grade");
} else if (me >= 60) {
    console.log("result is B grade");
} else if (me >= 50) {
    console.log("result is C grade");
} else if (me >= 40) {
    console.log("result is D grade");
} else {
    console.log("result is F grade");
}

// same for others just change the name. 



//  problem-3: 

var num1 = 13;
var num2 = 79;
var num3 = 45;

if (num1 > num2) {
    if (num1 > num3) {
        console.log(num1);
    } else {
        console.log(num3);
    }
} else {
    if (num2 > num3) {
        console.log(num2);
    } else {
        consolo.log(num3);
    }
}


/// Problem-4


var side1 = 9;
var side2 = 8;
var side3 = 9;

if (side1 == side2 || side1 == side3 || side2 == side3) {
    console.log('isoseles');
};








//////5t Problem

var signal = "green";

if (signal == "red") {
    console.log("Dont Move its red signal")
} else if (signal == "yelow") {
    console.log("Wait for a greean signal");
} else if (signal == "green") {
    console.log("hurrey, you ca go now")
} else {
    console.log("Thanks for your patient");
}
