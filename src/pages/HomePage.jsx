import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import bgPNG3 from "../assets/bgPNG3.png";

export default function HomePage() {
    return (
        <div className="home-page h-screen flex flex-col text-[#0D141C]">
            <div 
                className="bg-img absolute inset-0 bg-cover bg-center bg-no-repeat -z-10 bg-[#fff8f7]"
                style={{ backgroundImage: `url(${bgPNG3})` }}
            ></div>
            <Navbar className=""/>
            <div className="title-container flex flex-col flex-grow justify-center items-center mt-[-172px]">
                <p className="title font-['Neue'] font-medium text-center text-[#fff8f7] text-[80px] tracking-[-5px] leading-[80px] sm:text-[100px] sm:tracking-[-7px] sm:leading-[100px] md:tracking-[-7px] md:leading-[100px] md:text-[100px] lg:tracking-[-8px] lg:leading-[120px] lg:text-[120px] xl:text-[130px] xl:tracking-[-9px] xl:leading-[130px] 2xl:text-[130px] 2xl:tracking-[-9px] 2xl:leading-[130px]">Conquer<br/>New Heights</p>
                <Link to="/shop" className="latest-link text-[20px] mt-[7px] text-[#fff8f7] font-['Neue'] font-normal hover:underline tracking-[-1px]">Shop</Link>
            </div>
        </div>
    );
}
