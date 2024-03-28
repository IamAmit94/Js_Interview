// Interview Questions related to CURRYING

// Currying is a function that takes one argument at a time and returns a new function expecting the next argument.
//  It is a conversion of functions from callable as f(a,b,c)into callable as f(a)(b)(c).
// Basically Currying doesn’t call a function. It just transforms a function. They are constructed by chaining 
// closures by immediately returning their inner functions simultaneously.



//Q1:  Convert f(a, b) into f(a)(b).
/*f(a)(b) implementation */
// function f(a) {
//     return (b) => {
//          "Works"
//     }
// }
// console.log(f(1)(2)) // works
// console.log(f(1)); /* (b) => {return "Works" } */


// Q2: Convert sum(2,6,1) to sum(2)(6)(1)

function sum(a) {
    return (b)=> {
        return (c) =>{
            return a + b + c;
        }
    }
}

console.log(sum(1)(2)(3)); //6
console.log(sum(1)); // [Function (anonymous)]

// Q3: Create a curried function named sum that take an argument as operation
/**
 * evalute("sum")(2)(4) => 6
 * evalute("multiply")(2)(4) => 8
 * evalute("divide")(4)(2) => 2
 * evalute("subtract")(4)(2) => 2
 * 
 */



function evalute(operations) {
    return function (a) {
        return function (b) {
            if(operations === "sum") return a + b;
            else if(operations === "multiply") return a * b;
            else if(operations === "divide") return a / b;
            else if(operations === "subtact") return a - b;
            
        }
    }
}


const mul = evalute('sum')

console.log(mul(2)(3));
console.log(mul(2)(4));

// Q3: Infinite currying


function add(a) {
    return function(b) {
        if (b) return add(a+b);
        return a;
    }
}

console.log(add(5)(4)(3));