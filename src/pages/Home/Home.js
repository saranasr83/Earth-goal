import React, {Component} from "react";
import "./Home.css";
import kitchen from "../../images/kitchen.jpg";
import macaron from "../../images/macaron.jpg";
import spices from "../../images/spices.jpg";
import bath from "../../images/bath.jpg";
import boxedwater from "../../images/boxedwater.jpg";
import cosmetic from "../../images/cosmetic.jpg"
import SlideShow from "../../components/Carousel";
import Container from "../../components/Container";

class Home extends Component {
    render(){
        return (
            <div>
                <div>   
                <SlideShow style={{backgroundAttachment:"fixed"}}
                
                    imageOne={kitchen}
                    imageTwo={boxedwater}
                    imageThree={cosmetic}
                    imageFour={macaron}
                    imageFive={spices}
                    imageSix={bath}
                />
                </div>
                <div id="about"></div>
                {/* <Container style={{ marginTop: 30 }}> */}
                    
                <h1 className="section" style={{marginTop:45}}>About us</h1>
                <p style={{fontSize:"25px", padding:"20px"}}>
                We figured people use a lot of products, which could be harmful to the environment in so many ways. The main reasons for that could be either a) lack of knowledge about what they are using and the potential negative impact that could have on our earth.  Or b) lack of availability and variety of clean, sustainable, and eco friendly products. So, we’ve decided to make the usage of environmental friendly products easier by providing eco-friendly items in a form of subscription boxes that can be delivered to them every season. People can choose their items from the different categories based on their needs, interests, and budget. 
                </p>
                {/* </Container> */}
                <div className="parallax"></div>
                <div id="how-to"></div>
                {/* <Container style={{ marginTop: 60 }}> */}
                <h1 className="section"style={{marginTop:0}}>How it works?</h1>
                <p style={{fontSize:"25px", padding:"20px"}}>
                It is just 3 simple steps. 1- you choose your category, 2- select your budget , 3- place the order
                <br/> then enjoy your clean environmental friendly products.
                </p>
                <div style={{fontSize:"40px", marginTop:"20px"}}>
                    <span>step 1  </span>
                    <span>step 2  </span>
                    <span>step 3  </span>

                </div>
                {/* </Container> */}
            </div>
        )
    }
}

export default Home;