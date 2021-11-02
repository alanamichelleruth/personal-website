import React, { useEffect, useState } from "react";
import { BiArrowToTop } from "react-icons/bi"

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    // Top: 0 takes us all the way back to the top of the page
    // Behavior: smooth keeps it smooth!
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    useEffect(() => {
        // Button is displayed after scrolling for 500 pixels
        const toggleVisibility = () => {
            if (window.pageYOffset > 500) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);

        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <footer className="fixed inset-x-0 bottom-0 flex justify-end mr-14 z-50">
            {isVisible && <button
                onClick={scrollToTop}
                className="rounded-full border-2 border-pink-400 p-2 m-3"
            >
                <BiArrowToTop color="#F472B6" size="1.75em" />
            </button>}
        </footer>
    );
}