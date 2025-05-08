import React from "react";
import SocialLinks from "./SocialLinks";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#03045e] text-white py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div>
                        <h3 className="text-2xl font-bold mb-4 text-[#48cae4]">
                            Yabets Zekaryas
                        </h3>
                        <p className="mb-4 text-[#caf0f8]">
                            Backend Developer | Rust & DSA Enthusiast
                        </p>
                        <SocialLinks className="justify-start" />
                    </div>
                    <div className="grid grid-cols-2 gap-8">
                        <div>
                            <h4 className="text-lg font-semibold mb-4 text-[#48cae4]">
                                Quick Links
                            </h4>
                            <ul className="space-y-2">
                                <li>
                                    <a
                                        href="#about"
                                        className="text-[#ade8f4] hover:text-white transition-colors"
                                    >
                                        About
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#skills"
                                        className="text-[#ade8f4] hover:text-white transition-colors"
                                    >
                                        Skills
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#projects"
                                        className="text-[#ade8f4] hover:text-white transition-colors"
                                    >
                                        Projects
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#blog"
                                        className="text-[#ade8f4] hover:text-white transition-colors"
                                    >
                                        Blog
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold mb-4 text-[#48cae4]">
                                Contact
                            </h4>
                            <ul className="space-y-2">
                                <li className="text-[#ade8f4]">
                                    Adama, Ethiopia
                                </li>
                                <li>
                                    <a
                                        href="mailto:yabetszekaryas07@gmail.com"
                                        className="text-[#ade8f4] hover:text-white transition-colors"
                                    >
                                        yabetszekaryas07@gmail.com
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="border-t border-[#0077b6] pt-8 text-center">
                    <p className="text-[#90e0ef]">
                        © {currentYear} Yabets Zekaryas. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
