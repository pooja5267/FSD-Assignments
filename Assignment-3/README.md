# FashionStore - E-Commerce Website

## Overview

FashionStore is a modern, responsive e-commerce website built as part of Assignment 3. It features a comprehensive product catalog with advanced filtering, searching, and cart functionality. The application provides a seamless shopping experience with professional UI design and persistent cart storage.

## Features

### 🛍️ Product Management
- **60+ Products** across 6 categories: Women, Men, Kids, Electronics, Home & Kitchen, Sports
- **High-quality product images** from Unsplash
- **Detailed product information** including name, price, and category

### 🔍 Search & Filter
- **Real-time search** functionality across product names
- **Category filtering** with dedicated buttons for each product type
- **Price sorting** (Low to High, High to Low)
- **Alphabetical sorting** (A to Z)

### 🛒 Shopping Cart
- **Add to cart** functionality with instant feedback
- **Persistent cart storage** using localStorage
- **Cart counter** in navigation bar
- **Detailed cart page** with item management
- **Remove items** from cart
- **Total price calculation**

### 💳 Checkout Process
- **One-click checkout** validation
- **Success notification** with smooth animations
- **Automatic redirect** to homepage after order completion

### 🎨 User Interface
- **Responsive design** using Bootstrap 5
- **Modern gradient backgrounds** and hover effects
- **Professional styling** with custom CSS
- **Mobile-friendly** layout
- **Smooth animations** and transitions

## Technologies Used

- **HTML5** - Structure and markup
- **CSS3** - Styling and animations
- **JavaScript (ES6+)** - Dynamic functionality
- **Bootstrap 5** - Responsive framework
- **LocalStorage API** - Data persistence
- **Unsplash API** - Product images

## Project Structure

```
Assignment-3/
├── index.html          # Main product listing page
├── cart.html           # Shopping cart page
├── script.js           # Main JavaScript functionality
├── style.css           # Custom styling
└── README.md           # Project documentation
```

## Installation & Setup

1. **Clone or Download** the project files
2. **Navigate** to the Assignment-3 directory
3. **Open** `index.html` in your web browser
4. **No additional setup required** - works offline

## Usage

### Browsing Products
- Use the **category buttons** to filter products
- **Search** for specific items using the search bar
- **Sort** products by price or name using the sort options

### Shopping
- Click **"Add to Cart"** on any product
- View cart count in the **navigation bar**
- Click **"Cart"** to view detailed cart items
- **Remove items** or proceed to checkout

### Checkout
- Click **"Proceed to Checkout"** in the cart
- Confirm order placement
- Receive success notification
- Automatically redirected to homepage

## Key Features Implementation

### Cart Persistence
```javascript
let cart = JSON.parse(localStorage.getItem("cart")) || [];
```

### Dynamic Product Display
```javascript
function displayProducts(data) {
    // Renders products with Bootstrap grid
}
```

### Real-time Search
```javascript
search.addEventListener("input", function() {
    const filtered = products.filter(p =>
        p.name.toLowerCase().includes(value)
    );
    displayProducts(filtered);
});
```

### Notification System
```javascript
function showNotification(message) {
    // Smooth slide-in notification with auto-hide
}
```

## Browser Compatibility

- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+

## Performance Features

- **Lazy loading** of product images
- **Efficient filtering** and sorting algorithms
- **Minimal DOM manipulation** for better performance
- **Local storage** for offline cart persistence

## Future Enhancements

- User authentication and accounts
- Product reviews and ratings
- Payment gateway integration
- Order history and tracking
- Wishlist functionality
- Admin panel for product management

## Contributing

This is an assignment project. For improvements:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is created for educational purposes as part of a Full Stack Development assignment.

## Author

Developed as Assignment 3 for FSD Course

---

**Note:** This application uses external image resources from Unsplash. Ensure internet connection for optimal image loading experience.