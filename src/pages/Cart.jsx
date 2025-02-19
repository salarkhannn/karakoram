import { useContext } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { CartContext } from "../components/CartContext";

export default function Cart(){
    const { cart, removeFromCart } = useContext(CartContext);
    let total = 0;
    cart.forEach(item => {
        total += item.price * item.quantity;
    });

    return (
        <>
            <Navbar />
            <div className="cart-container">
                <h1 className="ml-70">Your Cart</h1>
                {cart.length === 0 ? (
                    <p className="">Your cart is empty</p>
                ) : (
                    <>
                        <div className="flex flex-row ml-70 w-[70vw]">
                            <div className="w-[15vw]"></div>
                            <div className="flex flex-row justify-between w-[70vw]">
                                <p className="ml-10 pb-5">ITEM</p>
                                <p className="">Total</p>
                            </div>
                        </div>
                        <ul className="cart-list flex flex-col ml-70">
                            {cart.map((item) => (
                                <li key={item.name} className="cart-item w-100">
                                    <hr className="w-[70vw] opacity-60"/>
                                    <div className="flex flex-row justify-between w-[70vw] pt-10 pb-10">
                                        <div className="flex flex-row">
                                            <img className="cart-item-image w-[15vw]" src={item.image} alt={item.name} />
                                            <div className="flex flex-col justify-between ml-10">
                                                <div>
                                                    <p className="">{item.collection}</p>
                                                    <p className="">{item.name}</p>
                                                    <p className="">x{item.quantity}</p>
                                                </div>
                                                <p className="">SIZE:</p>
                                            </div>
                                        </div>
                                        <div className="flex flex-col justify-between text-left">
                                            <p className="text-left">${item.price}</p>
                                            <button
                                                className="cursor-pointer hover:underline text-left"
                                                // onClick={() => removeFromCart(item.name)}
                                                onClick={() => removeFromCart(item)}
                                            >
                                                REMOVE
                                            </button>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <hr className="ml-70 mr-70 mb-5"/>
                        <div className="flex flex-col pb-20">
                            <div className="flex flex-row justify-between w-[70vw] ml-70">
                                <p className="">Total</p>
                                <p className="">${total}</p>
                            </div>
                            <div className="flex flex-row justify-between w-[70vw] ml-70">
                                <p className="">Shipping Estimate</p>
                                <p className="">Calculated at checkout</p>
                            </div>
                            <div className="flex flex-row justify-between w-[70vw] ml-70 mt-2">
                                <p className="font-bold">Order Total</p>
                                <p className="font-bold">${total}</p>
                            </div>
                            
                        </div>
                        <Footer />
                    </>
                )}
            </div>
        </>
    )
}