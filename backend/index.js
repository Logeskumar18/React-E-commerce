import express from 'express';
import cors from 'cors';

const app = express();
const port = 5000;

app.use(express.json());
app.use(cors());
app.use('/images', express.static('images')); // Serve images from /images folder

const products = [
  {
    id: 1,
    image: "arm-chair-02.jpg",
    name: "Arm Chair - Grey",
    price: 129.99,
    rating: 4.2,
    discount: 10
  },
  {
    id: 2,
    image: "arm-chair-03.jpg",
    name: "Arm Chair - Black",
    price: 139.99,
    rating: 4.4,
    discount: 15
  },
  {
    id: 3,
    image: "double-sofa-01.png",
    name: "Double Sofa - Blue",
    price: 299.99,
    rating: 4.5,
    discount: 20
  },
  {
    id: 4,
    image: "double-sofa-02.png",
    name: "Double Sofa - Brown",
    price: 319.99,
    rating: 4.6,
    discount: 18
  },
  {
    id: 5,
    image: "phone-01.jpg",
    name: "Smartphone A1",
    price: 249.99,
    rating: 4.3,
    discount: 10
  },
  {
    id: 6,
    image: "phone-02.jpg",
    name: "Smartphone B2",
    price: 269.99,
    rating: 4.1,
    discount: 12
  },
  {
    id: 7,
    image: "phone-03.jpg",
    name: "Smartphone C3",
    price: 199.99,
    rating: 4.0,
    discount: 8
  },
  {
    id: 8,
    image: "phone-04.jpg",
    name: "Smartphone D4",
    price: 279.99,
    rating: 4.6,
    discount: 10
  },
  {
    id: 9,
    image: "phone-05.jpg",
    name: "Smartphone E5",
    price: 229.99,
    rating: 4.5,
    discount: 14
  },
  {
    id: 10,
    image: "phone-06.jpg",
    name: "Smartphone F6",
    price: 259.99,
    rating: 4.4,
    discount: 11
  },
  {
    id: 11,
    image: "single-sofa-01.jpg",
    name: "Single Sofa - Classic",
    price: 179.99,
    rating: 4.2,
    discount: 9
  },
  {
    id: 12,
    image: "single-sofa-02.jpg",
    name: "Single Sofa - Deluxe",
    price: 199.99,
    rating: 4.3,
    discount: 13
  },
  {
    id: 13,
    image: "single-sofa-03.jpg",
    name: "Single Sofa - Modern",
    price: 189.99,
    rating: 4.4,
    discount: 12
  },
  {
    id: 14,
    image: "single-sofa-04.jpg",
    name: "Single Sofa - Retro",
    price: 169.99,
    rating: 4.1,
    discount: 10
  },
  {
    id: 15,
    image: "sofaset.png",
    name: "Complete Sofa Set",
    price: 499.99,
    rating: 4.8,
    discount: 25
  },
  {
    id: 16,
    image: "watch-07.png",
    name: "Smart Watch",
    price: 149.99,
    rating: 4.6,
    discount: 18
  },
  {
    id: 17,
    image: "wireless-01.png",
    name: "Wireless Headphones A",
    price: 89.99,
    rating: 4.5,
    discount: 15
  },
  {
    id: 18,
    image: "wireless-02.png",
    name: "Wireless Headphones B",
    price: 99.99,
    rating: 4.4,
    discount: 17
  },
  {
    id: 19,
    image: "wireless-03.png",
    name: "Wireless Headphones C",
    price: 109.99,
    rating: 4.3,
    discount: 20
  }
];



app.get('/api/products', (req, res) => {
  res.json(products);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
