const express = require('express');
const path = require('path');
const app = express();

const port = 3000;

app.listen(port, () => {
    console.log(`server running on port ${port}`);
})

app.get('/', (req,res) => {
    res.send("Server is up and running smoothly");
})

