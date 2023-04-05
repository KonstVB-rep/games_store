import React, {useEffect, useState} from "react";
import {animateScroll as scroll} from "react-scroll";
import cn from "./ArrowTop.module.scss";

const ArrowTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleVisibleArrow = () => {
    const position = document.documentElement.scrollTop;
    if (position > 1000) {
      setIsVisible(true);
    } else setIsVisible(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleVisibleArrow);
    return () => window.removeEventListener("scroll", handleVisibleArrow);
  });

  return (
    <>
      {isVisible && (
        <button
          className = {cn["arrow-box"]}
          onClick = {() => scroll.scrollToTop()}
        >
          <div className = {cn.image}>
            <svg enableBackground = "new 0 0 32 32" id = "Layer_4" version = "1.1" viewBox = "0 0 32 32">
              <polygon fill = "white" points = "12,5 12,11 31,11   31,21 12,21 12,27 1,16 " stroke = "none" strokeLinejoin = "round" strokeMiterlimit = "10" strokeWidth = "2"/>
            </svg>
          </div>
        </button>
      )}
    </>
  );
};

export default ArrowTop;
