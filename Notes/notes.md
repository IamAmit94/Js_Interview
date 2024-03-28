JS is a synchronous langauge
JavaScript itself has elements of both synchronous and asynchronous behavior. Here's a breakdown:

Synchronous nature:

At its core, JavaScript is single-threaded. This means it executes code line by line in the order it's written.
For code that doesn't involve interacting with external resources (like network requests, file I/O, etc.), JavaScript executes synchronously. Each line of code waits for the previous one to finish before proceeding.
Asynchronous capabilities:

JavaScript provides mechanisms to handle operations that take time to complete without blocking the main thread. This is where its asynchronous nature comes in.
Common asynchronous operations include:
Fetching data from a server using fetch or XMLHttpRequest.

Reading or writing files using the File System API.

Setting up timers and callbacks using setTimeout or setInterval.

When an asynchronous operation is initiated, JavaScript doesn't wait for it to finish. It continues executing other code, and when the operation completes, a callback function is invoked to handle the result.

Event Loop and Call Stack:

JavaScript uses an event loop and a call stack to manage synchronous and asynchronous operations:
Call Stack: Handles synchronous code execution. Functions are pushed onto the call stack when called and popped off when they finish.
Event Loop: Continuously monitors the call stack and a queue of tasks (event queue). When the call stack is empty, the event loop checks the event queue for any completed asynchronous operations. If found, the corresponding callback function is pushed onto the call stack for execution.
In summary:

JavaScript's core execution is synchronous (line by line).
It offers asynchronous capabilities to handle operations that take time without blocking the main thread.
The event loop and call stack work together to manage synchronous and asynchronous operations efficiently.


# This is the synchronous code
```js
Synchronous code in js:-

console.log('First')

console.log('Second')

console.log('Third')

```

# The Asynchronous code

```js

console.log('Start')

  setTimeout(() => {
    console.log('in the middle of code')
  }, 1000);

console.log('Code end here !')

```

`Note: Js execute the sync code first then the async code`


```js
console.log('First')


function printUserName(user) {
  setTimeout(() => {
    return `current logged in user : ${user}`
  }, 100);
}

const message = printUserName('Alfa');
console.log(message)

console.log('Third')


```

The output for the above code will be :-
First
undefined
Third

So how can we fix the Undefined in the Async code

# callback: 

callback are the function which is used as the parameter to another function


```js
console.log('First')

function printUserName(user, cb) {
  setTimeout(() => {
    cb(`current logged in user : ${user}`)
  }, 100);
}

const message = printUserName('Alfa', (message) => {
  console.log(message)
});

console.log('Third')
```

To make the js code asynchronous we can use the callback
Now with the help of the callback the output of the code will be :-
First
Third
current logged in user : Alfa

# callback -hell or Pyramid of doom

```js

console.log(`Start`);

function watchTheVideo(username, cb) {
  setTimeout(() => {
    cb(`${username} will watch the video `);
  }, 1000);
}

function likeTheVideo(video, cb) {
  setTimeout(() => {
    cb(`Like  the ${video} video `);
  }, 1000);
}

function shareTheVideo(video, cb) {
  setTimeout(() => {
    cb(`Share  the ${video} video `);
  }, 1000);
}

function commentTheVideo(video, cb) {
  setTimeout(() => {
    cb(`comment  the ${video} video `);
  }, 1000);
}

watchTheVideo(`Alfa`, function (message) {
  console.log(message);
  likeTheVideo(`video name `, (action) => {
    console.log(action);
    shareTheVideo("Share video name ", (action) => {
      console.log(action);
      commentTheVideo("comment name ", (action) => {
        console.log(action);
      });
    });
  });
});

console.log(`End`);

```

Above mention is the example of the callback hell, As nesting of the code is done above. And it is hard to read.
So in order to resolve this `PROMISE` was introduced in js


# Promises


There are 3 states of promises as:-
1. Pending: The initial state of a promise.
2. Fullfilled: The state of a promise representing a successful operation.
3. Reject: The state of a promise representing a failed operation. Once a promise is fulfilled or rejected, it is immutable (i.e. it can never change again).

```js

console.log(`start`);

const sub = new Promise((resolve, reject) => {
    setTimeout(() => {
        const result  = true;
        if(result) resolve(`Promise is resolved !`)
        else reject(new Error(`This promise is not resolved`))
    }, 2000)
})

// This is how promise is run with the help of then and catch
sub. 
then((res) => {
    console.log(res)
})
.catch((err)=> {
    console.error(err)
})


console.log('Stop');


```


```js

let a = 10;

function multiply(x) {
  return x * 10
}

let b = multiply(a)

console.log(b)

```
# Js execution context
js execution context has the 2 phases:-
1. Createion Phase
2. Execution Phase

creation Phase:-
1. Global or window object
2. setup the memory heap for storing the variable and function referances
3. It initialises the function and variable with undefined

a = undefined
multiply() { }
b = undefined


Execution Phase:
During the execution phase the JS engine execute the code line by line assigne the values to the variable and execute the functions call

a = 10;
b = 100;


# hoisting

JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables or classes to the top of their scope, prior to execution of the code.

Hoisting allows functions to be safely used in code before they are declared.

Example 01: Function Hoisting

Temporal debt zone: variable are in the scope, but they are not declared yet, is the reason why hoisting is possible in let and const.
