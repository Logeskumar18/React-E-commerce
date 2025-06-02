import { IoBag } from "react-icons/io5";
import { FaUser } from "react-icons/fa6";
import { FaCartPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useCart } from './CartContext';

const Navbar = () => {
  const { cartItems } = useCart();
  const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="navbar navbar-expand-lg sticky-top bg-transparent text-block shadow-sm">
      <div className="container-fluid">
        <Link className="navbar-brand fs-3 fw-bold d-flex align-items-center " to="/">
          <IoBag className="me-2" />
          L-Mart
        </Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto d-flex align-items-center gap-4 pe-3">
            <li className="nav-item">
              <Link className="nav-link fw-semibold fs-5 " to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-semibold fs-5 " to="/shop">Shop</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link  fs-5" to="/profile">
                <FaUser />
              </Link>
            </li>
            <li className="nav-item position-relative">
              <Link className="nav-link  fs-5" to="/cart">
                <FaCartPlus />
                {totalQuantity > 0 && (
                  <span
                    className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                    style={{ fontSize: '0.75rem' }}
                  >
                    {totalQuantity}
                    <span className="visually-hidden">items in cart</span>
                  </span>
                )}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
