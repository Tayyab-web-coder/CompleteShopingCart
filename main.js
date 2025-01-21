let data = [

    {
        id: 1,
        title: "Wireless Bluetooth Earbuds",
        description: "High-quality wireless Bluetooth earbuds with noise cancellation, sweat resistance, and 20-hour battery life. Ideal for gym workouts, commuting, or relaxing at home.",
        price: 49.99,
        stock: 2,
        category: "Electronics",
        images: [
            "https://images",
            "https://images",
            "https://images",
            "https://images"
        ],
        rating: 4.5,
        brand: "SoundWave"
    },

    {
        id: 2,
        title: "Stainless Steel Water Bottle",
        description: "Durable stainless steel water bottle with double - wall insulation to keep drinks cold for 24 hours or hot for 12 hours.BPA - free and eco- friendly design.",
        price: 19.99,
        stock: 5,
        category: "Kitchen & Dining",
        images: [
            "https://example.com/images/product2_img1.jpg",
            "https://example.com/images/product2_img2.jpg",
            "https://example.com/images/product2_img3.jpg",
            "https://example.com/images/product2_img4.jpg"
        ],
        rating: 4.8,
        brand: "HydroPeak"
    },

    {
        id: 3,
        title: "Ergonomic Office Chair",
        description: "Comfortable ergonomic office chair with adjustable lumbar support, breathable mesh back, and cushioned seat for long work hours.",
        price: 129.99,
        stock: 50,
        category: "Furniture",
        images: [
            "https://example.com/images/product3_img1.jpg",
            "https://example.com/images/product3_img2.jpg",
            "https://example.com/images/product3_img3.jpg",
            "https://example.com/images/product3_img4.jpg"
        ],
        rating: 4.3,
        brand: "ErgoComfort"
    },

    {
        id: 4,
        title: "Smart LED TV 55-Inch",
        description: "Ultra HD Smart LED TV with built-in streaming apps, voice control, and vibrant display for an immersive viewing experience.",
        price: 599.99,
        stock: 5,
        category: "Electronics",
        images: [
            "https://example.com/images/product4_img1.jpg",
            "https://example.com/images/product4_img2.jpg",
            "https://example.com/images/product4_img3.jpg",
            "https://example.com/images/product4_img4.jpg"
        ],
        rating: 4.6,
        brand: "VisionMax"
    },

    {
        id: 5,
        title: "4K Action Camera",
        description: "Capture every adventure with this 4K action camera featuring waterproof casing, wide-angle lens, and image stabilization.",
        price: 89.99,
        stock: 50,
        category: "Cameras & Photography",
        images: [
            "https://example.com/images/product5_img1.jpg",
            "https://example.com/images/product5_img2.jpg",
            "https://example.com/images/product5_img3.jpg",
            "https://example.com/images/product5_img4.jpg"
        ],
        rating: 4.7,
        brand: "AdventureCam"
    },

    {
        id: 6,
        title: "Smart Fitness Watch",
        description: "Track your fitness goals with this smart watch featuring heart rate monitoring, GPS tracking, and customizable watch faces.",
        price: 79.99,
        stock: 50,
        category: "Wearables",
        images: [
            "https://example.com/images/product6_img1.jpg",
            "https://example.com/images/product6_img2.jpg",
            "https://example.com/images/product6_img3.jpg",
            "https://example.com/images/product6_img4.jpg"
        ],
        rating: 4.4,
        brand: "FitTime"
    },
    {
        id: 7,
        title: "Organic Cotton Bed Sheets",
        description: "Soft and breathable organic cotton bed sheets available in multiple colors and sizes for a comfortable night's sleep.",
        price: 59.99,
        stock: 50,
        category: "Home & Bedding",
        images: [
            "https://example.com/images/product7_img1.jpg",
            "https://example.com/images/product7_img2.jpg",
            "https://example.com/images/product7_img3.jpg",
            "https://example.com/images/product7_img4.jpg"
        ],
        rating: 4.6,
        brand: "SleepWell"
    },

    {
        id: 8,
        title: "Professional Hair Dryer",
        description: "Powerful hair dryer with ionic technology for faster drying and less frizz. Includes multiple heat settings and a cool shot button.",
        price: 45.99,
        stock: 50,
        category: "Beauty & Personal Care",
        images: [
            "https://example.com/images/product8_img1.jpg",
            "https://example.com/images/product8_img2.jpg",
            "https://example.com/images/product8_img3.jpg",
            "https://example.com/images/product8_img4.jpg"
        ],
        rating: 4.5,
        brand: "StylePro"
    },

    {
        id: 9,
        title: "Gaming Mechanical Keyboard",
        description: "Responsive mechanical keyboard with RGB backlighting and customizable keys for an enhanced gaming experience.",
        price: 99.99,
        stock: 50,
        category: "Computers & Accessories",
        images: [
            "https://example.com/images/product9_img1.jpg",
            "https://example.com/images/product9_img2.jpg",
            "https://example.com/images/product9_img3.jpg",
            "https://example.com/images/product9_img4.jpg"
        ],
        rating: 4.8,
        brand: "GameOn"
    },

    {
        id: 10,
        title: "Electric Pressure Cooker",
        description: "Multi-functional electric pressure cooker with 10 preset cooking functions for easy meal preparation.",
        price: 119.99,
        stock: 50,
        category: "Kitchen Appliances",
        images: [
            "https://example.com/images/product10_img1.jpg",
            "https://example.com/images/product10_img2.jpg",
            "https://example.com/images/product10_img3.jpg",
            "https://example.com/images/product10_img4.jpg"
        ],
        rating: 4.7,
        brand: "CookMaster"
    }

]


