import { IoBag } from "react-icons/io5";
import { FaUser } from "react-icons/fa6";
import { FaCartPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-light shadow-lg">
            <div className="container-fluid">
                <Link className="navbar-brand fs-3 fw-bold d-flex align-items-center" to="/">
                    <IoBag className="me-2" />
                    L-Mart
                </Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto d-flex align-items-center gap-4 pe-3">
                        <li className="nav-item">
                            <Link className="nav-link fw-semibold fs-5 text-black" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link fw-semibold fs-5 text-black" to="/shop">Shop</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link fw-semibold fs-5 text-black" to="/cart">Cart</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-black fs-5" to="/profile">
                                <FaUser />
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-black fs-5" to="/cart">
                                <FaCartPlus />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
