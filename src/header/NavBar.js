import './NavBar.css';
import { React, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from './../assets/logo.png'
import { Fade as Hamburger } from 'hamburger-react'
import { Transition } from "@headlessui/react"

//Blog page TBD
const pages = ['About', 'Work', 'Interests', /* 'Blog' */];
const navLinks = pages.map(page => (
    <NavLink
        key={page}
        className="no-underline font-galada text-offwhite text-3xl hover:text-pink-400 visited:text-offwhite"
        activeClassName="active"
        exact to={`/${page.toLowerCase()}`}
    >
        {page}
    </NavLink>
))

export default function ResponsiveNavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <div className="z-30">
            <NavBar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            <Transition
                show={isMenuOpen}
                className="absolute z-30 sm:hidden"
                enter="transition ease duration-700 transform"
                enterFrom="opacity-0 -translate-y-full"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease duration-1000 transform"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 -translate-y-full"
            >
                <MobileMenu>
                    {navLinks}
                </MobileMenu>
            </Transition>
        </div>
    );
};

function NavBar({ isMenuOpen, setIsMenuOpen }) {
    return (
        <div className="sticky top-0 bg-gray-800 z-30 bg-opacity-90 flex place-items-center justify-center justify-between p-4 backdrop-filter backdrop-blur-sm">
            <div className="flex place-items-center place-self-center">
                <Link to="/">
                    <img className="h-10 w-10" src={logo} alt="Alana Ruth logo" />
                </Link>
            </div>
            <nav className="hidden sm:block space-x-6 flex justify-items-center">
                {navLinks}
            </nav>
            <div className="sm:hidden">
                <Hamburger toggled={isMenuOpen} toggle={setIsMenuOpen} duration={0.5} color="#f8f8ff" rounded />
            </div>
        </div>

    )
}

function MobileMenu({ children }) {
    return (
        <div className="z-30 w-screen bg-gray-700">
            <div className="p-2 flex flex-col items-center space-y-3 p-5">
                {children}
            </div>
        </div>
    )
}