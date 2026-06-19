import { projects } from "@/data/portfolio";

const Projects = () => {
  return (
    <section id="projects" className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="display text-5xl text-[var(--ink)]">Projects Gallery</h2>
      <p className="mt-3 text-[var(--ink-soft)] text-[15px]">
        A collection of products and systems I've managed, built, and refined.
      </p>
      <div className="divider my-8" />

      <div className="gallery" data-testid="projects-gallery">
        {projects.map((p, idx) => {
          const aspect = idx % 2 === 0 ? "aspect-[3/4]" : "aspect-[4/3]";
          return (
            <article
              key={p.id}
              className={`gallery-item card overflow-hidden relative group`}
              data-testid={`project-card-${p.id}`}
            >
              <div className={`relative ${aspect}`}>
                <img
                  src={p.image}
                  alt={p.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(0,0,0,0) 25%, rgba(0,0,0,0.7) 100%)",
                  }}
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-extrabold leading-tight">
                    {p.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {p.tags.map((t) => (
                      <span key={t} className="tag">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="px-6 py-5">
                <p className="text-[var(--ink-soft)] text-[14px] leading-7">
                  {p.description}
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
