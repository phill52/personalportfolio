import { useState, useEffect } from "react";
import Image from "next/image";
import { useTransition, animated, useSpringRef } from '@react-spring/web'


const ProgressButton = ({disabled, onClick, src, height, width}) =>{
    if (disabled) {
        return (   
                <button className="disabled-button">
                    <Image height={height} width={width} src={src} className='disabled-button' />
                </button>
        )
    }
    else {
        return (
            <button className='enabled-button' onClick={onClick}>
                <Image height={height} width={width} src={src} className='enabled-button'/>
            </button>
        )
    }
}

const MultiImagePreview = ({images}) => {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const transRef = useSpringRef();
    const transitions = useTransition(index, {
        ref: transRef,
        keys: null,
        from: { opacity: 0, transform: direction === 1 ? 'translate3d(5%,0,0)' : 'translate3d(-5%,0,0)' },
        enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
        leave: { opacity: 0, transform: direction === 1 ? 'translate3d(-5%,0,0)' : 'translate3d(5%,0,0)' },
    });

    useEffect(() => {
        transRef.start();
    }, [index, transRef]);

    const onIncrease = () => {
        if (index < images.length-1) {
            setDirection(1);
            setIndex(index + 1);
        }
    }

    const onDecrease = () => {
        if (index > 0) {
            setDirection(-1);
            setIndex(index - 1);
        }
    }

    return (
        <div className='relative multi-image-container flex justify-center'>
            <div className='flex justify-center h-full'>
                {transitions((style, i) =>
                    <animated.div style={style} className='rounded-lg absolute flex w-full justify-center'>
                        <Image 
                            src={images[i]} 
                            className='w-full md:w-8/12 lg:w-full '
                            height={315} 
                            width={560} 
                        />                    </animated.div>
                )}
            </div>
            <div className='absolute z-10 top-0 bottom-0 w-bigger flex justify-between'>
                <ProgressButton height={50} width={50} src='/images/arrow-left.svg' onClick={onDecrease} disabled={index<=0}/>
                <ProgressButton height={50} width={50} src='/images/arrow-right.svg' onClick={onIncrease} disabled={index>=images.length-1}/>
            </div>
            <div className='absolute z-10 bottom-4 w-full flex justify-center space-x-2'>
                {images.map((img, idx) => (
                    <button key={idx} className={`h-2 w-1 rounded-full ${idx === index ? 'bg-blue-500' : 'bg-gray-600'}`} onClick={() => setIndex(idx)}></button>
                ))}
            </div>
        </div>
    )
}

export default MultiImagePreview
