import React, { useState } from 'react'
import Image, { StaticImageData } from 'next/image'
import ProjectTechIcon from './ProjectTechIcon';
import TelegramIcon from '@mui/icons-material/Telegram';
import GitHubIcon from '@mui/icons-material/GitHub';

interface Props {
  project_image: StaticImageData;
  project_tittle:string;
  project_subtittle:string;
  project_description:string;
  tech_array: string[]
}
const SingleProject = ({project_image, project_tittle, project_subtittle, project_description, tech_array}:Props) => {
  const [isHovered, setIsHovered] = useState<boolean>(false)
  return (
    <div className='single_project relative cursor-pointer rounded-lg overflow-hidden ' onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
        <div className='project_image_container relative'>
            <Image src={project_image} alt='apart_project'/>                    
        </div>
        <div className={`project_absolute_wrapper absolute flex flex-col  items-center gap-4 top-0 w-full h-full bg-[#ffffffe0] ${isHovered ? "opacity-1 " : "opacity-[0]"} transition-all duration-100`}>
            <div className='project_header flex flex-col text-[#444548] font-roboto justify-center items-center'>
                <h1 className='text-[#FF7400] font-semibold text-[26px] xl:text-[22px] 2xl:text-[26px]'>{project_tittle}</h1>
                <span className=' text-[15px] xl:text-[11px] 2xl:text-[12px] font-semibold'>{project_subtittle}</span>                        
            </div>
            <span className='project_description md:text-[16px] lg:text-[20px] xl:text-[14px] 2xl:text-[16px] font-normal text-center p-7'>{project_description}</span>
            <div className='tech_stac_project flex flex-wrap gap-y-4 gap-x-2 font-semibold justify-center items-center max-w-[75%]'>
              {
                tech_array.map(el => <ProjectTechIcon tech_text={el}/>)
              }
            </div>
            <div className='visit_icons flex justify-center items-center gap-3'>
              <div className='visit_icon_wrapper border-[1px] bg-[#fff] p-1 rounded-full flex justify-center items-center  text-[#FF7400]'>
                <TelegramIcon fontSize='medium' color='inherit'/> 
              </div>
              
              <div className='visit_icon_wrapper border-[1px] bg-[#fff] p-1 rounded-full flex justify-center items-center text-[#FF7400]'>
                <GitHubIcon fontSize='medium' color='inherit'/> 
              </div>
            </div>
        </div>
    </div>

  )
}

export default SingleProject
