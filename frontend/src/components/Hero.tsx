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
            className="display mt-5 text-[50px] sm:text-[60px] leading-[1.02] text-[var(--ink)]"
            data-testid="hero-heading"
          >
            Hey, <span style={{ color: "#39AAD5" }}>Febry</span> here 👋
          </h1>

          <p className="mt-7 max-w-xl text-[15px] leading-[1.75] text-[var(--ink-soft)]">
            {profile.bio}
          </p>

          <div
            className="mt-8 pl-4 italic text-[var(--ink-soft)] text-[14px]"
            style={{ borderLeft: "3px solid #01C7D5" }}
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
                    top: el.offsetTop - 90,
                    behavior: "smooth",
                  });
              }}
              style={{ background: "#014C85" }}
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
          <div className="portrait-wrap h-[520px] lg:h-[620px] relative flex items-end justify-center">
            <div className="portrait-blob" aria-hidden />
            <img
              src={profile.photo}
              alt="Portrait"
              className="portrait-img max-h-full object-cover z-10 relative"
              data-testid="hero-portrait"
              style={{ maxWidth: "100%", width: "auto" }}
            />

            {/* floating chips */}
            <div
              className="float-chip float-slow absolute top-[15%] right-[5%] reveal r-3"
              data-testid="float-methodology"
              style={{ zIndex: 20 }}
            >
              <div
                className="ico"
                style={{ background: "rgba(1, 199, 213, 0.15)", color: "#014C85" }}
              >
                <Columns3 size={18} />
              </div>
              <div>
                <div className="label" style={{ color: "#014C85" }}>METHODOLOGY</div>
                <div className="value" style={{ color: "#014C85" }}>Six Sigma & Agile</div>
              </div>
            </div>

            <div
              className="float-chip float-slow-reverse absolute bottom-[12%] left-[5%] reveal r-4"
              data-testid="float-focus"
              style={{ zIndex: 20 }}
            >
              <div
                className="ico"
                style={{ background: "rgba(57, 170, 213, 0.15)", color: "#014C85" }}
              >
                <CircleCheck size={18} />
              </div>
              <div>
                <div className="label" style={{ color: "#014C85" }}>FOCUS</div>
                <div className="value" style={{ color: "#014C85" }}>SCM & Data Analyst</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
