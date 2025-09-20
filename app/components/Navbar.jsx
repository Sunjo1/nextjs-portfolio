import { assets } from '@/assets/assets';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
    const [isScroll, setIsScroll] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const openMenu = () => setIsMenuOpen(true);
    const closeMenu = () => setIsMenuOpen(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScroll(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            {/* Background image */}
            <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden">
                <Image src={assets.header_bg_color} alt="backround" className="w-full" />
            </div>

            {/* Navbar */}
            <nav
                className={`w-full fixed top-0 px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 
                    ${isScroll ? 'bg-white bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:shadow-white/20' : ''
                    }`}
            >
                <Image src={isDarkMode ? assets.logo_dark : assets.logo} alt="logo" className="w-28 cursor-pointer mr-24" />

                {/* Desktop menu */}
                <ul className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white shadow-sm bg-opacity-50
                dark:border dark:border-white/50 dark:bg-transparent">
                    <li><a href="#top" className="font-Ovo">Home</a></li>
                    <li><a href="#about" className="font-Ovo">About me</a></li>
                    <li><a href="#services" className="font-Ovo">Services</a></li>
                    <li><a href="#work" className="font-Ovo">My Work</a></li>
                    <li><a href="#contact" className="font-Ovo">Contact me</a></li>
                </ul>

                {/* Right buttons */}
                <div className="flex items-center gap-4">
                    <button onClick={() => setIsDarkMode(prev => !prev)}>
                        <Image src={isDarkMode ? assets.sun_icon : assets.moon_icon} alt="moon icon" className="w-6" />
                    </button>
                    <a
                        href="#contact"
                        className="hidden lg:flex items-center gap-3 px-10 border border-gray-500 rounded-full ml-4 py-2.5 font-Ovo dark:border-white/50
                        "
                    >
                        Contact <Image src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon} alt="icon" className="w-3" />
                    </a>
                    <button className="block md:hidden ml-3" onClick={openMenu}>
                        <Image src={isDarkMode ? assets.menu_white : assets.menu_black} alt="menu" className="w-6" />
                    </button>
                </div>

                {/* Mobile menu */}
                <div
                    className={`flex md:hidden flex-col gap-4 py-20 px-10 fixed right-0 top-0 bottom-0 w-60 z-50 h-screen bg-rose-50 transition-transform duration-500 
                        ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
                        } dark:bg-darkHover dark:text-white`}
                >
                    <div className="absolute right-6 top-6" onClick={closeMenu}>
                        <Image src={isDarkMode ? assets.close_white : assets.close_black} alt="close menu" className="w-5 cursor-pointer" />
                    </div>
                    <li><a href="#top" className="font-Ovo" onClick={closeMenu}>Home</a></li>
                    <li><a href="#about" className="font-Ovo" onClick={closeMenu}>About me</a></li>
                    <li><a href="#services" className="font-Ovo" onClick={closeMenu}>Services</a></li>
                    <li><a href="#work" className="font-Ovo" onClick={closeMenu}>My Work</a></li>
                    <li><a href="#contact" className="font-Ovo" onClick={closeMenu}>Contact me</a></li>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
