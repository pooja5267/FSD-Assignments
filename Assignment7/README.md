# FashionStore - E-Commerce Website

## Overview

FashionStore is a modern, responsive e-commerce website built with React.js frontend and Express.js backend with MongoDB. It features a comprehensive product catalog with advanced filtering, searching, and cart functionality. The application provides a seamless shopping experience with professional UI design and persistent cart storage. Purchase history is saved to MongoDB for data persistence.

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
- **Purchase history saved to MongoDB**

### 🎨 User Interface
- **Responsive design** using Bootstrap 5
- **Modern gradient backgrounds** and hover effects
- **Professional styling** with custom CSS
- **Mobile-friendly** layout
- **Smooth animations** and transitions

## Technologies Used

### Frontend
- **React.js** - Component-based UI framework
- **React Router** - Client-side routing
- **Bootstrap 5** - Responsive framework
- **CSS3** - Custom styling and animations

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **CORS** - Cross-origin resource sharing

## Project Structure

```
Assignment7/
├── client/                 # React frontend
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.js
│   │   │   ├── Hero.js
│   │   │   ├── ProductList.js
│   │   │   ├── Cart.js
│   │   │   └── Notification.js
│   │   ├── App.js
│   │   ├── App.css
│   │   ├── index.js
│   │   └── index.css
│   └── package.json
├── backend/                # Express backend
│   ├── server.js
│   ├── package.json
│   └── .env
├── index.html              # Original HTML (deprecated)
├── cart.html               # Original HTML (deprecated)
├── script.js               # Original JS (deprecated)
├── style.css               # Original CSS (deprecated)
├── outputs/                # Output files
└── README.md
```

## Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or cloud instance)
- npm or yarn

### Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the backend directory:
   ```
   MONGO_URI=mongodb://localhost:27017/fashionstoreDB
   PORT=5000
   ```

4. Start MongoDB service (if using local MongoDB)

5. Start the backend server:
   ```bash
   npm start
   ```

### Frontend Setup
1. Navigate to the client directory:
   ```bash
   cd client
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the React development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## API Endpoints

### Orders
- `POST /api/orders` - Create a new order
- `GET /api/orders` - Get all orders

### Health Check
- `GET /health` - Server health status

## Usage

1. **Browse Products**: View products on the homepage with filtering and sorting options
2. **Search**: Use the search bar to find specific products
3. **Add to Cart**: Click "Add to Cart" on any product
4. **View Cart**: Click the cart icon to view and manage cart items
5. **Checkout**: Click "Proceed to Checkout" to complete your order

## Development

### Available Scripts

#### Frontend
- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner

#### Backend
- `npm start` - Starts the Express server

### Building for Production

1. Build the React app:
   ```bash
   cd client
   npm run build
   ```

2. The build artifacts will be stored in the `client/build/` directory

3. Serve the static files from your Express server or deploy to a static hosting service

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Credits

- **Unsplash** - Product images
- **Bootstrap** - CSS framework
    ├── package.json    # Backend dependencies
    ├── .env           # Environment variables
    └── .gitignore     # Git ignore rules
```

## Installation & Setup

### Frontend Setup
1. **Clone or Download** the project files
2. **Navigate** to the Assignment6 directory
3. **Open** `index.html` in your web browser, or use a local server:
   ```bash
   npx http-server -p 8080
   ```
4. Visit `http://localhost:8080` to access the application

### Backend Setup (for Purchase History)
To save purchase history in MongoDB, run the backend server:

1. Open a terminal in `Assignment6/backend`
2. Install dependencies:
   ```bash
   npm install
   ```
3. Make sure MongoDB is running locally or update `backend/.env` with your MongoDB URI
4. Start the backend server:
   ```bash
   npm start
   ```

The backend listens on `http://localhost:5000` and stores orders in the `orders` collection.

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
- Purchase history is automatically saved to MongoDB
- Automatically redirected to homepage

## API Endpoints

The backend provides the following REST API endpoints:

- `POST /api/orders` - Save a new order to MongoDB
- `GET /api/orders` - Retrieve all saved orders
- `GET /health` - Health check endpoint

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

### Purchase History Storage
```javascript
async function checkout() {
    // Saves order to MongoDB via API
    const response = await fetch(`${API_URL}/api/orders`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items: cart, total: totalAmount })
    });
}
```

## Database Schema

Orders are stored in MongoDB with the following structure:

```javascript
{
  items: [
    {
      id: Number,
      name: String,
      price: Number,
      category: String,
      image: String
    }
  ],
  total: Number,
  createdAt: Date
}
```

## Browser Compatibility

- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+

## Author
- Pooja Chile

## Useful Links
- LinkedIn: https://www.linkedin.com/in/pooja-chile-958223366/
- GitHub: https://github.com/pooja5267
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