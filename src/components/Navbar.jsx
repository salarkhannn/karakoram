import logo from '../assets/logo.png'
import { Link } from "react-router-dom";

export default function Navbar(){
    return (
        <nav className="flex flex-row justify-between p-7">
            <ul className="left-nav flex flex-row">
                <li className="nav-item"><Link to="/help">Help</Link></li>
                <li className="nav-item"><Link to="/cart">Cart</Link></li>
            </ul>
            <div className="logo-container">
                <Link to="/">
                    <img className="logo" src={logo} />
                </Link>
            </div>
            <ul className="right-nav flex flex-row">
                <li className="nav-item"><Link to="/man">Men</Link></li>
                <li className="nav-item"><Link to="/woman">Women</Link></li>
                <li className="nav-item"><Link to="/search">Search</Link></li>
            </ul>
        </nav>
    )
}