import React from "react";
import WorkContent from "../assets/textContent/WorkContent";

export default function WorkPage() {
    return (
        <div className="absolute top-0 bg-emerald-100">
            <div className="w-screen h-screen flex flex-row items-center justify-center">
                <div className="w-5/6 h-2/3 flex flex-row flex-wrap items-center justify-center">
                    {WorkContent.map((section, i) =>
                        <div key={i} className="group flex flex-col filter drop-shadow-2xl items-center justify-center m-3 hover:cursor-pointer"
                             onClick={console.log("here")}>
                            <img src={section.imageSrc}
                                 alt={section.imageAlt}
                                 className="h-80 w-80 object-cover object-center rounded-lg shadow-md" />
                            <div className="px-2 -mt-12">
                                <div className={`bg-orange-100 p-4 rounded-lg shadow-lg w-60 text-center
                                                 transition duration-500 ease-in-out group-hover:bg-orange-200 transform group-hover:-translate-y-1 group-hover:scale-110`}>
                                    <h4 className="mt-1 text-xl font-galada font-semibold leading-tight">{section.title}</h4>
                                    <div className="mt-1 text-grey-600 text-sm">
                                        {section.content}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}