import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { links, social } from "../data";
import logo from "../assets/codingaddict_logo.png";

const Navbar = () => {
    const [showLinks, setShowLinks] = useState(false);

    const toggleLinks = () => {
        setShowLinks(!showLinks);
    };

    return (
        <nav className="bg-white shadow-md">
            <div className="nav-center">
                <div className="nav-header">
                    <img src={logo} alt="logo" className="w-[220px] h-auto" />
                    <button className="nav-toggle" onClick={toggleLinks}>
                        <FaBars />
                    </button>
                </div>
                {showLinks && (
                    <div className="links-container">
                    <ul className="links">
                        {links.map((link) => {
                            const {id, url, text} = link;
                            return (
                                <li key={id}>
                                    <a href={url}>{text}</a>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                )}
                
            </div>
        </nav>
    )
}

export default Navbar;