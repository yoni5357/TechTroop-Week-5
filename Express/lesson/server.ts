const express = require('express');
const path = require('path');
const app = express();

const users = {
    tilda: "You've done a wonderful job",
    riva: "You need to improve your form, but good perseverance",
    jeremy: "You're incredible"
}

const port = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'dist')));

app.listen(port, () => {
    console.log(`Running server on port ${port}`);
})

app.get('/', function (request, response) {
    console.log("Someone has come into the server. Brace yourselves.")
    response.send("Ending the cycle, thanks for visiting")
})

app.get('/life', (req,res) =>{
    res.send('42,43');
    console.log('42');
})

app.get('/user/:username', (req,res) => {
    res.send(users[req.params.username])
})

app.get('/details', (req,res) => {
    let params = req.query;
    console.log('details');
    console.log(params.city);
    res.send(params);
})