Challenge: Data Type Conversion
Objective: Write a JavaScript function that converts various data types into a string format and handles edge cases.

Instructions:

Create a function named convertToString that accepts a single parameter, a data value of any type.

The function should return the string representation of the input value.

Consider handling special cases like null, undefined, arrays, and objects.

Requirements:

If the input is null, return the string "null".
If the input is undefined, return the string "undefined".
If the input is an array, return a string with each element joined by commas.
If the input is an object, return a JSON string representation of the object.
For other data types, use the default string conversion.
Example:

function convertToString(value) {
    // Your code here
}

console.log(convertToString(123)); // Output: "123"
console.log(convertToString("hello")); // Output: "hello"
console.log(convertToString(null)); // Output: "null"
console.log(convertToString(undefined)); // Output: "undefined"
console.log(convertToString([1, 2, 3])); // Output: "1,2,3"
console.log(convertToString({name: "JavaScript"})