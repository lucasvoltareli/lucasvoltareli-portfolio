import { useState } from "react"
import { RevealOnScroll } from "../RevealOnScroll"
import emailjs from 'emailjs-com'

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    })


    const SERVICE_ID = "service_5d7y69g"
    const TEMPLATE_ID = "template_pypdium"
    const PUBLIC_KEY = "nLkc_v6yfWGebyZLM"


    const handleSubmit = (e) => {
        e.preventDefault()
        
        emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, e.target, import.meta.env.VITE_PUBLIC_KEY).then((result) => {
            alert("Message Sent!");
            setFormData({name: "", email:"", message:""})
        }).catch(() => alert("Oops! Something went wrong. Please try again."));
    }

    return <section id="contact" className="min-h-screen flex items-center justify-center py-20">
        <RevealOnScroll>
            <div className="px-4 w-150">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-400 bg-clip-text text-transparent text-center"> Contact Me </h2>
                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="relative">
                        <input type="text" id="name" name="name" placeholder="Name" required value={formData.name} className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-purple-800 focus:bg-purple-800/5" onChange={(e) => setFormData({...formData, name: e.target.value})} />
                    </div>

                    <div className="relative">
                        <input type="email" id="email" name="email" placeholder="example@gmail.com" required value={formData.email} className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-purple-800 focus:bg-purple-800/5" onChange={(e) => setFormData({...formData, email: e.target.value})} />
                    </div>

                    <div className="relative">
                        <textarea name="message" id="message" rows={5} placeholder="Your Message" required value={formData.message} className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-purple-800 focus:bg-purple-800/5" onChange={(e) => setFormData({...formData, message: e.target.value})}></textarea>
                    </div>
                    <button type="submit" className="w-full bg-purple-800 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]">
                        Send Message
                    </button>
                </form>
            </div>    
        </RevealOnScroll>
    </section>
}