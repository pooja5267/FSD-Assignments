const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;
const mongoUri = process.env.MONGO_URI || 'mongodb://localhost:27017/fashionstoreDB';

app.use(cors());
app.use(express.json());

// Debug logging
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`);
  next();
});

mongoose.connect(mongoUri)
  .then(() => console.log(`MongoDB connected to ${mongoUri}`))
  .catch((err) => console.error('MongoDB connection error:', err));

const orderSchema = new mongoose.Schema({
  items: [
    {
      id: Number,
      name: String,
      price: Number,
      category: String,
      image: String,
    }
  ],
  total: Number,
  createdAt: { type: Date, default: Date.now },
}, { collection: 'orders' });

const Order = mongoose.model('Order', orderSchema);

app.get('/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running' });
});

app.post('/api/orders', async (req, res) => {
  try {
    const { items, total } = req.body;
    if (!items || !items.length || typeof total !== 'number') {
      return res.status(400).json({ message: 'Invalid order data' });
    }
    const order = await Order.create({ items, total });
    res.status(201).json(order);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Unable to save order' });
  }
});

app.get('/api/orders', async (req, res) => {
  try {
    const orders = await Order.find().sort({ createdAt: -1 });
    res.json(orders);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Unable to fetch orders' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

console.log('Script execution completed');
