import React, { useState, useRef } from 'react';
import { ReactSVG } from 'react-svg';
import Tilt from 'react-parallax-tilt';
import Image from 'next/image';
import { useSpring, animated } from '@react-spring/web'

function SkillIcon({ skill, onClick }) {
  const [blurred, setBlurred] = useState(true)

  const style = useSpring({
    filter: blurred ? 'blur(2px) grayscale(50%)' :  'blur(0px) grayscale(0%)',
    config: {duration: 200}
  })

  return (
    <animated.div style={style} onMouseEnter={()=>setBlurred(false)} onMouseLeave={()=>setBlurred(true)} onClick={onClick}>
      <Tilt tiltReverse={false} perspective={500} reset={true} scale={1.3}  transitionSpeed={2500} className='skill-icon'>
        <Image
          width={200}
          height={200}
          src={skill.icon}
          />
      {/* <div className='box'/> */}
      </Tilt>
    </animated.div>
    
  );
}

export default SkillIcon;
