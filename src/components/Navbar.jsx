import { useEffect, useRef, useState } from 'react';
import logo from '../assets/logo.png';
import logoWhite from '../assets/logoWhite.png';
import { Link } from "react-router-dom";
import { useSearch } from './SearchContext';
import hamburgerMenu from '../assets/hamburgerMenuIcon.svg';
import hamburgerMenuWhite from '../assets/hamburgerMenuIconWhite.svg';
import searchIcon from '../assets/searchIcon.svg';
import searchIconWhite from '../assets/searchIconWhite.svg';

export default function Navbar() {
    const { showResults } = useSearch();
    const [search, setSearch] = useState(false);
    const searchRef = useRef(null);
    const searchButtonRef = useRef(null);
    
    const [sidebar, setSidebar] = useState(false);
    const hamburgerButtonRef = useRef(null);
    const sidebarRef = useRef(null);
    
    const [searchInput, setSearchInput] = useState("");
    
    const isHomePage = location.pathname === "/";
    // const [isHomePage, setIsHomePage] = useState(location.pathname === "/");
    const [navbarWhite, setNavbarWhite] = useState(isHomePage && search);


    
    useEffect(() => {
        if (isHomePage) setNavbarWhite(isHomePage && search);
        else setNavbarWhite(true);
    }, [isHomePage, search]);    
    
    const toggleVisibility = (event) => {
        event.stopPropagation();
        console.log("Search Button Clicked");        
        setSearch(!search);
        // setIsHomePage(navbarWhite);
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
                // console.log("searchRef.current: ", searchRef.current);
                // console.log("searchRef.current.contains: ", searchRef.current.contains);
                // console.log("searchButtonRef.current: ", searchButtonRef.current);
                
                console.log("Outside Clicked")
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
                // console.log("Outside Clicked");
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
        <div className={!navbarWhite ? "home-nav-container sticky top-0 bg-none z-50" : "nav-container sticky top-0 bg-[#fff8f7] z-50"}>
            {}
            <nav className={!navbarWhite ? "text-[#fff8f7] grid grid-cols-3 items-center pt-7 px-[4vw] pb-7 sticky top-0 z-[100] w-[100vw] font-['Neue'] font-normal 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-3 sm:pt-9 md:pt-10 lg:pt-12 xl:pt-12 2xl:pt-12" :
                "text-black grid grid-cols-3 items-center pt-7 px-[4vw] pb-7 sticky top-0 z-[100] w-[100vw] font-['Neue'] font-normal 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-3 sm:pt-9 md:pt-10 lg:pt-12 xl:pt-12 2xl:pt-12"}
                >
                {/* Left Navigation */}
                <ul className="left-nav hidden flex-row space-x-6 justify-start left-0 2xl:flex xl:flex lg:flex md:flex sm:flex sm:text-[15px] md:text-[16px] lg:text-[16px] xl:text-[17px] 2xl:text-[19px]">
                    <li className="nav-item xl:pr-[50px] lg:pr-[30px] md:pr-[20px] sm:pr-[10px] hover:underline"><Link to="/help">Help</Link></li>
                    <li className="nav-item xl:pr-[50px] lg:pr-[30px] md:pr-[20px] sm:pr-[10px] hover:underline"><Link to="/about">About</Link></li>
                </ul>

                <div className="left-nav block w-[30px] h-[30px] 2xl:hidden xl:hidden lg:hidden md:hidden sm:hidden">
                    <img
                        ref={hamburgerButtonRef}
                        className="w-[25px] h-auto cursor-pointer"
                        id="hamburger"
                        onClick={toggleSidebarVisibility}
                        src={navbarWhite ? hamburgerMenu : hamburgerMenuWhite}
                        alt="Menu"
                    />
                </div>

                {/* Centered Logo */}
                <div className="logo-container flex justify-center  2xl:justify-center xl:justify-center lg:justify-center md:justify-center sm:justify-center">
                    <Link to="/">
                        <img className="logo flex-grow h-auto w-[140px] sm:w-[150px] md:w-[170px] lg:w-[200px] xl:w-[210px] 2xl:w-[200px]" src={navbarWhite ? logo : logoWhite} alt="Karakoram Logo" />
                    </Link>
                </div>

                {/* Right Navigation */}
                <ul className="right-nav hidden flex-row space-x-6 justify-end 2xl:flex xl:flex lg:flex md:flex sm:flex sm:text-[15px] md:text-[16px] lg:text-[16px] xl:text-[17px] 2xl:text-[19px]">
                    <li className="nav-item xl:pr-[50px] lg:pr-[30px] md:pr-[20px] sm:pr-[10px] hover:underline"><Link to="/shop">Shop</Link></li>
                    <li className="nav-item xl:pr-[50px] lg:pr-[30px] md:pr-[20px] sm:pr-[10px] hover:underline"><Link to="/cart">Cart</Link></li>
                    <li ref={searchButtonRef} className="nav-item cursor-pointer hover:underline" id='searchButton' onClick={toggleVisibility}>Search</li>
                    {/* <li className="nav-item cursor-pointer">Search</li> */}
                </ul>

                <div className="right-nav block justify-end ml-auto w-[30px] h-[30px] 2xl:hidden xl:hidden lg:hidden md:hidden sm:hidden">
                    <img
                        ref={searchButtonRef}
                        className="w-[25px] h-auto cursor-pointer"
                        id="searchButton"
                        onClick={toggleVisibility}
                        src={navbarWhite ? searchIcon : searchIconWhite}
                        alt="Search Icon"
                    />
                </div>

                {/* Sidebar (Hidden by Default) */}
                {sidebar && (
                    <>
                        <div
                            ref={sidebarRef}
                            className={`text-black z-10 font-['Neue'] font-medium fixed top-0 left-0 h-screen w-[50vw] bg-[#FFFAFA] shadow-lg transform transition-transform duration-300 ${
                                sidebar ? "translate-x-0" : "translate-x-full"
                            }`}
                        >
                            <ul className="font-['Neue'] font-medium flex flex-col text-left pt-10 pl-10 space-y-4">
                                <li className="nav-item text-[25px] cursor-pointer"><Link to="/">Home</Link></li>
                                <li className="nav-item text-[25px] cursor-pointer"><Link to="/shop">Shop</Link></li>
                                <li className="nav-item text-[25px] cursor-pointer"><Link to="/cart">Cart</Link></li>
                                <li className="nav-item text-[25px] cursor-pointer"><Link to="/help">Help</Link></li>
                                <li className="nav-item text-[25px] cursor-pointer"><Link to="/about">About</Link></li>
                            </ul>
                        </div>
                        <div className='overlay absolute right-0 top-0 w-screen h-screen bg-black'></div>
                    </>
                )}
            </nav>

            {/* Search Bar Overlay */}
            {search && (
                <div ref={searchRef} className="search-container absolute top-full left-0 w-full bg-[#FFFAFA] shadow-lg border-t z-50">
                    <form className='search-form flex flex-row items-center w-full px-[4vw] py-4' onSubmit={handleSubmit}>
                        <input 
                            onChange={handleChange} 
                            value={searchInput} 
                            type='text' 
                            name='search' 
                            placeholder='Search' 
                            className="border py-3 px-3 flex-1 mr-[1vw]" 
                        />
                        <Link to='/shop' className='ml-auto'>
                            <button className='search-button bg-black text-white px-11 py-3'>
                                Search
                            </button>
                        </Link>
                    </form>
                </div>
            )}
        </div>
    );
}
