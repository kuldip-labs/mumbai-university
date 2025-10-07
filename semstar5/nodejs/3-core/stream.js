const fs = require('fs');

// Create a readable stream from 'input.txt'
const readableStream = fs.createReadStream('input.txt');

// Create a writable stream to 'output.txt'
const writableStream = fs.createWriteStream('output.txt');

// Pipe the data from the readable stream to the writable stream
readableStream.pipe(writableStream);

// Handle completion and potential errors
writableStream.on('finish', () => {
  console.log('File copy completed!');
});

readableStream.on('error', (err) => {
  console.error('Error reading file:', err);
});

writableStream.on('error', (err) => {
  console.error('Error writing file:', err);
});