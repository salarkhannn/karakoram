import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="w-full py-4 px-[25px] font-['Neue'] text-[9px] sm:text-[11px] md:text-[13px] lg:text-[15px] xl:text-[15px] 2xl:text-[15px] bg-[#fff8f7]">
            <div className="flex justify-center">
                <div className="space-x-6">
                    <a className="footer-link hover:underline px-[25px]" href="https://www.instagram.com/salaaar____/" target="_blank" rel="noopener noreferrer">INSTAGRAM</a>
                    <a className="footer-link px-[25px] hover:underline" href="https://github.com/salarkhannn/" target="_blank" rel="noopener noreferrer">GITHUB</a>
                    <Link className="footer-link px-[25px] hover:underline" to="/help">HELP</Link>
                    <Link className="footer-link px-[25px] hover:underline" to="/about">ABOUT</Link>
                </div>
            </div>
        </footer>
    );
}