let Getdata = JSON.parse(localStorage.getItem('displayDetailed'))
let ProductDetailed = document.querySelector('.ProductDetailed')
let counter = document.querySelector('.counter')
let CalculatePrice = document.querySelector('.CalculatePrice')
let AddToFavoriate = []
let AddToFav = JSON.parse(localStorage.getItem('Fav'));


function ProductDisplay() {
    ProductDetailed.innerHTML = '';

    ProductDetailed.innerHTML = `
    <div ${Getdata.id}>
    <div class='main'>
    <img class='mainImg' src=${Getdata.images[0]} alt="${Getdata.title} 1">
    </div>
    <div class='SelectedImages'>
                ${Getdata.images.map((img, idx) => `
                    <img class="Img" src="${img}" alt="${Getdata.title} ${idx + 1}">
                `).join('')}
    </div>
    
    <h1>${Getdata.title}</h1>
    <p>${Getdata.description}</p>
    <h1>Stock Avalibility ${Getdata.stock}</h1>
    <h1>${Getdata.category}</h1>
    <button onclick="AddToCart(Getdata)">AddToCart</button>
    <button onclick="AddFav(Getdata)">${AddToFav==true ? 'AddToFav' : 'RemoveToFav'}</button>
    </div>
    `;
    // ImageSwitcher();

}

function AddToCart(item) {
    let findone = cart.findIndex((element) => element.id == item.id);
    if (findone == -1) {
        item.stock--;
        cart.push({ ...item, quantity: 1 })
        // cart[findone].quantity = cart[findone].quantity + 1;
        count++;
        console.log(cart[findone]);
    } else {
        cart[findone].quantity++;
        cart[findone].stock--;
        count++;

        if (cart[findone].stock < 0) {
            alert('Product out of stock')
            cart[findone].stock = 0
            cart[findone].quantity = cart[findone].quantity - 1;
            count--;
        }
        console.log(cart[findone]);
    }
    CalculateTotalPrice()
    counter.innerHTML = count

    localStorage.setItem('count', JSON.stringify(count))
    localStorage.setItem('cart', JSON.stringify(cart))
}
let count = JSON.parse(localStorage.getItem('count')) || 0;
counter.innerHTML = count;


function ImageSwitcher() {
    let mainImg = document.querySelector('.mainImg')
    let div = document.querySelector('.SelectedImages')
    div.addEventListener('click', (e) => {
        if (e.target.classList.contains('Img')) {
            console.log(e.target.src, mainImg.src);
            mainImg.src = e.target.src
        }
    })

}

window.addEventListener('DOMContentLoaded', () => {
    ProductDisplay()
    ImageSwitcher()
});
let cart = JSON.parse(localStorage.getItem('cart')) || [];

let CalTotalPrice = localStorage.getItem('TotalPrice')
    ? JSON.parse(localStorage.getItem('TotalPrice'))
    : 0;

function CalculateTotalPrice() {
    CalTotalPrice = cart?.reduce((current, item) => current + item.price * item.quantity, 0);
    console.log(CalTotalPrice);
    // CalculatePrice.innerHTML = CalTotalPrice? CalTotalPrice: '$0.00'
    localStorage.setItem('TotalPrice', JSON.stringify(CalTotalPrice))
}

function AddFav(element) {
    let findone = AddToFavoriate.findIndex((item) => item.id == element.id)

    if (findone == -1) {
        AddToFav = true
        AddToFavoriate.push(element)
    } else {
        AddToFavoriate.splice(findone, 1)
        AddToFav = false
    }
    ProductDisplay()
    localStorage.setItem('Fav', JSON.stringify(AddToFav))
    localStorage.setItem('AddToFav', JSON.stringify(AddToFavoriate))
}

document.addEventListener('DOMContentLoaded', CalculateTotalPrice())