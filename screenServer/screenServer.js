const http =require('http')
const port = 3000

const server = http.createServer(function(req,res){
	res.writeHead(200,{'Content-Type':'text/html'})
	res.write('screenServer.js says yo')
	res.end()
})

server.listen(port,function(error){
	if(error){
		console.log('shits broke',error)
	}else{
		console.log('Server is listing on port'+ port)
	}
})

console.log("hello testtttt")