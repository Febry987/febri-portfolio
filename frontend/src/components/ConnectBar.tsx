import { profile } from "@/data/portfolio";

type Link = { label: string; href: string };

const ConnectBar = () => {
  const links: Link[] = [
    { label: "Email", href: profile.contact.email },
    { label: "Instagram", href: profile.contact.instagram },
    { label: "LinkedIn", href: profile.contact.linkedin },
    { label: "Youtube", href: profile.contact.youtube },
  ];

  return (
    <div className="connect-bar" data-testid="connect-bar">
      <div className="flex items-center gap-3 min-w-0 pl-1">
        <span
          className="inline-block w-3 h-3 rounded-full"
          style={{
            background: "#10b981",
            boxShadow: "0 0 0 4px rgba(16,185,129,0.25)",
          }}
        />
        <div>
          <div className="font-bold text-[var(--ink)] text-[14px]">
            Let's connect
          </div>
          <div className="text-[12px] text-[var(--ink-soft)] hidden sm:block">
            I'm always open for friendly chats or new collaboration.
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-2">
        {links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            target="_blank"
            rel="noreferrer"
            className="connect-link"
          >
            {l.label}
          </a>
        ))}
      </div>
    </div>
  );
};

export default ConnectBar;
