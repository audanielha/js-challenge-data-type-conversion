function convertToString(value) {
    // Your code here
    if(typeof(value) === "number"){
        let x = value.toString()
        return x
    }
    else if(typeof(value) === "string"){
        return value
    }
    else if(typeof(value) === "null"){
        return "null"
    }
    else if(typeof(value) === "undefined"){
        return "undefined"
    }
    else{
        let y = JSON.stringify(value)
        console.log(typeof(y))
        return y
    }
}


console.log(convertToString(123)); // Output: "123"
console.log(convertToString("hello")); // Output: "hello"
console.log(convertToString(null)); // Output: "null"
console.log(convertToString(undefined)); // Output: "undefined"
console.log(convertToString([1, 2, 3])); // Output: "1,2,3"
console.log(convertToString({name: "JavaScript"}));