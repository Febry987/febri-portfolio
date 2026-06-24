import { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import { ArrowUpRight, CalendarDays, MapPin } from "lucide-react";
import { workExperiences, type WorkExperienceDocument } from "@/data/portfolio";

const WorkExperience = () => {
  const [openId, setOpenId] = useState<string | null>(null);

  const selected = useMemo(
    () => workExperiences.find((it) => it.id === openId) ?? null,
    [openId]
  );

  useEffect(() => {
    if (!selected) return undefined;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [selected]);

  const handleImgError = (fallbackSrc: string) => (e: React.SyntheticEvent<HTMLImageElement>) => {
    const img = e.currentTarget;
    if (img.src !== fallbackSrc) img.src = fallbackSrc;
  };

  const formatMonthYear = (value: string) => {
    const [yearStr, monthStr] = value.split("-");
    const year = Number(yearStr);
    const month = Number(monthStr);
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "Mei",
      "Jun",
      "Jul",
      "Agu",
      "Sep",
      "Okt",
      "Nov",
      "Des",
    ];
    if (!year || !month || month < 1 || month > 12) return value;
    return `${months[month - 1]} ${year}`;
  };

  const formatPeriod = (start: string, end: string) => {
    if (!start && !end) return "";
    if (start && !end) return `${formatMonthYear(start)} – Sekarang`;
    if (!start && end) return formatMonthYear(end);
    return `${formatMonthYear(start)} – ${formatMonthYear(end)}`;
  };

  return (
    <section id="workexperience" className="max-w-7xl mx-auto px-6 py-16">
      <div className="mb-3">
        <span className="pill">
          <span className="dot" />
          Experience
        </span>
        <h2 className="display mt-4 text-5xl text-[var(--ink)]">Work Experience</h2>
        <p className="mt-3 text-[var(--ink-soft)] text-[15px]">
          The vertical timeline highlights work experience, relevant documentation, and a concise summary of roles and responsibilities.
        </p>
      </div>
      <div className="divider my-8" />

      <div className="work-stepper" data-testid="workexperience-grid">
        {workExperiences.map((item, idx) => (
          <div
            key={item.id}
            className="work-step"
            data-testid={`workexperience-card-${item.id}`}
          >
            <div className="work-step-rail" aria-hidden>
              <span className="work-step-dot" />
              {idx < workExperiences.length - 1 && <span className="work-step-line" />}
            </div>

            <article className="card work-card group overflow-hidden">
              <div className="grid md:grid-cols-[1fr_2fr] gap-0">
                {/* Image column */}
                <div className="relative overflow-hidden">
                  <div className="relative aspect-[4/3] h-full">
                    <img
                      src={item.coverImage}
                      alt={item.role}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                      onError={handleImgError("https://images.unsplash.com/photo-1522071820081-009f0110c9f1?w=1400&q=80&auto=format&fit=crop")}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-3 right-3 text-white">
                      <div className="text-[10px] font-bold tracking-[0.24em] uppercase mb-2 opacity-80">
                        STEP 0{idx + 1}
                      </div>
                      <div className="text-lg font-extrabold leading-tight">
                        {item.location}
                      </div>
                    </div>
                    <div className="absolute top-3 left-3">
                      <span className="work-tag">
                        {item.employmentType}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content column */}
                <div className="p-5">
                  <div className="flex flex-wrap items-center gap-3 text-[12px] text-[var(--ink-soft)]">
                    <span className="flex items-center gap-1">
                      <CalendarDays size={14} />
                      {formatPeriod(item.start, item.end)}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin size={14} />
                      Onsite
                    </span>
                  </div>

                  <h3 className="mt-3 text-[20px] font-extrabold tracking-tight text-[var(--ink)]">
                    {item.role}
                  </h3>
                  <div className="mt-1 text-[15px] font-semibold text-[var(--ink-soft)]">
                    {item.company}
                  </div>

                  <p className="mt-3 text-[14px] leading-relaxed text-[var(--ink-soft)]">
                    {item.summary}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.tags.map((tag: string) => (
                      <span key={tag} className="work-meta-pill">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
                    <span className="text-[11px] text-gray-400 font-medium">
                      Detail pengalaman • {idx + 1}
                    </span>
                    <button
                      type="button"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent-deep)]"
                      onClick={() => setOpenId(item.id)}
                    >
                      View Details <ArrowUpRight size={15} />
                    </button>
                  </div>
                </div>
              </div>
            </article>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selected &&
        createPortal(
          <div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 p-4"
            onClick={() => setOpenId(null)}
          >
            <div
              role="dialog"
              aria-modal="true"
              className="work-detail-modal relative w-[min(1180px,calc(100vw-24px))] max-w-none max-h-[calc(100vh-72px)] overflow-auto border border-white/70 bg-white text-[var(--ink)] p-0 shadow-2xl sm:rounded-[32px]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                aria-label="Close"
                className="absolute right-4 top-4 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/88 text-[var(--ink-soft)] shadow-md backdrop-blur transition hover:bg-white"
                onClick={() => setOpenId(null)}
              >
                ×
              </button>

              <div className="grid gap-0 md:grid-cols-[1.05fr_0.95fr]">
                <div className="relative overflow-hidden rounded-t-3xl md:rounded-l-3xl md:rounded-tr-none">
                  <div className="relative aspect-[16/11] w-full">
                    <img
                      src={selected.coverImage}
                      alt={selected.role}
                      className="absolute inset-0 h-full w-full object-cover"
                      onError={handleImgError("https://images.unsplash.com/photo-1522071820081-009f0110c9f1?w=1400&q=80&auto=format&fit=crop")}
                    />
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(180deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.62) 100%)",
                      }}
                    />
                    <div className="absolute left-6 right-6 bottom-6 text-white">
                      <div className="text-[11px] font-semibold tracking-[0.24em] text-white/70">
                        {selected.employmentType}
                      </div>
                      <div className="mt-2 text-2xl font-extrabold leading-tight">
                        {selected.role}
                      </div>
                      <div className="mt-1 text-white/90 font-semibold">{selected.company}</div>
                      <div className="mt-4 flex flex-wrap gap-2 text-[12px] text-white/90">
                        <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-2 backdrop-blur">
                          <CalendarDays size={14} />
                          {formatPeriod(selected.start, selected.end)}
                        </span>
                        <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-2 backdrop-blur">
                          <MapPin size={14} />
                          {selected.location}
                        </span>
                      </div>
                    </div>
                  </div>

                  {selected.documents?.length > 0 && (
                    <div className="px-6 pb-6 pt-5">
                      <div className="text-[11px] font-bold tracking-[0.22em] text-[var(--accent-deep)]">
                        DOKUMENTASI
                      </div>
                      <div className="mt-4 grid grid-cols-2 gap-3">
                        {selected.documents.slice(0, 4).map((doc: WorkExperienceDocument) => (
                          <div
                            key={doc.id}
                            className="overflow-hidden rounded-2xl border border-white/60 bg-white/70"
                          >
                            <div className="relative aspect-[4/3]">
                              <img
                                src={doc.image}
                                alt={doc.title}
                                className="absolute inset-0 h-full w-full object-cover"
                                onError={handleImgError(selected.coverImage)}
                              />
                            </div>
                            <div className="px-3 py-2 text-[12px] font-semibold text-[var(--ink)]">
                              {doc.title}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="work-detail-modal-side px-6 py-6 md:py-7">
                  <div>
                    <h3 className="text-lg font-semibold tracking-tight text-[var(--ink)]">
                      View Details
                    </h3>
                    <p className="mt-1 text-sm text-[var(--ink-soft)]">
                      Ringkasan job description dan pencapaian.
                    </p>
                  </div>

                  <div className="mt-6">
                    <div className="text-[11px] font-bold tracking-[0.22em] text-[var(--accent-deep)]">
                      SUMMARY
                    </div>
                    <p className="mt-3 text-[15px] leading-8 text-[var(--ink-soft)]">
                      {selected.summary}
                    </p>
                  </div>

                  <div className="mt-7 grid gap-6">
                    <div>
                      <div className="text-[11px] font-bold tracking-[0.22em] text-[var(--accent-deep)]">
                        JOB DESCRIPTION
                      </div>
                      <ul className="mt-3 grid gap-2 text-[14px] leading-7 text-[var(--ink-soft)]">
                        {selected.responsibilities?.map((text: string, i: number) => (
                          <li key={i} className="flex gap-3">
                            <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                            <span>{text}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {selected.achievements?.length > 0 && (
                      <div>
                        <div className="text-[11px] font-bold tracking-[0.22em] text-[var(--accent-deep)]">
                          PENCAPAIAN
                        </div>
                        <ul className="mt-3 grid gap-2 text-[14px] leading-7 text-[var(--ink-soft)]">
                          {selected.achievements.map((text: string, i: number) => (
                            <li key={i} className="flex gap-3">
                              <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--blue)]" />
                              <span>{text}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  {selected.tags?.length > 0 && (
                    <div className="mt-8 flex flex-wrap gap-2">
                      {selected.tags.map((tag: string) => (
                        <span
                          key={tag}
                          className="work-tag"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}
    </section>
  );
};

export default WorkExperience;
