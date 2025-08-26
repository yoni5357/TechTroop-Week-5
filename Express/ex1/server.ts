const express = require('express');
const path = require('path');
const app = express();

const port = 3000;

const store = [
    { name: "table", inventory: 3, price: 800 },
    { name: "chair", inventory: 16, price: 120 },
    { name: "couch", inventory: 1, price: 1200 },
    { name: "picture frame", inventory: 31, price: 70 }
]

app.listen(port, () => {
    console.log(`server running on port ${port}`);
})

app.get('/', (req,res) => {
    res.send("Server is up and running smoothly");
})

app.get('/priceCheck/:itemName', (req,res) => {
    const item = store.find(item => item.name === req.params.itemName)
    if(!item){
        res.send("item does'nt exist")
    }
    else res.send({"price":item.price});
})
