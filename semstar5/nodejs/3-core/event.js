const EventEmitter = require('events');

// Create a new instance of EventEmitter
const myEmitter = new EventEmitter();

// 1. Registering an event listener using .on()
// This listener will be called every time the 'greet' event is emitted.
myEmitter.on('greet', (name) => {
  console.log(`Hello, ${name}!`);
});

// 2. Registering a one-time event listener using .once()
// This listener will be called only the first time the 'farewell' event is emitted.
myEmitter.once('farewell', (name) => {
  console.log(`Goodbye, ${name}! See you next time.`);
});

// 3. Emitting events using .emit()
// This triggers the 'greet' event, and the corresponding listener is executed.
myEmitter.emit('greet', 'Alice'); // Output: Hello, Alice!

// This triggers the 'greet' event again.
myEmitter.emit('greet', 'Bob');   // Output: Hello, Bob!

// This triggers the 'farewell' event for the first time.
myEmitter.emit('farewell', 'Charlie'); // Output: Goodbye, Charlie! See you next time.

// This attempts to trigger the 'farewell' event again, but the listener registered with .once()
// will not be called a second time.
myEmitter.emit('farewell', 'David'); // No output for 'farewell'