/*

1)
Create a function to calculate the sum of the two given integers. If the two values are same, then returns triple their sum.
*/

const sumOfIntegers = function (a, b) {
   if (a === b) {
       return (a+b) *3 
   } else {
       return (a+b)
   }
}

console.log(sumOfIntegers(5, 5))
console.log(sumOfIntegers(3,5))

/*
2)
Create a function to check two given numbers and return true if one of the number is 50 or if their sum is 50.
*/

const checkNumbers = function (c, d) {
    if (c === 50 || d === 50 || (c+d === 50)) {
        return true
    } else {
        return false
    }
}

console.log(checkNumbers (23, 27))
console.log(checkNumbers(5,7))
console.log(checkNumbers(1, 50))

/*
3)
Create a function to remove a character at the specified position of a given string and return the new string.
*/

/*

4)
 Create a function to find the largest of three given integers.
*/
const findLargestNumber = function (x, y, z) {
    if (x >= y && x >= z) {
        return x 
    } else if (y >= x && y >= z) {
        return y
    } else {
        return z
    }
}

console.log(findLargestNumber(60, 50, 30))
console.log(findLargestNumber(1,3,2))

/*
5)
Create a function to check whether two numbers are in range 40..60 or in the range 70..100 inclusive.
*/

const rangeChecker = function (number1, number2) {
    if ( ((number1 >= 40 && number1 <= 60) || (number1 >= 70 && number1 <= 100)) &&
         ((number2 >= 40 && number2 <= 60) || (number2 >= 70 && number2 <= 100)) ) {
           return true;
       } else {
           return false;
       } 
} 

console.log(rangeChecker(59, 87))
console.log(rangeChecker(61, 101))

/*
6) 
Create a function to create a new string of specified copies (positive number) of a given string.
*/


/*
7)
Create a function to display the city name if the string begins with "Los" or "New" otherwise return blank.
*/

const displayCityName = function(cityName) {
    if (cityName.includes("Los") || cityName.includes("New")) {
        return cityName
    } else {
        return false
    }
}

console.log(displayCityName("New York"))
/*
8)
Create a function to calculate the sum of three elements of a given array of integers of length 3.
*/

let someArray = [10, 20, 30]
let sum = 0

someArray.forEach (function(element, index) {
    sum += element
} )

console.log(sum)

/*

9)
Create a function to test whether an array of integers of length 2 contains 1 or a 3. 
*/

const integerTest = function (array) {
    let hasNumber1 = (array[0] === 1 || array[1] === 1);
    let hasNumber3 = (array[0] === 3 || array[1] === 3);
    return hasNumber1 || hasNumber3;
}

let anotherArray = [1, 7]
 // console.log(integerTest(anotherArray))

/*

10)

Create a function to test whether an array of integers of length 2 does not contain 1 or a 3
*/

let someOtherArray = [2,3]

console.log(someOtherArray.includes(1))
console.log(someOtherArray.includes(3))

/*
11)

Create a function to find the longest string from a given array of strings.

/*
12)
Create a function to find the types of a given angle.

Types of angles:
    Acute angle: An angle between 0 and 90 degrees.
    Right angle: An 90 degree angle.
    Obtuse angle: An angle between 90 and 180 degrees.
    Straight angle: A 180 degree angle.
*/

const findAngleType = function(angle) {
    if (angle > 0 && angle < 90) {
        return "acute angle";
    } else if (angle === 90) {
        return "right angle"
    } else if (angle > 90 && angle < 180) {
        return "obtuse angle"
    } else if (angle === 180) {
        return "straight angle"
    } else if (angle > 180) {
        return "value must be between 0 and 180"
    }
}

console.log(findAngleType(100))

/*
13)

Create a function to find the index of the greatest element of a given array of integers

14)

Create a function to get the largest even number from an array of integers.

16)

Create a function to check from two given integers, whether one is positive and another one is negative.

17)

Create a function to create new string with first 3 characters are in lower case and the others in upper case. If the string length is less than 3 convert all the characters in upper case. 

18)

Create a function to calculate the sum of the two given integers, If the sum is in the range 50..80 return 65 other wise return 80.

19)

Create a function to convert a number to a string, the contents of which depend on the number's factors. Follow next example:

If the number has 3 as a factor, output 'Diego'.
If the number has 5 as a factor, output 'Riccardo'.
If the number has 7 as a factor, output 'Stefano'.
If the number does not have 3, 5, or 7 as a factor, just pass the number's digits straight through.
Examples
28's factors are 1, 2, 4, 7, 14, 28.
this would be a simple "Stefano".
30's factors are 1, 2, 3, 5, 6, 10, 15, 30.
this would be a "DiegoRiccardo".
34 has four factors: 1, 2, 17, and 34.
this would be "34".

20)
Create a function that given a phrase returns its acronym, like British Broadcasting Corporation returns BBC

*/
