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
        <div className="flex flex-col justify-between min-h-screen">
            <Navbar />
            <div className="cart-container font-['Neue'] overflow-x-hidden">
                {cart.length === 0 ? (
                    <div className="no-results flex flex-col flex-grow">
                        <div className="flex-grow flex items-center justify-center">
                            <div className="text-center align-middle">
                                <p className="font-medium text-black font-[Neue] text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[4rem] xl:text-[4.5rem] 2xl:text-[6rem]">No items in cart yet</p>
                                <Link to={'/shop'} className="text-gray-500 font-[Neue] hover:underline text-[1.2rem] sm:text-[1.5rem] md:text-[1.7rem] lg:text-[2rem] xl:text-[2.5rem] 2xl:text-[2.5rem]">Add items</Link>
                            </div>
                        </div>
                    </div>
                ) : (
                    <>
                        <h1 id="yourCart" className="mt-[20px] ml-[4vw] sm:ml-[10vw] md:ml-[10vw] lg:ml-[10vw] xl:ml-[15vw] 2xl:ml-[15vw] text-[11px] 2xl:text-[15px] xl:text-[15px] lg:text-[15px] md:text-[15px] sm:text-[15px]">YOUR CART</h1>
                        <div id="itemTotalDiv" className="flex flex-row ml-[0vw] w-screen">
                            <div className="flex flex-row justify-between w-screen sm:w-[100vw]">
                                <p className="text-[11px] pb-2 pt-5 ml-[calc(4vw+136px)] sm:ml-[calc(10vw+190px)] sm:pb-3 sm:pt-2 sm:text-[14px] md:ml-[calc(10vw+193px)] lg:ml-[calc(10vw+195px)] xl:ml-[calc(15vw+207px)] 2xl:ml-[calc(15vw+220px)] 2xl:text-[15px] xl:text-[15px] lg:text-[15px] md:text-[15px] 2xl:pb-5 xl:pb-5 lg:pb-5 md:pb-5">ITEM</p>
                                <p className="text-[11px] pb-2 pt-5 mr-[4vw] sm:mr-[10vw] sm:pb-3 sm:text-[14px] sm:pt-2 xl:mr-[15vw] 2xl:text-[15px] xl:text-[15px] lg:text-[15px] md:text-[15px] 2xl:pb-5 xl:pb-5 lg:pb-5 md:pb-5">TOTAL</p>
                            </div>
                        </div>
                        <ul className="cart-list flex flex-col 2xl:ml-[0vw] xl:ml-[0vw] lg:ml-[0vw] md:ml-[0vw] sm:ml-[0vw]">
                            {cart.map((item) => (
                                <li key={[item.name, item.size]} className="cart-item w-[100vw]">
                                    <hr className="w-[100vw] opacity-60 ml-[4vw] mr-[4vw] mb-[20px] sm:ml-[7vw] sm:w-[93vw] xl:ml-[15vw]"/>
                                    <div id="itemSection" className="flex flex-row justify-between pb-[20px] 2xl:pt-10 2xl:pb-10 xl:pt-10 xl:pb-10 lg:pt-10 lg:pb-10 md:pt-10 md:pb-10 sm:pt-10 sm:pb-10 w-[100vw] sm:w-[100vw]">
                                        <div id="itemSectionLeft" className="flex flex-row ml-[4vw] sm:ml-[10vw] md:ml-[10vw] lg:ml-[10vw] xl:ml-[15vw]">
                                            <img className="cart-item-image w-[120px] h-auto sm:w-[170px] md:w-[170px] lg:w-[170px] xl:w-[180px] 2xl:w-[190px]" src={item.images[0]} alt={item.name} />
                                            <div id="itemDetails" className="flex flex-col justify-between ml-[16px] sm:ml-[20px] md:ml-[23px] lg:ml-[25px] xl:ml-[27px] 2xl:ml-[30px]">
                                                <div>
                                                    <p className="text-[12px] sm:text-[15px] md:text-[15px] lg:text-[15px] xl:text-[15px] 2xl:text-[17px]">{item.collection}</p>
                                                    <p className="text-[12px] sm:text-[15px] md:text-[15px] lg:text-[15px] xl:text-[15px] 2xl:text-[17px]">{item.name}</p>
                                                    <p className="text-[12px] sm:text-[15px] md:text-[15px] lg:text-[15px] xl:text-[15px] 2xl:text-[17px]">x {item.quantity}</p>
                                                </div>
                                                <p className="text-[11px] sm:text-[14px] md:text-[14px] lg:text-[14px] xl:text-[14px] 2xl:text-[14px]">SIZE: {item.size}</p>
                                            </div>
                                        </div>
                                        <div id="itemSectionRight" className="flex flex-col justify-between text-left mr-[4vw] sm:mr-[10vw] md:mr-[10vw] lg:mr-[10vw] xl:mr-[15vw]">
                                            <p className="text-right text-[11px] sm:text-[14px] md:text-[14px] lg:text-[14px] xl:text-[14px] 2xl:text-[17px]">${item.price}</p>
                                            <button
                                                className="cursor-pointer hover:underline text-left text-[11px] sm:text-[14px] md:text-[14px] lg:text-[14px] xl:text-[14px] 2xl:text-[17px]"
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
                        <hr className="ml-[4vw] mr-[4vw] sm:ml-[10vw] sm:mr-[10vw] mb-5 2xl:ml-[15vw] xl:mr-[15vw] lg:ml-[15vw] lg:mr-[15vw] md:ml-[15vw] md:mr-[15vw]"/>
                        <div className="flex flex-col pb-20 text-[12px] sm:text-[15px] md:text-[15px]">
                            <div className="flex flex-row justify-between px-[4vw] w-[100vw] sm:w-[100vw] sm:px-[10vw] xl:px-[15vw]">
                                <p className="">Total</p>
                                <p className="">${total}</p>
                            </div>
                            <div className="flex flex-row justify-between px-[4vw] w-[100vw] sm:w-[100vw] sm:px-[10vw] xl:px-[15vw]">
                                <p className="">Shipping Estimate</p>
                                <p className="">Calculated at checkout</p>
                            </div>
                            <div className="flex flex-row justify-between mt-2 px-[4vw] w-[100vw] sm:w-[100vw] sm:px-[10vw] xl:px-[15vw]">
                                <p className="font-bold">Order Total</p>
                                <p className="font-bold">${total}</p>
                            </div>
                            
                        </div>
                    </>
                )}
            </div>
            <Footer />
        </div>
    )
}