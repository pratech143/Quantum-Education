import React, { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import logoIcon from '../assets/logo-icon.png';
import companyName from '../assets/company-name.png';

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const navigate = useNavigate();

    // Handle scroll for glassmorphism transition
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const navItems = [
        { name: 'Home', to: '/' },
        { name: 'About', to: '/about' },
        { name: 'Destinations', to: '/destinations' },
        { name: 'Contact us', to: '/contact' },
    ];

    return (
        <>
            <header
                className={`sticky top-0 z-50 w-full transition-all duration-300 shadow-sm ${scrolled
                    ? 'bg-white/80 backdrop-blur-md shadow-md h-[70px]'
                    : 'bg-white h-[85px]'
                    }`}
            >
                <nav className="mx-auto flex h-full max-w-7xl items-center justify-between px-6 sm:px-10 lg:px-14">
                    {/* Brand Section with Fluid Scaling */}
                    <Link
                        to="/"
                        className="flex shrink-0 cursor-pointer items-center gap-3 sm:gap-5 group"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        <img
                            src={logoIcon}
                            alt="Logo Icon"
                            className="h-[clamp(3rem,5.5vw,5rem)] w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                            onError={(e) => { e.target.style.display = 'none'; }}
                        />
                        <img
                            src={companyName}
                            alt="Quantum Education"
                            className="h-[clamp(9rem,3.2vw,2.2rem)] w-auto object-contain transition-transform duration-300 group-hover:scale-102"
                            onError={(e) => { e.target.style.display = 'none'; }}
                        />
                    </Link>

                    {/* Desktop Navigation - Scalable Units */}
                    <ul className="hidden grow justify-center gap-[clamp(0.6rem,1.5vw,1.8rem)] md:flex">
                        {navItems.map((item) => (
                            <li key={item.name}>
                                <NavLink
                                    to={item.to}
                                    className={({ isActive }) => `
                                        relative whitespace-nowrap text-[clamp(1.35rem,1.1vw,1rem)] font-medium transition-all duration-200 
                                        ${isActive ? 'text-[#00BCD4]' : 'text-gray-700 hover:text-[#00BCD4]'}
                                        after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:bg-[#00BCD4] after:transition-all after:duration-300
                                        ${isActive ? 'after:w-full' : 'after:w-0 hover:after:w-full'}
                                    `}
                                >
                                    {item.name}
                                </NavLink>
                            </li>
                        ))}
                    </ul>

                    {/* Desktop CTA */}
                    <div className="hidden shrink-0 md:block">
                        <button className="whitespace-nowrap rounded-full bg-[#004D4D] px-7 py-2.5 text-base font-semibold text-white shadow-md transition-all duration-200 hover:bg-[#003333] hover:shadow-lg active:scale-95">
                            Apply Now
                        </button>
                    </div>

                    {/* Mobile Hamburger Controls */}
                    <div className="flex md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="relative z-60 flex h-12 w-12 flex-col items-center justify-center gap-1.5 focus:outline-none"
                            aria-label="Toggle Menu"
                            aria-expanded={isMenuOpen}
                        >
                            <span className={`block h-0.5 w-6 rounded-full bg-gray-800 transition-all duration-300 ${isMenuOpen ? 'translate-y-2 rotate-45' : ''}`}></span>
                            <span className={`block h-0.5 w-6 rounded-full bg-gray-800 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                            <span className={`block h-0.5 w-6 rounded-full bg-gray-800 transition-all duration-300 ${isMenuOpen ? '-translate-y-2 -rotate-45' : ''}`}></span>
                        </button>
                    </div>
                </nav>
            </header>

            {/* Mobile Menu Overlay with Blur & Light Dim */}
            <div
                className={`fixed inset-0 z-50 bg-black/20 backdrop-blur-sm transition-opacity duration-400 ease-in-out md:hidden ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                    }`}
                onClick={toggleMenu}
            />

            {/* Side-sliding Mobile Menu (25%-50% Width) */}
            <div
                className={`fixed top-0 right-0 z-55 h-full w-[clamp(280px,40%,450px)] bg-white shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.4, 0, 0.2, 1)] md:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                <div className="flex flex-col h-full pt-20 px-8 pb-10">
                    {/* Navigation Items */}
                    <ul className="flex flex-col gap-6 overflow-y-auto grow no-scrollbar">
                        {navItems.map((item, index) => (
                            <li
                                key={item.name}
                                style={{ transitionDelay: `${index * 50}ms` }}
                                className={`transition-all duration-500 ${isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}
                            >
                                <NavLink
                                    to={item.to}
                                    onClick={() => setIsMenuOpen(false)}
                                    className={({ isActive }) => `
                                        text-xl font-medium block py-2 transition-colors
                                        ${isActive ? 'text-[#00BCD4]' : 'text-gray-800 hover:text-[#00BCD4]'}
                                    `}
                                >
                                    {item.name}
                                </NavLink>
                            </li>
                        ))}
                    </ul>

                    {/* Pinned CTA at Bottom */}
                    <div
                        style={{ transitionDelay: '300ms' }}
                        className={`mt-8 pt-6 border-t border-gray-100 transition-all duration-500 ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                    >
                        <button className="w-full rounded-xl bg-[#004D4D] py-4 text-lg font-bold text-white shadow-lg transition-transform active:scale-[0.98]">
                            Apply Now
                        </button>
                        <p className="mt-4 text-center text-xs text-gray-400">
                            Begin your educational journey today
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NavBar;