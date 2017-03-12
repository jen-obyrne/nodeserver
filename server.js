var http = require('http');
const port = 8080;

function handleRequest(request, response){
	response.end('hello world');
}

//create server
var server = http.createServer(handleRequest);
server.listen(port, function(){
	console.log('server is now listing on: http://localhost/' + port);
	console.log('Press CTRL + C to stop the server running at anytime.')
})