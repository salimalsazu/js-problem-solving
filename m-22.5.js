// Problem : আরে কটা ফাংশন লি খবে যে টার নাম লি খবে । যে ই ফাংশনে র নাম হবে paperRequirements
// এই ফাংশনে র প্যারামি টার হি সে বে তি নটা প্যারামি টার হবে । প্রথম প্যারামি টার হবে তুমি প্রথম বই
// কত কপি ছাপাতে চাও। সে কে ন্ড প্যারামি টার হবে তুমি সে কে ন্ড বই কত কপি ছাপাতে চাও। আর
// থার্ড প্যারামি টার হবে তুমি থার্ড বই কত কপি ছাপাতে চাও। অর্থাৎ ক োন বই এর কত কপি ছাপান ো
// হবে সে টাই প্যারামি টার হি সে বে নি বে ।
// এইবার ভাল ো করে খে য়াল কর ো।
// প্রথম বই ছাপান োর জন্য পৃষ্ঠা লাগবে ১০০ টা
// সে কে ন্ড বই ছাপান োর জন্য পৃষ্ঠা লাগবে ২০০ টা
// তৃতীয় বই ছাপান োর জন্য পৃষ্ঠা লাগবে ৩০০ টা
// এখন ত োমার কাজ হচ্ছে paperRequirements নামক ফাংশন লি খে ফে লা যাতে । সে ই ফাংশনকে
// কল করে ক োন বই এর কত কপি লাগবে বলে দি বে প্যারামি টার হি সে বে । আর ফাংশন হি সাব করে
// বলে দি বে ত োমার সর্বম োট কতপৃষ্ঠা কাগজ লাগবে ।
// উত্তর হি সে বে সংখ্যা রি টার্ন করবে ।

// function paperRequirments(firstBook, secondBook, thirdBook) {

//     let firstBookPage = 100;
//     let secondBookPage = 200;
//     let thirdBookPage = 300;
//     const firstBookPrint = firstBook * firstBookPage;
//     const secondBookPrint = secondBook * secondBookPage;
//     const thirdBookPrint = thirdBook * thirdBookPage;
//     console.log('1st Book page:', firstBookPrint);
//     console.log('2nd Book page:', secondBookPrint);
//     console.log('3rd Book Page', thirdBookPrint);
//     const totalBookPrint = firstBookPrint + secondBookPrint + thirdBookPrint;
//     return totalBookPrint;
// }

// const calulation = paperRequirments(5, 5, 10);
// console.log("Total Page will be printed for 1st 2nd & 3rd book:", calulation);


function paperRequirments(firstBook, secondBook, thirdBook) {

    let firstBookPage = 100;
    let secondBookPage = 200;
    let thirdBookPage = 300;
    const firstBookPrint = firstBook * firstBookPage;
    const secondBookPrint = secondBook * secondBookPage;
    const thirdBookPrint = thirdBook * thirdBookPage;
    console.log('1st Book page:', firstBookPrint);
    console.log('2nd Book page:', secondBookPrint);
    console.log('3rd Book Page', thirdBookPrint);
    const totalBookPrint = firstBookPrint + secondBookPrint + thirdBookPrint;
    return totalBookPrint;
}
let book1 = 5;
let Book2 = 5;
let Book3 = 10;
const calulation = paperRequirments(book1, Book2, Book3);
console.log("Total Page will be printed for 1st 2nd & 3rd book:", calulation);


// একটা ফাংশন লি খবে । এই ফাংশনে র নাম হবে bestFriend তারপর সে ই ফাংশনে
// ইনপুট প্যারামি টার হি সে বে একটা array নি বে । সে ই array এর মধ্যে ত োমার সব
// ফ্রে ন্ডে র নাম থাকবে । এখন ত োমার কাজ হচ্ছে যে ফ্রে ন্ড এর নাম সবচে য়ে বড় সে ই ফ্রে ন্ড এর
// নাম রি টার্ন করে দে য়া। এই ক্ষে ত্রে তুমি নামটা অর্থাৎ ফ্রে ন্ডে র নাম (স্ট্রি ং) রি টার্ন করতে হবে ।

