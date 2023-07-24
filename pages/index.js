import React, {useState, useEffect} from 'react';
import Head from "next/head";
import Link from "next/link";
import Image from 'next/image';
import {motion,useScroll,useTransform,MotionValue} from "framer-motion";
import { useTransition, useSpring, animated } from '@react-spring/web'
import { useMemo } from "react";
import SkillIcon from '@/components/SkillIcon';
import SkillDetail from '@/components/SkillDetail';
import AnimatedText from '@/components/AnimatedText';
import AnimatedAnimal from '@/components/AnimatedAnimal';
import { projects } from '@/components/ProjectDetails';
import Project from '@/components/Project';
import Grid from '@mui/material/Unstable_Grid2';
import { Fade } from "react-awesome-reveal";
import { keyframes } from '@emotion/react';
import { Reveal } from 'react-awesome-reveal';
import AnimatedLogo from '@/components/AnimatedLogo';


const useParallax = (value, distance) =>{
    return useTransform(value, [0, 1], [-distance, distance]);
}  

const onEnterAnimation = keyframes`
    from{
        opacity: 0;
        transform: translate3d(0, 50%, 0);
    }
    to{
        opacity:1;
        transform: translate3d(0, 0, 0);
    }
`

const skills = [
    { 
        name: "HTML", 
        icon: "/images/html.svg", 
        description: "As an integral building block of the web, I have used HTML extensively in my professional journey. I am proficient in utilizing HTML semantics to ensure that the content is accessible and SEO friendly. My understanding of elements, attributes, and the DOM allows me to create well-structured, efficient, and interactive web content.", 
        color: '#FF8A00',
        proficiency: 8 
    },
    { 
        name: "CSS", 
        icon: "/images/css.svg", 
        description: "My proficiency with CSS allows me to create visually compelling and responsive designs. I am comfortable using Flexbox and Grid for layout purposes, and have a good grasp, animation, transformation, and media queries. I have experience using CSS frameworks TailwindCSS, Bootstrap, and Material-UI.", 
        color: '#2965F1', 
        proficiency: 6 
    },
    { 
        name: "JavaScript", 
        icon: "/images/javascript.svg", 
        description: "With a solid understanding of JavaScript's core concepts such as closures, prototypes, and async functions, I can write efficient, modular, and maintainable code. I also have experience with ES6+ features.", 
        color: '#F0DB4F', 
        proficiency: 7 
    },
    { 
        name: "React", 
        icon: "/images/react.svg", 
        description: "I can develop scalable, dynamic, and complex user interfaces using React. My skills include working with React hooks for functional components and optimizing performance, state management, animations, authentication, and use of several popular libraries such as React-Router, React-Query, React-Spring, etc. I am also familiar with Next.js for server-side rendering and static site generation.", 
        color: '#61DAFB', 
        proficiency: 7 
    },
    { 
        name: "Node.js", 
        icon: "/images/nodejs.svg", 
        description: "I am adept at building back-end services using Node.js. I've developed both RESTful APIs and multi-page applications with Express.js, implemented effective caching using Redis, and even created a GraphQL server with Apollo. I excel in creating efficient and well-structured server-side logic. I also have experience deploying these backend services to AWS.", 
        color: '#68A063', 
        proficiency: 7 
    },
    { 
        name: "MongoDB", 
        icon: "/images/mongodb.svg", 
        description: "Experienced in creating, querying, and managing databases with MongoDB. I have used it for developing applications with a non-relational, scalable, and performance-oriented database. I have used Mongoose to create schemas and models for my data and to .", 
        color: '#4DB33D', 
        proficiency: 5 
    },
    { 
        name: "Python", 
        icon: "/images/python.svg", 
        description: "I have leveraged Python's strengths in readability, scalability, and simplicity for various tasks, including data analysis and web development. I've used the powerful Python libraries pytest, Flask, and SQLAlchemy.", 
        color: '#3776AB', 
        proficiency: 4 
    },
    { 
        name: "PostgreSQL", 
        icon: "/images/postgres.svg", 
        description: "My skills in PostgreSQL allow me to create, read, update, and delete data effectively in relational databases. I have a good understanding of SQL queries, joins, triggers, and transactions. My understanding allows me to design normalized databases and write efficient queries. I am also familiar with using Object Relational Mappers such as SQLAlchemy.", 
        color: '#336791', 
        proficiency: 5 
    },
    { 
        name: "GitHub", 
        icon: "/images/github.svg", 
        description: "I am proficient in using GitHub for version control. This includes creating repositories, branching, merging, handling conflicts, and using pull requests effectively. Additionally, I have used GitHub actions for CI/CD pipeline setup and understand the value of collaboration and open source.", 
        color: '#181717', 
        proficiency: 7 
    },
    { 
        name: "GraphQL", 
        icon: "/images/graphql.svg", 
        description: "I have substantial experience with GraphQL, having utilized it on both client and server sides. In the front-end, I've used it with Apollo Client to manage data in React applications. On the back-end, I've constructed robust and efficient GraphQL servers with Apollo in Node.js.", 
        color: '#E434AA', 
        proficiency: 6 
    }
    
]

    const Home = () => {

    const [crabs, setCrabs] = useState([]);
    const [sharks, setSharks] = useState([]);
    useEffect(() => {
        const numberOfCrabs = Math.floor(Math.random() * (15 - 5 + 1)) + 5;
        for (let i=0; i<numberOfCrabs; i++){
            addCrab();
            addShark();
        }
    }, []
    )
    
    const [open, setOpen] = useState(false);

    const phrases = useMemo(()=> 
    ["Computer Science Student", "Tech Enthusiast", "Software Engineer💻"]
    ,[])
    const [selectedSkill, setSelectedSkill] = useState(
        skills[0]
    );

    const onSkillClick = (skill) => {
        setSelectedSkill(skill);
    }
    const transitions = useTransition(selectedSkill, {
        from: {opacity: 0, transform: 'translate3d(0, 50%, 0)'},
        enter: {opacity: 1, transform: 'translate3d(0, 0, 0)'},
        config: {duration: 400}
    })

    const [techSpring, api] = useSpring(() => ({
        from: { y: 0 },
    }))

    
    const addCrab = () => {
        setCrabs((prevCrabs) => [...prevCrabs, { id: crabs.length }]);
    };
    const removeCrab = () => {
        setCrabs(crabs.slice(1));
    };
    const addShark = () => {
        setSharks((prevSharks) => [...prevSharks, { id: sharks.length }]);
    };
    const removeShark = () => {
        setSharks(sharks.slice(1));
    };



    
    return (
        <>
        <header className={`fixed top-0 z-50 w-full text-center transition-colors duration-500 text-raisin py-4`}>
            <ul className="lg:flex md:flex justify-around py-2 hidden ">
                <li>
                    <a href="#home" className="text-lg font-bold">Home</a>
                </li>
                <li>
                    <a href="#about" className="text-lg font-bold">About Me</a>
                </li>
                <li>
                    <a href="#skills" className="text-lg font-bold">My Skills</a>
                </li>
                <li>
                    <a href="#projects" className="text-lg font-bold">Projects</a>
                </li>
                <li>
                    <a href="#contact" className="text-lg font-bold">Contact me</a>
                </li>
            </ul>
            <div className="fixed flex flex-row justify-around py-2 right-2 lg:hidden md:hidden ">
                <button className="text-4xl text-raisin font-bold" onClick={() => setOpen(!open)}>☰</button>
            </div>
            <div 
                className={`fixed top-0 right-0 h-full w-full bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out ${
                    open ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
                onClick={() => setOpen(false)}
            />
            <div 
                className={`fixed w-[80%] top-0 right-0 h-full menu-clip bg-[#ebebeb] transition-transform duration-300 ease-in-out transform ${
                    open ? 'translate-x-0' : 'translate-x-full'
                }`}
            >
                <ul className="lg:hidden md:hidden flex flex-col justify-center gap-10 py-2 h-full">
                    <li className='text-lg font-bold text-[#0B5D63]'>1. <br/>
                        <a href="#home" className="text-2xl font-bold " onClick={()=>{setOpen(false)}}>Home</a>
                    </li>
                    <li className='text-lg font-bold text-[#0B5D63]'>2. <br/>
                        <a href="#about" className="text-2xl font-bold" onClick={()=>{setOpen(false)}}>About Me</a>
                    </li>
                    <li className='text-lg font-bold text-[#0B5D63]'>3. <br/>
                        <a href="#skills" className="text-2xl font-bold" onClick={()=>{setOpen(false)}}>My Skills</a>
                    </li>
                    <li className='text-lg font-bold text-[#0B5D63]'>3. <br/>
                        <a href="#projects" className="text-2xl font-bold" onClick={()=>{setOpen(false)}}>Projects</a>
                    </li>
                    <li className='text-lg font-bold text-[#0B5D63]'>4. <br/>
                        <a href="#contact" className="text-2xl font-bold" onClick={()=>{setOpen(false)}}>Contact me</a>
                    </li>
                </ul>
                <button 
                    className="absolute top-2 right-2 text-2xl font-bold" 
                    onClick={() => setOpen(false)}
                >
                    &times;
                </button>
            </div>
        </header>
        <section className='bg-sand h-screen flex flex-col justify-center align-center relative z-10' id='home'>
            <div className='flex flex-row justify-around items-center px-8 z-10'>
                <div className="absolute flex flex-row justify-around button-pos">
                    <button className='bg-crab text-white lg:text-4xl text-md px-4 py-0 font-white flex flex-row items-center justify-center' onClick={addCrab}>
                        <span>+</span>
                        <Image height={50} width={50} src='/images/crab-inner.svg'/>
                    </button>
                    <button className='bg-crab text-white text-4xl px-4 py-0 font-white flex flex-row items-center justify-center' onClick={removeCrab}>
                        <span>-</span>
                        <Image height={50} width={50} src='/images/crab-inner.svg'/>
                    </button>
                </div>

                <Reveal keyframes={onEnterAnimation} triggerOnce>
                    
                    <div className='flex lg:flex-row flex-col-reverse items-center space-x-4 lg:space-x-8'>
                        <div className="flex lg:flex-col md:flex-col sm:flex-row sm:pt-3 gap-x-2 justify-center">
                                <AnimatedLogo src='/images/email.svg' href='mailto:paner225@gmail.com' width={40} height={40}/>
                                <AnimatedLogo src='/images/linkedin.svg' href='https://www.linkedin.com/in/panerine/' width={40} height={40}/>
                                <AnimatedLogo src='/images/github.svg' href='https://github.com/phill52' width={40} height={40}/>
                            </div>
                        <h1 className='text-raisin lg:text-[4rem] text-[3rem]'>Hi, <br/>
                        I&apos;m Phillip🦈 <br/>
                        I&apos;m a <AnimatedText phrases={phrases}/></h1>
                        <Image src='/images/panerine.jpg' height={300} width={300} className="headshot" alt="Headshot of Phillip Anerine"/>
                    </div>
                </Reveal>
            </div>
            <div className='absolute w-full h-screen overflow-hidden'>
                {crabs.map((crab) => (
                    <AnimatedAnimal
                        key={crab.id}
                        alt={`crab-${crab.id}`}
                        icon='/images/crab.svg'
                        z={-10}
                        className='no-drag'
                        />
                ))}
            </div>
            <div className='absolute bottom-0 w-full overflow-hidden'>
                <div className='waves w-full lg:h-96 md:h-64 h-32'/>
            </div>

        </section>
        
        <div className='bg-ocean pt-16 pb-8 bg-oceanBlue relative z-10'>
            <div className="absolute flex flex-row justify-around shark-button-pos">
                    <button className='bg-[#8A8A8A] text-white lg:text-4xl text-md px-4 py-0 font-white flex flex-row items-center justify-center' onClick={addShark}>
                        <span>+</span>
                        <Image height={50} width={50} src='/images/shark-inner6.svg'/>
                    </button>
                    <button className='bg-[#8A8A8A] text-white text-4xl px-4 py-0 font-white flex flex-row items-center justify-center' onClick={removeShark}>
                        <span>-</span>
                        <Image height={50} width={50} src='/images/shark-inner6.svg'/>
                    </button>
                </div>
            <section className='pb-60 pt-32 flex align-center relative' id='about'>
                <Reveal keyframes={onEnterAnimation} triggerOnce>
                    <div className='flex flex-col lg:px-32 md:px-16  px-8 text-left z-10 align-center'>
                        <h2 className='text-pearl lg:text-4xl text-2xl font-bold'>About Me</h2>
                        <br/>
                        <p className='text-pearl lg:text-3xl font-bold'>
                        Hi there! I&apos;m Phillip Anerine, a 4th year computer science undergrad at Stevens Institute of Technology, an aspiring
                        full-stack software engineer and an avid coffee drinker. I&apos;m passionate about all steps of creating software solutions
                        to solve business problems. I&apos;ve spent extensive time out of the classroom to learn modern frameworks and tools to create
                        my projects that you can check out here. When I&apos;m not coding, you can find me at the gym, a hike trail, or a rock concert.
                        Feel free to reach out.
                        <br/>
                        <br/>
                        Cheers!
                        </p>
                        <Image src='/images/shark.svg' height={100} width={100} />
                    </div>
                </Reveal>
                {/* <div className='absolute top-[3%] left-[2%] w-full overflow-hidden'>
                    <Image src='/images/bubble1.svg' height={100} width={100} alt="bubble" />
                </div>
                <div className='absolute top-[6rem] right-[3rem]'>
                    <Image src='/images/bubble2.svg' height={100} width={100} alt="bubble" />
                </div>
                <div className='absolute bottom-[5rem] right-[3rem]'>
                    <Image src='/images/bubble3.svg' height={100} width={100} alt="bubble" />
                </div>
                <div className='absolute bottom-[2rem] left-[3rem]'>
                    <Image src='/images/bubble4.svg' height={100} width={100} alt="bubble" />
                </div> */}
            </section>

            <section className='pt-32 pb-60' id='skills'> 
                <div className='flex flex-col lg:px-32 md:px-16 px-8 z-10 justify-center items-center'>
                    <h2 className='text-pearl lg:text-4xl text-2xl font-bold pb-8'>My Skills</h2>
                    <div className='text-pearl text-3xl font-bold bg-darkocean rounded-lg ease-transition'>
                        {transitions((style, item) =>
                            item ? <animated.div style={style}><SkillDetail skill={item} /></animated.div> : null
                        )}
                        <ul className='flex flex-row justify-around flex-wrap lg:gap-x-2 lg:gap-y-10 pb-10 px-10'>
                            {skills.map(skill => 
                            <li key={skill.name}>
                                <SkillIcon skill={skill} onClick={()=>onSkillClick(skill)} />
                            </li>)}
                        </ul>
                        
                    </div>

                </div>
            </section>
            
            <section className='pt-32 pb-60' id='projects'> 
                <Reveal keyframes={onEnterAnimation} triggerOnce>
                    <div className='flex flex-col w-full justify-center items-center lg:px-32 md:px-16 px-8 z-10'>
                        <h2 className='text-pearl lg:text-4xl text-2xl font-bold pb-8'>My Projects</h2>
                        <Grid container spacing={2}>
                        {
                            Object.keys(projects).map((key) => {
                                return (
                                    <Grid item xs={12} sm={6} key={key}>
                                        <Project project={projects[key]} />
                                    </Grid>
                                )
                            })
                        }
                    </Grid>
                    
                        {/* <div className='flex flex-row justify-around items-center flex-wrap gap-y-8 pb-10 px-8  '>
                            {
                                Object.keys(projects).map((key) => {
                                    return (
                                        <Project key={key} project={projects[key]} />
                                    )
                                }
                                )
                            }
                        </div> */}
                    </div>
                </Reveal>
            </section>

            <section className='pt-32' id='contact'>
                <div className="relative flex-col w-full justify-center lg:px-32 md:px-16  px-8 z-10 h-most">
                    <Reveal keyframes={onEnterAnimation} triggerOnce>
                        <h2 className='text-pearl lg:text-4xl text-2xl font-bold'>Contact Me</h2>
                        <p className='text-pearl lg:text-3xl text-lg z-10 font-bold'>I&apos;m currently open to work in the NYC-NJ area or remote, and love tackling interesting problems. If you&apos;re interested in discussing potential roles, collaborating on a project, or even just chatting about the latest in technology, don&apos;t hesitate to get in touch. I&apos;m always up for a good tech talk!
                            <br/>
                            Feel free to reach out to me
                            <br/>                            
                            <div className="flex flex-row gap-x-2 justify-center">
                                <AnimatedLogo src='/images/email.svg' href='mailto:paner225@gmail.com' width={40} height={40}/>
                                <AnimatedLogo src='/images/linkedin.svg' href='https://www.linkedin.com/in/panerine/' width={40} height={40}/>
                                <AnimatedLogo src='/images/github.svg' href='https://github.com/phill52' width={40} height={40}/>
                            </div>
                            Looking forward to hearing from you! <br/>
                            Best, Phillip
                            </p>
                            <div className='webring'>
                                <div id="webring">
                                </div>
                            </div>
                    </Reveal>
                    
                    

                </div>
                <div className="absolute bottom-0 z-0 h-[900px] w-full overflow-hidden">
                    <Image 
                    src="/images/rockplants.svg"
                    alt="Rocks"
                    className=" w-full h-full object-cover z-0 object-center"
                    layout="fill"
                    />
                </div>
            </section>

                {sharks.map((shark) => (
                    <AnimatedAnimal
                        key={shark.id}
                        alt={`shark-${shark.id}`}
                        icon='/images/shark.svg'
                        z={-10}
                        className='no-drag'
                    />
                    )
                )}
        </div>
        </>
    );
    };

    export default Home;