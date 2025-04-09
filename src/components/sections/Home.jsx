import {RevealOnScroll} from '../RevealOnScroll'

export const Home = () => {
    return <section id="home" className="min-h-screen flex items-center justify-center relative">
        <RevealOnScroll>
        <div className="text-center z-10 px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent leading-right">
                Hi, I`m Lucas Dev
            </h1>

            <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
            I am a professional with a degree in Web Development from Rocketseat, Computer Science from SENAC and Programming Logic from SENAI. I have experience in developing login panels, custom link sites, e-commerce, as well as scripts, mods and servers for games. I also have extensive expertise in graphic design, with mastery in the use of Photoshop to create logos, banners, posters and content for social networks. My goal is to use my technical and creative skills to deliver innovative and high-quality solutions.
            </p>

            <div className="flex justify-center space-x-4">
                <a href="#projects" className="bg-purple-800 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]">
                    View Projects
                </a>

                <a href="#contact" className="border border-purple-800/50 text-purple-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-purple-800/10">
                    Contact Me
                </a>
            </div>
        </div>
        </RevealOnScroll>
    </section>;
}