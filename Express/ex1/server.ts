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

app.use(express.static(path.join(__dirname, 'dist')));

app.listen(port, () => {
    console.log(`server running on port ${port}`);
})

app.get('/', (req,res) => {
    res.send("Server is up and running smoothly");
})


app.get('/priceCheck/:itemName', (req,res) => {
    const item = store.find(item => item.name === req.params.itemName)
    if(!item){
        res.status(400);
        res.send({error:"item does'nt exist"});
    }
    else res.send({"price":item.price});
})

app.get('/buy/:name', (req,res) => {
    const item = store.find(item => item.name === req.params.name)
    if(item){
        res.status(200);
        item.inventory -= 1;
        res.send(item);
    } else{
        res.status(400);
        res.send({error:"item does'nt exist"});
    }
})

app.get('/sale', (req,res) => {
    let query = req.query;
    if(query.admin === "true"){
        let saleStore = store.map((item) => {
            let newItem = {...item};
            if(newItem.inventory > 10){
                newItem.price /= 2;
            }
            return newItem;
        })
        console.log("admin");
        res.send(saleStore);
    }
    else{
        res.send(store);
    }
})