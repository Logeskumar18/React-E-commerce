import { IoBag } from "react-icons/io5";
import { FaUser } from "react-icons/fa6";
import { FaCartPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="d-flex justify-content-between align-items-center bg-light shadow-lg">
      <h1 className="w-50 fs-3 ps-5">
        <IoBag />
        L-Mart
      </h1>
      <ul className="w-50 d-flex justify-content-between pe-5 pt-3">
        <Link className="text-decoration-none text-black fs-5 fw-semibold " to="/">Home</Link>
        <Link className="text-decoration-none text-black fs-5 fw-semibold " to="/shop">Shop</Link>
        <Link className="text-decoration-none text-black fs-5 fw-semibold " to="/cart">Cart</Link>
        <Link className="text-decoration-none text-black fs-5 fw-semibold " to="/profile"><FaUser /></Link>
        <Link className="text-decoration-none text-black fs-5 fw-semibold " to="/cart"><FaCartPlus /></Link>
      </ul>
    </nav>
  );
};

export default Navbar
