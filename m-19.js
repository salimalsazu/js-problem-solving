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

