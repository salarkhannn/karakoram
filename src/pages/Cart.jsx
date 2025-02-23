import { useContext } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { CartContext } from "../components/CartContext";
import { Link } from "react-router-dom";

export default function Cart(){
    const { cart, removeFromCart } = useContext(CartContext);
    let total = 0;
    cart.forEach(item => {
        total += item.price * item.quantity;
    });

    return (
        <>
            <Navbar />
            <div className="cart-container font-['Neue']">
                {cart.length === 0 ? (
                    <div className="no-results min-h-screen flex flex-col">
                        <div className="flex-grow flex items-center justify-center">
                            <div className="text-center mt-[-100px]">
                                <p className="text-[5rem] font-medium text-black font-[Neue]">No items in cart yet</p>
                                <Link to={'/shop'} className="text-gray-500 text-[1.5rem] font-[Neue] hover:underline">Add items</Link>
                            </div>
                        </div>
                        <Footer />
                    </div>
                ) : (
                    <>
                        <h1 className="ml-[15vw]">Your Cart</h1>
                        <div className="flex flex-row ml-[12.5vw] w-[70vw]">
                            <div className="w-[15vw]"></div>
                            <div className="flex flex-row justify-between w-[70vw]">
                                <p className="ml-[140px] pb-5">ITEM</p>
                                <p className="ml-[140px] pl-5">Total</p>
                            </div>
                        </div>
                        <ul className="cart-list flex flex-col ml-[15vw]">
                            {cart.map((item) => (
                                <li key={[item.name, item.size]} className="cart-item w-[70vw]">
                                    <hr className="w-[70vw] opacity-60"/>
                                    <div className="flex flex-row justify-between w-[70vw] pt-10 pb-10">
                                        <div className="flex flex-row">
                                            <img className="cart-item-image w-[15vw]" src={item.images[0]} alt={item.name} />
                                            <div className="flex flex-col justify-between ml-10">
                                                <div>
                                                    <p className="">{item.collection}</p>
                                                    <p className="">{item.name}</p>
                                                    <p className="">x {item.quantity}</p>
                                                </div>
                                                <p className="">SIZE: {item.size}</p>
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
                        <hr className="ml-[15vw] mr-[15vw] mb-5"/>
                        <div className="flex flex-col pb-20">
                            <div className="flex flex-row justify-between w-[70vw] ml-[15vw]">
                                <p className="">Total</p>
                                <p className="">${total}</p>
                            </div>
                            <div className="flex flex-row justify-between w-[70vw] ml-[15vw]">
                                <p className="">Shipping Estimate</p>
                                <p className="">Calculated at checkout</p>
                            </div>
                            <div className="flex flex-row justify-between w-[70vw] ml-[15vw] mt-2">
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