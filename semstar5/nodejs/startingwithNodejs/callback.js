let myCallback = function(err, data) {
  if (err) throw err; // Check for the error and throw if it exists.
  console.log('got data: '+data); // Otherwise proceed as usual.
};

let usingItNow = function(callback) {
  callback(null, 'get it?'); // I dont want to throw an error, so I pass null for the error argument
};

/* simulate an error case, we can define usingItNow like this */
// var usingItNow = function(callback) {
//   var myError = new Error('My custom error!');
//   callback(myError, 'get it?'); // I send my error as the first argument.
// };

usingItNow(myCallback); // Call the function with the callback.