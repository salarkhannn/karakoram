import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import hoodies from "../productData/clothes";
import SizeDropdown from "../components/SizeDropdown";
import { useState } from "react";

export default function Product () {
    const { id } = useParams(); // get products from the URL
    const [selectedSize, setSelectedSize] = useState(null);

    const handleSizeSelect = (size) => {
        setSelectedSize(size);
    }

    // Find product with the matching id
    const product = hoodies.find(item => item.id === id);

    if (!product) {
        return <h1>Product not found</h1>;
    }

    return (
        <>
            <Navbar />
            <div className="product flex flex-row w-screen justify-between list-none font-['Neue'] pr-10 pl-10">
                <div className="sticky w-[25vw]">
                    <div className="product-details fixed h-screen w-[25vw] flex flex-col justify-center">
                        <p>{product.collection}</p>
                        <p>{product.name}</p>
                        {product.qualities.map((quality) => (
                            <li className="list-disc" key={quality}>
                                {quality}
                            </li>
                        ))}
                        <p>Supplier Color: {product.supplierColor}</p>
                        <p>Material: {product.material}</p>
                        <p>Made in: {product.origin}</p>
                    </div>
                </div>

                <div className="product-images w-[25vw]">
                    {product.images.map((image) => (
                        <li className="product-image list-none" key={image}>
                            <img src={image} alt={product.name} className="product-image"/>
                        </li>
                    )
                    )}
                </div>

                <div className="sticky w-[25vw]">
                    <div className="product-options fixed h-screen w-[25vw] flex flex-col justify-center items-start text-left">
                        <p>${product.price}</p>
                        <div className="size-dropdown relative cursor-pointer text-left">
                            <select
                                className="size-select cursor-pointer px-10 py-3 text-[15px] bg-[#fff8f7] border-[0.5px] border-gray-300 text-gray-900 font-['Neue']"
                                value={selectedSize || ""}
                                onChange={(e) => handleSizeSelect(e.target.value)}
                            >
                                <option className="font-['Neue'] text-[15px]" value="" disabled>Select Size</option>
                                {["S", "M", "L"].map((size) => (
                                    <option className="font-['Neue']" key={size} value={size}>
                                        {size}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <button
                            className="add-to-cart-button bg-black text-white"
                        >
                            ADD TO CART
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}