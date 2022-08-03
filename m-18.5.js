//// remove the first elemon of array///

var items = [1, 2, 3, 4, 5];

items.shift();

console.log(items);


var breakUp = 1;

while (breakUp <= 39) {
    console.log('আজকে আমার মন ভালো নেই')
    breakUp++;
}

//////Diffrent Method

for (var i = 1; i <= 39; i++) {
    console.log('আজকে আমার মন ভালো নেই');
}

////তোমার কাছে: ৮০০০০ টাকার বেশি হলে তুমি mac কিনবে, ৬০ টাকার বেশি হলে gaming ল্যাপটপ কিনবে, ৪০ হাজার টাকার বেশি হলে lenovo yoga কম্পিউটার কিনবে , ২০ হাজার টাকার বেশি হলে পুরান ল্যাপটপ কিনবে। না হয় তুমি মোবাইল দিয়ে কাজ চালাবে। ///

var mac = 80000;
var gLaptop = 60000;
var lenova = 40000;
var oldLaptop = 20000;

var myMoney = 50000;

if (myMoney > mac) {
    console.log(" I will buy a Mac");
} else if (myMoney > gLaptop) {
    console.log(" i will buy a gaming laptop");
} else if (myMoney > lenova) {
    console.log(" i Will buy a lonova");
} else if (myMoney > oldLaptop) {
    console.log("I will buy a old laptop");
} else {
    console.log("Karimer laptop churi korbo");
}

// Display 58 to 98

for (var i = 58; i <= 98; i++) {
    console.log(i);
}


// Display all even numbers from 412 to 456

for (var i = 412; i <= 456; i += 2) {
    console.log(i);
}

// Display all odd numbers from 581 to 623

for (var i = 581; i <= 623; i += 2) {
    console.log(i);
}


// Run a loop from 30 to 86. this loop will stop if the values get higher than 44//

for (var i = 30; i < 86; i++) {
    if (i > 44)
        break;
    console.log(i);
}



////তুমি এতদিন যা যা জিনিস শিখছো সেগুলার নাম দিয়ে একটা array বানাও। তারপর একটা for লুপ দিয়ে সেই array এর সব উপাদান কে আউটপুট হিসেবে দেখাও। 


var mileStone1 = ['learn & explore html', 'learn & explore CSS', 'git & github'];
var mileStone2 = ['html5', 'CSS3', 'Sematic Tag', 'Media Query'];
var mileStone3 = ['Bootstrap', 'Tailwind', 'landing page design'];
var mileStone4 = ['Explore js', 'var', 'while', 'for', 'loop', 'array', 'break', 'continue'];
var totalMileStone = [mileStone1 + ' ' + mileStone2 + ' ' + mileStone3 + ' ' + mileStone4];

for (var i = 0; i < totalMileStone.length; i++) {
    var mileStone = totalMileStone[i];
    console.log(mileStone);
}

///কোন একটা Array এর মধ্যে প্রথম উপাদান হিসেবে কোন উপাদান হিসেবে যোগ করতে চাইলে কিভাৱে যোগ করবে। আবার Array থেকে প্রথম উপাদান টা বের করে দিতে চাইলে কিভাবে বের করে দিবে///

var players = ['Messi', 'Ronaldo', 'Neymar', 'Mbappe', 'Halaand']

players.unshift('Demble');
console.log(players);

players.shift();
console.log(players);


///কোন একটা Array এর মধ্যে লাস্ট উপাদান হিসেবে কোন উপাদান হিসেবে যোগ করতে চাইলে কিভাৱে যোগ করবে। আবার Array থেকে শেষের উপাদান টা বের করে দিতে চাইলে কিভাবে বের করে দিবে ///


var aunty = ['Tania Aunty', 'Samia Aunty', 'Fariha Aunty'];

/// Sumaiya Aunty unar Maey K amar shatey kotha boltey disey Tai Add korlam

aunty.push("Sumaiya Aunty");

console.log(aunty);

/// Amar result kharap how mishtey na korsey tai remove korlam

aunty.pop();
console.log(aunty);