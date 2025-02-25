import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import bgImg from "../assets/webCover.png";
import bgPNG from "../assets/bgPNG.png";
import bgPNG2 from "../assets/bgPNG2.png";
import bgPNG3 from "../assets/bgPNG3.png";

export default function HomePage() {
    return (
        <div className="home-page h-screen flex flex-col text-[#0D141C]">
            <div 
                className="bg-img absolute inset-0 bg-cover bg-center bg-no-repeat -z-10 bg-[#fff8f7]"
                style={{ backgroundImage: `url(${bgPNG3})` }}
                // style={{ backgroundImage: `url(${bgImg})` }}
            ></div>
            <Navbar className=""/>
            <div className="title-container flex flex-col flex-grow justify-center items-center mt-[-172px]">
                <p className="title font-['Neue'] font-medium text-center text-[#fff8f7] text-[80px] tracking-[-5px] leading-[80px] xl:text-[200px] xl:tracking-[-12px] xl:leading-[200px] lg:tracking-[-10px] lg:leading-[150px] lg:text-[150px] md:tracking-[-8px] md:leading-[130px] md:text-[130px] sm:text-[100px] sm:tracking-[-7px] sm:leading-[100px]">Conquer<br/>New Heights</p>
                <Link to="/shop" className="latest-link text-[20px] mt-[20px] text-[#fff8f7] font-['Neue'] font-normal hover:underline tracking-wider">SHOP</Link>
            </div>
        </div>
    );
}
