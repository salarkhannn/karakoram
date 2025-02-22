import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="mt-auto w-full py-4 mb-10">
            <div className="flex justify-center">
                <div className="space-x-6">
                    <a 
                        className="footer-link bg-[#fff8f7] pr-[50px]" 
                        href="https://www.instagram.com/salaaar____/" 
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        instagram
                    </a>
                    <a 
                        className="footer-link bg-[#fff8f7] pr-[50px]" 
                        href="https://github.com/salarkhannn/" 
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        github
                    </a>
                    <Link className="footer-link bg-[#fff8f7] pr-[50px]" to="/help">
                        help
                    </Link>
                </div>
            </div>
        </footer>
    );
}