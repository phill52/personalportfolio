import React, {useState} from 'react';
import Head from "next/head";
import Link from "next/link";
import Image from 'next/image';
import {motion,useScroll,useTransform,MotionValue} from "framer-motion";
import { useTransition, useSpring, animated } from '@react-spring/web'
import { useRef } from "react";
import { render } from "react-dom";
import SkillIcon from '@/components/SkillIcon';
import SkillDetail from '@/components/SkillDetail';


const useParallax = (value, distance) =>{
  return useTransform(value, [0, 1], [-distance, distance]);
}  

const Home = () => {
  const { scrollYProgress } = useScroll();

  const handleScroll = (itemId) => {
    const element=document.getElementById(itemId);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  }


  const [selectedSkill, setSelectedSkill] = useState(null);
  const skills = [
    { name: "HTML", icon: "/images/html.svg", description: "Lorem Ipsem" },
    { name: "CSS", icon: "/images/css.svg", description: "Lorem Ipsem" },
    { name: "JavaScript", icon: "/images/javascript.svg", description: "Lorem Ipsem" },
    { name: "React", icon: "/images/react.svg", description: "Lorem Ipsem" },
    { name: "Node.js", icon: "/images/nodejs.svg", description: "Lorem Ipsem" },
    { name: "Express", icon: "/images/express.svg", description: "Lorem Ipsem" },
    { name: "MongoDB", icon: "/images/mongodb.svg", description: "Lorem Ipsem" },
    { name: "Python", icon: "/images/python.svg", description: "Lorem Ipsem" },
    { name: "PostgreSQL", icon: "/images/postgres.svg", description: "Lorem Ipsem"}
  ]

  const onSkillClick = (skill) => {
    if (selectedSkill && selectedSkill.name === skill.name) {
      setSelectedSkill(null);
    } else{
      setSelectedSkill(skill);
    }
  }

  const transitions = useTransition(selectedSkill, {
    from: {opacity: 0, transform: 'translate3d(0, 50%, 0)'},
    enter: {opacity: 1, transform: 'translate3d(0, 0, 0)'},
    leave: {opacity: 0, transform: 'translate3d(0, 50%, 0)'},
    config: {duration: 350}
  })

  

  return (
    <>
      <main className="main">
        <div className="fullPageContainer">
          <section className="container">
            <div className="introContainer">
            <h1 className="title">
              Phillip <span className="whiteSpan">Anerine</span>
            </h1>
            <Image onClick={()=>handleScroll('section-2')} height={100} width={100} src={'/images/downarrow.png'} alt="down arrow button" className="downarrow"/>
            
            </div>
          </section>
          

          <section className="container" id='section-2'>
              <div className="redbox">
                <h2 className="title">About me</h2>
                <div className="profileContainer">
                  <Image src='/images/panerine.jpg' height={200} width={200} className="headshot" alt="Headshot of Phillip Anerine"/>
                  <p className="text-red-500">Hello! I am a 3/4 Computer Science Major studying at Stevens Institute of Technology.
                        I&apos;m from Garfield, NJ, and I&apos;m an aspiring Software Engineer with lots of experience in web development, working
                        on both front-end and back-end. I am a highly motivated self-starter, and am always looking for new opportunities 
                        to gain new experiences. You can look at some of my projects <a> here. </a>
                        </p>
                  </div>
                  <Image onClick={()=>handleScroll('section-3')} height={100} width={100} src={'/images/downarrow.png'} alt="down arrow button"  className="downarrow"/>
              </div>
          </section>

          <section className="container" id='section-3'>
              <div className="redbox">
                <h2 className="title">My Tech Stack</h2>
                <div className="profileContainer">
                <div className="flex flex-row">
                {transitions((style, item) =>
                    item ? <animated.div style={style}><SkillDetail skill={item} /></animated.div> : null
                )}
                  <ul className='skill-container'>
                    {skills.map(skill => 
                    <li key={skill.name}>
                      <SkillIcon skill={skill} onClick={()=>onSkillClick(skill)} />
                    </li>)}

                  </ul>
                </div>
                  
                </div>
              </div>
          </section>
      
      </div>

      </main>
    </>
  );
};

export default Home;