import React from "react";
import "./Navbar.css";
// import Row from "../Row";
// import Col from "../Col"

const Navbar = () => (
    <nav>

        <ul>
            <li className={
                window.location.pathname === "/#about"
                    ? "nav-item active"
                    : "nav-item"}>
                <a className="nav-link" href="/#about">
                    About us
                </a>
            </li>
            <li className={
                window.location.pathname === "/#how-to"
                    ? "nav-item active"
                    : "nav-item"}>
                <a className="nav-link" href="/#how-to">
                    How it works
                </a>
            </li>
            {/* <li className={
                window.location.pathname === "/#subscribe"
                    ? "nav-item active"
                    : "nav-item"}>
                <a className="nav-link" href="/#subscribe">
                    Subscribe
                </a>
            </li> */}
        </ul>
    </nav>

)


export default Navbar;