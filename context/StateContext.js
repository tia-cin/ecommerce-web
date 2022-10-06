import React, { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-hot-toast";

const Context = createContext();

export const StateContext = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [cardItems, setCardItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState();
  const [totalQuantities, setTotalQuantities] = useState(0);
  const [qty, setQty] = useState(1);

  const onAdd = (product, quantity) => {
    const checkCart = cardItems.find((item) => item._id === product._id);

    setTotalPrice((prev) => prev + product.price * quantity);
    setTotalQuantities((prev) => prev + quantity);

    if (checkCart) {
      const updatedCard = cardItems.map((item) => {
        if (item._id === product._id)
          return {
            ...item,
            quantity: item.quantity + quantity,
          };
      });

      setCardItems(updatedCard);
    } else {
      product.quantity = quantity;

      setCardItems([...cardItems, { ...product }]);
    }
    toast.success(`${qty} ${product.name} added to the cart`);
  };

  const incQty = () => {
    setQty((prev) => prev + 1);
  };

  const deccQty = () => {
    setQty((prev) => {
      if (prev - 1 === 0) return 1;
      return prev - 1;
    });
  };

  return (
    <Context.Provider
      value={{
        showCart,
        cardItems,
        totalPrice,
        totalQuantities,
        qty,
        incQty,
        deccQty,
        onAdd,
        setShowCart,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
