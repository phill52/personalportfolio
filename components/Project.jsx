import MultiImagePreview from "./MultiImagePreview";
import Image from "next/image";
const Project = ({project}) => {
    return (<div className='flex flex-col bg-darkocean justify-center items-center px-10 rounded-2xl py-4 lg:w-5/12 w-full'>
    <h3 className='text-pearl lg:text-3xl text-lg font-bold w-auto'>{project.title}</h3>
        <MultiImagePreview images={project.images} />
        
        <p className='text-pearl text-lg pt-3'> {project.shortDescription}
        <br/>
        Technologies used: {project.tech.map((item)=>
            {return <Image src={item} height={50} width={50} className='inline-block pl-2' alt={`${item}`}/>}
        )}
        </p>
    </div>)
}
export default Project;