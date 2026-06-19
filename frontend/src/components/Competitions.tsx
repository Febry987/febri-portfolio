import { competitions } from "@/data/portfolio";

const Competitions = () => {
  return (
    <section id="competitions" className="max-w-7xl mx-auto px-6 py-16">
      <div className="mb-3">
        <h2 className="display text-5xl text-[var(--ink)]">Competitions</h2>
        <p className="mt-3 text-[var(--ink-soft)] text-[15px]">
          Where I learned to ship fast and handle pressure.
        </p>
      </div>
      <div className="divider my-8" />

      <div
        className="grid md:grid-cols-2 gap-7"
        data-testid="competitions-grid"
      >
        {competitions.map((c, idx) => (
          <article
            key={c.id}
            className="card overflow-hidden relative group"
            data-testid={`competition-card-${c.id}`}
          >
            <div className="relative h-[280px]">
              <img
                src={c.image}
                alt={c.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.55) 100%)",
                }}
              />
              <span
                className="absolute top-5 left-5 tag"
                style={{ backdropFilter: "blur(6px)" }}
              >
                {c.category}
              </span>
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <div className="text-xs opacity-80 tracking-wider">
                  #{String(idx + 1).padStart(2, "0")}
                </div>
                <h3 className="text-xl font-bold mt-1">{c.title}</h3>
              </div>
            </div>
            <div className="px-6 py-5 flex items-center justify-between">
              <div>
                <div className="text-[11px] tracking-[0.16em] text-[var(--muted)] font-bold uppercase">
                  Organizer
                </div>
                <div className="font-semibold text-[var(--ink)] mt-1">
                  {c.organizer}
                </div>
              </div>
              <span className="text-[var(--accent-deep)] font-bold text-sm">
                Read story →
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Competitions;
