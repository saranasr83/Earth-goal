import React from "react";
import "./Hero.css";

const Hero = props => (
    <div className="hero text-center" style={{background:`url(${props.backgroundImage})`}}>
        {props.children}
    </div>
    // <img className="hero text-center" src={props.backgroundImage} />

)

export default Hero;

