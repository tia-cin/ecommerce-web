import React, { useEffect, useState } from "react";
import Link from "next/link";
import { BsBagCheckFill } from "react-icons/bs";
import { useRouter } from "next/router";
import { useStateContext } from "../context/StateContext";

const Success = () => {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();

  useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
  }, []);

  return (
    <div className="success-wrapper">
      <div className="success">
        <p className="icon">
          <BsBagCheckFill />
        </p>
        <h2>Thanks for your order!</h2>
        <p className="email-msg">Check your email for your receipt.</p>
        <p className="description">
          If any question, please contact us throuh our email
          <a className="email" href="mailto:example@mail.com">
            example@mail.com
          </a>
        </p>
        <Link href="/">
          <button className="btn">Continue Shopping</button>
        </Link>
      </div>
    </div>
  );
};

export default Success;
