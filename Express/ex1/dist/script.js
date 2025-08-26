
let money = 1000;

async function checkPrice(){
    const itemName = document.getElementById('item-input').value;
    console.log(itemName);
    let response = await fetch(`http://localhost:3000/priceCheck/${itemName}`);
    let price = await response.json();
    document.getElementById('display').innerHTML = price.price;
}

async function checkPriceBeforeBuy(){
    const itemName = document.getElementById('buy-item-input').value;
    console.log(itemName);
    let response = await fetch(`http://localhost:3000/priceCheck/${itemName}`);
    let price = await response.json();
    if(money - price.price > 0){
        return price.price;
    }
    else{
        document.getElementById('buy-display').innerHTML = "no money get a job";
    }
}

async function chairPriceCheck(){
    const res = await fetch(`http://localhost:3000/priceCheck/chair`);
    const priceObj = await res.json();
    const price = priceObj.price;
    return price;
}

async function buyItem(){
    const itemName = document.getElementById('buy-item-input').value;
    const price = await checkPriceBeforeBuy()
    if(!price){
        return;
    }
    let response = await fetch(`http://localhost:3000/buy/${itemName}`);
    if(!response.ok){
        document.getElementById('buy-display').innerHTML = "Item does not exist";
        return;
    }
    money -= price;
    document.getElementById('money').innerHTML = money;
    let item = await response.json();
    document.getElementById('buy-display').innerHTML = `Congratulations, you've just bought ${item.name} for ${item.price}. There are ${item.inventory} left now in the store.`
}

async function buyChairInIntervals(){
    let chairPrice = await chairPriceCheck();

    setInterval(async () => {
        let currentPrice = await chairPriceCheck();
        if(currentPrice < chairPrice){
            await fetch(`http://localhost:3000/buy/chair`);
            console.log('bought chair for less');
            money -= currentPrice;
            document.getElementById('money').innerHTML = money;
            chairPrice = currentPrice;
        }
        console.log('still waiting for a price drop...');
    },3000)
}

document.addEventListener('DOMContentLoaded', () => {
    buyChairInIntervals();
    document.getElementById('money').innerHTML = money;
    document.getElementById('price-button').addEventListener('click',checkPrice);
    document.getElementById('buy-button').addEventListener('click', buyItem);
})