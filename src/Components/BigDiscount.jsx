import axios from 'axios';
import { useEffect, useState } from 'react';
import { useCart } from './CartContext';

const BigDiscount = () => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/products');
        setProducts(res.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container" style={{ background: '#f5f9fc', padding: '20px' }}>
      <h1 className="text-center mb-5">Big Discount</h1>
      <div className="row">
        {products
          .filter(product => product.discount >= 15)
          .map(product => (
            <div className="col-md-4 mb-4" key={product.id}>
              <div className="card h-100">
                <img
                  src={`http://localhost:5000/images/${product.image}`}
                  className="card-img-top h-50 w-50 mx-auto"
                  alt={product.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p>Price: ${product.price}</p>
                  <p>Rating: ⭐ {product.rating}</p>
                  <p>Discount: {product.discount}%</p>
                  <button
                    className="btn btn-primary mt-2"
                    onClick={() => addToCart(product)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default BigDiscount;
