
async function checkPrice(){
    const itemName = document.getElementById('item-input').value;
    console.log(itemName);
    let response = await fetch(`http://localhost:3000/priceCheck/${itemName}`);
    let price = await response.json();
    document.getElementById('display').innerHTML = price.price;
}

async function buyItem(){
    const itemName = document.getElementById('buy-item-input').value;
    let response = await fetch(`http://localhost:3000/buy/${itemName}`);
    if(!response.ok){
        document.getElementById('buy-display').innerHTML = "Item does not exist";
        return;
    }
    let item = await response.json();
    document.getElementById('buy-display').innerHTML = `Congratulations, you've just bought ${item.name} for ${item.price}. There are ${item.inventory} left now in the store.`
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('price-button').addEventListener('click',checkPrice);
    document.getElementById('buy-button').addEventListener('click', buyItem);
})