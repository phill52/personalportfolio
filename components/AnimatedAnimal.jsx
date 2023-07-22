import { useRef, useState, useEffect } from "react";
import { useSpring, animated } from "@react-spring/web";
import Image from "next/image";

const AnimatedAnimal = ({ icon, alt, key, z }) => {
    const animalRef = useRef(null);
    const [rotate, setRotate] = useState(0);
    const [{ x, y }, api] = useSpring(() => ({
        from:  getRandomPosition(animalRef) ,
        config: {
            duration: Math.random() * 2000 + 6000
        },
        onRest: () => {
            const newTarget = getRandomPosition(animalRef.current.parentElement);
            const newDirection = Math.atan2(newTarget.y - y.get(), newTarget.x - x.get());
            setRotate(newDirection);
            api.start({ to: newTarget });
        }
    }));

    function getRandomPosition(element) {
        return {
            x: Math.random() * (element.offsetWidth - 100),
            y: Math.random() * (element.offsetHeight - 100),
        };
    }

    useEffect(() => {
        if (animalRef.current) {
            const newPosition = getRandomPosition(animalRef.current.parentElement);
            api.start({ to: newPosition });
        }
    }, []);

    return (
        <animated.div 
            ref={animalRef}
            style={{ 
                position: 'absolute', 
                left: x, 
                top: y,
                transform: `rotate(${rotate}rad)`,
                zIndex: z
            }}>
            <Image key={key} src={icon} height={25} width={25} alt={alt}/>
        </animated.div>
    );
}

export default AnimatedAnimal;