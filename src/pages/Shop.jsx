import Navbar from "../components/Navbar";
import top from "../productData/hoodies";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../components/CartContext";
import { useSearch } from "../components/SearchContext";

export default function Shop(){
    const { addToCart } = useContext(CartContext);
    const { searchQuery } = useSearch();
    const [itemsToShow, setItemsToShow] = useState(top);

    // const showResults = ( search ) => {
    //     console.log("Search passed: ", search);
    //     console.log("Datatype of search passed in shop: ", typeof(search))
    //     const newItems = [];
    //     itemsToShow.map((item) => {
    //         console.log("Search matched: ", item.name.includes(search))
    //         if (item.name.includes(search)){
    //             newItems.push(item);
    //         }
    //     })
    //     setItemsToShow(newItems);
    //     console.log("Items to show: ", itemsToShow);
    // }

    useEffect(() => {
        if (searchQuery) {
            const filteredItems = top.filter((item) =>
                item.name.toLowerCase().includes(searchQuery.toLowerCase())
            );
            setItemsToShow(filteredItems);
        } else {
            setItemsToShow(top);
        }
    }, [searchQuery]);

    return (
        <>
            <Navbar/>
            <div className="product-page pr-10 pl-10">
                <div className="products px-10 py-5">
                    <ul className="product-list grid grid-cols-3 gap-0">
                        {itemsToShow.map((product) => (
                            <li key={product.id} className="product border border-transparent hover:border-black p-4">
                                <Link to={`/product/${product.id}`}>
                                    <div className="image-container w-full flex justify-center">
                                        <img src={product.image} className="product-image h-48 w-48 object-contain"/>
                                    </div>
                                </Link>
                                <div className="flex flex-row justify-between">
                                    <div className="flex flex-col justify-between pt-7">
                                        <p className="product-name">{product.name}</p>
                                        <p className="product-price">${product.price}</p>
                                    </div>
                                    <button
                                        type="button"
                                        name="add to cart" 
                                        className="cart-button pt-7 mt-7"
                                        onClick={() => addToCart(product)}
                                    >
                                        add to cart
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <Footer />
            </div>
        </>
    )
}
