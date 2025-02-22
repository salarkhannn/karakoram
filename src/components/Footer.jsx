import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="mt-10 w-full py-4 mb-10 font-['Neue'] text-[13px]">
            <div className="flex justify-center">
                <div className="space-x-6">
                    <a 
                        className="footer-link bg-[#fff8f7] pr-[50px] hover:underline" 
                        href="https://www.instagram.com/salaaar____/" 
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        INSTAGRAM
                    </a>
                    <a 
                        className="footer-link bg-[#fff8f7] pr-[50px] hover:underline" 
                        href="https://github.com/salarkhannn/" 
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        GITHUB
                    </a>
                    <Link className="footer-link bg-[#fff8f7] pr-[50px] hover:underline" to="/help">
                        HELP
                    </Link>
                    <Link className="footer-link bg-[#fff8f7] pr-[50px] hover:underline" to="/about">
                        ABOUT
                    </Link>
                </div>
            </div>
        </footer>
    );
}