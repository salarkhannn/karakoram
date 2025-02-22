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

    function addToCart(product, size) {
        const itemToAdd = {...product};
        itemToAdd.quantity = itemToAdd.quantity ? itemToAdd.quantity = 1 : 1;
        itemToAdd.size = size;
        const existingItem = cart.find((item) => item.id === itemToAdd.id);
        if (existingItem) {
            existingItem.quantity += itemToAdd.quantity;
        } else {
            cart.push(itemToAdd);
        }

        setCart([...cart]);
    }

    function removeFromCart(product) {
        if (product.quantity > 1){
            product.quantity -= 1;
            console.log(`debug 3: ${product.quantity}`);
            console.log(`debug 4: ${cart}`);
            setCart([...cart]);
            // setCart([...cart, product]);
        } else {
            setCart((prevCart) => prevCart.filter((item) => item.name !== product.name));
        }
        // if (itemToRemove.quantity > 1){
        //     itemToRemove.quantity -= 1;
        //     console.log(`debug 3: ${itemToRemove.quantity}`);
        //     console.log(`debug 4: ${cart}`);
        //     setCart([...cart, itemToRemove]);
        // } else {
        //     setCart((prevCart) => prevCart.filter((item) => item.name !== itemToRemove.name));
        // }
    }

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    )
}