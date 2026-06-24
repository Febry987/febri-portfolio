import { useState } from "react";
import { createPortal } from "react-dom";
import { X, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { certifications } from "@/data/portfolio";

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState<typeof certifications[0] | null>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 2;

  const totalPages = Math.ceil(certifications.length / itemsPerPage);

  const handleNext = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const handlePrev = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const startIndex = currentPage * itemsPerPage;
  const currentCerts = certifications.slice(startIndex, startIndex + itemsPerPage);

  return (
    <section id="certificates" className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="display text-5xl text-[var(--ink)]">Certifications</h2>
      <p className="mt-3 text-[var(--ink-soft)] text-[15px]">
        Formal trainings that validate my technical &amp; soft skills.
      </p>
      <div className="divider my-8" />

      <div className="flex flex-col items-center gap-8 w-full">
        <div className="grid md:grid-cols-2 gap-8 w-full">
          {currentCerts.map((c) => (
            <div
              key={c.id}
              className="flip-card-container"
              data-testid={`cert-card-${c.id}`}
            >
              <div className="flip-card">
                {/* Front of card */}
                <div className="flip-card-face flip-card-front">
                  <div className="cert-image">
                    <img
                      src={c.coverImage} alt={c.title} />
                    <div className="liquid-glass-badge">
                      {c.provider}
                    </div>
                  </div>
                  <div className="cert-info">
                    <h3 className="text-lg font-bold text-[var(--ink)] leading-snug">
                      {c.title}
                    </h3>
                    <p className="text-xs text-[var(--muted)] mt-1">{c.year}</p>
                  </div>
                </div>

                {/* Back of card */}
                <div className="flip-card-face flip-card-back">
                  <div className="h-full w-full flex flex-col p-5">
                    <div className="flex-1 flex items-center justify-center overflow-hidden">
                      <img
                        src={c.image} alt={c.title} className="max-h-full max-w-full object-contain" />
                    </div>
                    <div className="mt-4 flex justify-center">
                      <button
                        className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent-deep)]"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedCert(c);
                        }}
                      >
                        Click to View Certificate
                        <ExternalLink size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Prev/Next Buttons with Liquid Glass */}
        <div className="flex items-center gap-4">
          <button
            onClick={handlePrev}
            className="liquid-glass-button inline-flex items-center justify-center p-3"
          >
            <ChevronLeft size={20} />
          </button>
          <span className="text-sm text-[var(--ink-soft)]">
            {currentPage + 1} / {totalPages}
          </span>
          <button
            onClick={handleNext}
            className="liquid-glass-button inline-flex items-center justify-center p-3"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Popup Modal */}
      {selectedCert && createPortal(
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
          onClick={() => setSelectedCert(null)}
        >
          <div className="absolute inset-0 bg-black/70" aria-hidden="true" />
          <div className="relative max-w-4xl w-full max-h-[85vh] bg-white rounded-2xl overflow-hidden shadow-2xl work-detail-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute right-4 top-4 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/88 text-[var(--ink-soft)] shadow-md backdrop-blur transition hover:bg-white"
              onClick={() => setSelectedCert(null)}
            >
              <X size={20} />
            </button>
            <div className="grid md:grid-cols-2 overflow-hidden">
              <div className="relative bg-slate-900">
                <img
                  src={selectedCert.image} alt={selectedCert.title} className="h-full w-full object-contain p-8" />
              </div>
              <div className="p-8 work-detail-modal-side overflow-y-auto">
                <p className="text-xs font-semibold text-[var(--accent-deep)] uppercase tracking-wider">
                  {selectedCert.provider} · {selectedCert.year}
                </p>
                <h3 className="text-3xl font-bold text-[var(--ink)] mt-3 leading-snug">
                  {selectedCert.title}
                </h3>
                <div className="divider my-6" />
                <p className="text-[15px] text-[var(--ink-soft)] leading-relaxed">
                  {selectedCert.details}
                </p>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </section>
  );
};

export default Certifications;
