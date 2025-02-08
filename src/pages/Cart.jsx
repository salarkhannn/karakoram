import { useContext } from "react";
import Navbar from "../components/Navbar";
import { CartContext } from "../components/CartContext";

export default function Cart(){
    const { cart, removeFromCart } = useContext(CartContext);

    return (
        <>
            <Navbar />
            <div className="cart-container">
                <h1 className="">Your Cart</h1>
                {cart.length === 0 ? (
                    <p className="">Your cart is empty</p>
                ) : (
                    <ul className="cart-list">
                        {cart.map((item) => (
                            <li key={item.name} className="cart-item">
                                <img className="cart-item-image" src={item.image} alt={item.name} />
                                <div>
                                    <p className="">{item.name}</p>
                                    <p className="">${item.price}</p>
                                </div>
                                <button
                                    className=""
                                    onClick={() => removeFromCart(item.name)}
                                >
                                    Remove
                                </button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </>
    )
}