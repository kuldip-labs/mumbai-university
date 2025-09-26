// const delayedPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // After 2 seconds, the promise resolves with the value 'Operation completed!'
//     resolve('Operation completed!'); 
//   }, 2000); // 2000 milliseconds = 2 seconds
// });

// delayedPromise.then((message) => {
//   console.log(message); // Output: Operation completed!
// });

// console.log('Promise created, waiting for it to resolve...');

/* Failed promise Example */

const failingPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // After 1 second, the promise rejects with an Error object
    reject(new Error('Operation failed: Timeout!')); 
  }, 1000); // 1000 milliseconds = 1 second
});

failingPromise.catch((error) => {
  console.error(error.message); // Output: Operation failed: Timeout!
});

console.log('Promise created, waiting for it to reject...');