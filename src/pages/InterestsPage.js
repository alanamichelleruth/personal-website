import React from "react";
import InterestsContent from "./../assets/textContent/InterestsContent"

export default function InterestsPage() {
    return (
        <div className="absolute top-0">
            {InterestsContent.map((interest, i) =>
                <div key={i} className={`${interest.backgroundColor} md:flex md:flex-row-reverse`}>
                    <div className="md:sticky md:top-0 md:w-5/12 lg:w-1/2 h-screen flex justify-center items-center text-center flex-col p-10">
                        <h2 className="text-6xl font-galada mb-5">{interest.title}</h2>
                        <p>{interest.subtitle}</p>
                    </div>
                    <div className="md:w-7/12 md:mr-auto">
                        {interest.images.map((image, i) =>
                            <img key={i} className="object-cover w-full" src={image.src} alt={image.alt}></img>
                        )}
                    </div>
                </div>
            )}
        </div>
    )
}