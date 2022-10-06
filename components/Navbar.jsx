import React from "react";
import Link from "next/link";
import { AiOutlineShopping } from "react-icons/ai";

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <p className="logo">
        <Link href="/">Ecommerce</Link>
      </p>
      <button type="button" className="cart-icon" onClick={() => {}}>
        <AiOutlineShopping />
        <span className="cart-item-qty">1</span>
      </button>
    </nav>
  );
};

export default Navbar;