let product_list = document.querySelector('.product_list')
let input = document.querySelector('input')
let selected = document.querySelector('select')
let checkbox = document.querySelector('.filtercatergory')
let cartToggler = document.querySelector('.cart')
let sidebar = document.querySelector('.sidebar')
let sidebar_cart = document.querySelector('.sidebar_cart')
let counter = document.querySelector('.counter')
let EmptyCart = document.querySelector('.EmptyCart')
let CalculatePrice = document.querySelector('.CalculatePrice')
let ranged = document.querySelector('.ranged')

document.addEventListener('DOMContentLoaded', () => {
    displayProduct(data)
    CounterUpdate(count)
    CalculateTotalPrice(cart)
    DisplayCart(cart)
}
)
ranged.addEventListener('change', Ranged)
input.addEventListener('input', SearchProduct)
selected.addEventListener('change', SelectedProduct)
checkbox.addEventListener('change', filtercatergory)
EmptyCart.addEventListener('click', EmptyFeature)

function displayProduct(data) {
    product_list.innerHTML = '';
    data.forEach((element) => {
        product_list.innerHTML += `
        <div class='card' data-id=${element.id}>
        <img src="${element.images[0]}" alt="${element.title}">
        <span>
        <h2 class='title'>${element.title}</h2>
        <h4>$ ${element.price}</h4>
        </span>
        </div>`
    })

    let card = document.querySelectorAll('.card');
    card.forEach((element) => {
        element.addEventListener('click', (e) => {
            let getId = e.target.closest('div');
            let findone = data.find((item) => item.id == getId.dataset.id)
            localStorage.setItem('displayDetailed', JSON.stringify(findone))
            window.location.href = './ProductDetailed.html'
        })
    })


}

cartToggler.addEventListener('click', () => {
    sidebar.classList.toggle('active')
})

let count = JSON.parse(localStorage.getItem('count')) || 0
let CalTotalPrice = localStorage.getItem('TotalPrice')
    ? JSON.parse(localStorage.getItem('TotalPrice'))
    : 0;
let cart = JSON.parse(localStorage.getItem('cart')) || []


function CounterUpdate(count) {
    counter.innerHTML = count
}

function SearchProduct() {
    let Search = data.filter((item) => {
        let titleLower = item.title.toLowerCase()
        return titleLower.includes(input.value.toLowerCase())
    })
    displayProduct(Search)

}


function SelectedProduct() {
    let selectedValue = selected.value;
    let select;
    if (selectedValue == 'Asc by Title') {
        select = data.sort((a, b) => a.title.localeCompare(b.title))
    } else if (selectedValue == 'Des by Title') {
        select = data.sort((a, b) => b.title.localeCompare(a.title))
    }
    else if (selectedValue == 'Price Low to High') {
        select = data.sort((a, b) => a.price - b.price)
    } else if (selectedValue == 'Price High to Low') {
        select = data.sort((a, b) => b.price - a.price)
    }
    displayProduct(select)
}

