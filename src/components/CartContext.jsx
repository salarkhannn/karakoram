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

    function addToCart(product) {
        setCart((prevCart) => [...prevCart, product]);
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