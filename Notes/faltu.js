// Promises in Javascript
// Question 1: output of the below code

// console.log('start');
// const promise1 = new Promise((resolve, reject) => {
//   console.log(1);
//   resolve(2)
// })

// promise1.then((res) => {
//   console.log(res)
// })

// console.log('end')


// output of the code
// start sync oper
// 1     sync oper
// end   sync oper
// 2     async oper bcz promise resolve


// Promises in Javascript
// Question 2: What is the output ?

// console.log('start');
// const promise1 = new Promise((resolve, reject) => {
//   console.log(1);
//   resolve(2)
//   console.log(3);
// })

// promise1.then((res) => {
//   console.log(res)
// })

// console.log('end')

// // output:
// // start
// // 1
// // 3
// // end 
// // 2


// Promises in Javascript
// Question 3: What is the output ?

// console.log('start');

// const promise1 = new Promise((resolve, reject) => {
//   console.log(1);
//   console.log(3);
// })

// promise1.then((res) => {
//   console.log('Result :', res) // since the resolve is not mentioned so it will not go inside the resolve
// })

// console.log('end')

// start
// 1
// 3
// end

// Promises in Javascript
// Question 4: What is the output ?


// console.log('start');

// const fn = () => 
//  new Promise((resolve, reject) => {
//   console.log(1);
//   console.log('Success');
// });

// console.log('middle')

// fn().then((res) => {
//   console.log('Result :', res) // since the resolve is not mentioned so it will not go inside the resolve
// })

// console.log('end')

// output
// start
// middle 
// 1      
// Success
// end

// Promises in Javascript
// Question 5: What is the output ?


// function job() {
//     return new Promise(function (resolve, reject) {
//         reject();
//     });
// }


// let promise = job();

// promise
// .then(function () {
//     console.log('Success 1');
// })
// .then(function () {
//     console.log('Success 2');
// })
// .then(function () {
//     console.log('Success 3');
// })
// .catch(function () {
//     console.log('Erorr 1');
// })
// .then(function () {
//     console.log('Success 4');
// })

// output:
// Erorr 1
// Success 4

/************************************************************************** */
// Promises in Javascript
// Question 5: What is the output ?

// function job(state) {
//     return new Promise(function (resolve, reject) {
//         if (state) {
//             resolve('success')
//         } else {
//             reject('error')
//         }
//     });
// }


// let promise = job(true);

// promise
// .then(function (data) {
//     console.log(data);

//     return job(false)
// })
// .catch(function (error) {
//     console.log(error);

//     return "Errro caught"
// })
// .then(function (data) {
//     console.log(data);

//     return job(true)
// })
// .catch(function (error) {
//     console.log(error);

// })


// output
// success
// error       
// Errro caught

/************************************************************************** */
// Promises in Javascript
// Question 6: What is the output ?

// function job(state) {
//     return new Promise(function (resolve, reject) {
//         if (state) {
//             resolve('success')
//         } else {
//             reject('error')
//         }
//     });
// }


// let promise = job(true);

// promise
// .then(function (data) {
//     console.log(data);

//     return job(true)
// })
// .then(function (data) {
//     if (data !== 'victory') {
//         throw "Defeat"
//     }
//     return job(true)
// })
// .then(function (data) {
//     console.log(data);
// })
// .catch(function (error) {
//     console.log(error);

//     return job(false)
// })
// .then(function (data) {
//     console.log(data);

//     return job(true)
// })
// .catch(function (error) {
//     console.log(error);

//     return "Error Caught"
// })
// .then(function (data) {
//     console.log(data);

//     return new Error("test") // not Returning promise
// })
// .then(function (data) {
//     console.log('Success: ',data.message);
// })
// .catch(function (data) {
//     console.log("Error: ", data.message);
// })


// output:
// success
// Defeat        
// error
// Error Caught  
// Success:  test


/************************************************************************** */
// Promises in Javascript
// Question 7: Promise Chaining



// const firstPromise = new Promise((resolve, reject) => {
//     resolve('first!')
// })

// const secondPromise = new Promise((resolve, reject) => {
//     resolve(firstPromise)
// })


// secondPromise.then((res) => {
//     return res;
// }).then((res) => console.log(res));


/************************************************************************** */
// Promises in Javascript
// Question 8: Rewrite this example code using async/await 

            // function loadJson(url) {
            //     return fetch(url).then((response) => {
            //             if (response.status == 200) {
            //                 return response.json();
            //             } else {
            //                 throw new Error(response.status);
            //             }
            //         });
            // }
            
            // loadJson("https://fakeurl.com/no-such-user.json")
            //     .catch((err) => console.log(err));
            

            // || converted to async and await

                // async function  loadJson(url){
                //     let response = await fetch(url);

                //     if(response.status == 200) {
                //         let json = await response.json()
                //         return json
                //     }
                //     throw new Error(response.status);
                // }

                // loadJson("https://fakeurl.com/no-such-user.json")
                // .catch((err) => console.log(err));


                
/************************************************************************** */
// Promises in Javascript
// Question 9: write a code to execute the promise recursively

// function importantAction(username) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(` Subscribe to ${username}`);
//     }, 1000);
//   });
// }

// function likeTheVideo(video) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`Like the ${video} video`);
//     }, 1000);
//   });
// }

// function shareTheVideo(video) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`Share the ${video} video`);
//     }, 1000);
//   });
// }

// function promRecursive(funcPromises) {
//   if (funcPromises.length === 0) return;

//   const currPromise = funcPromises.shift();

//   currPromise
//     .then((res) => console.log(res))
//     .catch((err) => console.error(err));

//   promRecursive(funcPromises);
// }

// promRecursive([
//   importantAction("This is important"),
//   likeTheVideo("JS interview ques"),
//   shareTheVideo("Again share the video"),
// ]);

                


