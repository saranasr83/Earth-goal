import React from "react";
import "./Navbar.css";

const Navbar = () => (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">
            Earth Goal
        </a>
        <ul className="navbar-nav">
            <li className={
                    window.location.pathname === "/"
                        ? "nav-item active"
                        : "nav-item"}>
                <a className="nav-item" href="/#about">
                About us
                </a>
            </li>
            <li className={
                    window.location.pathname === "/"
                        ? "nav-item active"
                        : "nav-item"}>
                <a className="nav-item" href="/#how-to">
                How it works
                </a>
            </li>
            <li className={
                    window.location.pathname === "/"
                        ? "nav-item active"
                        : "nav-item"}>
                <a className="nav-item" href="/#subscribe">
                Subscribe
                </a>
            </li>

        </ul>

    </nav>
)


export default Navbar;