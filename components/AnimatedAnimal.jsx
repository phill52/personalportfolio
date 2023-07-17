import { useState, useEffect } from "react";
import { useSpring, animated } from "@react-spring/web";
import Image from "next/image";

const AnimatedAnimal = ({ icon }) => {
    function getRandomStyle() {
        return { x: Math.random()*(window.innerWidth), y: Math.random()*(window.innerHeight) };
    }
    const initialPosition = getRandomStyle();
    const initialTarget = getRandomStyle();

    const [style, set] = useState(getRandomStyle());
    const [{ x, y }, api] = useSpring(() => ({ from: initialPosition , to: initialTarget,
    config:{
        duration: 8000
    } }));

    useEffect(() => {
        const interval = setInterval(() => {
            api.start({ to: getRandomStyle() });
        }, 8000);
        
        return () => {
            clearInterval(interval);
        };
    }, [api]);

    return (
        <animated.div style={{ position: 'absolute', left: x, top: y }}>
            <Image src={icon} height={25} width={25} alt="crab" className='-z-10'/>
        </animated.div>
    );
}

export default AnimatedAnimal;
