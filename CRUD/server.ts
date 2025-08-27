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

server.listen(port, () => {
    console.log("Server running on port " + port);
})