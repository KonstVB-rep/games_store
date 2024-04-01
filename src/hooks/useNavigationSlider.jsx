import { useState } from 'react';

const useNavigationSlider = () => {
    const [isEndSlides, setIsEndSlides] = useState(false);
    const [isBeginningSlides, setIsBeginningSlides] = useState(true);
    const handleSliderChange = (slider) => {
        if (!slider) return null;
        setIsEndSlides(slider.isEnd);
        setIsBeginningSlides(slider.isBeginning);
    };

    return { isEndSlides, isBeginningSlides, handleSliderChange };
};

export default useNavigationSlider;
