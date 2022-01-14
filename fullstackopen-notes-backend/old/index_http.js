/* Control starts here, as defined in package.json */
const http = require('http'); // We still use require instead of ES6 modules on server side.
const logger = require('./utils/logger');

// const app = http.createServer((request, response) => {
//     response.writeHead(200, {'Content-Type': 'text/plain'});
//     response.end('Hello World');
// });

let notes = [
    {
        id: 1,
        content: 'HTML is easy',
        date: '2019-05-30T17:30:31.098Z',
        important: true
    },
    {
        id: 2,
        content: 'Browser can execute only Javascript',
        date: '2019-05-30T18:39:34.091Z',
        important: false
    },
    {
        id: 3,
        content: 'GET and POST are the most important methods of HTTP protocol',
        date: '2019-05-30T19:20:14.298Z',
        important: true
    }
];

const app = http.createServer((request, response) => {
    response.writeHead(200, {'Content-Type': 'application/json'});
    response.end(JSON.stringify(notes));
});

const PORT = 3001;
app.listen(PORT);
logger.info(`Server running on port ${PORT}`);
logger.info('Navigate to http://localhost:3001 to view.');
