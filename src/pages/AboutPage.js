import { useEffect, useState } from "react";
import './AboutPage.css';
import AboutContent from "../assets/textContent/AboutContent";

export default function AboutPage() {
    const [sectionIndexHovered, setSectionIndexHovered] = useState(-1);

    return (
        <div className="absolute top-0">
            <div className="fixed top-0 w-screen h-1/2 bg-indigo-100" />
            <div className="fixed bottom-0 w-screen h-1/2 bg-yellow-50" />
            <div className="w-screen h-screen flex flex-row flex-nowrap items-center justify-center">
                <div className="flex w-5/6 h-2/3 filter drop-shadow-2xl">
                    {AboutContent.map((section, i) =>
                        <div key={i}
                            className={`slide relative grid flex-1 h-full ${section.backgroundImage} bg-cover bg-center 
                                        transition-all duration-700 ease-in-out 
                                        hover:flex-grow hover:cursor-pointer`}>
                            <div className="flex flex-col justify-center items-center bg-white bg-opacity-40 
                                            transition duration-1000 ease-in-out 
                                            hover:bg-transparent"
                                onMouseEnter={() => setSectionIndexHovered(i)}
                                onMouseLeave={() => setSectionIndexHovered(-1)}>
                                {displaySectionContent(sectionIndexHovered, i, section)}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div >
    )
}

function displaySectionContent(iHovered, i, section) {
    if (iHovered === i)
        return <>
            <h2 className="text-5xl font-galada transition duration-1000 ease-in-out text-pink-400">
                {section.title}
            </h2>
            <Delayed waitBeforeShow="100">
                <p className="absolute text-center bg-white bg-opacity-40 mx-10 mt-56 p-3 transition delay-1000 duration-1000 ease-in-out">
                    {section.paragraph}
                </p>
            </Delayed>
        </>
    if (iHovered === -1)
        return <Delayed>
            <h2 className="text-5xl font-galada transition delay-1000 duration-1000 ease-in-out">
                {section.title}
            </h2>
        </Delayed>
    return null
}

function Delayed({ children, waitBeforeShow = 500 }) {
    const [isShown, setIsShown] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsShown(true);
        }, waitBeforeShow);
    }, [waitBeforeShow]);

    return isShown ? children : null;
}