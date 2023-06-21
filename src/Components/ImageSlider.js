import React, { useState } from "react";
import { SliderData } from "./SliderData";
import "./ImageSlider.css";
// import BtnSlider from './BtnSlider';
import {FaArrowAltCircleRight,FaArrowAltCircleLeft} from 'react-icons/fa'

export default function ImageSlider({slides}) {
  const [current, setCurrent]= useState(0);
  const length=slides.length;

  const nextSlide=()=>{
    setCurrent(current === length-1 ? 0 : current+1);
  };
  const prevSlide=()=>{
    setCurrent(current === 0 ? length-1 : current-1);
  };

  if(!Array.isArray(slides || length<=0)){
    return null;
  }

  return (
    <>
      <div className="container-slider">
        {SliderData.map((obj, index) => {
          return (
            <div key={obj.id} className={index===current ? "slide active" : "slide"}>

              {/* {index===current && (<img src={process.env.PUBLIC_URL + `/Images/image${index + 1}.jpg`}
                alt="pehli"  className="image"/>)} */}
              <img src={process.env.PUBLIC_URL + `/Images/image${index + 1}.jpg`}
                alt="pehli" className="image" />
            </div>
          );
        })}
        <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
        <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
      </div>
    </>
  );
}
