import express from 'express';

const server = express();
const port = 3005;

//Ex1
server.get("/sanity", (req, res) => {
    res.send("Server is up and running");
})


server.listen(port, () => {
    console.log("Server running on port " + port);
})