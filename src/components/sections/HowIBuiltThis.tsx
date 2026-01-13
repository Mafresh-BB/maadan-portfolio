import { howIBuiltThis } from "../../data/content";
import { RevealOnScroll } from "../ui/RevealOnScroll";
import { SectionTitle } from "../ui/SectionTitle";

export const HowIBuiltThis = () => {
  return (
    <section
      id="how"
      className="py-24 bg-gray-50/70 dark:bg-gray-900/60 relative overflow-hidden transition-colors duration-300"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-40 dark:opacity-30"></div>
      <div className="absolute -top-24 -right-20 h-72 w-72 rounded-full bg-blue-200/50 dark:bg-blue-900/20 blur-3xl"></div>
      <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-indigo-200/40 dark:bg-indigo-900/20 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionTitle subtitle="build">{howIBuiltThis.title}</SectionTitle>

        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <RevealOnScroll>
              <div className="bg-white/90 dark:bg-gray-800/80 border border-gray-100 dark:border-gray-700 rounded-3xl p-6 md:p-8 shadow-sm backdrop-blur">
                <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 tracking-[0.2em] uppercase">
                  Blueprint
                </p>
                <h3 className="mt-3 text-2xl font-bold text-gray-900 dark:text-white">
                  A focused technical snapshot
                </h3>
                <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                  A quick tour of the stack, structure, and delivery choices behind this
                  portfolio, optimized for clarity and performance.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {["Speed", "Maintainability", "Accessibility", "Deployment"].map((pill) => (
                    <span
                      key={pill}
                      className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border border-blue-100 dark:border-blue-900/40"
                    >
                      {pill}
                    </span>
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          </div>

          <div className="lg:col-span-8 grid sm:grid-cols-2 gap-6">
            {howIBuiltThis.items.map((item, index) => (
              <RevealOnScroll key={item.label}>
                <div className="group h-full rounded-2xl border border-gray-100 dark:border-gray-700 bg-white/95 dark:bg-gray-800/80 p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
                  <div className="absolute inset-0 bg-linear-to-br from-blue-50/60 via-white/50 to-transparent dark:from-blue-900/10 dark:via-gray-900/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-bold text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-900/30 px-2 py-1 rounded-full">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div className="text-sm font-semibold tracking-wide text-gray-800 dark:text-gray-200">
                        {item.label}
                      </div>
                    </div>
                    <p className="mt-3 text-gray-600 dark:text-gray-300 leading-relaxed">
                      {item.text}
                    </p>
                    <div className="mt-5 h-1 w-12 rounded-full bg-blue-600/70 dark:bg-blue-400/70"></div>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
