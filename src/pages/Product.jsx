import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import top from "../productData/hoodies";
import SizeDropdown from "../components/SizeDropdown";

export default function Product () {
    const { id } = useParams(); // get products from the URL

    // Find product with the matching id
    const product = top.find(item => item.id === id);

    if (!product) {
        return <h1>Product not found</h1>;
    }

    return (
        <>
            <Navbar />
            <div className="product flex flex-row">
                <div className="product-details">
                    <h1>{product.name}</h1>
                    <p>{product.description}</p>
                </div>

                <img src={product.image} alt={product.name} className="product-image"/>
                
                <div className="product-options">
                    {/* <select className="size-dropdown">
                        <option value="S">Small</option>
                        <option value="M">Medium</option>
                        <option value="L">Large</option>
                    </select> */}
                    {/* <SizeDropdown /> */}
                    <p>{product.price}</p>
                </div>
            </div>
        </>
    )
}