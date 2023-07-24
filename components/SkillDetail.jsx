import React from "react";
import {useSpring, animated} from '@react-spring/web'
import Image from "next/image";

const SkillDetail = ({skill}) => {

  const SkillBar = ({rating, color}) =>{
    const props = useSpring({
      from: { width: '0%' },
      to: { width: `${rating*10}%` },
      config: { duration: 150*rating }

    });

    const lines = [];
    for (let i = 0; i < 9; i++) {
      lines.push(
        <div
          key={i}
          style={{
            left: `${(i)*10}%`,
            width: '10%',
            height: '1.5rem',
            borderRight: '1px solid #000',
            position: 'absolute',
            zIndex: 20

          }}
        />
      );
    }
    return(
    <div style={{ display: 'flex', width: '100%', height: '1.5rem', position: 'relative' }}>
      {lines}
      <animated.div style={{ ...props, background: `${color}`, height: '1.5rem', borderTopLeftRadius: 50, borderBottomLeftRadius: 50, zIndex:10}} />
      <div style={{background: '#D9D9D9', width: '100%', height: '1.5rem', position: 'absolute', borderRadius: 50, zIndex:0}}/>

    </div>
    )
  }
  return(
      <div className='flex flex-row justify-left lg:px-16 px-8 py-8'>
        <Image height={100} width={100} className="skill-icon" src={skill.icon}/>
        <div className="flex flex-col justify-center lg:pl-4 pl-2">
          <h3 className='lg:text-4xl text-2xl'>{skill.name}</h3>
          <SkillBar rating={skill.proficiency} color={skill.color} />
          <p className='lg:text-3xl text-lg'>{skill.description}</p>

        </div>
      </div>
  )
}
export default SkillDetail