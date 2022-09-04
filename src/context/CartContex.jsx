import React, { createContext, useState } from "react";
import { useContext } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
    const [items, setItems] = useState([]);


  function addItem(item, quantity) {
      console.log({ ...item, quantity });

      if (isInCart(item.id)) {
          let aux = item;
          let itemIndex = aux.indexOf((element) => element.id === item.id);
          aux[itemIndex].quantity += quantity;
          setItems(...aux);
          
      } else {
          setItems([...items, {...item, quantity}])
          
      }
  }

  function removeItem(itemId) {
    //
  }

  function clear() {
      setItems([]);
    }
    
    function isInCart(itemId) {
      return true
    }

    return(
    
        <CartContext.Provider value={{}}>{children}</CartContext.Provider>
    )
}
