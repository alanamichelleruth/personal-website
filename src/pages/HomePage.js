import React from 'react'
import skydiving from './../assets/images/skydiving.jpeg'
import { mainIntro, closingStatement } from './../assets/textContent/HomePageContent.js'

export default function HomePage() {
  return (
    <>
      <div className="relative bg-blue-100 lg:flex lg:flex-row overflow-hidden">
        <div className="z-20 relative lg:w-1/2 lg:h-screen overflow-y-auto">
          <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-5 lg:mb-0 mt-28">
            <div className="text-center lg:text-left">
              <h1 className="lg:text-8xl text-6xl font-galada tracking-tight font-extrabold lg:mr-4">
                <span className="block inline">Hi, my name is</span>
                <br />
                <span className="block text-pink-400 inline mt-2">Alana Ruth</span>
              </h1>
              <div className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:text-2xl lg:ml-0">
                <p className="lg:mr-28">{mainIntro}</p>
                <br />
                <p className="lg:mr-32">{closingStatement}</p>
              </div>
            </div>
          </main>
        </div>
        <div className="z-10 absolute w-1/2 lg:h-screen absolute top-0 left-0">
          <svg
            fill="currentColor"
            viewBox="0 0 100 100"
            class="absolute inset-y-0 h-screen text-blue-100 w-full"
            preserveAspectRatio="none"
          >
            <polygon points="0,0 100,0 70,100 0,100"></polygon>
          </svg>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-2/3 h-full">
        <img
          className="object-cover h-screen"
          src={skydiving}
          alt="Alana skydiving in Queenstown, New Zealand" />
      </div>
    </>
  )
}

// import React from "react";
// import skydiving from './../assets/images/skydiving.jpeg'
// import HomePageContent from './../assets/textContent/HomePageContent.js'

// export default function HomePage() {
//     return (
//         <>
//             <div className="flex flex-row h-screen overflow-hidden bg-contain bg-pink-600">
//                 <div className="relative z-10 w-2/3 px-6 my-20 py-8 ">
//                     <h2 className="font-galada font-thin text-8xl text-offwhite">Hi, my name's Alana Ruth</h2>
//                     <p className="text-lg w-1/2">
//                         {HomePageContent}
//                     </p>
//                 </div>
//             </div>
//             <div className="absolute top-0 right-0 block w-3/4 h-full">
//                 <img alt="Snowy mountain lake" className="object-cover min-w-full h-full" src={skydiving} />
//             </div>
//         </>
//     )
// }