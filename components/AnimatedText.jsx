import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { memo } from 'react';



const AnimatedText = memo(function AnimatedText({phrases}) {
    const el = useRef(null);
    useEffect(() => {
        const options = {
            strings: phrases,
            typeSpeed: 50,
            backSpeed: 50,
            loop: false,
            cursorChar: '|',
        };
        const typed = new Typed(el.current, options);

        // Clean up function
        return () => {
            typed.destroy();
        };
    }, []);

    return(
    <div className='animated-container animated-text'>
        <span  className='animated-text' ref={el}> </span>
    </div>    
    )
});
export default AnimatedText;