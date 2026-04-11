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
        { name: 'Alumni', to: '/alumni' },
        { name: 'Contact us', to: '/contact' },

    ];

    return (
        <>
            <header
                className={`sticky top-0 z-50 w-full transition-all duration-300 ${scrolled
                    ? 'bg-white/80 backdrop-blur-xl shadow-md h-[70px]'
                    : 'bg-white h-[85px] border-b border-black/5'
                    }`}
            >
                <nav className="mx-auto flex h-full max-w-screen-2xl items-center justify-between px-12">
                    {/* Brand Section with Fluid Scaling */}
                    <Link
                        to="/"
                        className="flex shrink-0 cursor-pointer items-center gap-3 sm:gap-5 group"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        <img
                            src={logoIcon}
                            alt="Logo Icon"
                            className="h-[clamp(2.5rem,5vw,3.5rem)] w-auto object-contain transition-transform duration-500 group-hover:scale-110"
                            onError={(e) => { e.target.style.display = 'none'; }}
                        />
                        <div className="text-2xl font-bold text-primary-container tracking-tighter font-headline hover:text-primary transition-colors">
                            Quantum Education
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <ul className="hidden grow justify-center gap-10 lg:flex">
                        {navItems.map((item) => (
                            <li key={item.name}>
                                <NavLink
                                    to={item.to}
                                    className={({ isActive }) => `
                                        relative whitespace-nowrap text-sm font-headline font-bold uppercase tracking-widest transition-all duration-200 
                                        ${isActive ? 'text-primary' : 'text-on-surface-variant hover:text-primary'}
                                        after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300
                                        ${isActive ? 'after:w-full' : 'after:w-0 hover:after:w-full'}
                                    `}
                                >
                                    {item.name}
                                </NavLink>
                            </li>
                        ))}
                    </ul>

                    {/* Desktop CTA */}
                    <div className="hidden shrink-0 lg:block">
                        <Link to="/contact">
                            <button className="hero-gradient px-8 py-3 rounded-full text-white font-headline font-bold text-sm hover:scale-[1.05] transition-transform duration-200 active:scale-95 shadow-lg shadow-primary/20">
                                Apply Now
                            </button>
                        </Link>
                    </div>

                    {/* Mobile Hamburger Controls */}
                    <div className="flex lg:hidden">
                        <button
                            onClick={toggleMenu}
                            className="relative z-60 flex h-12 w-12 flex-col items-center justify-center gap-1.5 focus:outline-none"
                            aria-label="Toggle Menu"
                            aria-expanded={isMenuOpen}
                        >
                            <span className={`block h-0.5 w-6 rounded-full bg-primary-container transition-all duration-300 ${isMenuOpen ? 'translate-y-2 rotate-45' : ''}`}></span>
                            <span className={`block h-0.5 w-6 rounded-full bg-primary-container transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                            <span className={`block h-0.5 w-6 rounded-full bg-primary-container transition-all duration-300 ${isMenuOpen ? '-translate-y-2 -rotate-45' : ''}`}></span>
                        </button>
                    </div>
                </nav>
            </header>

            {/* Mobile Menu Overlay with Blur & Light Dim */}
            <div
                className={`fixed inset-0 z-50 bg-black/20 backdrop-blur-sm transition-opacity duration-400 ease-in-out lg:hidden ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                    }`}
                onClick={toggleMenu}
            />

            {/* Side-sliding Mobile Menu (25%-50% Width) */}
            <div
                className={`fixed top-0 right-0 z-55 h-full w-[clamp(280px,40%,450px)] bg-white shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.4, 0, 0.2, 1)] lg:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                <div className="flex flex-col h-full pt-24 px-10 pb-10">
                    {/* Navigation Items */}
                    <ul className="flex flex-col gap-8 overflow-y-auto grow no-scrollbar">
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
                                        text-2xl font-headline font-extrabold block py-2 transition-colors
                                        ${isActive ? 'text-primary' : 'text-primary-container hover:text-primary'}
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
                        className={`mt-8 pt-8 border-t border-black/5 transition-all duration-500 ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                    >
                        <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                            <button className="w-full rounded-2xl hero-gradient py-5 text-lg font-headline font-bold text-white shadow-xl transition-transform active:scale-[0.98]">
                                Apply Now
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NavBar;