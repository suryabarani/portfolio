import './Nav.css'
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
    { path: "/", label: "Home", id: "home" },
    { path: "/about", label: "About", id: "about" },
    { path: "/skill", label: "Skills", id: "skill" },
    { path: "/project", label: "Project", id: "project" },
    { path: "/achievement", label: "Achievement", id: "achievement" },
    { path: "/contact", label: "Contact", id: "contact" },
];

const Nav = () => {
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen((prev) => !prev);
    const handleLinkClick = () => setIsOpen(false);

    return (
        <nav className="navbar navbar-expand-lg sticky-top navbar-light nav" role="navigation">
            <div className="container">
                <button
                    className="navbar-toggler"
                    type="button"
                    onClick={toggleMenu}
                    aria-controls="navbarSupportedContent"
                    aria-expanded={isOpen}
                    aria-label="Toggle navigation"
                >
                    <span>
                        <i className="fa fa-bars" aria-hidden="true"></i>
                    </span>
                </button>

                <div
                    className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav m-auto gap-4">
                        {navLinks.map((link) => (
                            <li
                                className={`nav-item ${location.pathname === link.path ? "active" : ""}`}
                                key={link.id}
                            >
                                <Link className="nav-link" to={link.path} onClick={handleLinkClick}>
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Nav;