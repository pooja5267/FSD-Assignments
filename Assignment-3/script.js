// Product data with 60+ items across multiple categories
const products = [
    // Women
    { id: 1, name: "Women's Leather Handbag", price: 2999, category: "Women", image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400" },
    { id: 2, name: "Women's Silk Blouse", price: 1299, category: "Women", image: "https://images.unsplash.com/photo-1520975661595-6453be3f7070?w=400" },
    { id: 3, name: "Women's Denim Jeans", price: 1899, category: "Women", image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400" },
    { id: 4, name: "Women's High Heels", price: 2499, category: "Women", image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400" },
    { id: 5, name: "Women's Winter Coat", price: 3999, category: "Women", image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400" },
    { id: 6, name: "Women's Sunglasses", price: 1599, category: "Women", image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400" },
    { id: 7, name: "Women's Perfume", price: 2199, category: "Women", image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=400" },
    { id: 8, name: "Women's Watch", price: 3499, category: "Women", image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400" },
    { id: 9, name: "Women's Scarf", price: 799, category: "Women", image: "https://images.unsplash.com/photo-1601762603339-fd61e28b698a?w=400" },
    { id: 10, name: "Women's Dress", price: 2299, category: "Women", image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400" },

    // Men
    { id: 11, name: "Men's Casual Shirt", price: 1499, category: "Men", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400" },
    { id: 12, name: "Men's Hoodie", price: 1999, category: "Men", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400" },
    { id: 13, name: "Men's Jeans", price: 2299, category: "Men", image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400" },
    { id: 14, name: "Men's Sneakers", price: 2999, category: "Men", image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400" },
    { id: 15, name: "Men's Jacket", price: 3499, category: "Men", image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400" },
    { id: 16, name: "Men's Watch", price: 4999, category: "Men", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400" },
    { id: 17, name: "Men's Belt", price: 899, category: "Men", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400" },
    { id: 18, name: "Men's Sunglasses", price: 1799, category: "Men", image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400" },
    { id: 19, name: "Men's Wallet", price: 1299, category: "Men", image: "https://images.unsplash.com/photo-1627123424573-724c3bcb74a6?w=400" },
    { id: 20, name: "Men's Tie", price: 699, category: "Men", image: "https://images.unsplash.com/photo-1589756823695-278bc923f962?w=400" },

    // Kids
    { id: 21, name: "Kids' T-Shirt", price: 599, category: "Kids", image: "https://images.unsplash.com/photo-1522771930-78848d9293e8?w=400" },
    { id: 22, name: "Kids' Jacket", price: 1299, category: "Kids", image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400" },
    { id: 23, name: "Kids' Shoes", price: 999, category: "Kids", image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=400" },
    { id: 24, name: "Kids' Backpack", price: 799, category: "Kids", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400" },
    { id: 25, name: "Kids' Hat", price: 399, category: "Kids", image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400" },
    { id: 26, name: "Kids' Pajamas", price: 699, category: "Kids", image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400" },
    { id: 27, name: "Kids' Toy Car", price: 499, category: "Kids", image: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=400" },
    { id: 28, name: "Kids' Puzzle", price: 349, category: "Kids", image: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=400" },
    { id: 29, name: "Kids' Bicycle", price: 4999, category: "Kids", image: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=400" },
    { id: 30, name: "Kids' Book", price: 299, category: "Kids", image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400" },

    // Electronics
    { id: 31, name: "Smartphone", price: 19999, category: "Electronics", image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400" },
    { id: 32, name: "Laptop", price: 59999, category: "Electronics", image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400" },
    { id: 33, name: "Wireless Headphones", price: 4999, category: "Electronics", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400" },
    { id: 34, name: "Smart Watch", price: 12999, category: "Electronics", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400" },
    { id: 35, name: "Tablet", price: 24999, category: "Electronics", image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400" },
    { id: 36, name: "Bluetooth Speaker", price: 2999, category: "Electronics", image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400" },
    { id: 37, name: "Gaming Mouse", price: 1499, category: "Electronics", image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=400" },
    { id: 38, name: "Keyboard", price: 2499, category: "Electronics", image: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400" },
    { id: 39, name: "Monitor", price: 14999, category: "Electronics", image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400" },
    { id: 40, name: "Power Bank", price: 1999, category: "Electronics", image: "https://images.unsplash.com/photo-1609594040204-62e4bdfe7756?w=400" },

    // Home & Kitchen
    { id: 41, name: "Coffee Maker", price: 4999, category: "Home & Kitchen", image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400" },
    { id: 42, name: "Blender", price: 3499, category: "Home & Kitchen", image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400" },
    { id: 43, name: "Toaster", price: 1999, category: "Home & Kitchen", image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400" },
    { id: 44, name: "Microwave Oven", price: 8999, category: "Home & Kitchen", image: "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=400" },
    { id: 45, name: "Vacuum Cleaner", price: 7999, category: "Home & Kitchen", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400" },
    { id: 46, name: "Air Fryer", price: 6999, category: "Home & Kitchen", image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400" },
    { id: 47, name: "Dishwasher", price: 29999, category: "Home & Kitchen", image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400" },
    { id: 48, name: "Refrigerator", price: 49999, category: "Home & Kitchen", image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400" },
    { id: 49, name: "Washing Machine", price: 39999, category: "Home & Kitchen", image: "https://images.unsplash.com/photo-1626806787426-5910811b6325?w=400" },
    { id: 50, name: "Water Purifier", price: 11999, category: "Home & Kitchen", image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400" },

    // Sports
    { id: 51, name: "Yoga Mat", price: 1499, category: "Sports", image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400" },
    { id: 52, name: "Dumbbells Set", price: 2999, category: "Sports", image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400" },
    { id: 53, name: "Treadmill", price: 49999, category: "Sports", image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400" },
    { id: 54, name: "Basketball", price: 1999, category: "Sports", image: "https://images.unsplash.com/photo-1574623452334-1e0ac2b3ccb4?w=400" },
    { id: 55, name: "Tennis Racket", price: 3999, category: "Sports", image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400" },
    { id: 56, name: "Swimming Goggles", price: 799, category: "Sports", image: "https://images.unsplash.com/photo-1530549387789-4c1017266635?w=400" },
    { id: 57, name: "Cycling Helmet", price: 2499, category: "Sports", image: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=400" },
    { id: 58, name: "Football", price: 1499, category: "Sports", image: "https://images.unsplash.com/photo-1574623452334-1e0ac2b3ccb4?w=400" },
    { id: 59, name: "Badminton Set", price: 2999, category: "Sports", image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400" },
    { id: 60, name: "Running Shoes", price: 4999, category: "Sports", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400" }
];

let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Display products in the grid
function displayProducts(data) {

const container = document.getElementById("products")

if(!container) return

container.innerHTML=""

data.forEach(product=>{

container.innerHTML+=`

<div class="col-lg-3 col-md-4 col-sm-6 mb-4">

<div class="product-card">

<img src="${product.image}" class="product-img">

<h5>${product.name}</h5>

<p class="price">₹${product.price}</p>

<button class="btn btn-warning w-100 mt-3" onclick="addToCart(${product.id})">
Add to Cart
</button>

</div>

</div>

`

})

}

// Add product to cart
function addToCart(id) {

const product = products.find(p=>p.id===id)

cart.push(product)

localStorage.setItem("cart",JSON.stringify(cart))

updateCart()

// Show notification
showNotification("✅ Product Added to Cart!")

}

// Update cart count in navbar
function updateCart() {

const count = document.getElementById("cartCount")

if(count){

count.innerText = cart.length

}

}

// Filter products by category
function filterProducts(category) {

if(category==="All"){
displayProducts(products)
}
else{
const filtered = products.filter(p=>p.category===category)
displayProducts(filtered)
}

}

// Sort products
function sortProducts(type) {
    let sorted = [...products];
    if (type === 'price-asc') {
        sorted.sort((a, b) => a.price - b.price);
    } else if (type === 'price-desc') {
        sorted.sort((a, b) => b.price - a.price);
    } else if (type === 'name') {
        sorted.sort((a, b) => a.name.localeCompare(b.name));
    }
    displayProducts(sorted);
}

// Search functionality
const search = document.getElementById("search")

if(search){

search.addEventListener("input",function(){

const value = this.value.toLowerCase()

const filtered = products.filter(p =>
p.name.toLowerCase().includes(value)
)

displayProducts(filtered)

})

}

// Load and display cart items
function loadCart() {

const container = document.getElementById("cart-items")

if(!container) return

container.innerHTML=""

let total = 0

cart.forEach((item,index)=>{

total += item.price

container.innerHTML+=`

<div class="cart-item">

<div class="row align-items-center">

<div class="col-md-3">
<img src="${item.image}" class="img-fluid" alt="${item.name}">
</div>

<div class="col-md-6">
<h5 class="mb-1">${item.name}</h5>
<p class="text-muted mb-1">Price: ₹${item.price}</p>
</div>

<div class="col-md-3 text-end">
<button class="btn btn-danger btn-sm" onclick="removeItem(${index})">
Remove
</button>
</div>

</div>

</div>

`

})

const totalElement = document.getElementById("cart-total")

if(totalElement){
totalElement.innerText = total
}

}

// Remove item from cart
function removeItem(index) {

cart.splice(index,1)

localStorage.setItem("cart",JSON.stringify(cart))

loadCart()

}

// Checkout function
function checkout() {

if(cart.length===0){
alert("Your cart is empty!")
return
}

// Show notification
showNotification("✅ Order Placed Successfully!")

// Clear cart
cart=[]
localStorage.removeItem("cart")
loadCart()
updateCart()

}

// Show notification
function showNotification(message) {
    const notification = document.getElementById('notification')
    if (notification) {
        notification.textContent = message
        notification.classList.add('show')
        setTimeout(() => {
            notification.classList.remove('show')
            // Redirect to index.html after notification
            window.location.href = "index.html";
        }, 3000)
    }
}

// Initial page load
displayProducts(products)
updateCart()
loadCart()