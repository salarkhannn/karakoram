import { Link } from "react-router-dom";

export default function Footer(){
    return (
        <>
            <div className="footer-container mb-10 flex justify-center">
                <div className="link-list">
                    <a className="footer-link" href="https://www.instagram.com/salaaar____/" target="_blank">instagram</a>
                    <a className="footer-link" href="https://github.com/salarkhannn/" target="_blank">github</a>
                    <Link className="footer-link" to="/help">help</Link>
                </div>
            </div>  
        </>
    )
}