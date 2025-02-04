import logo from '../assets/logo.png';
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="flex items-center justify-between p-7 relative">
            {/* Left Navigation */}
            <ul className="left-nav flex flex-row space-x-6">
                <li className="nav-item"><Link to="/help">Help</Link></li>
                <li className="nav-item"><Link to="/cart">Cart</Link></li>
            </ul>

            {/* Centered Logo */}
            <div className="logo-container absolute left-1/2 transform -translate-x-1/2">
                <Link to="/">
                    <img className="logo w-32" src={logo} alt="Karakoram Logo" />
                </Link>
            </div>

            {/* Right Navigation */}
            <ul className="right-nav flex flex-row space-x-6">
                <li className="nav-item"><Link to="/man">Men</Link></li>
                <li className="nav-item"><Link to="/woman">Women</Link></li>
                <li className="nav-item"><Link to="/search">Search</Link></li>
            </ul>
        </nav>
    );
}