let value = true
function filtercatergory() {
    let filter = data.filter((item) => item.category.includes(checkbox.value))
    if (value) {
        displayProduct(filter)
        value = false
    }
    else {
        displayProduct(data)
        value = true
    }
}

function Ranged(e) {
    let ans = data.filter((item) => item.price > e.target.value)
    displayProduct(ans)
}


function DisplayCart(carted) {

    sidebar_cart.innerHTML = ''
    carted.length > 0 ?
        carted.forEach((element) => {
            sidebar_cart.innerHTML += `<section class='SingleProduct' data-id=${element.id}>
<div>
<div>
 <img src="${element.images[0]}">
<h5>${element.title}</h5>
</div>

<div>
<button class='addQuantity'>+</button>
<h6>${element.quantity}</h6>
<button class='removeQuantity'>-</button>
<button class='removeItem'>X</button>
</div>

<h4 class="CalPrice">$${(element.price * element.quantity).toFixed(2)}</h4>
</div>

</section>`
        }) : sidebar_cart.innerHTML = 'No Item in Cart'

    CartFeatures()
}

function CartFeatures() {
    let SingleProduct = document.querySelectorAll('.SingleProduct');
    SingleProduct.forEach((button) => {
        button.addEventListener('click', (e) => {
            let GetId = e.target.closest('section').dataset.id;
            let findone = cart.findIndex((item) => item.id == GetId);
            if (e.target.classList.contains('addQuantity')) {

                if (findone !== -1) {
                    cart[findone].quantity = cart[findone].quantity + 1;
                    cart[findone].stock = cart[findone].stock - 1;
                    count++;
                    if (cart[findone].stock< 1) {
                        alert('Product out of stock')
                        cart[findone].stock = 0
                        cart[findone].quantity = cart[findone].quantity - 1;
                        count--;
                    }


                }

            }
            else if (e.target.classList.contains('removeQuantity')) {

                if (findone !== -1) {
                    if (cart[findone].quantity <= 1) {

                        cart[findone].stock = cart[findone].stock + 1;
                        cart = cart.filter((_, index) => index !== findone)
                    } else {

                        cart[findone].quantity = cart[findone].quantity - 1;
                        cart[findone].stock = cart[findone].stock + 1;
                        // if (cart[findone].stock < 1) {
                        //     alert('Product out of stock')
                        //     cart[findone].quantity = 1
                        //     cart[findone].stock = cart[findone].stock - 1;
                        // }
                        // cart[findone].price = cart[findone].price  1;
                    }
                    count--;
                    // console.log(cart[findone]);

                }
            }
            else if (e.target.classList.contains('removeItem')) {
                if (findone !== -1) {
                    cart[findone].stock = Math.abs((cart[findone].quantity) + (cart[findone].stock));
                    count = Math.abs(count - (cart[findone].quantity));
                    console.log(cart[findone]);
                    
                    cart = cart.filter((_, index) => index !== findone)
                }
            }
            localStorage.setItem('count', JSON.stringify(count));
            localStorage.setItem('cart', JSON.stringify(cart));
            CounterUpdate(count)
            CalculateTotalPrice()
            DisplayCart(cart);

        });
    })

}

function CalculateTotalPrice() {
    CalTotalPrice = cart?.reduce((current, item) => current + item.price * item.quantity, 0)
    CalculatePrice.innerHTML = `$${CalTotalPrice?.toFixed(2)}`
    localStorage.setItem('TotalPrice', JSON.stringify(CalTotalPrice))
}

function EmptyFeature() {
    cart = []
    count = 0
    cart = localStorage.removeItem('cart') || []
    count = localStorage.removeItem('count') || []
    CalTotalPrice = localStorage.removeItem('CalTotalPrice')
    DisplayCart(cart)
    CounterUpdate(count)
    CalculateTotalPrice(cart)
}







// let main = document.querySelector('.main')
// let div = document.querySelector('.images')

// div.addEventListener('click', (e) => {
//         if (e.target.classList.contains('btn')) {
//             main.src = e.target.src;
//         }
//     });


