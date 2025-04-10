import { RevealOnScroll } from "../RevealOnScroll";
import notBullSht from "../../assets/projects/notbullsht.png";
import papaleg from "../../assets/projects/papaleg.png";
import leaff from "../../assets/projects/first-ecommerce.png";
import devlinks from "../../assets/projects/devlinks.png";
import { useTranslation } from "react-i18next";

export const Projects = () => {
  const { t } = useTranslation();

  const openSite = (link) => {
    window.open(link, "_blank");
  };

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-20">
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-400 bg-clip-text text-transparent text-center">
            {t("projects.title")}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Projeto 1 */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-purple-500/30 hover:shadow transition">
              <img src={notBullSht} alt="NotBullSht" className="rounded mb-4" />
              <h3 className="text-xl font-bold mb-2">{t("projects.notbullsht.title")}</h3>
              <p className="text-gray-400 mb-4">{t("projects.notbullsht.description")}</p>
              <div className="flex gap-2 flex-wrap">
                {["Html", "Css", "JavaScript"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  onClick={() => openSite("https://notbullsht.netlify.app/")}
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4 cursor-pointer"
                >
                  {t("projects.view")}
                </a>
              </div>
            </div>

            {/* Projeto 2 */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-purple-500/30 hover:shadow transition">
              <img src={papaleg} alt="Papaléguas" className="rounded mb-4" />
              <h3 className="text-xl font-bold mb-2">{t("projects.papaleg.title")}</h3>
              <p className="text-gray-400 mb-4">{t("projects.papaleg.description")}</p>
              <div className="flex gap-2 flex-wrap">
                {["Html", "Css", "JavaScript"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  onClick={() => openSite("https://www.papaleguasagropet.com/")}
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4 cursor-pointer"
                >
                  {t("projects.view")}
                </a>
              </div>
            </div>

            {/* Projeto 3 */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-purple-500/30 hover:shadow transition">
              <img src={leaff} alt="Leaff" className="rounded mb-4" />
              <h3 className="text-xl font-bold mb-2">{t("projects.leaff.title")}</h3>
              <p className="text-gray-400 mb-4">{t("projects.leaff.description")}</p>
              <div className="flex gap-2 flex-wrap">
                {["Html", "Css", "JavaScript"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  onClick={() => openSite("https://leaff-ecommerce.netlify.app/")}
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4 cursor-pointer"
                >
                  {t("projects.view")}
                </a>
              </div>
            </div>

            {/* Projeto 4 */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-purple-500/30 hover:shadow transition">
              <img src={devlinks} alt="Devlinks" className="rounded mb-4" />
              <h3 className="text-xl font-bold mb-2">{t("projects.devlinks.title")}</h3>
              <p className="text-gray-400 mb-4">{t("projects.devlinks.description")}</p>
              <div className="flex gap-2 flex-wrap">
                {["Html", "Css", "JavaScript"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  onClick={() => openSite("https://devlinks-ui.netlify.app/")}
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4 cursor-pointer"
                >
                  {t("projects.view")}
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
