import React, {
    useRef,
    useState,
    useEffect,
    MouseEventHandler,
    VideoHTMLAttributes,
} from "react";

import{sliderItems}  from "../../data/data";
import Carousel from "react-bootstrap/Carousel";
import "./slider.css";
function Silder() {
    return (
           <div className="slider">
              <Carousel variant="dark">
               {sliderItems.map((item) =>(
                <Carousel.Item interval={1000}>
                <img
                  className="d-block w-100"
                  src={item.img}
                  alt={item.img}
                />
                <Carousel.Caption>
                  <h3 style={{fontWeight:"bold",color:"white"}}>{item.title}</h3>
                  <p  style={{fontWeight:"500",color:"white"}}>{item.desc}</p>
                </Carousel.Caption>
              </Carousel.Item>


               ))}
               
            </Carousel>
           </div>
        
    );
}

export default Silder;