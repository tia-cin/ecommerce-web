import React, { useRef } from "react";
import Link from "next/link";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineLeft,
  AiOutlineShopping,
} from "react-icons/ai";
import { TiDeleteOutline } from "react-icons/ti";
import { toast } from "react-hot-toast";
import { useStateContext } from "../context/StateContext";
import { urlFor } from "../lib/client";
import getStripe from "../lib/getStripe";

const Cart = () => {
  const cartRef = useRef();
  const {
    totalPrice,
    totalQuantities,
    cartItems,
    setShowCart,
    toggleQuantity,
    onRemove,
  } = useStateContext();

  const handleCheckout = async () => {
    const stripe = await getStripe();

    const response = await fetch("/api/stripe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cartItems),
    });

    if (response.statusCode === 500) return;

    const data = await response.json();

    toast.loading("Redirecting...");

    stripe.redirectToCheckout({ sessionId: data.id });
  };

  return (
    <div className="w-screen bg-opacity-50 bg-black fixed right-0 top-0 transition-all" style={{zIndex: 100}} ref={cartRef}>
      <div className="h-screen w-600 bg-white float-right px-10 py-2.5 relative">
        <button className="ml-2.5 flex items-center text-lg font-medium cursor-pointer gap-0.5 bg-transparent" onClick={() => setShowCart(false)}>
          <AiOutlineLeft />
          <span className="ml-2.5">Your Cart</span>
          <span className="ml-2.5 text-red-500">({totalQuantities} items)</span>
        </button>
        {cartItems.length < 1 && (
          <div className="m-10 text-center flex flex-col items-center">
            <AiOutlineShopping size={150} />
            <h3 className="font-semibold text-xl">Your cart is empty</h3>
            <Link href="/">
              <button onClick={() => setShowCart(false)} className="w-full max-w-sm px-2.5 py-3 rounded-2xl text-xl mt-12 uppercase bg-indigo-600 text-gray-200 font-medium">
                Continue shopping
              </button>
            </Link>
          </div>
        )}
        <div className="mt-2.5">
          {cartItems.length > 0 &&
            cartItems.map((item, i) => (
              <div className="flex py-4 px-2.5" key={i}>
                <img
                  src={urlFor(item?.image[0])}
                  className="w-1/4 h-1/4"
                />
                <div className="flex">
                  <div className="w-200 flex-wrap gap-2.5">
                    <h5 className="text-base font-semibold">{item.name}</h5>
                    <h4 className="text-base">${item.price}</h4>
                  </div>
                  <div className="w-200 flex items-center justify-between">
                    <div>
                      <p className="flex items-center gap-4 border border-gray-200 p-2">
                        <span
                          className="text-red-500 cursor-pointer"
                          onClick={() => toggleQuantity(item._id, "dec")}
                        >
                          <AiOutlineMinus />
                        </span>
                        <span className="text-lg">{item.quantity}</span>
                        <span
                          className="text-green-500 cursor-pointer"
                          onClick={() => toggleQuantity(item._id, "inc")}
                        >
                          <AiOutlinePlus />
                        </span>
                      </p>
                    </div>
                    <button
                      className="bg-transparent text-2xl text-red-500 cursor-pointer"
                      onClick={() => onRemove(item)}
                    >
                      <TiDeleteOutline />
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
        {cartItems.length > 0 && (
          <div className="absolute bg-transparent bottom-0 m-8">
            <div className="flex justify-between">
              <h3 className="text-xl">Subtotal:</h3>
              <h3 className="text-xl">${totalPrice}</h3>
            </div>
            <div className="w-400 m-auto">
              <button className="w-full max-w-400 py-2.5 px-3 rounded-lg text-xl mt-2.5 uppercase bg-indigo-600 text-white cursor-pointer transition-all hover:scale-110" onClick={handleCheckout}>
                Pay with Stripe
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
