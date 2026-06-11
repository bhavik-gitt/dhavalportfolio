import { motion } from "motion/react";
import { Linkedin, Mail, Phone, Heart, ArrowUp, Briefcase } from "lucide-react";

const links = [
  { label: "About", href: "#about" },
  { label: "Dashboard", href: "#dashboard" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const scrollTo = (href: string) => {
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      style={{
        background: "#0B1120",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Top gradient line */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 1,
          background: "linear-gradient(to right, transparent, #3B82F6, #8B5CF6, transparent)",
        }}
      />

      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "3.5rem 1.5rem 2rem" }}>
        {/* Main footer content */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.5fr 1fr 1fr",
            gap: "3rem",
            marginBottom: "3rem",
          }}
          className="footer-grid"
        >
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
              <div
                style={{
                  width: 42,
                  height: 42,
                  borderRadius: 12,
                  background: "linear-gradient(135deg, #3B82F6, #8B5CF6)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Briefcase size={20} color="white" />
              </div>
              <div>
                <div style={{ color: "#F8FAFC", fontWeight: 800, fontSize: "1.1rem" }}>Dhaval Ratnottar</div>
                <div style={{ color: "#60A5FA", fontSize: "0.78rem", fontWeight: 600, letterSpacing: "0.08em" }}>HR MANAGER AND LABOUR COMPLIANCE SPECIALIST</div>
              </div>
            </div>
            <p style={{ color: "#64748B", fontSize: "0.9rem", lineHeight: 1.7, maxWidth: 280, marginBottom: "1.5rem" }}>
              Transforming enterprise HR operations through strategic leadership, data-driven decisions, and people-first culture.
            </p>
            <div style={{ display: "flex", gap: "0.75rem" }}>
              {[
                { icon: <Linkedin size={18} />, href: "https://www.linkedin.com/in/dhaval-ratnotar-61743a3a2/", label: "LinkedIn" },
                { icon: <Mail size={18} />, href: "mailto:dhaval30303@gmail.com", label: "Email" },
                { icon: <Phone size={18} />, href: "tel:+918200840016", label: "Phone" },
              ].map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 10,
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#94A3B8",
                    textDecoration: "none",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(59,130,246,0.2)"; e.currentTarget.style.color = "#60A5FA"; e.currentTarget.style.borderColor = "rgba(59,130,246,0.4)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.06)"; e.currentTarget.style.color = "#94A3B8"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; }}
                  aria-label={s.label}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <div style={{ color: "#F1F5F9", fontWeight: 700, fontSize: "0.95rem", marginBottom: "1.25rem", letterSpacing: "0.05em" }}>
              Quick Navigation
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              {links.map((link, i) => (
                <button
                  key={i}
                  onClick={() => scrollTo(link.href)}
                  style={{
                    background: "none",
                    border: "none",
                    color: "#64748B",
                    fontSize: "0.9rem",
                    cursor: "pointer",
                    textAlign: "left",
                    padding: "0.25rem 0",
                    transition: "color 0.2s",
                    fontFamily: "inherit",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#60A5FA")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#64748B")}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <div style={{ color: "#F1F5F9", fontWeight: 700, fontSize: "0.95rem", marginBottom: "1.25rem", letterSpacing: "0.05em" }}>
              Contact Info
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {[
                { icon: <Mail size={15} />, text: "dhaval30303@gmail.com" },
                { icon: <Phone size={15} />, text: "+91 82008 40016" },
                { icon: <Briefcase size={15} />, text: "Available for HR Leadership Roles" },
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: "0.6rem", color: "#64748B", fontSize: "0.875rem" }}>
                  <span style={{ color: "#3B82F6", flexShrink: 0 }}>{item.icon}</span>
                  {item.text}
                </div>
              ))}
            </div>

            <div
              style={{
                marginTop: "1.5rem",
                padding: "0.75rem 1rem",
                borderRadius: 10,
                background: "rgba(34,197,94,0.08)",
                border: "1px solid rgba(34,197,94,0.2)",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                color: "#4ADE80",
                fontSize: "0.82rem",
                fontWeight: 600,
              }}
            >
              <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#4ADE80", flexShrink: 0, animation: "pulse 2s infinite" }} />
              Open to new opportunities
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            paddingTop: "1.5rem",
            borderTop: "1px solid rgba(255,255,255,0.06)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <div style={{ color: "#475569", fontSize: "0.82rem", display: "flex", alignItems: "center", gap: "0.35rem" }}>
            © 2026 Dhaval Ratnottar. Built with{" "}
            <Heart size={13} color="#EC4899" fill="#EC4899" /> for executive impact.
          </div>
          <div style={{ color: "#475569", fontSize: "0.78rem" }}>
            HR Manager · Talent Acquisition · Payroll · Compliance
          </div>

          {/* Back to top */}
          <motion.button
            onClick={scrollTop}
            whileHover={{ y: -3, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.4rem",
              padding: "0.5rem 1rem",
              borderRadius: 8,
              background: "rgba(59,130,246,0.12)",
              border: "1px solid rgba(59,130,246,0.25)",
              color: "#60A5FA",
              fontSize: "0.8rem",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            <ArrowUp size={14} /> Back to Top
          </motion.button>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
        }
      `}</style>
    </footer>
  );
}
