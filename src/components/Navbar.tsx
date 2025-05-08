import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/imgs/logo-1.webp";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Skills", href: "#skills" },
        { name: "Projects", href: "#projects" },
        { name: "Experience", href: "#experience" },
        { name: "Blog", href: "#blog" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${
                isScrolled
                    ? "bg-[#03045e]/90 backdrop-blur-sm py-2 shadow-lg"
                    : "bg-transparent py-4"
            }`}
        >
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center">
                    {/* <a
                        href="#home"
                        className="text-2xl font-bold text-[#48cae4]"
                    >
                        YZ<span className="text-[#90e0ef]">.</span>
                    </a> */}
                    <a
                        href="#home"
                        className="flex items-center space-x-2 group"
                    >
                        <div className="bg-gradient-to-tr from-[#48cae4] to-[#90e0ef] rounded-full w-10 h-10 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-200">
                            <img src={logo} alt="YZ" />
                        </div>
                    </a>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-[#caf0f8] hover:text-white transition-colors duration-300"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={toggleMenu}
                        className="md:hidden text-white focus:outline-none"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden mt-4 bg-[#023e8a] rounded-lg p-4 shadow-lg">
                        <div className="flex flex-col space-y-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-[#caf0f8] hover:text-white py-2 px-4 rounded-md hover:bg-[#0077b6] transition-colors duration-300"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
