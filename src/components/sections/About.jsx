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
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti dolor, consequuntur eaque voluptatum nisi minima asperiores sed tempora eligendi deserunt, ipsum aut alias? Nihil minima nostrum maxime sit. Sapiente, unde.
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all ">
                    <h3 className="text-xl font-bold mb-4"> Education </h3>
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                        <li>
                            <strong> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias non rem dolore sunt, et corporis laborum ut minima deserunt aut praesentium nostrum hic deleniti consequatur blanditiis adipisci quas labore rerum. </strong> - YXZ University (2025 - 2027)
                        </li>
                        <li>
                            <strong> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias non rem dolore sunt, et corporis laborum ut minima deserunt aut praesentium nostrum hic deleniti consequatur blanditiis adipisci quas labore rerum. </strong> - YXZ University (2025 - 2027)
                        </li>
                    </ul>
                </div>
                <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all ">
                    <h3 className="text-xl font-bold mb-4"> Work Experience </h3>
                    <div className="space-y-4 text-gray-300">
                        <div>
                            <h4 className="font-semibold"> exepmlo </h4>
                            <p> oq eu fiz </p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        </RevealOnScroll>
    </section>
    );
}