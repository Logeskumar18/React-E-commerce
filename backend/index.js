import express from 'express';
import cors from 'cors';

const app = express();
const port = 5000;

app.use(express.json());
app.use(cors());

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    image: "https://example.com/images/headphones.jpg",
    price: 59.99,
    rating: 4.5,
    description: "High-quality wireless headphones with noise cancellation."
  },
  {
    id: 2,
    name: "Smart Watch",
    image: "https://example.com/images/smartwatch.jpg",
    price: 129.99,
    rating: 4.7,
    description: "Feature-rich smart watch with fitness tracking."
  }
];

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
