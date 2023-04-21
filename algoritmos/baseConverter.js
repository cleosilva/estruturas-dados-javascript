import Stack from "../classes/Stack.js";

/**
 * Conversor de decimal para as bases de 2 a 36
 * @param {number} decNumber 
 * @param {number} base 
 * @returns {number}
 * 
 */

function baseConverter(decNumber, base){
    const remStack = new Stack();
    const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    let number = decNumber;
    let rem;
    let baseString = '';

    if (!(base >= 2 && base <= 36)){
       return '';
    }

    while (number > 0){
        rem = Math.floor(number % base);
        remStack.push(rem);
        number = Math.floor(number / base);
    }

    while (!remStack.isEmpty()){
        baseString += digits[remStack.pop()];
    }

    return baseString;

}

console.log(baseConverter(100345, 2))
console.log(baseConverter(100345, 8))
console.log(baseConverter(100345, 16))
console.log(baseConverter(100345, 35))




