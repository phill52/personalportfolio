import MultiImagePreview from "./MultiImagePreview";
import Image from "next/image";
import SimpleImageSlider from "react-simple-image-slider";

const Project = ({project}) => {
    return (
        <div className='flex flex-col bg-darkocean justify-center items-center px-7 rounded-2xl py-4 w-full relative'>
            <a href={project.link} target='_blank' rel='noopener'>
                <h3 className='text-pearl lg:text-3xl text-lg font-bold w-auto'>{project.title}</h3>
            </a>
            <div className='absolute top-[52px] w-[90%] lg:h-[315px] h-[150px] self-center mx-auto'>
                <SimpleImageSlider width='100%' height='100%' images={project.images} showBullets={true} showNavs={true} navStyle={2} navSize={30} navMargin={10} />
            </div>
            <p className='text-pearl text-lg lg:pt-[21rem] pt-[11rem]'> {project.shortDescription}
            <br/>
            Technologies used: {project.tech.map((item)=>
                {return <Image src={item} key={item.split('.')} height={50} width={50} className='inline-block pl-2' alt={`${item}`}/>}
            )}
            </p>
        </div>
    )
}

export default Project;
