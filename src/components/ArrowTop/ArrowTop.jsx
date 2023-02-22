import React, { useEffect, useState } from "react";
import { animateScroll as scroll } from "react-scroll";
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
          className={cn["arrow-box"]}
          onClick={() => scroll.scrollToTop()}
        >
          <div className={cn.image}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 14 14"
            >
              <path
                fillRule="evenodd"
                d="M6,4.82842712 L4.87867966,5.94974747 C4.48815536,6.34027176 3.85499039,6.34027176 3.46446609,5.94974747 C3.0739418,5.55922318 3.0739418,4.9260582 3.46446609,4.53553391 L7,1 L10.5355339,4.53553391 C10.9260582,4.9260582 10.9260582,5.55922318 10.5355339,5.94974747 C10.1450096,6.34027176 9.51184464,6.34027176 9.12132034,5.94974747 L8,4.82842712 L8,11.6226408 C8,12.1749256 7.55228475,12.6226408 7,12.6226408 C6.44771525,12.6226408 6,12.1749256 6,11.6226408 L6,4.82842712 Z"
              />
            </svg>
          </div>
        </button>
      )}
    </>
  );
};

export default ArrowTop;
