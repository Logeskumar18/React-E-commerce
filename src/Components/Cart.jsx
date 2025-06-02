import { useCart } from './CartContext';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Cart = () => {
  const {
    cartItems,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    getTotalPrice,
  } = useCart();

  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleDecrease = (item) => {
    if (item.quantity === 1) {
      setSelectedItem(item);
      setShowModal(true);
    } else {
      decreaseQuantity(item.id);
    }
  };

  const handleRemoveClick = (item) => {
    setSelectedItem(item);
    setShowModal(true);
  };

  const confirmRemove = () => {
    if (selectedItem) {
      removeFromCart(selectedItem.id);
    }
    setShowModal(false);
    setSelectedItem(null);
  };

  return (
    <div style={{ maxWidth: 960, margin: '2rem auto', padding: '0 1rem', color: '#333', backgroundColor: '#fff', minHeight: '80vh' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>🛒 Your Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            backgroundColor: '#e9ecef',
            color: '#495057',
            padding: '1rem',
            borderRadius: 4,
            textAlign: 'center',
            border: '1px solid #ced4da',
          }}
        >
          Your cart is currently empty.
        </motion.div>
      ) : (
        <>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
            <AnimatePresence>
              {cartItems.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    backgroundColor: '#fff',
                    borderRadius: 8,
                    padding: '1rem',
                    width: '280px',
                    display: 'flex',
                    flexDirection: 'column',
                    color: '#212529',
                    boxSizing: 'border-box',
                    border: '1px solid #dee2e6',
                    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
                  }}
                >
                  <img
                    src={`http://localhost:5000/images/${item.image}`}
                    alt={item.name}
                    style={{ height: 180, objectFit: 'contain', marginBottom: '1rem', borderRadius: 6, alignSelf: 'center' }}
                  />
                  <h5 style={{ margin: '0 0 0.5rem 0' }}>{item.name}</h5>
                  <p style={{ margin: '0 0 0.75rem 0' }}>Price: <strong>${item.price}</strong></p>

                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.75rem' }}>
                    <span style={{ marginRight: 8 }}>Quantity:</span>
                    <div>
                      <button
                        style={{
                          padding: '0.25rem 0.6rem',
                          marginRight: 6,
                          backgroundColor: '#f8f9fa',
                          color: '#212529',
                          border: '1px solid #ced4da',
                          borderRadius: 4,
                          cursor: 'pointer',
                        }}
                        onClick={() => handleDecrease(item)}
                      >
                        -
                      </button>
                      <button
                        style={{
                          padding: '0.25rem 0.8rem',
                          backgroundColor: '#fff',
                          color: '#212529',
                          border: '1px solid #ced4da',
                          borderRadius: 4,
                          cursor: 'default',
                          marginRight: 6,
                          userSelect: 'none',
                        }}
                        disabled
                      >
                        {item.quantity}
                      </button>
                      <button
                        style={{
                          padding: '0.25rem 0.6rem',
                          backgroundColor: '#f8f9fa',
                          color: '#212529',
                          border: '1px solid #ced4da',
                          borderRadius: 4,
                          cursor: 'pointer',
                        }}
                        onClick={() => increaseQuantity(item.id)}
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <p style={{ margin: '0 0 1rem 0' }}>
                    Subtotal: <strong>${(item.price * item.quantity).toFixed(2)}</strong>
                  </p>

                  <button
                    onClick={() => handleRemoveClick(item)}
                    style={{
                      backgroundColor: '#dc3545',
                      color: '#fff',
                      border: 'none',
                      padding: '0.5rem',
                      borderRadius: 6,
                      cursor: 'pointer',
                      marginTop: 'auto',
                    }}
                  >
                    Remove
                  </button>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            style={{ marginTop: '2rem', textAlign: 'right' }}
          >
            <div style={{ backgroundColor: '#f8f9fa', padding: '1rem', borderRadius: 6, display: 'inline-block', border: '1px solid #dee2e6' }}>
              <h4 style={{ margin: 0 }}>
                Total Price: <span style={{ color: '#198754' }}>${getTotalPrice().toFixed(2)}</span>
              </h4>
            </div>
          </motion.div>
        </>
      )}

      {/* Modal */}
      {showModal && selectedItem && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1050,
          }}
        >
          <div
            style={{
              backgroundColor: '#fff',
              padding: '1.5rem',
              borderRadius: 8,
              width: '320px',
              color: '#212529',
              boxSizing: 'border-box',
              textAlign: 'center',
              boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
            }}
          >
            <h5 style={{ marginBottom: '1rem' }}>Confirm Removal</h5>
            <p style={{ marginBottom: '1.5rem' }}>
              Are you sure you want to remove <strong>{selectedItem.name}</strong> from your cart?
            </p>
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
              <button
                onClick={() => setShowModal(false)}
                style={{
                  backgroundColor: '#6c757d',
                  color: '#fff',
                  border: 'none',
                  padding: '0.5rem 1rem',
                  borderRadius: 6,
                  cursor: 'pointer',
                  minWidth: '100px',
                }}
              >
                Cancel
              </button>
              <button
                onClick={confirmRemove}
                style={{
                  backgroundColor: '#dc3545',
                  color: '#fff',
                  border: 'none',
                  padding: '0.5rem 1rem',
                  borderRadius: 6,
                  cursor: 'pointer',
                  minWidth: '100px',
                }}
              >
                Yes, Remove
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
