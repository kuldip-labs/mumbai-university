const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  console.log(`Request received for: ${req.url}`);

  // Set the response header
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  let body = '';

  // Listen for data chunks from the request body
  req.on('data', (chunk) => {
    body += chunk.toString(); // Convert buffer to string
  });

  // When the request body has been fully received
  req.on('end', () => {
    console.log('Request body received:', body);

    // Define the file path
    const filePath = 'request_body.txt';

    // Write the request body to a file using fs.writeFile
    fs.writeFile(filePath, body, (err) => {
      if (err) {
        console.error('Error writing to file:', err);
        res.end('Error saving data.');
        return;
      }
      console.log(`Request body successfully written to ${filePath}`);
      res.end('Request body saved to file!');
    });
  });
});

const port = 3000;
const hostname = '127.0.0.1';

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});