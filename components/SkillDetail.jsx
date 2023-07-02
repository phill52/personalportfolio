import React from "react";
import {useSpring, animated} from '@react-spring/web'


function SkillDetail ({skill}) {

  const SkillBar = ({rating}) =>{
    const props = useSpring({
      from: { width: '0rem' },
      to: { width: `${rating}rem` },
      config: { duration: 1000 }
    });

    const blocks = [];
    for (let i = 0; i < 10; i++) {
      blocks.push(
        <div
          key={i}
          style={{
            width: '1rem',
            height: '1rem',
            border: '1px solid #000',
            display: 'inline-block'
          }}
        />
      );
    }

    return(
    <div style={{ display: 'flex', width: '10rem', height: '1rem' }}>
      {blocks}
      <animated.div style={{ ...props, background: 'blue', height: '1rem', position: 'absolute' }} />
    </div>
    )
  }
  return(
      <div className='detail-container'>
        <img className='skill-icon' src={skill.icon}/>
        <SkillBar rating={skill.proficiency}/>
        <div>
          <h3>{skill.name}</h3>
          <p>{skill.description}</p>
        </div>
      </div>
  )
}
export default SkillDetail