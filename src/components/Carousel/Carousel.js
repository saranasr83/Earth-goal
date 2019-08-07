import React from "react";
import './Carousel.css';
import { Carousel } from 'react-bootstrap';


const SlideShow = props => (
    <div className={props.className}>
        <Carousel className="frame">
            <Carousel.Item>
                <img className='imgFormat' alt="900x500" src={props.imageOne} />
                <Carousel.Caption>
                    <h2>First slide label</h2>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className='imgFormat' alt="900x500" src={props.imageTwo} />
                <Carousel.Caption>
                    <h2>Second slide label</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className='imgFormat' alt="900x500" src={props.imageThree} />
                <Carousel.Caption>
                    <h2>Third slide label</h2>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </div>
)

export default SlideShow;