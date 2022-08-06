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