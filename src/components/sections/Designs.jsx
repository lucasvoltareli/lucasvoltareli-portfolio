import { RevealOnScroll } from "../RevealOnScroll";
import { useTranslation } from "react-i18next";

import firstimage from "../../assets/designs/1.png";
import secondimage from "../../assets/designs/2.png";
import thirdimage from "../../assets/designs/3.png";
import fourimage from "../../assets/designs/4.png";
import fiveimage from "../../assets/designs/5.png";
import siximage from "../../assets/designs/6.png";

export const Designs = () => {
  const { t } = useTranslation();

  return (
    <section
      id="designs"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-400 bg-clip-text text-transparent text-center">
            {t("designs.title")}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              firstimage,
              secondimage,
              fiveimage,
              siximage,
              thirdimage,
              fourimage,
            ].map((img, index) => (
              <div
                key={index}
                className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-purple-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
              >
                <img
                  src={img}
                  alt={`Design ${index + 1}`}
                  className="rounded mb-4"
                />
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
