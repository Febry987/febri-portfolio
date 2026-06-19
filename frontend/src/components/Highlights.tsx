import type { ReactNode } from "react";
import { Trophy, Award as AwardIcon, FolderOpen } from "lucide-react";

type Item = {
  id: string;
  icon: ReactNode;
  value: string;
  label: string;
  bg: string;
  color: string;
};

const items: Item[] = [
  {
    id: "ach",
    icon: <Trophy size={20} />,
    value: "5+",
    label: "ACHIEVEMENTS",
    bg: "rgba(16,185,129,0.12)",
    color: "#047857",
  },
  {
    id: "cert",
    icon: <AwardIcon size={20} />,
    value: "3",
    label: "CERTIFICATES",
    bg: "rgba(37,99,235,0.12)",
    color: "#1d4ed8",
  },
  {
    id: "proj",
    icon: <FolderOpen size={20} />,
    value: "10+",
    label: "PROJECTS",
    bg: "rgba(14,165,164,0.14)",
    color: "#0f766e",
  },
];

const Highlights = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <div className="card p-8 md:p-10" data-testid="highlights-card">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="section-eyebrow">Highlights</span>
            <h2 className="display text-4xl mt-4 text-[var(--ink)]">My Journey</h2>
            <p className="mt-4 text-[var(--ink-soft)] text-[15px] leading-7 max-w-md">
              A quick snapshot of the milestones I've reached and what I've been
              building so far.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {items.map((it) => (
              <div
                key={it.id}
                className="stat-card"
                data-testid={`stat-${it.id}`}
              >
                <div
                  className="stat-icon"
                  style={{ background: it.bg, color: it.color }}
                >
                  {it.icon}
                </div>
                <div className="stat-value">{it.value}</div>
                <div className="stat-label">{it.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
