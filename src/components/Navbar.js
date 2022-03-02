import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

function Navbar() {
  return (
    <div className="header">
      <div className="logo">
        Art Store <i className="fa-solid fa-palette"></i>
      </div>
      <div className="navBar">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <div className="shoppingCart">
          <i className="fa-solid fa-cart-shopping"></i>
          <div className="itemsAmount">0</div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
