import { useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";

export default function ImageCarousel({ product }) {
    // Import Bootstrap dynamically only once when the component mounts
    useEffect(() => {
        // import("bootstrap/dist/css/bootstrap.min.css");
    }, []);

    return (
        <Carousel className="mb-[10px] block sm:hidden" data-bs-theme="dark" slide={true}>
            {product.images.map((image, index) => (
                <Carousel.Item key={index}>
                    <div
                        className="carousel-image-container"
                        style={{
                            height: "400px",
                            width: "100%",
                            overflow: "hidden",
                        }}
                    >
                        <img
                            className="w-100"
                            src={image}
                            alt={product.name}
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "contain",
                            }}
                        />
                    </div>
                </Carousel.Item>
            ))}
        </Carousel>
    );
}
