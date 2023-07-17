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
    { name: "HTML", icon: "/images/html.svg", description: "As an integral building block of the web, I have used HTML extensively in my professional journey. I am proficient in utilizing HTML semantics to ensure that the content is accessible and SEO friendly. My understanding of elements, attributes, and the DOM allows me to create well-structured, efficient, and interactive web content.", 
    proficiency: 8, maincolor: '#CE6C47', secondarycolor: '#E8A87C'},
    { name: "CSS", icon: "/images/css.svg", description: "Lorem Ipsem", proficiency: 6,
    primarycolor: '#1c88c7', secondarycolor: '#E6F4FB'}, 
    { name: "JavaScript", icon: "/images/javascript.svg", description: "Lorem Ipsem", proficiency:7,
    primarycolor: '#FFDE25', secondarycolor: '#F7DF1E'},
    { name: "React", icon: "/images/react.svg", description: "Lorem Ipsem", proficiency: 7 },
    { name: "Node.js", icon: "/images/nodejs.svg", description: "Lorem Ipsem", proficiency: 7 },
    { name: "MongoDB", icon: "/images/mongodb.svg", description: "Lorem Ipsem", proficiency: 5 },
    { name: "Python", icon: "/images/python.svg", description: "Lorem Ipsem", proficiency: 4 },
    { name: "PostgreSQL", icon: "/images/postgres.svg", description: "Lorem Ipsem", proficiency: 5}
  ]

  const onSkillClick = (skill) => {
    if (selectedSkill && selectedSkill.name === skill.name) {
      setSelectedSkill(null);
      api.start({from: {
        y: 180,
      }, to: {
        y: 0,
      },
      config:
        {duration: 500}})
    } else{
      api.start({from: {
        y:0,
      }, to: {
        y: 180,
      },config:
        {duration: 500}})
      setSelectedSkill(skill);
    }
  }

  const transitions = useTransition(selectedSkill, {
    from: {opacity: 0, transform: 'translate3d(0, 50%, 0)'},
    enter: {opacity: 1, transform: 'translate3d(0, 0, 0)'},
    leave: {opacity: 0, transform: 'translate3d(0, 50%, 0)'},
    config: {duration: 400}
  })

  const [techSpring, api] = useSpring(() => ({
    from: { y: 0 },
  }))

  

  return (
    <>
      <main className="main w-full">
        <div className="fullPageContainer w-full">
          <section className="container w-full">
            <div className="introContainer">
            <h1 className="title">
              Phillip <span className="white-span">Anerine</span>
            </h1>
            <Image onClick={()=>handleScroll('section-2')} height={100} width={100} src={'/images/downarrow.png'} alt="down arrow button" className="downarrow"/>
            
            </div>
          </section>
          

          <section className="container" id='section-2'>
              <div className="tech-container">
                <h2 className="title brass">About me</h2>
                <div className="profile-container">
                <p className='description'>Hello! My name is Phillip Anerine, and I&apos;m an aspiring Software Engineer with lots of 
                        experience in web development, working on both front-end and back-end. I am a highly motivated self-starter, and 
                        am always looking for new opportunities to gain new experiences. You can look at some of my projects <a> here. </a>
                  </p>
                  <Image src='/images/panerine.jpg' height={200} width={200} className="headshot" alt="Headshot of Phillip Anerine"/>
                  </div>
                  <Image onClick={()=>handleScroll('section-3')} height={100} width={100} src={'/images/downarrow.png'} alt="down arrow button"  className="downarrow"/>
              </div>
          </section>

          <section className="container" id='section-3'>
              <div className="tech-container">
                <h2 className="tech-title">My Tech Stack</h2>
                {transitions((style, item) =>
                    item ? <animated.div style={style}><SkillDetail skill={item} /></animated.div> : null
                )}

                <animated.ul className='skill-container' style={{...techSpring}} >
                  {skills.map(skill => 
                  <li key={skill.name}>
                    <SkillIcon skill={skill} onClick={()=>onSkillClick(skill)} />
                  </li>)}
                </animated.ul>
                  
              </div>
          </section>
      
      </div>

      </main>
    </>
  );
};

export default Home;