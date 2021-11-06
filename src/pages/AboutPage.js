import { useEffect, useState } from "react";
import './AboutPage.css';
import AboutContent from "../assets/textContent/AboutContent";
import useReactSimpleMatchMedia from 'react-simple-matchmedia'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
// import Swiper core and required modules
import SwiperCore, {
    Pagination
} from 'swiper';
// install Swiper modules
SwiperCore.use([Pagination]);

export default function AboutPage() {
    const isMediaMobile = useReactSimpleMatchMedia('(max-width: 768px)');
    console.log(isMediaMobile)
    return (
        <div className="absolute top-0">
            <div className="fixed top-0 w-screen h-1/2 bg-indigo-100" />
            <div className="fixed bottom-0 w-screen h-1/2 bg-yellow-50" />

            <div className="w-screen h-screen flex flex-row flex-nowrap items-center justify-center">
                <div className="flex w-5/6 h-2/3 filter drop-shadow-2xl">
                    {isMediaMobile ? <MobileSwiper /> : <DesktopSlider />}
                </div>
            </div>
        </div>
    )
}

function MobileSwiper() {
    return (
        <Swiper pagination={true}>
            {AboutContent.map((section, i) =>
                <SwiperSlide key={i} className={`h-full ${section.backgroundImage} bg-cover bg-center`}>
                    <div className="flex flex-col justify-center items-center text-center">
                        <h2 className="text-4xl lg:text-5xl font-galada text-pink-500 mt-5">
                            {section.title}
                        </h2>
                        <p className="text-sm bg-white bg-opacity-40 mx-5 p-3">
                            {section.paragraph}
                        </p>
                    </div>
                </SwiperSlide>
            )}
        </Swiper>
    )
}

function DesktopSlider() {
    const [sectionIndexHovered, setSectionIndexHovered] = useState(-1)

    return (
        AboutContent.map((section, i) =>
            <div key={i}
                className={`slide relative grid flex-1 h-full ${section.backgroundImage} bg-cover bg-center 
                                        transition-all duration-700 ease-in-out 
                                        hover:flex-grow hover:cursor-pointer`}>
                <div className="flex flex-col justify-center items-center bg-white bg-opacity-40 
                                            transition duration-1000 ease-in-out 
                                            hover:bg-transparent"
                    onMouseEnter={() => setSectionIndexHovered(i)}
                    onMouseLeave={() => setSectionIndexHovered(-1)}>
                    {DisplaySectionContent(sectionIndexHovered, i, section)}
                </div>
            </div>
        )
    )
}

function DisplaySectionContent(iHovered, i, section) {
    if (iHovered === i)
        return <>
            <h2 className="text-4xl lg:text-5xl font-galada transition duration-1000 ease-in-out text-pink-400">
                {section.title}
            </h2>
            <Delayed waitBeforeShow="200">
                <p className="absolute text-center bg-white bg-opacity-40 mx-10 mt-56 p-3 transition delay-1000 duration-1000 ease-in-out">
                    {section.paragraph}
                </p>
            </Delayed>
        </>
    if (iHovered === -1)
        return <Delayed>
            <h2 className="text-4xl lg:text-5xl font-galada transition delay-1000 duration-1000 ease-in-out">
                {section.title}
            </h2>
        </Delayed>
    return null
}

function Delayed({ children, waitBeforeShow = 500 }) {
    const [isShown, setIsShown] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsShown(true);
        }, waitBeforeShow);
        return () => clearTimeout(timeout)
    }, [waitBeforeShow]);

    return isShown ? children : null;
}