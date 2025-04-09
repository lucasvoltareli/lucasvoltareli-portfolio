import {RevealOnScroll} from '../RevealOnScroll'
<<<<<<< HEAD
import notBullSht from '../../assets/projects/notbullsht.png'
import papaleg from '../../assets/projects/papaleg.png'
import leaff from '../../assets/projects/first-ecommerce.png'
import devlinks from '../../assets/projects/devlinks.png'

=======
import notBullSht from '../../assets/notbullsht.png'
import papaleg from '../../assets/papaleg.png'
>>>>>>> 16f34e0a4ef500cd4ed3b2433b8c09dd59a5f9a4

export const Projects = () => {

    const openSite = (link) => {
        window.open(link, "_blank");
    }

    return <section id="projects" className="min-h-screen flex items-center justify-center py-20">

        <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-400 bg-clip-text text-transparent text-center"> Featured Projects </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<<<<<<< HEAD
                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-purple-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
=======
                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
>>>>>>> 16f34e0a4ef500cd4ed3b2433b8c09dd59a5f9a4
                    <img src={notBullSht} alt="" className='rounded mb-4'/>
                    <h3 className="text-xl font-bold mb-2"> NotBullSht - Second Hand Store </h3>
                    <p className="text-gray-400 mb-4"> I used my school homework as a start to make this ecommerce </p>
                    <div>
                        {["Html", "Css", "JavaScript"].map((tech, key) => (
                            <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">

                            {tech}
                            </span>
                        ))}
                    </div>
                    <div className="flex justify-between items-center">
<<<<<<< HEAD
                        <a onClick={() => { openSite("https://notbullsht.netlify.app/") }} className="text-blue-400 hover:text-blue-300 transition-colors my-4 cursor-pointer"> View Project → </a>
                    </div>
                </div>

                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-purple-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
=======
                        <a onClick={() => { openSite("https://notbullsht.netlify.app/") }} className="text-blue-400 hover:text-blue-300 transition-colors my-4"> View Project → </a>
                    </div>
                </div>

                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
>>>>>>> 16f34e0a4ef500cd4ed3b2433b8c09dd59a5f9a4
                    <img src={papaleg} alt="" className='rounded mb-4'/>
                    <h3 className="text-xl font-bold mb-2"> Papaléguas Agropet - Petshop </h3>
                    <p className="text-gray-400 mb-4"> I made this website to a Petshop </p>
                    <div>
                        {["Html", "Css", "JavaScript"].map((tech, key) => (
                            <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">

                            {tech}
                            </span>
                        ))}
                    </div>
                    <div className="flex justify-between items-center">
<<<<<<< HEAD
                        <a onClick={() => { openSite("https://www.papaleguasagropet.com/") }} className="text-blue-400 hover:text-blue-300 transition-colors my-4 cursor-pointer"> View Project → </a>
                    </div>
                </div>

                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-purple-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                    <img src={leaff} alt="" className='rounded mb-4'/>
                    <h3 className="text-xl font-bold mb-2"> Leaff - Ecommerce </h3>
                    <p className="text-gray-400 mb-4"> I made this website to my school homework </p>
                    <div>
                        {["Html", "Css", "JavaScript"].map((tech, key) => (
                            <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">

                            {tech}
                            </span>
                        ))}
                    </div>
                    <div className="flex justify-between items-center">
                        <a onClick={() => { openSite("https://leaff-ecommerce.netlify.app/") }} className="text-blue-400 hover:text-blue-300 transition-colors my-4 cursor-pointer"> View Project → </a>
                    </div>
                </div>

                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-purple-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                    <img src={devlinks} alt="" className='rounded mb-4'/>
                    <h3 className="text-xl font-bold mb-2"> Devlinks - Customized Links </h3>
                    <p className="text-gray-400 mb-4"> I made a course which i developed this website </p>
                    <div>
                        {["Html", "Css", "JavaScript"].map((tech, key) => (
                            <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">

                            {tech}
                            </span>
                        ))}
                    </div>
                    <div className="flex justify-between items-center">
                        <a onClick={() => { openSite("https://devlinks-ui.netlify.app/") }} className="text-blue-400 hover:text-blue-300 transition-colors my-4 cursor-pointer"> View Project → </a>
                    </div>
                </div>

=======
                        <a onClick={() => { openSite("https://www.papaleguasagropet.com/") }} className="text-blue-400 hover:text-blue-300 transition-colors my-4"> View Project → </a>
                    </div>
                </div>
>>>>>>> 16f34e0a4ef500cd4ed3b2433b8c09dd59a5f9a4
            </div>
            
        </div>
        </RevealOnScroll>
    </section>
}