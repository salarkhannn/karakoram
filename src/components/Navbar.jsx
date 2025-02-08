import { useEffect, useRef, useState } from 'react';
import logo from '../assets/logo.png';
import { Link } from "react-router-dom";

export default function Navbar() {
    const [search, setSearch] = useState(false);
    const searchRef = useRef(null);

    const toggleVisibility = () => {
        setSearch(prev => !prev);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (searchRef.current && !searchRef.current.contains(event.target)) {
                setSearch(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className='nav-container relative'>
            <nav className="grid grid-cols-3 items-center p-7">
                {/* Left Navigation */}
                <ul className="left-nav flex flex-row space-x-6 justify-start">
                    <li className="nav-item"><Link to="/help">Help</Link></li>
                    <li className="nav-item"><Link to="/about">About</Link></li>
                </ul>

                {/* Centered Logo */}
                <div className="logo-container flex justify-center">
                    <Link to="/">
                        <img className="logo w-32" src={logo} alt="Karakoram Logo" />
                    </Link>
                </div>

                {/* Right Navigation */}
                <ul className="right-nav flex flex-row space-x-6 justify-end">
                    <li className="nav-item"><Link to="/shop">Shop</Link></li>
                    <li className="nav-item"><Link to="/cart">Cart</Link></li>
                    <li className="nav-item cursor-pointer" onClick={toggleVisibility}>Search</li>
                </ul>
            </nav>

            {/* Search Bar Overlay */}
            {search && (
                <div ref={searchRef} className="absolute top-full left-0 w-full bg-white shadow-lg p-4 border-t z-50">
                    <form className='search-form flex items-center space-x-2'>
                        <input type='text' name='search' placeholder='Search' className="border p-2 flex-1" />
                        <button className='search-button bg-black text-white px-4 py-2'>Search</button>
                    </form>
                </div>
            )}
        </div>
    );
}
