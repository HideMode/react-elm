const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;
/**
 * basic http server that send `Hello World!` string.
 */
const server = http.createServer((request, response) => {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/plain');
    let body = [];
    request.on('error', (err) => {
        console.error(err.stack);
    }).on('data', (chunk) => {
        body.push(chunk);
    }).on('end', () => {
        // involved when incoming data transation is compeleted.
        body = Buffer.concat(body).toString();
        response.writeHead(200, {
            'Content-Type': 'application/json'
        })
        myEmitter.on('event', () => {
            console.log('involved')
        })
        response.end(body);
    })
    
    // synchronous operation
    // const data = fs.readFileSync('./README.md', {encoding: 'UTF-8'});

    // asynchronous operaiton
    // fs.readFile('./README.md', (err, data) => {
    //     if (err) {
    //         throw err;
    //     }
    //     response.end(data);
    // });
})

/**
 * bind the hostname and port to the created server above.
 */
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
})