import React from "react";
import "./footer.css"


const Footer = () => (
    <footer className="footer">
        <h3>Follow Us:</h3>
        <div>
            <div className="logo"><a href="#" style={{color:"#654321"}}><i class="fab fa-facebook-square fa-2x"></i></a></div>
            <div className="logo"><a href="#" style={{color:"#654321"}}><i class="fab fa-instagram fa-2x"></i></a></div>
        </div>
    <span>© 2019 The Earth goal Company. All rights reserved.</span>
    </footer>
)
export default Footer;