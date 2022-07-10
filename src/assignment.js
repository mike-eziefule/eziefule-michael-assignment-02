// ========================
// DO NOT EDIT THIS BLOCK
const assignment = {};
// ========================

/**
 * Challenge - 1
 *
 * Calculate and return the sum of the numbers in an array.
 * If you did Challenge - 1, remove the comment in the line just after this function
 *
 * @param {Array} arrayOfNumbers the array of numbers to sum
 * @returns number the sum of the numbers
 */


function sumOfNumbers(arrayOfNumbers) {
    let sum = 0;                                            //this variable holds the sum of all numbers          
    for (let i = 0; i <= arrayOfNumbers.length - 1; i++) {
        sum += arrayOfNumbers[i];                           //sum = sum + arraysOfNumbers
    }

    return sum;
}


assignment.sumOfNumbers = sumOfNumbers;

/**
 * Challenge - 2
 *
 * Count all even numbers within an array of numbers.
 * If you did Challenge - 2, remove the comment in the line just after this function
 *
 * @param {Array} arrayOfNumbers the array containing even or non-even numbers
 * @returns number the count of even numbers
 */

function countEvenNumbers(arrayOfNumbers) {

    let initialCount = 0;
    for(let i=0; i <= arrayOfNumbers.length - 1; i++){
        if(arrayOfNumbers[i] % 2 == 0)                  //if each item in array is divided and has no remainder, then it is even.
            {
                initialCount = initialCount + 1;
            }else{
                initialCount = initialCount + 0;
            }
    }
    return initialCount;
}

assignment.countEvenNumbers = countEvenNumbers;

/**
 * Challenge - 3
 *
 * Given an array of numbers representing temperatures in Celsius,
 * convert each number to Fahrenheit and return a new array containing the converted
 * temperatures in Fahrenheit. Decimal figures in the converted values in Fahrenheit should be removed.
 * E.g 51.21 should just be 51 (hint: Math.trunc(...) function)
 * If you did Challenge - 3, remove the comment in the line just after this function
 *
 * See https://www.thoughtco.com/celcius-to-farenheit-formula-609227 for the conversion formula
 *
 * @param {Array} arrayOfNumbers the array containing temperatures in Celsius to be converted
 * @returns Array the converted temperatures in Fahrenheit
 */
function celsiusToFahrenheit(arrayOfNumbers) {
    return arrayOfNumbers;
}
// assignment.celsiusToFahrenheit = celsiusToFahrenheit;

// ========================
// DO NOT EDIT THIS BLOCK
module.exports = assignment;
// ========================
