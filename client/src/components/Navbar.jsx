
import './Navbar.css'; // Import the CSS file for styling
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";

const Navbar = () => {
  const cartData = useSelector((state) => state.cartSlice.cart.length);
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/products">E-Commerce</Link>
      </div>
      <div className="cart-container">
       <Link to="/cart" >
       <i class="ri-shopping-cart-line" ></i>
       <span className="cart-count">{cartData}</span></Link>
      </div>
    </nav>
  );
};

export default Navbar;

