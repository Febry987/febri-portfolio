import { Star } from "lucide-react";
import { awards } from "@/data/portfolio";

const Awards = () => {
  return (
    <section id="awards" className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="display text-5xl text-[var(--ink)]">
        Awards &amp; Scholarships
      </h2>
      <p className="mt-3 text-[var(--ink-soft)] text-[15px]">
        Recognitions that support my journey in learning and leadership.
      </p>
      <div className="divider my-8" />

      <div className="grid md:grid-cols-3 gap-7" data-testid="awards-grid">
        {awards.map((a) => (
          <article
            key={a.id}
            className="card p-7 relative overflow-hidden"
            data-testid={`award-card-${a.id}`}
          >
            <div
              aria-hidden
              className="absolute -left-1 top-6 bottom-6 w-1 rounded-full"
              style={{
                background:
                  a.type === "LEADERSHIP AWARD"
                    ? "linear-gradient(180deg,#2563eb,#0ea5a4)"
                    : "linear-gradient(180deg,#10b981,#14b8a6)",
              }}
            />
            <div className="text-[11px] tracking-[0.18em] font-bold text-[var(--accent-deep)]">
              {a.type}
            </div>
            <h3 className="mt-3 text-xl font-bold text-[var(--ink)] leading-snug">
              {a.title}
            </h3>
            <div className="text-[var(--muted)] text-sm mt-1">{a.organizer}</div>

            <div className="divider my-5" />

            <p className="text-[var(--ink-soft)] text-[14px] leading-7">
              {a.description}
            </p>

            <div className="flex items-center justify-between mt-8">
              <span
                className="text-[12px] font-semibold text-[var(--muted)] px-3 py-1 rounded-full"
                style={{ background: "rgba(15,23,42,0.04)" }}
              >
                {a.year}
              </span>
              <Star
                size={18}
                className="text-[var(--muted)] hover:text-[var(--accent)] transition-colors"
              />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Awards;
