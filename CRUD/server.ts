import express from 'express';

const server = express();
const port = 3005;

//Ex1
server.get("/sanity", (req, res) => {
    res.send("Server is up and running");
})

//Ex2
const wordCounter = {"blue": 5};

server.get("/:word", (req,res) => {
    const word = req.params.word
    if(wordCounter[word]){
        res.send({count:wordCounter[word]})
    } else res.send({count:0});
})

//Ex3
server.post("/:word", (req,res) => {
    const word = req.params.word;
    if(wordCounter[word]){
        wordCounter[word] += 1
    } else wordCounter[word] = 1;
    res.status(201);
    res.send(wordCounter);
})

server.listen(port, () => {
    console.log("Server running on port " + port);
})