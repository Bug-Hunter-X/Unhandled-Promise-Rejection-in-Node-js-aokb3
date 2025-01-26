const http = require('http');

const server = http.createServer((req, res) => {
  //Simulate an async operation that might reject
  someAsyncOperation()
  .then(result => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(result);
  })
  .catch(error => {
    console.error('Error handling request:', error);
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Internal Server Error');
  });
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

function someAsyncOperation(){
  return new Promise((resolve, reject) => {
    // Simulate a successful operation 80% of the time
    if (Math.random() < 0.8) {
      resolve('Operation Successful!');
    } else {
      reject('Async operation failed!');
    }
  })
}