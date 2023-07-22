import React from 'react'
import Image from 'next/image'

export default function AnimatedLogo({src, href, width, height}) {

    return (
            <a href={href} target='_blank' rel='noopener'>
                <Image src={src} width={width} height={height} className='animated-logo'/>
            </a>

    )
}
