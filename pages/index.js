import React, {useState} from 'react';
import Head from "next/head";
import Link from "next/link";
import {motion,useScroll,useSpring,useTransform,MotionValue} from "framer-motion";
import { useRef } from "react";
import { render } from "react-dom";

const useParallax = (value, distance) =>{
  return useTransform(value, [0, 1], [-distance, distance]);
}  

const Home = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const handleScroll = (itemId) => {
    const element=document.getElementById(itemId);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <>
      <Head>
        <title>Phillip Anerine | Full Stack Developer </title>
        <meta name="description" content="Hello, strange to see you in the metadata. I'm Phillip Anerine, currently a Computer Science major at
        Stevens Institute of Technology, and aspiring full stack developer." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="main">
        {/* {pages.map((page)=>
        <renderPage page={page} />)} */}
        <div className="fullPageContainer">

          <section className="container">
            <div className="introContainer">
            <h1 className="title">
              Phillip <span className="whiteSpan">Anerine</span>
            </h1>
            <img onClick={()=>handleScroll('section-2')} src={'/images/downarrow.png'} className="downarrow"/>
            
            {/* <button onClick={()=>handleScroll('section-2')}>Hello</button> */}
            </div>
          </section>
          

          <section className="container" id='section-2'>
              <div className="redbox">
                <h2 className="title">About me</h2>
                <div className="profileContainer">
                  <img src={'/images/panerine.jpg'} className="headshot" alt="Headshot of Phillip Anerine"/>
                  <p className="bio">Hello! I am a 3/4 Computer Science Major studying at Stevens Institute of Technology.
                        I'm from Garfield, NJ, and I'm an aspiring Software Engineer with lots of experience in web development, working
                        on both front-end and back-end. I am a highly motivated self-starter, and am always looking for new opportunities 
                        to gain new experiences. You can look at some of my projects <a> here. </a>
                        </p>
                  </div>
                  <img onClick={()=>handleScroll('section-3')} src={'/images/downarrow.png'} className="downarrow"/>
                  {/* <button onClick={()=>handleScroll('section-3')}>Hello</button> */}
              </div>
          </section>

          <section className="container" id='section-3'>
              <div className="redbox">
                <h2 className="title">My Tech Stack</h2>
                <div className="profileContainer">
                  <img src={'/images/panerine.jpg'} className="headshot" alt="Headshot of Phillip Anerine"/>
                  <p className="bio">Hello! I am a 3/4 Computer Science Major studying at Stevens Institute of Technology.
                        I'm from Garfield, NJ, and I'm an aspiring Software Engineer with lots of experience in web development, working
                        on both front-end and back-end. I am a highly motivated self-starter, and am always looking for new opportunities 
                        to gain new experiences. You can look at some of my projects <a> here. </a>
                        </p>
                  </div>
              </div>
          </section>
      
      </div>

      </main>
    </>
  );
};

export default Home;