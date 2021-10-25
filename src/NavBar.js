import './NavBar.css';
import { React, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from './assets/logo.png'
import { Fade as Hamburger } from 'hamburger-react'
import { Transition } from "@headlessui/react"

const pages = ['About', 'Work', '!Work', 'Blog'];
const navLinks = pages.map(page => (
    <NavLink
        key={page}
        className="no-underline font-galada text-offwhite text-3xl hover:text-pink-400 visited:text-offwhite"
        activeClassName="active"
        exact to={`/${page}`}
    >
        {page}
    </NavLink>
))

export default function ResponsiveNavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <>
            <NavBar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            <Transition
                show={isMenuOpen}
                className="transition duration-500 sm:hidden"
                enter="transform transition ease-in-out duration-500"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
            >
                <MobileMenu>
                    {navLinks}
                </MobileMenu>
            </Transition>
        </>
    );
};

function NavBar({ isMenuOpen, setIsMenuOpen }) {
    return (
        <div className="bg-gray-800 flex place-items-center justify-center justify-between p-4">
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
        <div className="bg-gray-800">
            <div className="p-2 flex flex-col items-center space-y-3 p-5">
                {children}
            </div>
        </div>
    )
}