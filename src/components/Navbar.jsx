import { useEffect, useRef, useState } from 'react';
import logo from '../assets/logo.png';
import { Link } from "react-router-dom";
import { useSearch } from './SearchContext';
import hamburgerMenu from '../assets/hamburgerMenuIcon.svg';

export default function Navbar() {
    const { showResults } = useSearch();
    const [search, setSearch] = useState(false);
    const searchRef = useRef(null);
    const searchButtonRef = useRef(null);

    const [sidebar, setSidebar] = useState(false);
    const hamburgerButtonRef = useRef(null);
    const sidebarRef = useRef(null);

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
    

    const toggleSidebarVisibility = (event) => {
        event.stopPropagation(); // Prevent event from bubbling to document click
        setSidebar((prev) => !prev);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                sidebarRef.current && !sidebarRef.current.contains(event.target) &&
                hamburgerButtonRef.current && !hamburgerButtonRef.current.contains(event.target)
            ) {
                setSidebar(false);
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

    const isHomePage = location.pathname === "/";

    return (
        <div className={isHomePage ? "home-nav-container sticky top-0 bg-none z-50" : "nav-container sticky top-0 bg-[#FFFAFA] z-50"}>
            <nav className="grid grid-cols-2 items-center pt-7 px-[2vw] pb-7 sticky top-0 z-[100] w-screen font-['Neue'] font-normal 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-3">
                {/* Left Navigation */}
                <ul className="left-nav hidden flex-row space-x-6 justify-start left-0 2xl:flex xl:flex lg:flex md:flex sm:flex">
                    <li className="nav-item xl:pr-[50px] lg:pr-[30px] md:pr-[20px] sm:pr-[10px] hover:underline"><Link to="/help">Help</Link></li>
                    <li className="nav-item xl:pr-[50px] lg:pr-[30px] md:pr-[20px] sm:pr-[10px] hover:underline"><Link to="/about">About</Link></li>
                </ul>

                {/* Centered Logo */}
                <div className="logo-container flex justify-center">
                    <Link to="/">
                        <img className="logo flex-grow w-[172px] h-auto" src={logo} alt="Karakoram Logo" />
                    </Link>
                </div>

                {/* Right Navigation */}
                <ul className="right-nav hidden flex-row space-x-6 justify-end 2xl:flex xl:flex lg:flex md:flex sm:flex">
                    <li className="nav-item xl:pr-[50px] lg:pr-[30px] md:pr-[20px] sm:pr-[10px] hover:underline"><Link to="/shop">Shop</Link></li>
                    <li className="nav-item xl:pr-[50px] lg:pr-[30px] md:pr-[20px] sm:pr-[10px] hover:underline"><Link to="/cart">Cart</Link></li>
                    <li ref={searchButtonRef} className="nav-item cursor-pointer" id='searchButton' onClick={toggleVisibility}>Search</li>
                    {/* <li className="nav-item cursor-pointer">Search</li> */}
                </ul>

                <div className="block w-[30px] h-[30px] ml-auto mr-[30px] 2xl:hidden xl:hidden lg:hidden md:hidden sm:hidden">
                    <img
                        ref={hamburgerButtonRef}
                        className="w-[30px] h-auto cursor-pointer"
                        id="hamburger"
                        onClick={toggleSidebarVisibility}
                        src={hamburgerMenu}
                        alt="Menu"
                    />
                </div>

                {/* Sidebar (Hidden by Default) */}
                {sidebar && (
                    <>
                        <div
                            ref={sidebarRef}
                            className={`z-10 font-['Neue'] fixed top-0 right-0 h-screen w-[50vw] bg-[#FFFAFA] shadow-lg transform transition-transform duration-300 ${
                                sidebar ? "translate-x-0" : "translate-x-full"
                            }`}
                        >
                            <ul className="font-['Neue'] flex flex-col text-right pr-[30px] pt-7 space-y-4">
                                <li className="nav-item text-[25px]"><Link to="/help">Help</Link></li>
                                <li className="nav-item text-[25px]"><Link to="/about">About</Link></li>
                                <li className="nav-item text-[25px]"><Link to="/shop">Shop</Link></li>
                                <li className="nav-item text-[25px]"><Link to="/cart">Cart</Link></li>
                                <li className="nav-item text-[25px]" onClick={toggleSidebarVisibility}>Search</li>
                            </ul>
                        </div>
                        <div className='overlay absolute right-0 top-0 w-screen h-screen bg-black'></div>
                    </>
                )}
            </nav>

            {/* Search Bar Overlay */}
            {search && (
                <div ref={searchRef} className="search-container absolute top-full left-0 w-full bg-[#FFFAFA] shadow-lg p-4 border-t z-50">
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
