import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { certifications } from "@/data/portfolio";

const Certifications = () => {
  const [open, setOpen] = useState<string | null>(certifications[0]?.id ?? null);

  return (
    <section id="certificates" className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="display text-5xl text-[var(--ink)]">Certifications</h2>
      <p className="mt-3 text-[var(--ink-soft)] text-[15px]">
        Formal trainings that validate my technical &amp; soft skills.
      </p>
      <div className="divider my-8" />

      <div
        className="grid md:grid-cols-3 gap-5"
        data-testid="certifications-grid"
      >
        {certifications.map((c) => {
          const isOpen = open === c.id;
          return (
            <div
              key={c.id}
              className="card p-6"
              data-testid={`cert-card-${c.id}`}
            >
              <button
                className="w-full flex items-start justify-between gap-4 text-left"
                onClick={() => setOpen(isOpen ? null : c.id)}
                data-testid={`cert-toggle-${c.id}`}
                aria-expanded={isOpen}
              >
                <div>
                  <h3 className="font-bold text-[var(--ink)] leading-snug">
                    {c.title}
                  </h3>
                  <div className="text-[12px] text-[var(--muted)] mt-1">
                    {c.provider} · {c.year}
                  </div>
                </div>
                <ChevronDown
                  size={20}
                  className={`chev shrink-0 text-[var(--muted)] mt-1 ${
                    isOpen ? "open" : ""
                  }`}
                />
              </button>
              <div
                style={{
                  maxHeight: isOpen ? 240 : 0,
                  overflow: "hidden",
                  transition: "max-height 0.4s cubic-bezier(0.2,0.8,0.2,1)",
                }}
              >
                <div className="divider my-4" />
                <p className="text-[var(--ink-soft)] text-[14px] leading-7">
                  {c.details}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Certifications;
