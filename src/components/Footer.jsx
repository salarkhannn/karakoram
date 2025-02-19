import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="mt-auto w-full py-4 mb-10">
            <div className="flex justify-center">
                <div className="space-x-6">
                    <a 
                        className="footer-link" 
                        href="https://www.instagram.com/salaaar____/" 
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        instagram
                    </a>
                    <a 
                        className="footer-link" 
                        href="https://github.com/salarkhannn/" 
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        github
                    </a>
                    <Link className="footer-link" to="/help">
                        help
                    </Link>
                </div>
            </div>
        </footer>
    );
}