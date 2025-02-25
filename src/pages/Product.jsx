import { Link, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import hoodies from "../productData/clothes";
import { useState } from "react";
import { useContext } from "react";
import { CartContext } from "../components/CartContext";
import Toast from "../components/Toast";
import Footer from "../components/Footer";
import { useEffect } from "react";

export default function Product () {
    const { id } = useParams(); // get products from the URL
    const [selectedSize, setSelectedSize] = useState(null);
    const {addToCart} = useContext(CartContext);

    const [toastMessage, setToastMessage] = useState("");

    const handleSizeSelect = (size) => {
        setSelectedSize(size);
    }

    const handleAddToCart = (product, size) => {
        if (size) {
            addToCart(product, size);
            setToastMessage(`Product ${product.name} (${size}) added to cart`);
        } else {
            setToastMessage(`Size not selected`);
        }

        setTimeout(() => setToastMessage(null), 3000);
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    // Find product with the matching id
    const product = hoodies.find(item => item.id === id);

    if (!product) {
        return <h1>Product not found</h1>;
    }

    return (
        <>
            {toastMessage && <Toast message={toastMessage} />}
            <Navbar />
            <div className="relative w-screen px-[2vw]">
                <div
                    className="
                    product list-none font-['Neue']
                    flex flex-col items-center
                    sm:flex sm:flex-row sm:justify-between
                    "
                >
                    {/* Left Sticky Section */}
                    <div
                        className="
                        hidden
                        sm:block sm:order-1 sm:sticky top-[30%] sm:self-start sm:w-[25vw] sm:max-h-[80vh] sm:overflow-auto
                        "
                    >
                        <div className="pb-50 product-details flex flex-col">
                            <p className="text-[15px]">{product.collection}</p>
                            <p className="text-[15px] mb-5">{product.name}</p>
                            <p className="text-[14px] mb-5">{product.description}</p>
                            {product.qualities.map((quality) => (
                                <li className="text-[14px]" key={quality}>- {quality}</li>
                            ))}
                            <p className="text-[14px] mt-5 mb-5">Supplier Color: {product.supplierColor}</p>
                            <p className="text-[14px]">Material: {product.material}</p>
                            <p className="text-[14px]">Made in: {product.origin}</p>
                            <p className="text-[14px] mt-5 mb-[150px]">SKU: {product.sku}</p>
                        </div>
                    </div>
                    {/* Right Sticky Section */}
                    <div
                        className="
                        hidden
                        sm:block sm:order-3 sm:sticky sm:top-[40%] sm:self-start sm:w-[25vw] sm:max-h-[80vh] sm:mb-100 sm:overflow-auto
                        "
                    >
                        <div className="mb-50 product-options flex flex-col items-end">
                            <div className="items-start">
                                <p className="text-[13px] mb-5">${product.price} USD</p>
                                <div className="size-dropdown relative cursor-pointer">
                                    <select
                                        className="mb-5 flex items-start size-select cursor-pointer px-2 py-[10px] pr-[270px] text-[13px] bg-none border-[0.5px] border-gray-300 text-gray-900 font-['Neue']"
                                        value={selectedSize || ""}
                                        onChange={(e) => handleSizeSelect(e.target.value)}
                                    >
                                        <option className="font-['Neue'] text-[12px]" value="" disabled>SELECT SIZE</option>
                                        {["S", "M", "L"].map((size) => (
                                            <option className="font-['Neue']" key={size} value={size}>
                                                {size}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <button
                                    className="text-[12px] add-to-cart-button bg-black text-white px-[150px] py-[10px] cursor-pointer hover:bg-gray-900 mb-[150px]"
                                    onClick={() => handleAddToCart(product, selectedSize)}
                                >
                                    ADD TO CART
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Product Images (Scrollable Section) */}
                    <div id="Images"
                        className="
                        product-images w-[60vw]
                        order-1
                        sm:order-2
                        "
                    >
                        {product.images.map((image) => (
                            <li className="product-image list-none" key={image}>
                                <img src={image} alt={product.name} className="product-image" />
                            </li>
                        ))}
                    </div>
                    
                    <div className="flex flex-col order-2 w-screen px-[4vw]">
                        <div className="flex flex-row justify-between">
                            <p className="text-[13px]">{product.collection}</p>
                            <p className="text-[13px] text-[#2b446e]">${product.price}</p>
                        </div>
                        <p className="text-[13px]">{product.name}</p>
                        <div id="dropdownAndButton" className="mt-[12px]">
                            <div className="size-dropdown relative cursor-pointer">
                                <select
                                    className="bg-transparent flex items-start cursor-pointer w-[100%] px-[5px] py-[8px] pr-[270px] text-[10px] border-[0.5px] border-gray-300 text-gray-900 font-['Neue']"
                                    value={selectedSize || ""}
                                    onChange={(e) => handleSizeSelect(e.target.value)}
                                >
                                    <option className="bg-none" value="" disabled>SELECT SIZE</option>
                                    {["S", "M", "L"].map((size) => (
                                        <option className="" key={size} value={size}>
                                            {size}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <button
                                className="mt-[7px] py-[8px] w-[100%] text-[10px] add-to-cart-button bg-black text-white cursor-pointer hover:bg-gray-900"
                                onClick={() => handleAddToCart(product, selectedSize)}
                            >
                                ADD TO CART
                            </button>
                        </div>
                        <div className="product-details flex flex-col mt-[10px] mb-[20px]">
                            <p className="text-[11px]">{product.collection}</p>
                            <p className="text-[11px] mb-5">{product.name}</p>
                            <p className="text-[10px] mb-5">{product.description}</p>
                            {product.qualities.map((quality) => (
                                <li className="text-[10px]" key={quality}>- {quality}</li>
                            ))}
                            <p className="text-[10px] mt-5 mb-5">Supplier Color: {product.supplierColor}</p>
                            <p className="text-[10px]">Material: {product.material}</p>
                            <p className="text-[10px]">Made in: {product.origin}</p>
                            <p className="text-[10px] mt-5">SKU: {product.sku}</p>
                        </div>
                    </div>

                </div>

                {/* Recommended Products Section */}
                <div className="recommended-products pt-1">
                    <p className="font-['Neue'] text-gray-900 text-[14px]">You may also like</p>
                    <div className="products px-10 py-5">
                        <ul className="product-list grid grid-cols-3 gap-y-30">
                            {hoodies.map((product) => (
                                <li key={product.id} className="product border border-transparent hover:border-black p-4 cursor-pointer font-['Neue']">
                                    <Link to={`/product/${product.id}`}>
                                        <div className="image-container w-full flex justify-center">
                                            <img src={product.images[0]} className="product-image h-auto w-[450px] object-contain" />
                                        </div>
                                    </Link>
                                    <div className="flex flex-row justify-between">
                                        <div className="flex flex-col pt-7">
                                            <p className="product-name text-[15px]">{product.collection}</p>
                                            <p className="product-name text-[15px]">{product.name}</p>
                                            <p className="product-price text-[14px] text-[#2b446e]">${product.price}</p>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}