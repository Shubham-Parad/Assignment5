const http = require("http");
const url = require('url');

const httpServer = http.createServer(handleServer);


function handleServer(req, res) {
    if (req.url === '/welcome') {
        res.setHeader('Content-Type', 'text/plain');
        res.statusCode = 200;
        res.end('Welcome to Dominos!');
    }

    if (req.url === '/contact') {
        res.setHeader('Content-Type', 'application/json');
        res.statusCode = 200;
        const contactInfo = {
            phone: '18602100000',
            email: 'guestcaredominos@jublfood.com',
        };
        res.end(JSON.stringify(contactInfo));
        return;
    }
}
httpServer.listen(8081, () => {
    console.log('server is listening');
})
module.exports = httpServer;