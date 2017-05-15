var http = require('http');
var port = 80;

http.createServer(function(req, res) {
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.write("Hello world from Node.js");
    res.end();
}).listen(port);
