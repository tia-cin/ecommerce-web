import React from "react";
import Link from "next/link";
import { AiOutlineShopping } from "react-icons/ai";
import { Cart } from "./";
import { useStateContext } from "../context/StateContext";

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  return (
    <nav className="flex justify-between mx-1.5 my-4.5 relative">
      <p className="flex items-center text-gray-400 text-xl font-medium">
        <Link href="/">
          <img 
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fraw.githubusercontent.com%2Fkbrsh%2Fmoon%2Fgh-pages%2Fimg%2Flogo.png&f=1&nofb=1&ipt=b431312ebae66002433a6c023072e2707fc60bcd5dd4125377c8b851d81d2818&ipo=images"
            alt="ecommerce"
            className="w-10 h-10"  
          />
          
        </Link>
         Store
      </p>
      <button
        type="button"
        className="text-2xl text-gray-500 cursor-pointer relative transition-all bg-transparent"
        onClick={() => setShowCart(true)}
      >
        <AiOutlineShopping />
        <span className="absolute -right-2 top-0 text-xs text-gray-300 bg-red-500 w-4 h-4 rounded-full text-center font-semibold">{totalQuantities}</span>
      </button>
      {showCart && <Cart />}
    </nav>
  );
};

export default Navbar;
