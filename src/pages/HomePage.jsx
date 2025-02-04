// dark: #0D141C
// orange: #D64C31
// blue: #8fb5ca
// Green: #486B4A
// White: #FFFAFA

import logo from "../assets/logo.png"
import { BrowserRouter as Router, Routes, Route, Link, createBrowserRouter } from "react-router-dom";
import Help from "./Help";
import Navbar from "../components/Navbar";


  

export default function HomePage() {
    return (
        <div className="home-page">
            {/* <Router> */}
                <Navbar />
                <div className="title-container flex  flex-col justify-center items-center">
                    <p className="title">
                        conquer
                    </p>
                    <p className="title">
                        new heights
                    </p>
                    <Link to="/latest" className="latest-link">shop latest collection</Link>
                </div>
            {/* </Router> */}
        </div>
    )
}