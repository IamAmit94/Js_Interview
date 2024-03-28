// Objects in javascript
// EVERYTHING IN THE JS IS OBJECT
const user = {
    name: 'Amit',
    age: 22,
    "learn js object": true
}

// update name

user.name = 'Amit Rvt'
console.log(user);

// delete the property
delete user.age
console.log('delete ',user);

// access the value
console.log('Username =', user.name);

// in order to access the js string WE USE THE [] notation
console.log('string key :', user["learn js object"])

// similar way you can also delete the property
delete user["learn js object"]
console.log('updated obj :-',user)

// Assigning the dynamic value to the object in js

const property = "firstName"
const userName = "I am Amit"

const updatedUser ={
    [property]: userName
}

console.log("dynamic obj ", updatedUser);

// Looping in the object

const loopUser = {
    name: 'Alfa',
    age: 1,
    isRobot: true
}

for(key in loopUser) {
    console.log(`key: ${key} ==== value: ${loopUser[key]}`)
}

/******************************************************************************* */
// Q1: what will be the output

const func = (function(a) {
    delete a;
    return a;
})(5);

console.log('func : ',func) // output will be 5 becasue delete is applied to the object method only

/******************************************************************************* */
// Q2: what will be the output

const obj = {
    a: "one",
    b: "two",
    a: "three",
}

console.log('obj===',obj) //{ a: 'three', b: 'two' }

/******************************************************************************* */
// Q3: Create a func multiplyByTwo(obj) that mutltiplies all numeric property values of nums by 2;

let nums = {
    a: 100,
    b: 200,
    title: "My nums"
};

multiplyByTwo(nums)

function multiplyByTwo(obj) {
    for (key in obj) {
        if(typeof obj[key] === "number") {
            obj[key] *= 2;
        }
        
    }
}

console.log(nums);

/******************************************************************************* */
// Q4: What;s the output of the following code ?

const a = {};
const b = {key: "b"};
const c = {key: "c"};


a[b] = 123;  // [object Object]
a[c] = 456; //[object Object]

// console.log(a)
console.log(a[b]) // 456


/******************************************************************************* */
// Q5: What's JSON.stringify and JSON.parse


const juser = {
    name: 'json',
    age: 9
}

console.log(`${juser} ====== JSON.stringify --- ${JSON.stringify(juser)}`);
const updatedJuser = JSON.stringify(juser);

// where it is used !
// localStorage.setItem("test", juser) // it will give the [obj obj] in orde to get the real obj we will use updatedJuser
// TO convert back to object we use the JSON.parse. In order to access the value of it

console.log(JSON.parse(updatedJuser));

/******************************************************************************* */
// Q6: What's the output ?

console.log([..."okay"]) // [ 'o', 'k', 'a', 'y' ]

/******************************************************************************* */
// Q7: What's the output ?

const user3 = { name: "Lydia", age: 21 };
const admin = { admin: true, ...user3 };
console.log(admin); //{ admin: true, name: 'Lydia', age: 21 }

/******************************************************************************* */
// Q8: What's the output ?

const settings = {
    username: "Piyush",
    level: 19,
    health: 90,
};
    

const data = JSON.stringify(settings, ["level", "health"]); // this will only stringify the level and health property only
console. log(data); //{"level":19,"health":90}

/******************************************************************************* */
// Q9: What's the output ?

const shape = {
    radius: 10,
    diameter() {
    return this.radius * 2;
    },
    perimeter: () => 2 * Math.PI * this.radius,
    };

    console.log(shape.diameter()); // 20
    console.log(shape.perimeter()); // NAN ||since the arrow function this is targettting the  windows object.


/******************************************************************************* */
// Question 10 - What is destructuring in objects ?
let whatUser = {
    name: "Amit",
    age: 24, 
    fullName: {
        first: "amit",
        last: "rawat"
    }
};
    // destructuring in obj means taking out some property from an object
    const { name } = whatUser;
    // const { name: myName} = whatUser; // in case you want to override in destructuring
    // console.log(myName)
    console.log(name)

    // destructuring in the nested object

    const { fullName : {first}} = whatUser;

    console.log(first);

/******************************************************************************* */
// Question 11 - What's the output?
// REST parameter are always the last parameter || however spread operator can be used in btw
// function getItems(fruitList, ...args, favoriteFruit) {
//     return [...fruitList, ...args, favoriteFruit]
    
//     }
    
//     getItems(["banana", "apple"], "pear", "orange")

/******************************************************************************* */
// Question 12- What s the output?
let e = { greeting: "Hey!" };
let d;
d = e

e.greeting = "Hello";
console.log(d.greeting); // Hello || becz we are not copying the value of variable we are providing the ref to the variable

/******************************************************************************* */
// // Question 13 - What's the output?
// console.log({ a: 1 } == { a: 1 });// false
// console.log({ a: 1 } === { a: 1 });// false


/******************************************************************************* */
// Question 14- Wnat S the ou
let person = { name: "Lydia"};
const members = [person];
person = null;

console.log(members); //[ { name: 'Lydia' } ]


/******************************************************************************* */
// Question 15 - What s The output:

const value = { number: 10 };

const multiply = (x = { ...value }) => {
console.log((x.number *= 2));

};

multiply(); // 20
multiply(); // 20
multiply(value); // 20
multiply(value); // 40 || since it has updated the value to 20


/******************************************************************************* */
// Question 16 - What s The output:
function changeAgeAndReference(person) {
  person.age = 25;
  person = {
    name: "John",
    age: 50,
  };
  return person;
}


const personObjl = {
  name: "Alex",
  age: 30,
};

const personObj2 = changeAgeAndReference(personObjl);

console.log(personObjl);// { name: 'Alex', age: 25 }

console.log(personObj2); //{ name: 'John', age: 50 }

    
/******************************************************************************* */
// Question 17 - What's Shallow copy and Deep copy ? and how to deep copy /clone an object
// SHALLOW COPY: When we copy the 1 obj to another obj. And it hold the refrence of the another obj this is called the shallow copy
const userMe = { 
    name: 'Beta',
    age : 0
};
// 3 ways to clone the object
// const objClone = Object.assign({}, userMe);
// const objClone = JSON.parse(JSON.stringify(userMe));
const objClone = {...userMe}
objClone.name = "Theta"


console.log(userMe, objClone);
/******************************************************************************* */

/******************************************************************************* */

/******************************************************************************* */