import axios from 'axios';
import { useEffect, useState } from 'react';
import { useCart } from './CartContext';
import { motion, AnimatePresence } from 'framer-motion';

const BigDiscount = () => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart();
  const [showToast, setShowToast] = useState(false);

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

  const handleAddToCart = (product) => {
    addToCart(product);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000); // Hide toast after 2s
  };

  return (
    <div className="container" style={{ background: '#f5f9fc', padding: '20px', position: 'relative' }}>
      <h1 className="text-center mb-5">Big Discount</h1>

      {/* Framer Motion Toast Notification */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="position-fixed top-0 end-0 bg-success text-white p-3 rounded shadow m-3"
            style={{ zIndex: 1050 }}
          >
            ✅ Product added to cart!
          </motion.div>
        )}
      </AnimatePresence>

      <div className="row">
        {products
          .filter(product => product.discount >= 15)
          .map(product => (
            <motion.div
              className="col-md-4 mb-4"
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div className="card h-100 shadow-sm">
                <img
                  src={`http://localhost:5000/images/${product.image}`}
                  className="card-img-top h-50 w-50 mx-auto"
                  alt={product.name}
                />
                <div className="card-body text-center">
                  <h5 className="card-title">{product.name}</h5>
                  <p>Price: ${product.price}</p>
                  <p>Rating: ⭐ {product.rating}</p>
                  <p>Discount: {product.discount}%</p>
                  <button
                    className="btn btn-primary mt-2"
                    onClick={() => handleAddToCart(product)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
      </div>
    </div>
  );
};

export default BigDiscount;
