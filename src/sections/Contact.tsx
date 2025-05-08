import React from "react";
import SectionTitle from "../components/SectionTitle";
import SocialLinks from "../components/SocialLinks";
import { Mail, MapPin, Phone } from "lucide-react";
import ContactForm from "../components/ContactForm";

const Contact = () => {
    return (
        <section
            id="contact"
            className="py-20 bg-gradient-to-b from-[#03045e] to-[#023e8a]"
        >
            <div className="container mx-auto px-4">
                <SectionTitle
                    title="Get In Touch"
                    subtitle="Have a question or want to work together? Feel free to reach out!"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    <div className="bg-gradient-to-br from-[#023e8a] to-[#0077b6] p-8 rounded-lg shadow-lg">
                        <h3 className="text-2xl font-bold text-[#caf0f8] mb-6">
                            Contact Information
                        </h3>

                        <div className="space-y-6">
                            <div className="flex items-start">
                                <div className="bg-[#0096c7] p-3 rounded-full mr-4">
                                    <Mail size={20} className="text-white" />
                                </div>
                                <div>
                                    <h4 className="text-[#ade8f4] font-medium">
                                        Email
                                    </h4>
                                    <a
                                        href="mailto:yabetszekaryas07@gmail.com"
                                        className="text-white hover:text-[#90e0ef] transition-colors"
                                    >
                                        yabetszekaryas07@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="bg-[#0096c7] p-3 rounded-full mr-4">
                                    <MapPin size={20} className="text-white" />
                                </div>
                                <div>
                                    <h4 className="text-[#ade8f4] font-medium">
                                        Location
                                    </h4>
                                    <p className="text-white">
                                        Adama, Ethiopia
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="bg-[#0096c7] p-3 rounded-full mr-4">
                                    <Phone size={20} className="text-white" />
                                </div>
                                <div>
                                    <h4 className="text-[#ade8f4] font-medium">
                                        Phone No.
                                    </h4>
                                    <p className="text-white">+251-964753061</p>
                                    <p className="text-white">+251-967301044</p>
                                </div>
                            </div>

                            <div>
                                <h4 className="text-[#ade8f4] font-medium mb-3">
                                    Connect With Me
                                </h4>
                                <SocialLinks />
                            </div>
                        </div>
                    </div>

                    <ContactForm />
                </div>
            </div>
        </section>
    );
};

export default Contact;
