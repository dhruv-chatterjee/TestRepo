var util = require('util'),
	http = require('http');

http.createServer(function(req,res) {
	res.writeHead(200,{'Content-type': 'text/plain'});
	res.write('Hello! I know nodejs');
	res.end();
}).listen(3000);

util.puts('>Server running on port 8000');
