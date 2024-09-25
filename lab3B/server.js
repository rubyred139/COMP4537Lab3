let http = require('http');
let url = require('url');
const {getDate, getGreeting} = require('./modules/utils'); 


const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const guest = parsedUrl.query.name;
    const timestamp = getDate();
    const returnedGreeting = `
    <h2 style="color: blue;">
    ${getGreeting(guest, timestamp)};
    </h2>`
    res.writeHead(200, {'Content-Type': 'text/html'});

    res.end(returnedGreeting);
});

server.listen(3000, () => {
    console.log('Server is running on port 3000');
});