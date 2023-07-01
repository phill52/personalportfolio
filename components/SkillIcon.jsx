import React, { useState, useRef } from 'react';
import { ReactSVG } from 'react-svg';

function SkillIcon({ skill, select }) {
  const [perspective, setPerspective] = useState({ x: 0, y: 0 });
  const svgRef = useRef(null);

  const handleMouseMove = (e) => {
    if (svgRef.current) {
      const rect = svgRef.current.getBoundingClientRect();
      setPerspective({
        x: (rect.width / 2 - (e.clientX - rect.left)) / 25,
        y: (rect.height / 2 - (e.clientY - rect.top)) / 25
      });
    }
  };
  

  return (
    <div
      className="skill-icon"
      onClick={() => select(skill)}
      onMouseMove={handleMouseMove}
      style={{ transform: `rotateY(${perspective.x}deg) rotateX(${perspective.y}deg)` }}
    >
      <ReactSVG 
      beforeInjection={(svg) => {
        svg.classList.add('svg-class-name')
        svg.setAttribute('style', 'width: 100%; height: 100%')
        svgRef.current = svg;
      }}
      src={skill.icon} />
    </div>
  );
}

export default SkillIcon;
