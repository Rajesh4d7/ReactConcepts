import { useState, useEffect } from "react";


const BREAKS = {
    extraSmall: {
      min: null,
      max: 479,
    },
    small: {
      min: 480,
      max: 767,
    },
    medium: {
      min: 768,
      max: 1023,
    },
    large: {
      min: 1024,
      max: 1279,
    },
    extraLarge: {
      min: 1280,
      max: null,
    },
}

const useResponsive = () => {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);


    const isExtraSmall = () => width < BREAKS.extraSmall.max;
    const isSmall = () => width < BREAKS.small.max;
    const isMedium = () => width < BREAKS.medium.max;
    const isLarge = () => width < BREAKS.large.max;
    const isExtraLarge = () => width < BREAKS.extraLarge.max;

    const getScreenSize = () => {
        if(isExtraSmall()) return 'extraSmall';
        else if(isSmall()) return 'small';
        else if(isMedium()) return 'medium';
        else if(isLarge()) return 'large';
        return 'extraLarge';
    }

    return {
        isExtraSmall,
        isSmall,
        isMedium,
        isLarge,
        isExtraLarge,
        getScreenSize
    }
}

export default useResponsive;