import React from "react";

function SkillDetail ({skill}) {
  return(
      <div className='detail-container'>
        <img className='skill-icon' src={skill.icon}/>
        <h3>{skill.name}</h3>
        <p>{skill.description}</p>
      </div>
  )
}
export default SkillDetail