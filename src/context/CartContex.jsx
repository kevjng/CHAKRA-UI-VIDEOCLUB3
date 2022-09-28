import React, { useState, createContext } from "react";

export const CartContext = createContext();


export function CartProvider({ children }) {

  const [items, setItems] = useState([]); 
  

  function addItem(item, quantity) {
    /* console.log({ ...item, quantity }); */

    if (isInCart(item.id)) {
      /* console.log("soy un item duplicado") */
      let aux = items;
      /* console.log(aux); */
      let itemIndex = aux.findIndex((element) => element.id === item.id); 
      /* console.log(`Mi index es ${itemIndex}`) */
      aux[itemIndex].quantity += quantity; 
      setItems([...aux]); 
    } else {
      /* console.log("soy un item nuevo")*/
      setItems([...items, { ...item, quantity }]);
    }
  }

  function removeItem(itemId) {
    let nuevoCarrito = items.filter((e) => e.id !== itemId);
    setItems(nuevoCarrito);
    
  }

  function clear() {
    setItems([]);
  }

  function isInCart(itemId) {
    return items.find((element) => element.id === itemId);
  }

 


  return (
    <CartContext.Provider
      value={{ items, addItem, removeItem, clear, }}
    >
      {children}
    </CartContext.Provider>
  );
}
