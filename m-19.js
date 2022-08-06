//Samsung Company aanouced Flat 10% Discount on mobile Device above 1000Tk;

function samsung(mobileDevice) {
    let mobileDiscount = 0.10;

    if (mobileDevice > 10000) {
        return (finalDiscount = mobileDevice * mobileDiscount);
    } else {
        return ('not applicable');
    }

}

let mobileDevice = 19999;
console.log('Original Mobile Price:', mobileDevice);

const discountCalculation = samsung(mobileDevice);
console.log('You will get:', discountCalculation);

let AfterDiscountPrice1 = mobileDevice - discountCalculation;
console.log('After Discount Mobile Price:', AfterDiscountPrice1);

/// Write a function called make_avg which will take an array of integers and the size of that array and return the avareage of those values. 




///Module-19 Problem: 05


function signal(traffic) {
    if (traffic === "red") {
        return ("Red,You are in danger.")
    } else if (traffic != "red" && traffic
        == "yellow") {
        return ('Yellow, You Should Stop.')
    } else if ((traffic != "red" && traffic != "yellow") || traffic == "green") {
        return (' Green, You can go.')
    }
}

let lightOn = 'yellow';

let people = signal(lightOn);
console.log("You signal is:", people);


// ডিজেল পুর্বের মূল্য ৭৬ টাকা এবং পেট্রোলের পূর্ব মুল্য ৮৬ টাকা হলে।   এর সাথে ৪৪% এবং পেট্রোলের সাথে ৫১.১৫% যোগ করে দাম নির্ধারন করো ? এটা ফাংশন হিসেবে সমাধান করে দেখাও 😃/////


function oil(increase) {
    let petrol = 86;
    let priceOil = (petrol * increase / 100) + petrol;
    return priceOil.toFixed(2);
}

let increase = 51.15;
let newPrice = oil(increase);
console.log(newPrice);


////Interest calculation: Suppose you buy a mobile from Apple Store with Tk 65,000 & 6 months EMI . calculate your Monthly EMI.  

function HSBC(money, month) {
    let emi = 12;
    if (month <= 6 && month >= 3) {
        return ((((money * 5.5) / 100) + money) / month);
    } else if (month <= 9 && month >= 7) {
        return ((((money * 7.5) / 100) + money) / month);
    } else if (month <= 12 && month >= 10) {
        return ((((money * 9.5) / 100) + money) / month);
    } else if (month > 12) {
        return ((((money * 12.5) / 100) + money) / month);
    } else if (month <= 2 || month > 1) {
        return ('you are not eleigibale for loan');
    } else {
        return ('Thank you for trying loan')
    }
}

let price = 65000;
let time = 4;

let calculationInterest = HSBC(price, time);
console.log(calculationInterest.toFixed(2));