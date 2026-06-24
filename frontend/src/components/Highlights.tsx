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
    icon: <Trophy size={28} />,
    value: "5+",
    label: "ACHIEVEMENTS",
    bg: "rgba(1, 199, 213, 0.12)",
    color: "#01C7D5",
  },
  {
    id: "cert",
    icon: <AwardIcon size={28} />,
    value: "3",
    label: "CERTIFICATES",
    bg: "rgba(57, 170, 213, 0.12)",
    color: "#39AAD5",
  },
  {
    id: "proj",
    icon: <FolderOpen size={28} />,
    value: "10+",
    label: "PROJECTS",
    bg: "rgba(1, 76, 133, 0.12)",
    color: "#014C85",
  },
];

const Highlights = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <div className="highlights-container" data-testid="highlights-card">
        <div className="grid md:grid-cols-[1fr_1.5fr] gap-10 items-center">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-[1px] bg-gradient-to-r from-transparent to-[#01C7D5]" />
              <span className="text-[#01C7D5] font-bold tracking-[0.28em] text-xs uppercase">
                HIGHLIGHTS
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--ink)] leading-tight">
              My Journey
            </h2>
            <p className="mt-4 text-[var(--ink-soft)] text-[15px] leading-7 max-w-md">
              A quick snapshot of the milestones I've reached and what I've been
              building so far.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-5">
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
                <div className="stat-value" style={{ color: it.color }}>
                  {it.value}
                </div>
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
