import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { CartContext } from "../components/CartContext";
import { useSearch } from "../components/SearchContext";
import hoodies from "../productData/clothes";
import Toast from "../components/Toast";

export default function Shop() {
    const { addToCart } = useContext(CartContext);
    const { searchQuery } = useSearch();
    const [itemsToShow, setItemsToShow] = useState(hoodies);
    
    // State for tracking dropdown visibility and selected size for each product
    const [openDropdowns, setOpenDropdowns] = useState({});
    const [selectedSizes, setSelectedSizes] = useState({});

    const [toastMessage, setToastMessage] = useState("");

    // Toggle dropdown for a specific product
    const toggleDropdown = (id) => {
        setOpenDropdowns((prev) => ({
            ...prev,
            [id]: !prev[id] // Toggle the dropdown for the specific product
        }));
    };

    // Handle selecting a size
    const handleSizeSelect = (size, id) => {
        setSelectedSizes((prev) => ({
            ...prev,
            [id]: size, // Store selected size for specific product
        }));
        setOpenDropdowns((prev) => ({
            ...prev,
            [id]: false, // Close the dropdown
        }));
    };

    const handleAddToCart = (product, size) => {
        if (size){
            addToCart(product, size);
            setToastMessage(`Product ${product.name} (${size}) added to cart`);
        } else {
            setToastMessage(`Size not selected`);
        }

        setTimeout(() => setToastMessage(null), 3000);
    }

    useEffect(() => {
        if (searchQuery) {
            const filteredItems = hoodies.filter((item) =>
                item.name.toLowerCase().includes(searchQuery.toLowerCase())
            );
            setItemsToShow(filteredItems);
        } else {
            setItemsToShow(hoodies);
        }
    }, [searchQuery]);

    return (
        <div className="shop">
            {toastMessage && <Toast message={toastMessage} />}
            <Navbar />
            {itemsToShow.length === 0 ? (
                <div className="no-results min-h-screen flex flex-col">
                    <div className="flex-grow flex items-center justify-center">
                        <div className="text-center mt-[-100px]">
                            <p className="text-[5rem] font-medium text-black font-[Neue]">No Results Found :(</p>
                            <p className="text-gray-500 text-[1.5rem] font-[Neue]">Try adjusting your search.</p>
                        </div>
                    </div>
                    <Footer />
                </div>
            ) : (
                <div className="product-page pr-10 pl-10 min-h-screen flex flex-col mt-10 mb-10">
                    <div className="products px-10 py-5">
                        <ul className="product-list grid grid-cols-3 gap-y-30 xl:grid-cols-3 xl:gap-y-30 lg:grid-cols-3 lg:gap-y-30 md:grid-cols-2 md:gap-y-30 sm:grid-cols-2 sm:gap-y-30">
                            {itemsToShow.map((product) => (
                                <li key={product.id} className="product border border-transparent hover:border-black p-4 cursor-pointer font-['Neue']">
                                    <Link to={`/product/${product.id}`}>
                                        <div className="image-container w-full flex justify-center">
                                            <img src={product.images[0]} className="product-image h-auto w-[450px] object-contain" />
                                        </div>
                                    </Link>
                                    <div className="flex flex-row justify-between">
                                        <div className="flex flex-col pt-7">
                                            <p className="product-name xl:text-[15px] lg:text-[12px] md:text-[13px] sm:text-[11px]">{product.collection}</p>
                                            <p className="product-name xl:text-[15px] lg:text-[12px] md:text-[13px] sm:text-[11px]">{product.name}</p>
                                            <p className="product-price xl:text-[14px] lg:text-[11px] md:text-[12px] sm:text-[10px] text-[#2b446e]">${product.price}</p>
                                        </div>
                                        <div className="flex flex-col items-center">
                                            <div className="size-dropdown relative cursor-pointer pt-7">
                                                <select
                                                    className="size-select cursor-pointer bg-[#fff8f7] border-[0.5px] border-gray-300 text-gray-900 font-['Neue'] text-left xl:px-3 xl:py-1 xl:text-[15px] md:px-[9px] md:py-[3px] md:text-[13px] lg:px-[7px] lg:py-[2px] lg:text-[13px] sm:px-[7px] sm:py-[2px] sm:text-[10px]"
                                                    value={selectedSizes[product.id] || ""}
                                                    onChange={(e) => handleSizeSelect(e.target.value, product.id)}
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
                                                type="button"
                                                name="add to cart"
                                                className="cart-button cursor-pointer pt-[5px] text-black hover:underline text-[14px] xl:text-[13px] lg:text-[12px] md:text-[13px] sm:text-[11px]"
                                                onClick={() => handleAddToCart(product, selectedSizes[product.id])}
                                            >
                                                Add to Cart
                                            </button>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <Footer />
                </div>
            )}
        </div>
    );
}
