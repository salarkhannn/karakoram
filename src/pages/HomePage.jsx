import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function HomePage() {
    return (
        <div className="home-page h-screen flex flex-col">
            <Navbar />
            <div className="title-container flex flex-col justify-center items-center flex-grow">
                <p className="title">conquer</p>
                <p className="title">new heights</p>
                <Link to="/latest" className="latest-link">shop latest collection</Link>
            </div>
        </div>
    );
}
