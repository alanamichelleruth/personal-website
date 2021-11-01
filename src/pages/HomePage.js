import React from 'react'
import skydiving from './../assets/images/skydiving.jpeg'
import { mainIntro, closingStatement } from './../assets/textContent/HomePageContent.js'

export default function HomePage() {
  return (
    <>
      <div className="bg-blue-100 md:flex md:flex-row overflow-hidden">
        <div className="z-20 relative md:w-1/2 md:h-full overflow-y-auto">
          <main className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 mb-5 md:mb-0 mt-6">
            <div className="text-center md:text-left">
              <h1 className="md:text-8xl text-6xl font-galada tracking-tight font-extrabold md:mr-4">
                <span className="block inline">Hi, my name is</span>
                <br />
                <span className="block text-pink-400 inline mt-2 md:mr-12">Alana Ruth</span>
              </h1>
              <div className="mt-3 mb-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl md:text-2xl md:ml-0">
                <p className="md:mr-28">{mainIntro}</p>
                <br />
                <p className="md:mr-32">{closingStatement}</p>
              </div>
            </div>
          </main>
        </div>
        <svg
          fill="currentColor"
          viewBox="0 0 100 100"
          className="md:z-10 md:fixed absolute md:inset-y-0 md:h-screen top-0 left-0 text-blue-100 w-1/2 "
          preserveAspectRatio="none"
        >
          <polygon points="0,0 100,0 70,100 0,100"></polygon>
        </svg>
      </div>
      <div className="md:fixed md:inset-y-0 md:right-0 md:w-2/3">
        <img
          className="object-cover h-screen"
          src={skydiving}
          alt="Alana skydiving in Queenstown, New Zealand" />
      </div>
    </>
  )
}