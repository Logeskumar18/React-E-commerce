import { useCart } from './CartContext';

const Cart = () => {
  const { cartItems, removeFromCart } = useCart();

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p className="text-center">Your cart is empty.</p>
      ) : (
        <div className="row">
          {cartItems.map((item) => (
            <div className="col-md-4 mb-4" key={item.id}>
              <div className="card h-100">
                <img
                  src={`http://localhost:5000/images/${item.image}`}
                  className="card-img-top h-50 w-50 mx-auto"
                  alt={item.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p>Price: ${item.price}</p>
                  <p>Quantity: {item.quantity}</p>
                  <button
                    className="btn btn-danger mt-2"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
