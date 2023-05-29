import ElonSubSection from '@/components/AboutSection/ElonSubSection/ElonSubSection'
import ShowCase from '@/components/AboutSection/ShowCase/ShowCase'
import TrumpSubSection from '@/components/AboutSection/TrumpSubSection/TrumpSubSection'
import HeroHeader from '@/components/HeroHeader/HeroHeader'
import LandingPage from '@/components/LandingPage'
import LandingWithLogo from '@/components/LandingWithLogo/LandingWithLogo'
import Navigation from '@/components/Navigation/Navigation'
import Projects from '@/components/Projects/Projects'
import SectionWrapper from '@/components/SectionWrapper/SectionWrapper'
import DesignToCode from '@/components/Services/DesignToCode'
import Services from '@/components/Services/Services'
import WebDevelopment from '@/components/Services/WebDevelopment'
import WebSolutions from '@/components/Services/WebSolutions'

import Technologies from '@/components/Technologies/Technologies'
import { Parallax } from 'react-scroll-parallax'



import Image from "next/image"

import html from '../public/tech/html.png'
import css from '../public/tech/css.jpg'
import js from '../public/tech/js.png'
import ts from '../public/tech/typescript.png'
import react from '../public/tech/react.png'
import next from '../public/tech/next.png'
import redux from '../public/tech/redux.png'
import form from '../public/tech/reactform.jpg'
import tailwind from '../public/tech/tailwind.jpg'
import mui from '../public/tech/mui.png'
import sanity from '../public/tech/sanity.png'
import mongo from '../public/tech/mongodb.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

export default function Home() {
  return (
    <LandingPage>
      <Navigation/>
      <Parallax speed={-50}>
        <LandingWithLogo/>
      </Parallax>
      <SectionWrapper id='landing_section'>
        <HeroHeader header_text='Services'/>
        <Services>
            <WebDevelopment/>
            <WebSolutions/>
            <DesignToCode/>
          </Services>
          {/* <Technologies/> */}
          <Swiper 
            className="mySwiper w-[100vw]"
            slidesPerView={3}
            autoplay={{
                delay:1000,
                disableOnInteraction: false
            }}
            modules={[Autoplay]}
            centeredSlides={true}
            loop={true}
            >
                <SwiperSlide className='w-fit flex justify-center items-center'><div className='h-[200px] w-fit flex justify-center items-center'><Image width={150} src={html} alt="tech"/></div></SwiperSlide>
                <SwiperSlide className='w-fit flex justify-center items-center'><div className='h-[200px] w-fit flex justify-center items-center'><Image width={150} src={css} alt="tech"/></div></SwiperSlide>
                <SwiperSlide className='w-fit flex justify-center items-center'><div className='h-[200px] w-fit flex justify-center items-center'><Image width={150} src={js} alt="tech"/></div></SwiperSlide>
                <SwiperSlide className='w-fit flex justify-center items-center'><div className='h-[200px] w-fit flex justify-center items-center'><Image width={150} src={ts} alt="tech"/></div></SwiperSlide>
                <SwiperSlide className='w-fit flex justify-center items-center'><div className='h-[200px] w-fit flex justify-center items-center'><Image width={150} src={react} alt="tech"/></div></SwiperSlide>
                <SwiperSlide className='w-fit flex justify-center items-center'><div className='h-[200px] w-fit flex justify-center items-center'><Image width={150} src={next} alt="tech"/></div></SwiperSlide>
                <SwiperSlide className='w-fit flex justify-center items-center'><div className='h-[200px] w-fit flex justify-center items-center'><Image width={150} src={redux} alt="tech"/></div></SwiperSlide>
                <SwiperSlide className='w-fit flex justify-center items-center'><div className='h-[200px] w-fit flex justify-center items-center'><Image width={150} src={form} alt="tech"/></div></SwiperSlide>
                <SwiperSlide className='w-fit flex justify-center items-center'><div className='h-[200px] w-fit flex justify-center items-center'><Image width={150} src={tailwind} alt="tech"/></div></SwiperSlide>
                <SwiperSlide className='w-fit flex justify-center items-center'><div className='h-[200px] w-fit flex justify-center items-center'><Image width={150} src={mui} alt="tech"/></div></SwiperSlide>
                <SwiperSlide className='w-fit flex justify-center items-center'><div className='h-[200px] w-fit flex justify-center items-center'><Image width={150} src={sanity} alt="tech"/></div></SwiperSlide>
                <SwiperSlide className='w-fit flex justify-center items-center'><div className='h-[200px] w-fit flex justify-center items-center'><Image width={150} src={mongo} alt="tech"/></div></SwiperSlide>
            </Swiper>            
          <ShowCase/>
          <ElonSubSection/>
          <HeroHeader header_text='Projects'/>
          <Projects/>
      </SectionWrapper>

    </LandingPage>
  )
}
