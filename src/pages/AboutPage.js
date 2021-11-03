import React from "react";
import './AboutPage.css';
import AboutContent from "../assets/textContent/AboutContent";

export default function AboutPage() {
    return (
        <div className="absolute top-0">
            <div className="fixed top-0 w-screen h-1/2 bg-indigo-100" />
            <div className="fixed bottom-0 w-screen h-1/2 bg-yellow-50" />
            <div className="flex w-screen h-screen items-center justify-center">
                <div className={`flex w-5/6 h-2/3 grid grid-cols-6 gap-3 filter drop-shadow-2xl`}>
                    {AboutContent.map((section, i) =>
                        <div
                            key={i}
                            className={`relative grid col-span-1 h-full ${section.backgroundImage} bg-cover bg-center transition duration-500 ease-in-out hover:flex-5`}
                        >
                            <div className="z-10 flex flex-col justify-center items-center text-center bg-white bg-opacity-40 transition duration-1000 ease-in-out hover:bg-transparent hover:text-pink-400">
                                <h2 className="text-6xl font-galada">{section.title}</h2>
                                {/* <p>{section.subtitle}</p> */}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div >
    )
}