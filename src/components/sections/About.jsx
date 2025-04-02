import {RevealOnScroll} from '../RevealOnScroll'

export const About = () => {

    const frontendSkills = ["React", "TailwindCSS", "Html", "CSS", ];
    const backendSkills = ["Php", "Sql", "JavaScript", "Python"];

    return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20">

        <RevealOnScroll>
    <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-400 bg-clip-text text-transparent text-center"> About Me </h2>


        <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
            My name is Lucas, I’m 18 years old, and I had my first experience with programming at 14 when I started developing game servers using the Lua language. Around the same time, I discovered Photoshop and began creating logos, banners, and customized content. Since then, I have been deepening my knowledge and nurturing my passion for this field.
            </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4"> FrontEnd</h3>
                        <div className="flex flex-wrap gap-2">
                            {frontendSkills.map((tech, key) => (
                                <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">

                                {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4"> BackEnd</h3>
                        <div className="flex flex-wrap gap-2">
                            {backendSkills.map((tech, key) => (
                                <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">

                                {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="gap-6 mt-8">
                <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all ">
                    <h3 className="text-xl font-bold mb-4"> Education </h3>
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                        <li>
                            <strong> Análise e Desenvolvimento de Sistemas </strong> - Universidade USCS (2025 - 2027) - Cursando
                        </li>
                        <li>
                            <strong> Informática </strong> - Senac São Bernardo do Campo (2024 - 2024) - Completo
                        </li>
                    </ul>
                </div>           
            </div>
        </div>
        </RevealOnScroll>
    </section>
    );
}