import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react';


const Footer = () => {
    const navLinks = [
        { name: 'Home', to: '/' },
        { name: 'About Us', to: '/about' },
        { name: 'Destinations', to: '/destinations' },
        { name: 'Interview Prep', to: '/interview-preparation' },
        { name: 'Contact', to: '/contact' },
    ];

    const socialLinks = [
        { icon: Facebook, href: '#', label: 'Facebook' },
        { icon: Instagram, href: '#', label: 'Instagram' },
        { icon: Linkedin, href: '#', label: 'LinkedIn' },
        { icon: Twitter, href: '#', label: 'Twitter' },
    ];

    return (
        <footer className="w-full bg-[#001A41] pt-20 pb-10 border-t border-white/10 font-headline">
            <div className="mx-auto max-w-screen-2xl px-12">
                <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
                    
                    {/* Brand Section */}
                    <div className="flex flex-col gap-6">
                        <div className="text-2xl font-black text-primary tracking-tighter">
                            Quantum Education
                        </div>
                        <p className="text-gray-300 text-base leading-relaxed max-w-xs font-body">
                            Nepal's leading educational consultancy for international admissions and visa services.
                        </p>
                        <div className="flex gap-4">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white shadow-sm ring-1 ring-white/10 transition-all hover:bg-primary hover:text-primary-container hover:shadow-lg hover:shadow-primary/20"
                                    aria-label={social.label}
                                >
                                    <social.icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="mb-6 font-bold text-xs uppercase tracking-[0.2em] text-primary">
                            Company
                        </h4>
                        <ul className="flex flex-col gap-4 font-body">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        to={link.to}
                                        className="text-gray-300 transition-colors hover:text-primary hover:translate-x-1 inline-block"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal Links */}
                    <div>
                        <h4 className="mb-6 font-bold text-xs uppercase tracking-[0.2em] text-primary">
                            Legal
                        </h4>
                        <ul className="flex flex-col gap-4 font-body">
                            <li><Link to="/privacy" className="text-gray-300 transition-colors hover:text-primary">Privacy Policy</Link></li>
                            <li><Link to="/terms" className="text-gray-300 transition-colors hover:text-primary">Terms of Service</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="mb-6 font-bold text-xs uppercase tracking-[0.2em] text-primary">
                            Get In Touch
                        </h4>
                        <div className="flex flex-col gap-5 font-body">
                            <div className="flex items-start gap-4">
                                <div className="mt-1 rounded-lg bg-primary/10 p-2 text-primary">
                                    <MapPin size={18} />
                                </div>
                                <span className="text-gray-300 leading-snug">
                                    Putalisadak, Kathmandu, Nepal
                                </span>
                            </div>
                            <a href="tel:+977-9860185949" className="flex items-center gap-4 group">
                                <div className="rounded-lg bg-primary/10 p-2 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-container">
                                    <Phone size={18} />
                                </div>
                                <span className="text-gray-300 font-bold transition-colors group-hover:text-primary">
                                    +977-9860185949
                                </span>
                            </a>
                            <a href="mailto:info@quantumeducation.com" className="flex items-center gap-4 group">
                                <div className="rounded-lg bg-primary/10 p-2 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-container">
                                    <Mail size={18} />
                                </div>
                                <span className="text-gray-300 transition-colors group-hover:text-primary lowercase">
                                    info@quantumeducation.com
                                </span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Accreditation Section */}
                <div className="mt-20 border-t border-white/10 pt-12">
                    <h4 className="mb-8 text-center font-bold text-xs uppercase tracking-[0.3em] text-primary/60">
                        Accreditations & Memberships
                    </h4>
                    <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
                        {[
                            { src: '/assets/accreditation/ecan.webp', title: 'ECAN Membership' },
                            { src: '/assets/accreditation/icef-logo.webp', title: 'ICEF Certified' },
                            { src: '/assets/accreditation/qeac-logo.webp', title: 'QEAC Certified' },
                            { src: '/assets/accreditation/aaeri-logo.webp', title: 'AAERI Member' },
                            { src: '/assets/accreditation/NZEAC.webp', title: 'NZEAC Certified' },
                            { src: '/assets/accreditation/AIRC_certified.gif', title: 'AIRC Certified' },
                            { src: '/assets/accreditation/usatc-logo.webp', title: 'USATC Certified' },
                        ].map((logo, index) => (
                            <div key={index} className="flex items-center justify-center" title={logo.title}>
                                <img 
                                    src={logo.src} 
                                    alt={logo.title} 
                                    className="h-10 md:h-14 w-auto object-contain"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 border-t border-white/10 pt-10 text-center font-body">
                    <p className="text-sm font-medium text-gray-500">
                        &copy; {new Date().getFullYear()} Quantum Education. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;