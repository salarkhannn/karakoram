import { useState, createContext, useEffect } from "react";

export const CartContext = createContext();

export function CartProvider({ children }){
    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem("cart");
        return savedCart ? JSON.parse(savedCart) : [];
    });

    // Save cart to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    // function addToCart(product) {
    //     const itemToAdd = {...product};
    //     itemToAdd["quantity"] = itemToAdd["quanity"] ? itemToAdd["quanity"] + 1 : 1;
    //     console.log(cart);
    //     const existingItem = cart.filter((item) => item.id === itemToAdd.id);
    //     if (existingItem) {
    //         existingItem.quantity += itemToAdd.quantity;
    //         setCart([...cart]);
    //     } else {
    //         setCart([...cart, itemToAdd]);
    //     }
    // }

    function addToCart(product) {
        const itemToAdd = {...product};
        itemToAdd.quantity = itemToAdd.quantity ? itemToAdd.quantity = 1 : 1;
        const existingItem = cart.find((item) => item.id === itemToAdd.id);
        if (existingItem) {
            existingItem.quantity += itemToAdd.quantity;
        } else {
            cart.push(itemToAdd);
        }

        setCart([...cart]);
    }

    function removeFromCart(productName) {
        setCart((prevCart) => prevCart.filter((item) => item.name !== productName));
    }

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    )
}