// closures in js



 function subscribe() {
    var name = "this is my name"

    function displayName() { // this is closure

        console.log(name);
    }

    displayName();
 }

//  subscribe();

// closure has 3 scopes ie =>  local, global and function access to 
 var e = 10;

 function sum(a) {
    return function (b) {
        return function (c) {
            return function(d) {
                return a + b + c + d + e;
            }
        }
    }
 }

//  console.log(sum(1)(2)(3)(4))


 // clouser interview ques

 // Q:1 What will be logged to console.
/** 
   let count = 0;
 (function prinCount() {
    if (count === 0) {
        let count = 1; // shadowing
        console.log(`Inside count: `,count);//1
    }
    console.log(`Outside count`, count);//0
 })()
*/



 /***************************************************************************************** */
 // Q:2 Write a function that would allow you to do this

//  var addSix = createBase(6);
//  addSix(10); // return 16
//  addSix(21);// return 27

/*
function createBase(num) {
  return function (innernum) {
    console.log(innernum + num)
  }

}

var addSix = createBase(6);
addSix(10); // return 16
addSix(21);// return 27

*/
 /***************************************************************************************** */
 // Q:3 Time optimization

/** function find(index) {
    let a = [];
    for (let i = 0; i < 1000000; i++) {
        a[i] = i * i;
    }
    console.log(a[index]);
 }
 console.time("6");
 find(6);
 console.timeEnd("6");
 console.time("12");
 find(12);
 console.timeEnd("12") */

 function find(index) {
    let a = [];
    for (let i = 0; i < 1000000; i++) {
        a[i] = i * i;
    }
  return function (index) {
    console.log(a[index]);
  }
 }

 const closure = find()
 console.time("6");
 closure(6);
 console.timeEnd("6");
 console.time("12");
 closure(12);
 console.timeEnd("12")


 /***************************************************************************************** */
 // Q:4 Block scope and setTimeout

// function a() {
//     for (var i = 0; i<3; i++) {
//         setTimeout(function log() {
//             console.log(i); // what is logged ?
//         }, i *1000)
//      }
// }

// a()
// output will be 3 3 3 because of the var as "var" do not have the block sope it has the function scope 
// however if we use the let then the value will be  0 1 2
// but the interviewer will ask not to use the let and print  0 1 2


//soln
// function a() {
//     for (var i = 0; i<3; i++) {
//         function inner(i) {
//             setTimeout(function log() {
//                 console.log(i); // what is logged ?
//             }, i *1000)
//         }
//         inner(i)
//      }
// }

// a()

 /***************************************************************************************** */
 // Q:5 How would you use a clouser to create a private counter ?


 function counter() {
    var _counter = 0;

    function add(increment) {
        _counter += increment;
    }

    function retrive() {
        return "counter = " + _counter
    }

    return {
        add,
        retrive
    }
 }



 const c = counter();
 c.add(10);
 c.add(5);

//  console.log(c.retrive());

 /***************************************************************************************** */
 // Q:6 What is Module Pattern ?

 var Module = (function() {

    function privateMethod() {
        // do something
        console.log("private");
    }

    return {
        publicMethod:  function () {
            // can call privateMethod();
            console.log("Public");
        },
    };
 })();

//  Module.publicMethod(); // This will print 
//  Module.privateMethod(); // It will give error


 /** we can not access the PRIVATE function directly in module patter however we can access the PRIVATE function with the 
  * help of the PUBLIC function that are declared in the pattern
  */

 
 /***************************************************************************************** */
 // Q:6 Run the code only once

 let view;
//  function likeTheVideo() {
//     view = "Hello welcome";
//     console.log('You can check view count: ',view);
//  }

function likeTheVideo() {
    let called = 0;

    return function () {
        if(called>0) {
            console.log(`Function can not called more than once !`);
        } else {
            view = "Hello welcome";
            console.log('You can check view count: ',view, called);
            called++;
        }
    }

 }

// const result = likeTheVideo()
// result()
// result()
// result()
// result()

 
 /***************************************************************************************** */
 // Q:6 Memomiztion in js

//  const clumsyProduct = (num1, num2) => {
//     for (let i = 1; i < 100000; i++) {
//         return num1 * num2;
//     }
//  }

//  console.time("First call");
//  console.log('First call: ',clumsyProduct(1234, 5678));
//  console.timeEnd("First call");

//  console.time("Second call");
//  console.log('Second call: ',clumsyProduct(1234, 5678));
//  console.timeEnd("Second call");



// As it is taking more time since we are passing the same data to it
 // soln how to memozied your code in js


function myMemoize(fn, context) {
    const res = {};
    return function (...args) {
        var argsCache = JSON.stringify(args);
        if(!res[argsCache]) {
            res[argsCache] = fn.call(context || this, ...args)
        }
        return res[argsCache];
    }
}


 const clumsyProduct = (num1, num2) => {
    for (let i = 1; i < 100000; i++) {
        return num1 * num2;
    }
 }

 const memoizedClumzyProduct = myMemoize(clumsyProduct);

 console.time("First call");
 console.log('First call: ',memoizedClumzyProduct(1234, 5678));
 console.timeEnd("First call");

 console.time("Second call");
 console.log('Second call: ',memoizedClumzyProduct(1234, 5678));
 console.timeEnd("Second call");
 

  /***************************************************************************************** */
 // Q:10 Diffrence between the clouser and scope

 /**
  * CLOUSER: Creating the function within another function and then the inner function is clouser. This function
  * usually returns so that you can use the outer function variable function at later time  it is of 3 types as:-
  * 1. local
  * 2. global 
  * 3. (outer scope)function access to 
  * 
  * SCOPE: define what variable you have access to
  * 1. Global scope
  * 2. local Scope
  */