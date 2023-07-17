import React from "react";
import {useSpring, animated} from '@react-spring/web'


function SkillDetail ({skill}) {

  const SkillBar = ({rating}) =>{
    const props = useSpring({
      from: { width: '0rem' },
      to: { width: `${rating*1.5}rem` },
      config: { duration: 1000 }
    });

    const blocks = [];
    for (let i = 0; i < 10; i++) {
      blocks.push(
        <div
          key={i}
          style={{
            width: '10%',
            height: '1rem',
            border: '1px solid #000',
            display: 'inline-block',
            background : '#F6E5DF'
          }}
        />
      );
    }

    return(
    <div style={{ display: 'flex', width: '15rem', height: '1rem' }}>
      {blocks}
      <animated.div style={{ ...props, background: '#CE6C47', height: '1rem', position: 'absolute', border: '1px solid #000' }} />
    </div>
    )
  }
  return(
      <div className='detail-container'>
        <img className='skill-icon' src={skill.icon}/>
        <div className='detail-insider-container'>
        <h3 className='cream'>{skill.name}</h3>
          <div className='detail-skillbar-container'>
            <p className='cream'> {skill.proficiency}/10</p>
            <SkillBar rating={skill.proficiency}/>
          </div>
          <p className='cream'>{skill.description}</p>
        </div>
      </div>
  )
}
export default SkillDetail