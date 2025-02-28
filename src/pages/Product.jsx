import { Link, useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import Navbar from "../components/Navbar";
import hoodies from "../productData/clothes";
import { CartContext } from "../components/CartContext";
import Toast from "../components/Toast";
import Footer from "../components/Footer";
import ImageCarousel from "../components/ImageCarousel";
import { ImageSlider } from "../components/ImageSlider";
// import Carousel from "react-bootstrap/Carousel";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './Bootstrap.module.css';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';


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
    const shuffledHoodies = [...hoodies].sort(() => 0.5 - Math.random()).slice(0, 6);

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
                        sm:hidden
                        md:hidden
                        lg:hidden lg:order-2 lg:sticky lg:top-[30%] lg:self-start lg:w-[25vw] lg:max-h-[80vh] lg:overflow-auto
                        xl:block xl:order-2 xl:sticky xl:top-[30%] xl:self-start xl:w-[25vw] xl:max-h-[80vh] xl:overflow-auto
                        "
                    >
                        <div className="pb-50 product-details flex flex-col">
                            <p className="lg:text-[13px] xl:text-[15px] 2xl:text-[18px]">{product.collection}</p>
                            <p className="lg:text-[13px] xl:text-[15px] 2xl:text-[18px] mb-5">{product.name}</p>
                            <p className="lg:text-[13px] xl:text-[15px] 2xl:text-[18px] mb-5">{product.description}</p>
                            {product.qualities.map((quality) => (
                                <li className="lg:text-[12px] xl:text-[15px] 2xl:text-[17px]" key={quality}>- {quality}</li>
                            ))}
                            <p className="lg:text-[12px] xl:text-[15px] 2xl:text-[17px] mt-5 mb-5">Supplier Color: {product.supplierColor}</p>
                            <p className="lg:text-[12px] xl:text-[15px] 2xl:text-[17px]">Material: {product.material}</p>
                            <p className="lg:text-[12px] xl:text-[15px] 2xl:text-[17px]">Made in: {product.origin}</p>
                            <p className="lg:text-[12px] xl:text-[15px] 2xl:text-[17px] mt-5 mb-[150px]">SKU: {product.sku}</p>
                        </div>
                    </div>
                    {/* Right Sticky Section */}
                    <div
                        className="
                        hidden
                        sm:hidden
                        md:hidden
                        lg:hidden
                        xl:block xl:order-3 xl:sticky xl:top-[40%] xl:self-start xl:w-[25vw] xl:max-h-[80vh] xl:mb-100 xl:overflow-auto
                        "
                    >
                        <div className="mb-50 product-options flex flex-col items-end">
                            <div className="items-start">
                                <p className="xl:text-[18px] xl:mb-5 xl:ml-4">${product.price} USD</p>
                                <div className="size-dropdown relative cursor-pointer">
                                    <select
                                        className="xl:ml-4 mb-2 flex items-start size-select cursor-pointer xl:py-[9px] xl:pr-[220px] pl-[10px] xl:text-[12px] 2xl:text-[12px] 2xl:py-[9px] 2xl:pr-[270px] bg-none border-[0.5px] border-gray-300 text-gray-900 font-['Neue']"
                                        value={selectedSize || ""}
                                        onChange={(e) => handleSizeSelect(e.target.value)}
                                    >
                                        <option className="font-['Neue'] xl:text-[12px]" value="" disabled>SELECT SIZE</option>
                                        {["S", "M", "L"].map((size) => (
                                            <option className="font-['Neue']" key={size} value={size}>
                                                {size}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <button
                                    className="ml-4 xl:text-[12px] add-to-cart-button bg-black text-white xl:px-[130px] xl:py-[6px] 2xl:px-[150px] 2xl:py-[10px] cursor-pointer hover:bg-gray-900 mb-[150px]"
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
                        product-images hidden
                        sm:hidden sm:order-1
                        md:hidden md:order-1
                        lg:hidden lg:order-2 lg:w-[35vw]
                        xl:block xl:order-2
                        2xl:block 2xl:order-2
                        "
                    >
                        {product.images.map((image) => (
                            <li className="product-image list-none" key={image}>
                                <img src={image} alt={product.name} className="product-image sm:w-[45vw]" />
                            </li>
                        ))}
                    </div>

                    {/* <ImageCarousel product={product} /> */}
                    <ImageSlider images={product.images} />

                    {/*For Mobile, Small, medium and large*/}
                    <div
                        className="flex flex-col order-2 w-screen px-[4vw] mt-[0px]
                        sm:flex sm:w-[45vw] sm:px-0 sm:pr-[4vw]
                        md:flex md:px-0 md:pr-[4vw]
                        lg:flex lg:px-0 lg:pr-[4vw]
                        xl:hidden
                        2xl:hidden"
                    >
                        <div className="flex flex-row justify-between">
                            <p className="text-[13px] mb-0 mt-0 sm:text-[12px] md:text-[14px]">{product.collection}</p>
                            <p className="text-[13px] mb-0 mt-0 sm:text-[12px] md:text-[14px] text-[#2b446e]">${product.price}</p>
                        </div>
                        <p className="text-[13px] mb-0 mt-0 sm:text-[12px] md:text-[14px]">{product.name}</p>
                        <div id="dropdownAndButton" className="mt-[12px]">
                            <div className="size-dropdown relative cursor-pointer">
                                <select
                                    className="bg-transparent flex items-start cursor-pointer w-[100%] pl-[5px] py-[8px] pr-[256px] border-[0.5px] border-gray-300 text-gray-900 font-['Neue'] text-[10px] sm:text-[9px] md:text-[11px]"
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
                                className="mt-[7px] py-[8px] w-[100%] add-to-cart-button bg-black text-white cursor-pointer hover:bg-gray-900 text-[10px] sm:text-[9px] md:text-[11px]"
                                onClick={() => handleAddToCart(product, selectedSize)}
                            >
                                ADD TO CART
                            </button>
                        </div>
                        <div className="product-details flex flex-col mt-[10px] mb-[20px]">
                            <p className="text-[12px] mb-0 mt-0 sm:text-[10px] md:text-[13px]">{product.collection}</p>
                            <p className="text-[12px] mb-2 mt-0 sm:text-[10px] md:text-[13px]">{product.name}</p>
                            <p className="text-[11px] sm:text-[10px] md:text-[12px] mb-0 mt-0">{product.description}</p>
                            {product.qualities.map((quality) => (
                                <li className="text-[11px] sm:text-[10px] md:text-[12px]" key={quality}>- {quality}</li>
                            ))}
                            <p className="text-[11px] sm:text-[10px] md:text-[12px] mb-0 mt-2">Supplier Color: {product.supplierColor}</p>
                            <p className="text-[11px] sm:text-[10px] md:text-[12px] mb-0 mt-0">Material: {product.material}</p>
                            <p className="text-[11px] sm:text-[10px] md:text-[12px] mb-0 mt-2">Made in: {product.origin}</p>
                            <p className="text-[11px] sm:text-[10px] md:text-[12px] mb-0 mt-2">SKU: {product.sku}</p>
                        </div>
                    </div>

                </div>

                {/* Recommended Products Section */}
                <div className="recommended-products">
                    <p className="
                        font-['Neue'] text-gray-900 text-[12px] px-[2vw]
                        2xl:text-[25px] 2xl:px-0
                        "
                    >
                        You may also like
                    </p>
                    <div
                        className="
                        products px-[2vw] py-5
                        2xl:px-0
                    ">
                        <ul
                            className="product-list grid grid-cols-2
                            sm:grid-cols-2 sm:gap-y-30
                            md:grid-cols-3 md:gap-y-30
                            lg:grid-cols-3 lg:gap-y-30
                            xl:grid-cols-3 xl:gap-y-30
                            2xl:grid-cols-4 2xl:gap-y-30
                            "
                        >
                            {shuffledHoodies.map((product) => (
                            <li key={product.id} className="product border border-transparent hover:border-black p-4 cursor-pointer font-['Neue']">
                                <Link to={`/product/${product.id}`}>
                                <div className="image-container w-full flex justify-center">
                                    <img src={product.images[0]} className="product-image h-auto w-[450px] object-contain" />
                                </div>
                                </Link>
                                <div className="flex flex-row justify-between">
                                <div className="flex flex-col pt-7 text-[11px] xl:text-[13px]">
                                    <p className="product-name">{product.collection}</p>
                                    <p className="product-name">{product.name}</p>
                                    <p className="product-price text-[#2b446e]">${product.price}</p>
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