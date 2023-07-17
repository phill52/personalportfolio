    import React, {useState, useEffect} from 'react';
    import Head from "next/head";
    import Link from "next/link";
    import Image from 'next/image';
    import {motion,useScroll,useTransform,MotionValue} from "framer-motion";
    import { useTransition, useSpring, animated } from '@react-spring/web'
    import { useMemo } from "react";
    import { render } from "react-dom";
    import SkillIcon from '@/components/SkillIcon';
    import SkillDetail from '@/components/SkillDetail';
    import AnimatedText from '@/components/AnimatedText';
    import AnimatedAnimal from '@/components/AnimatedAnimal';



    const useParallax = (value, distance) =>{
    return useTransform(value, [0, 1], [-distance, distance]);
    }  

    const Home = () => {

    const [crabs, setCrabs] = useState([]);
    useEffect(() => {
        const numberOfCrabs = Math.floor(Math.random() * (15 - 5 + 1)) + 5;
        for (let i=0; i<numberOfCrabs; i++){
            addCrab();
        }
    }, []
    )
    

    const phrases = useMemo(()=> 
    ["Computer Science Student", 1000, "Tech Enthusiast", 1000, "Software Engineer💻"]
    ,[])
    const [selectedSkill, setSelectedSkill] = useState(null);
    const skills = [
        { name: "HTML", icon: "/images/html.svg", description: "As an integral building block of the web, I have used HTML extensively in my professional journey. I am proficient in utilizing HTML semantics to ensure that the content is accessible and SEO friendly. My understanding of elements, attributes, and the DOM allows me to create well-structured, efficient, and interactive web content.", 
        proficiency: 8 },
        { name: "CSS", icon: "/images/css.svg", description: "Lorem Ipsem", proficiency: 6 },
        { name: "JavaScript", icon: "/images/javascript.svg", description: "Lorem Ipsem", proficiency:7 },
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
            y: 225,
        }, to: {
            y: 0,
        },
        config:
            {duration: 400}})
        } else{
        api.start({from: {
            y:0,
        }, to: {
            y: 225,
        },config:
            {duration: 400}})
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

    
    const addCrab = () => {
        setCrabs((prevCrabs) => [...prevCrabs, { id: crabs.length, x: Math.random()*(window.innerWidth-100), y: Math.random()*(window.innerHeight-100) }]);
    };

    const removeCrab = () => {
        setCrabs(crabs.slice(1));
    }


    return (
        <>
        <section className='bg-sand h-screen bg-sand flex flex-col justify-center align-center z-10'>
            <div className='flex flex-row justify-around items-center items-center px-8 z-10'>
            <button className='absolute right-24 top-24 bg-crab text-white text-4xl px-4 py-0 font-white flex flex-row items-center justify-center' onClick={addCrab}>
                <span>+</span>
                <Image height={50} width={50} src='/images/crab-inner.svg'/>
            </button>

            <button className='absolute right-60 top-24 bg-crab text-white text-4xl px-4 py-0 font-white flex flex-row items-center justify-center' onClick={removeCrab}>
                <span>-</span>
                <Image height={50} width={50} src='/images/crab-inner.svg'/>
            </button>

            <div className='flex lg:flex-row flex-col-reverse items-center space-x-4 lg:space-x-8'>
                <h1 className='text-raisin'>Hi, <br/> 
                I'm Phillip🦈 <br/>
                I'm a <AnimatedText phrases={phrases}/></h1>
                <Image src='/images/panerine.jpg' height={300} width={300} className="headshot" alt="Headshot of Phillip Anerine"/>
            </div>
                
            </div>
            <div className='absolute w-full h-screen overflow-hidden'>
                {crabs.map((crab) => (
                    <AnimatedAnimal
                        key={crab.id}
                        style={{ position: 'absolute', left: crab.x, top: crab.y }}
                        icon='/images/crab.svg'
                        />
                ))}
            </div>
            <div className='absolute bottom-0 w-full overflow-hidden'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path d="m0,254.55l8,8.18c8,8.18 24,24.54 40,32.73c16,8.18 32,8.18 48,0c16,-8.18 32,-24.54 48,-40.91c16,-16.36 32,-32.73 48,-35.44c16,-2.91 32,8.33 48,10.89c16,2.56 32,-2.56 48,10.89c16,13.65 32,46.38 48,62.74c16,16.36 32,16.36 48,13.65c16,-2.91 32,-8.03 48,-8.18c16,0.15 32,5.27 48,-2.76c16,-8.33 32,-29.81 48,-35.44c16,-5.62 32,5.62 48,-5.47c16,-10.89 32,-43.62 48,-57.27c16,-13.45 32,-8.33 48,-10.89c16,-2.56 32,-13.81 48,-21.83c16,-8.33 32,-13.45 48,8.18c16,21.83 32,70.92 48,92.76c16,21.63 32,16.52 48,10.89c16,-5.62 32,-10.74 48,-16.36c16,-5.62 32,-10.74 48,-13.65c16,-2.71 32,-2.71 48,-10.89c16,-8.18 32,-24.54 48,-27.25c16,-2.91 32,8.33 48,5.42c16,-2.71 32,-19.07 48,-5.42c16,13.45 32,57.42 48,79.05c16,21.83 32,21.83 48,5.47c16,-16.36 32,-49.09 48,-68.16c16,-19.28 32,-24.39 48,-10.94c16,13.65 32,46.38 48,62.74c16,16.36 32,16.36 40,16.36l8,0l0,16.36l-8,0c-8,0 -24,0 -40,0c-16,0 -32,0 -48,0c-16,0 -32,0 -48,0c-16,0 -32,0 -48,0c-16,0 -32,0 -48,0c-16,0 -32,0 -48,0c-16,0 -32,0 -48,0c-16,0 -32,0 -48,0c-16,0 -32,0 -48,0c-16,0 -32,0 -48,0c-16,0 -32,0 -48,0c-16,0 -32,0 -48,0c-16,0 -32,0 -48,0c-16,0 -32,0 -48,0c-16,0 -32,0 -48,0c-16,0 -32,0 -48,0c-16,0 -32,0 -48,0c-16,0 -32,0 -48,0c-16,0 -32,0 -48,0c-16,0 -32,0 -48,0c-16,0 -32,0 -48,0c-16,0 -32,0 -48,0c-16,0 -32,0 -48,0c-16,0 -32,0 -48,0c-16,0 -32,0 -48,0c-16,0 -32,0 -48,0c-16,0 -32,0 -48,0c-16,0 -32,0 -48,0c-16,0 -32,0 -48,0c-16,0 -32,0 -40,0l-8,0l0,-65.45z" fill="#16BAC5" id="svg_1"/>
                </svg>
            </div>

        </section>
        
        <div className='bg-ocean pt-16 pb-8 bg-oceanBlue'>
        <p>testlksaf</p>
        </div>
        
            {/* <section className="container" id='section-3'>
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
            </section> */}
        </>
    );
    };

    export default Home;