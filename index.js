var http = require('http');
fs = require('fs');

function serveStaticFile(res, path, contentType, responseCode) {
	if(!responseCode) responseCode = 200;
	fs.readFile(__dirname + path, function (err, data) {
		if (err) {
			res.writeHead(500, { 'Content-Type': 'text/plan'});
			res.end('500 - Internal Error');
		} else {
			res.writeHead(responseCode, { 'Content-Type': 'text/plan'});
			res.end(data);
		}
	});
}



http.createServer(function(req, res){
	var path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase();
	switch(path){
		case '':
			serveStaticFile(res, '/public/home.html', 'text/plain');
			break;
		defualt:
			res.writeHead(404, { 'Content-Type': 'text/plain' });
			res.end('Not Found');
			break;
	}
}).listen(3000);

console.log('Server started on localhost:3000; press Ctrl-C to terminate...');