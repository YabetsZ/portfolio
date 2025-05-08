import { useState, useRef } from "react";
import { Send } from "lucide-react";
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from "emailjs-com";

export default function ContactForm() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });

    const recaptchaRef = useRef<ReCAPTCHA | null>(null);
    const [status, setStatus] = useState("");

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setForm({ ...form, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("Sending...");

        try {
            const token = await recaptchaRef.current?.executeAsync();
            recaptchaRef.current?.reset();

            if (!token) {
                setStatus("Captcha verification failed");
                throw new Error("Failed to verify captcha");
            }

            await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                form,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );

            setStatus("Message sent successfully!");
            setForm({ name: "", email: "", message: "" });
        } catch (err) {
            setStatus("Failed to send. Please try again.");
            console.error(err);
        }
    };

    return (
        <div className="bg-gradient-to-br from-[#023e8a] to-[#0077b6] p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-[#caf0f8] mb-6">
                Send Message
            </h3>

            <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name" className="block text-[#ade8f4] mb-2">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        value={form.name}
                        onChange={handleChange}
                        className="w-full bg-[#0077b6]/50 text-white border border-[#0096c7] rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#48cae4]"
                        placeholder="Your name"
                        required
                    />
                </div>

                <div>
                    <label
                        htmlFor="email"
                        className="block text-[#ade8f4] mb-2"
                    >
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        value={form.email}
                        onChange={handleChange}
                        className="w-full bg-[#0077b6]/50 text-white border border-[#0096c7] rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#48cae4]"
                        placeholder="Your email"
                        required
                    />
                </div>

                <div>
                    <label
                        htmlFor="message"
                        className="block text-[#ade8f4] mb-2"
                    >
                        Message
                    </label>
                    <textarea
                        id="message"
                        rows={5}
                        value={form.message}
                        onChange={handleChange}
                        className="w-full bg-[#0077b6]/50 text-white border border-[#0096c7] rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#48cae4]"
                        placeholder="Your message"
                        required
                    ></textarea>
                </div>

                <ReCAPTCHA
                    ref={recaptchaRef}
                    sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
                    size="invisible"
                />
                <button
                    type="submit"
                    className="flex items-center justify-center px-6 py-3 bg-gradient-to-r from-[#0096c7] to-[#00b4d8] text-white font-medium rounded-md transition-transform hover:-translate-y-1"
                >
                    <Send size={18} className="mr-2" />
                    Send Message
                </button>

                {status && <p className="text-sm text-white mt-2">{status}</p>}
            </form>
        </div>
    );
}
