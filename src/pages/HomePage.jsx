import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import bgImg from "../assets/webCover.png";
import bgPNG from "../assets/bgPNG.png";
import bgPNG2 from "../assets/bgPNG2.png";

export default function HomePage() {
    return (
        <div className="home-page h-screen flex flex-col">
            <div 
                className="bg-img absolute inset-0 bg-cover bg-center bg-no-repeat -z-10"
                style={{ backgroundImage: `url(${bgPNG2})` }}
                // style={{ backgroundImage: `url(${bgImg})` }}
            ></div>
            <Navbar className="bg-transparent"/>
            <div className="title-container flex flex-col justify-center items-center flex-grow">
                <p className="title">Conquer<br/>New Heights</p>
                {/* <p className="title">CONQUER<br/>NEW HEIGHTS</p> */}
                <Link to="/shop" className="latest-link">shop latest collection</Link>
            </div>
        </div>
    );
}
