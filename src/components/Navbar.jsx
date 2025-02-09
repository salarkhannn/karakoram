import { useEffect, useRef, useState } from 'react';
import logo from '../assets/logo.png';
import { Link } from "react-router-dom";
import { useSearch } from './SearchContext';

export default function Navbar() {
    const { showResults } = useSearch();
    const [search, setSearch] = useState(false);
    const searchRef = useRef(null);
    const searchButtonRef = useRef(null);
    const [searchInput, setSearchInput] = useState("");

    const toggleVisibility = (event) => {
        event.stopPropagation();
        setSearch(!search);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                searchRef.current &&
                !searchRef.current.contains(event.target) &&
                searchButtonRef.current &&
                !searchButtonRef.current.contains(event.target)
            ) {
                setSearch(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleChange = (event) => {
        setSearchInput(event.target.value);
        showResults(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Searched for:", searchInput);
    }

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
                    <li ref={searchButtonRef} className="nav-item cursor-pointer" id='searchButton' onClick={toggleVisibility}>Search</li>
                    {/* <li className="nav-item cursor-pointer">Search</li> */}
                </ul>
            </nav>

            {/* Search Bar Overlay */}
            {search && (
                <div ref={searchRef} className="search-container absolute top-full left-0 w-full bg-white shadow-lg p-4 border-t z-50">
                    <form className='search-form flex items-center space-x-2' onSubmit={handleSubmit}>
                        <input onChange={handleChange} value={searchInput} type='text' name='search' placeholder='Search' className="border p-2 flex-1" />
                        <button className='search-button bg-black text-white px-4 py-2'>
                            <Link to='/shop'>Search</Link>
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
}
