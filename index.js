var http = require('http');

http.createServer(function(req,res){
	res.writeHead(200, { 'Content-Type': 'text/plain' });
	res.end('test');
}).listen(3000);

console.log('Server started on localhost:3000; press Ctrl-C to terminate...');