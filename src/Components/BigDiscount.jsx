import axios from 'axios';
import { useEffect, useState } from 'react';

const BigDiscount = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/products');
        setProducts(res.data);
        console.log(res.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="container" style={{ background: '#f5f9fc', padding: '20px' }}>
        <h1 className="text-center mb-5">Big Discount</h1>
        <div className="row">
          {products.map(product => (
            product.discount >= 15 && ( // Show only products with big discount
              <div className="col-md-4 mb-4" key={product.id}>
                <div className="card h-100">
                  <img
                    src={`/images/${product.image}`} // Make sure this path is correct
                    className="card-img-top"
                    alt={product.name}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p>Price: ${product.price}</p>
                    <p>Rating: ⭐ {product.rating}</p>
                    <p>Discount: {product.discount}%</p>
                  </div>
                </div>
              </div>
            )
          ))}
        </div>
      </div>
    </>
  );
};

export default BigDiscount;
