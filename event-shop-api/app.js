const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Array to store products
const products = [];

app.use(bodyParser.json());

// Add new product
app.post('/new', (req, res) => {
    const newProduct = req.body;
   
    newProduct.id = products.length + 1;
    products.push(newProduct);
    res.status(201).json({ message: 'Product added successfully', product: newProduct });
});

// List all products
app.get('/list', (req, res) => {
    res.json(products);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
