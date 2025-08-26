
async function checkPrice(){
    const itemName = document.getElementById('item-input').value;
    console.log(itemName);
    let response = await fetch(`http://localhost:3000/priceCheck/${itemName}`);
    let price = await response.json();
    document.getElementById('display').innerHTML = price.price;
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('price-button').addEventListener('click',checkPrice);
})