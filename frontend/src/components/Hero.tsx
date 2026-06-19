import { ArrowRight, Columns3, CircleCheck } from "lucide-react";
import { profile } from "@/data/portfolio";

const Hero = () => {
  return (
    <section id="home" className="relative pt-12 lg:pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left */}
        <div className="reveal r-1">
          <span className="pill" data-testid="status-pill">
            <span className="dot" />
            {profile.status}
          </span>

          <div className="mt-8 flex flex-wrap items-center gap-3 text-emerald-700 font-bold text-[11px] tracking-[0.18em]">
            {profile.roles.map((r, i) => (
              <span key={r} className="flex items-center gap-3">
                {r}
                {i < profile.roles.length - 1 && (
                  <span className="text-emerald-400">·</span>
                )}
              </span>
            ))}
          </div>

          <h1
            className="display mt-5 text-[56px] sm:text-[72px] leading-[1.02] text-[var(--ink)]"
            data-testid="hero-heading"
          >
            Hey,{" "}
            <span
              style={{
                background: "linear-gradient(135deg,#10b981,#2563eb)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              {profile.name}
            </span>{" "}
            here <span className="wave">👋</span>
          </h1>

          <p className="mt-7 max-w-xl text-[15px] leading-[1.75] text-[var(--ink-soft)]">
            I turn abstract ideas into actionable plans. As a Software
            Engineering student, I combine technical logic with{" "}
            <strong>Agile discipline</strong>—focusing on sprint planning, QA,
            and requirement scoping. My goal? Organize the chaos, align the
            team, and make sure we ship on time.
          </p>

          <div
            className="mt-8 pl-4 italic text-[var(--ink-soft)] text-[14px]"
            style={{ borderLeft: "3px solid #10b981" }}
          >
            "{profile.quote}"
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="btn btn-dark"
              data-testid="hero-cta-talk"
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById("projects");
                if (el)
                  window.scrollTo({
                    top: el.offsetTop - 80,
                    behavior: "smooth",
                  });
              }}
            >
              Let's Talk <ArrowRight size={16} />
            </a>
            <a href={profile.cvUrl} className="btn btn-ghost" data-testid="hero-cta-cv">
              View CV
            </a>
          </div>
        </div>

        {/* Right portrait */}
        <div className="relative reveal r-2">
          <div className="portrait-wrap h-[560px] lg:h-[640px] relative">
            <div className="portrait-blob" aria-hidden />
            <img
              src={profile.photo}
              alt="Portrait"
              className="portrait-img"
              data-testid="hero-portrait"
            />

            {/* floating chips */}
            <div
              className="float-chip absolute top-[15%] right-[6%] reveal r-3"
              data-testid="float-methodology"
            >
              <div
                className="ico"
                style={{ background: "rgba(16,185,129,0.12)", color: "#047857" }}
              >
                <Columns3 size={18} />
              </div>
              <div>
                <div className="label">METHODOLOGY</div>
                <div className="value">Agile &amp; Scrum</div>
              </div>
            </div>

            <div
              className="float-chip absolute bottom-[10%] left-[6%] reveal r-4"
              data-testid="float-focus"
            >
              <div
                className="ico"
                style={{ background: "rgba(37,99,235,0.12)", color: "#1d4ed8" }}
              >
                <CircleCheck size={18} />
              </div>
              <div>
                <div className="label">FOCUS</div>
                <div className="value">QA &amp; Scoping</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