const frineds = ['Tanzin Tisha', 'Safa Kabir', 'Mehazabien Chowdhury', 'Sabila Nur', 'T Sunehra']

function bestFriend(array) {
    let friend = [0];
    for (let i = 0; i < array.length; i++) {
        const index = i;
        const element = array[index];
        if (element.length > friend.length) {
            friend = element;
        }
    }
    return friend;
}

console.log(bestFriend(frineds));

// এইটা একটুট্রি কি হতে পারে । একটা array এর মধ্যে অনে কগুলা সংখ্যা থাকবে ।
// ত োমার কাজ হচ্ছে সংখ্যা গুলা একটার পর একটা করে চে ক করা। এবং সংখ্যা
// গুলা যদি পজি টিভ সংখ্যা হয়। অর্থাৎ শনূ্য বা শন্যেূন্যে র চাইতে বড় হয় তাহলে
// সে গুলাকে ক োন একটা array এর মধ্যে রাখবে । আর যদি নে গে টিভ সংখ্যা হয়।
// তাহলে লপুটা স্টপ করে দি বে । এবং লপু বন্ধ করার আগ পর্যন্ত যতগুলা পজি টিভ
// সংখ্যা পাওয়া গে ছে । সে গুলা রি টার্ন করে দি বে ।

let assigmnetMarks = [60, 60, 58, 59, 55, -10, 60, 60];

function marks(mark) {
    let newMarks = [];
    for (let i = 0; i < mark.length; i++) {
        // const index = i;
        // const element = mark[index];

        if (mark[i] >= 0) {
            newMarks.push(mark[i]);
        } else {
            break;
        }
    }

    return newMarks;
}

console.log(marks(assigmnetMarks));


let numbers = [20, 25, 35, 40, 65, 78, 45, 89, -55, 86, 80, 45]

function digit(element) {
    let numbers = 1;
    let newNumber = [];
    while (numbers < element.length) {
        numbers++;
        if (element[numbers] >= 0) {
            newNumber.push(element[numbers])
        } else {
            break;
        }
    }
    return newNumber;
}

console.log(digit(numbers));


const items = [10, 20, 30, 54, 68, 78, 54, 89, 23, -15, 124, 20, 55, 87, 46]

function item(num) {
    let newNum = [];
    for (let i = 0; i < num.length; i++) {
        if (num[i] >= 0) {
            newNum.push(num[i]);
        } else {
            break;
        }
    }
    return newNum;
}

console.log(item(items));

// একদম ফাংশন এর নাম হুবহু centimeterToMeter নাম দি য়ে একটা ফাংশন
// লি খবে । এই ফাংশনে ইনপুট হি সাবে কে উ সে ন্টি মি টার দি বে আর সে ই সে ন্টি মি টার
// কে মি টার এ কনভার্ট করে রে জাল্ট রি টার্ন করবে ।

function centimeterToMeter(centimeter) {
    const meter = 100;
    const centeMeter = centimeter / meter;
    return centeMeter;
}

let value = 230;
console.log(centimeterToMeter(value));



// সিম্পল একটা ফাংশন লিখতে হবে । যেটার নাম হবে feetToInch এবং এই ফাংশন
// ইনপুট হিসেবে ন বে feet আর রিটার্ন করবে inch । অর্থাৎ এই ফাংশনকে ক োন
// একটা ফিট বলে দিলে সে র টার্ন হিস বে বলে দিবে কত ইঞ্চি হয়।

function feetToInch(feet) {
    const inch = 12;
    const newfeet = feet * inch;
    return newfeet;
}
const valueFeet = 12;

console.log(feetToInch(valueFeet));


// একটা অবজে ক্ট ডি ক্লে য়ার করবে । সে টাতে তি নটা প্রপার্টি থাকবে । এবং ক োন একটা প্র োপার্টি
// এর মান চে ইঞ্জ করবা।


