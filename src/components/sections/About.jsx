import { RevealOnScroll } from '../RevealOnScroll';
import { useTranslation } from 'react-i18next';

export const About = () => {
    const { t } = useTranslation();

    const frontendSkills = ["React", "TailwindCSS", "Html", "CSS"];
    const backendSkills = ["Php", "Sql", "JavaScript", "Python"];

    const education = t("about.education.courses", { returnObjects: true });

    return (
        <section id="about" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-400 bg-clip-text text-transparent text-center">
                        {t("about.title")}
                    </h2>

                    <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                        <p className="text-gray-300 mb-6">
                            {t("about.description")}
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4">{t("about.frontend")}</h3>
                                <div className="flex flex-wrap gap-2">
                                    {frontendSkills.map((tech, key) => (
                                        <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4">{t("about.backend")}</h3>
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
                        <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">{t("about.education.title")}</h3>
                            <ul className="list-disc list-inside text-gray-300 space-y-2">
                                {education.map((course, key) => (
                                    <li key={key}>
                                        <strong>{course.name}</strong> – {course.institution} – {course.status}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
}
