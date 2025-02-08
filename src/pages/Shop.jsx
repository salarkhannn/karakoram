import Navbar from "../components/Navbar";
import top from "../productData/hoodies";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../components/CartContext";

export default function Shop(){
    const { addToCart } = useContext(CartContext);

    return (
        <>
            <Navbar />
            <div className="products px-10 py-5">
                <ul className="product-list grid grid-cols-3 gap-6">
                    {top.map((product) => (
                        <li key={product.id} className="product border p-4">
                            <Link to={`/product/${product.id}`}>
                                <div className="image-container w-full flex justify-center">
                                    <img src={product.image} className="product-image h-48 w-48 object-contain"/>
                                </div>
                                <p className="product-name">{product.name}</p>
                                <p className="product-price">${product.price}</p>
                                <p className="product-description">{product.description}</p>
                            </Link>
                            <button
                                type="button"
                                name="add to cart" 
                                className="cart-button"
                                onClick={() => addToCart(product)}
                            >
                                add to cart
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
            <Footer />
        </>
    )
}
