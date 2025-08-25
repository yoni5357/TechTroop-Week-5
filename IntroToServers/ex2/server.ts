const http2 = require('http')

type User = {
    id :number,
    name:string,
    email:string
}

const users: User[] = [
    { id: 1, name: "John Doe", email: "john@example.com" },
    { id: 2, name: "Jane Smith", email: "jane@example.com" }
];

const server2 = http2.createServer(async(req, res) => {
    res.writeHead(200,{"content-Type" : "application/json"});
    if(req.url === "/api/users"){
        if(req.method === "GET"){
            res.write(JSON.stringify(users));
            console.log("get request called");
        }
        else if(req.method === "POST"){
            const newUser = await readBody(req) as User;
            if(newUser){
                newUser.id = users[users.length - 1].id + 1;
                users.push(newUser);
                res.write(JSON.stringify(users));
                console.log("post request called");
            }
            else{
                res.statusCode = 400;
                res.write(JSON.stringify({error: 'user not created'}));
            }

        } else{
            res.statusCode = 400;
        }
    } else if (req.url && req.url.startsWith("/api/users/") && req.method === "GET") {
        const id = parseInt(req.url.split("/").pop(), 10);
        const user = users.find(user => user.id === id);
        if (user) {
            res.write(JSON.stringify(user));
        } else {
            res.statusCode = 404;
            res.write(JSON.stringify({ error: 'user not found' }));
        }
    }
    res.end();
})


server2.listen(3000,() => {
    console.log("server listening...")
});

function readBody(req) {
    return new Promise((resolve, reject) => {
        const chunks: Buffer[] = [];
        req
            .on("data", (chunk: Buffer) => {
                chunks.push(chunk);
            })
            .on("end", () => {
                const body = Buffer.concat(chunks).toString();
                resolve(JSON.parse(body));
            })
            .on("error", reject);
    });
}