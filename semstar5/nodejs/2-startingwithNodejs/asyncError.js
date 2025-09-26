async function getData() {
  console.log('Starting...');
  const result = await someAsyncOperation();
  console.log(`Result: ${result}`);
  return result;
}

function someAsyncOperation() {
  return new Promise(reject => {
    setTimeout(() => reject(new Error('Operation failed: Timeout!')), 1000);
  });
}

// Call the async function
getData().then(data => console.log('Final data:', data)).catch(err => console.error('Error:', err));