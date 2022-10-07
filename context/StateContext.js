import React, { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-hot-toast";

const Context = createContext();

export const StateContext = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantities, setTotalQuantities] = useState(0);
  const [qty, setQty] = useState(1);

  let updateProduct;
  let index;

  const onAdd = (product, quantity) => {
    const checkCart = cartItems.find((item) => item._id === product._id);

    setTotalPrice((prev) => prev + product.price * quantity);
    setTotalQuantities((prev) => prev + quantity);

    if (checkCart) {
      const updatedCard = cartItems.map((item) => {
        if (item._id === product._id)
          return {
            ...item,
            quantity: item.quantity + quantity,
          };
      });

      setCartItems(updatedCard);
    } else {
      product.quantity = quantity;

      setCartItems([...cartItems, { ...product }]);
    }
    toast.success(`${qty} ${product.name} added to the cart`);
  };

  const toggleQuantity = (id, value) => {
    updateProduct = cartItems.find((item) => item._id === id);
    index = cartItems.findIndex((product) => product._id === id);

    if (value === "inc") {
      setCartItems((prev) =>
        prev.map((item) => {
          if (item._id === id)
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          return item;
        })
      );
      setTotalPrice((prev) => prev + updateProduct.price);
      setTotalQuantities((prev) => prev + 1);
    } else if (value === "dec") {
      if (updateProduct.quantity > 1) {
        setCartItems((prev) =>
          prev.map((item) => {
            if (item._id === id) {
              return {
                ...item,
                quantity: item.quantity - 1,
              };
            }
            return item;
          })
        );
        setTotalPrice((prev) => prev - updateProduct.price);
        setTotalQuantities((prev) => prev - 1);
      }
    }
  };

  const onRemove = (product) => {
    updateProduct = cartItems.find((item) => item._id === product._id);
    const newCart = cartItems.filter((item) => item._id !== product._id);

    setTotalPrice(
      (prev) => prev - updateProduct.price * updateProduct.quantity
    );
    setTotalQuantities((prev) => prev - updateProduct.quantity);
    setCartItems(newCart);
  };

  const incQty = () => {
    setQty((prev) => prev + 1);
  };

  const deccQty = () => {
    setQty((prev) => {
      if (prev - 1 < 1) return 1;
      return prev - 1;
    });
  };

  return (
    <Context.Provider
      value={{
        showCart,
        cartItems,
        totalPrice,
        totalQuantities,
        qty,
        incQty,
        deccQty,
        onAdd,
        setShowCart,
        toggleQuantity,
        onRemove,
        setCartItems,
        setTotalPrice,
        setTotalQuantities,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
