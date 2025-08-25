const http = require('http')

const server1 = http.createServer(function (request, response) {
    response.writeHead(200, { 'Content-Type': 'text/plain' })
    if(request.url === "/"){
        response.write("Welcome to my server");
    }
    else if(request.url ==="/about"){
        response.write("This is the about page");
    }
    else if(request.url === "/contact"){
        response.write("Who's asking?");
    } else{
        response.statusCode = 404;
        response.write("Page not found");
    }

    response.end();
})

const port = 3000
server1.listen(port, function () {
    console.log(`Node server created at port ${port}`)
})

