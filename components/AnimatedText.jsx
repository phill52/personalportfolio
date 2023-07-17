import React from 'react';
import Typical from 'react-typical';
import { memo } from 'react';



const AnimatedText = memo(function AnimatedText({phrases}) {
    return (
        <div className='animated-container'>
            <Typical className='animated-text' wrapper="b" steps={phrases} />
        </div>
    )
});
export default AnimatedText;