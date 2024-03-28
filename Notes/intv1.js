// var vs let vs const
//scope


// Shadowing in js


function test() {
    let a = 'Hello';

    if(true) {
        let a = "Hi" // This a will shadow the above a and overlap the value of a;
        console.log('inside :', a);
    }

    console.log('Outside :', a);
}

test();

// we can shadow the "var" variable using the "let" but can not shadow the "let" variable using "var"

// Illegal shadowing
// function test2() {
//     let a = 'Hello';
//     var b = 'Welcome'

//     if(true) {
//         var a = 'welcome me!'// throw the error variable is already defined
//         let b = "Hi" 
//         console.log('inside :', a);
//         console.log('inside :', b);
//     }

//     console.log('Outside :', a);
//     console.log('Outside :', b);
// }

// test2();

// NOTE: let and const can not be declare in the same scope, However var can be declare in the same scope.

let A;
{
    let A; // This is fine and will work because we are shadowing the variable
}

// We need to declare the const with the initializer otherwise it will throw the error;

// const a; // will throw the error
// const a = 20; // will not throw the error


// RE-INITIALISATION
// VAR AND LET can be reinstialized howver const can not



/****************************************************** MAP FILTER REDUCE *********************************** */
// CREATING THE POLYFILL OF MAP

Array.prototype.myMap = function (cb) {
    let temp = [];
    for(let i = 0; i < this.length; i++) {
        temp.push(cb(this[i], i, this))
    }

    return temp;
    
}

// CREATING THE POLYFILL OF FILTER

Array.prototype.myFilter = function (cb) {
    let temp = [];
    for(let i = 0; i < this.length; i++) {
        if(cb(this[i], i, this)) {
            temp.push(cb(this[i]))
        }
    }

    return temp;
    
}

//this[i] ==> current element
//i ==> Index
// this ==> current array


// CREATING THE POLYFILL OF REDUCE

Array.prototype.myReduce = function (cb, initialValue) {
    var accumulator = initialValue;

    for(let i = 0; i < this.length; i++) {
      accumulator = accumulator ? cb(accumulator, this[i], i, this): this[i]
    }

    return accumulator;
    
}


// Diffrence btw Map and Foreach
// map return the things and do not chage the original array
// In map we can chain the other array method to it. since it return the new array


let arr = [1,2,3,4,5];

const mapResult = arr.map((el) => el * 2); //  [ 2, 4, 6, 8, 10 ]

const foreachResult = arr.forEach((ar, i) => arr[i] = ar + 10); // undefined since it do not return the new array

console.log(arr) // it modifes the orignal array

console.log('mapResult====>',mapResult , `foreachResult=====>`,foreachResult)



// MAP, REDUCE < FILTER Interview ques

let students = [
  { name: 'alfa', rollNum: 31, marks: 80 },
  { name: 'beta', rollNum: 15, marks: 69 },
  { name: 'gama', rollNum: 16, marks: 35 },
  { name: 'theta', rollNum: 7, marks: 55 },
];

// return student name in CAPS

const names = students.map(stu => stu.name.toUpperCase())
console.log(names);

// return only details of those who scored more than 60 marks

const score60 = students.filter((std) => std.marks > 60)

console.log(score60)

// Marks more than 60 and rollNumber greater than 15;

const marksAndRollnumber = students.filter((stu) => stu.marks > 60 && stu.rollNum > 15);
console.log(marksAndRollnumber);

// Sum of marks of all students

const sumAll = students.reduce((acc, curr) => acc + curr.marks, 0);
console.log(sumAll);

// Return only name of studensts who scored more than 60

const moreThan60 = students.filter(stu => stu.marks > 60).map(stu => stu.name)
console.log((moreThan60));

// return total marks for students with marks greater than 60 after 20 marks have been added to those who scored less than 60

const complexProb = students.map((stu) => { if (stu.marks < 60) {
                            stu.marks +=20 
}
                            return stu;
}).filter((stu) => stu => stu.marks)
.reduce((acc, curr) => acc + curr.marks, 0)
                            
console.log(complexProb);

/** JS INTERVIEW QUESTIONS**** */


// functions in js

//Q1: What is function declaration?
// This is function declaration also called as function defination or function statement
function square(num) {
    return num * num
}



// Q2: What is Function Expression ?
// Storing the function inside the variable is function Expression

const squareRes = (function (num) {
  return num * num;
})
  // function without name is known as annonymous function

  //Q3: IIFE - i/o based questions

//   (function(x) {
//     return (function(y) {
//       console.log(x);
//     })(2);
//   })(10);
  // x = 10 output

  // clousers: The ability to access the variable and function that are lexically out of scope are called clousers. Clousers are created whenever the new functions are created. Becasue that function has the refrence to it's outer scope


  //Q4: Function scope - i/o based questions


//   for(let i =0;i<5;i++) {
//     setTimeout(() => {
//         console.log(i)
//     }, i*1000);
//   }

  // output 0 1 2 3 4// however if we change the let to var then output will be: 5, 5, 5, 5, 5 becz of the scope
  

  // Q5: function Hoisting: IN case of the hoisting if you call the function before or after it's declaration. It will work fine in both cases

  var x = 21;

  var fun = function () {
    console.log(x);
    var x =20;
  }

  fun()
// output will be undefined

//Q6: Params vs Arguments

function square(num) { // Parameters
    console.log(num * num);
}

square(5) // Arguments

// Q7: spread operator

// const fn = (a, ...SVGAnimatedNumberList, x, y) {
//     console.log(x,y)
// }

// fn(5,6,7,8)

// output: Rest parameter must be last formal parameter

// Q8: Diffrence between the Arrow vs normal function


// 1: Syntax
function square(num) {
    return num * num
}

const squareArrow = (num) => {
    return  num * num;
}

// 2. Implicit "return" keyword

const sqrArrow = (num) => num * num;

//3. Arguments

function fn() {
    console.log(arguments);
}

//fn(1,2,3)

const fnArr = () => {
    console.log(arguments);
}

//4. ths - keyword

let user = {
    username : 'John',
    rc1: () => {
        console.log('arrow this ', this.username);// this will print undefined since it will be targetting the global variable
    },

    rc2() {
        console.log('normal function ', this.username);
    }
}

user.rc1()
user.rc2()