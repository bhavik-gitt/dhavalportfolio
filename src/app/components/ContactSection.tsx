import { useState } from "react";
import { motion } from "motion/react";
import { SectionHeader } from "./SectionHeader";
import { Phone, Mail, MapPin, Linkedin, Download, Calendar, Send, CheckCircle } from "lucide-react";

const contactInfo = [
  {
    icon: <Phone size={22} />,
    label: "Phone",
    value: "+91 82008 40016",
    href: "tel:+918200840016",
    color: "#3B82F6",
    desc: "Available Mon–Sat, 9 AM – 7 PM",
  },
  {
    icon: <Mail size={22} />,
    label: "Email",
    value: "dhaval30303@gmail.com",
    href: "mailto:dhaval30303@gmail.com",
    color: "#06B6D4",
    desc: "Typically responds within 24 hours",
  },
  {
    icon: <MapPin size={22} />,
    label: "Location",
    value: "Gujarat, India",
    href: "#",
    color: "#8B5CF6",
    desc: "Open to relocation for the right opportunity",
  },
  {
    icon: <Linkedin size={22} />,
    label: "LinkedIn",
    value: "",
    href: "https://www.linkedin.com/in/dhaval-ratnotar-61743a3a2/",
    color: "#0077B5",
    desc: "Connect for professional networking",
  },
];

export function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section
      id="contact"
      style={{
        padding: "7rem 1.5rem",
        background: "linear-gradient(180deg, #0F172A 0%, #111827 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative gradient */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 200,
          background: "linear-gradient(to top, rgba(59,130,246,0.03), transparent)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <SectionHeader
          badge="Get in Touch"
          title="Let's Connect"
          subtitle="Ready to bring strategic HR leadership to your organization. Reach out for opportunities, collaborations, or consultations."
          gradient="linear-gradient(135deg, #3B82F6, #06B6D4)"
        />

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: "2.5rem" }} className="contact-grid">
          {/* Left: Contact Info */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {contactInfo.map((c, i) => (
              <motion.a
                key={i}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                whileHover={{ x: 6, scale: 1.01 }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1.25rem",
                  padding: "1.5rem",
                  borderRadius: 16,
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  backdropFilter: "blur(12px)",
                  textDecoration: "none",
                  cursor: "pointer",
                }}
              >
                <div
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: 14,
                    background: `${c.color}18`,
                    border: `1px solid ${c.color}35`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: c.color,
                    flexShrink: 0,
                  }}
                >
                  {c.icon}
                </div>
                <div>
                  <div style={{ color: "#64748B", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "0.2rem" }}>
                    {c.label}
                  </div>
                  <div style={{ color: "#F1F5F9", fontWeight: 600, fontSize: "0.95rem", marginBottom: "0.15rem" }}>
                    {c.value}
                  </div>
                  <div style={{ color: "#64748B", fontSize: "0.78rem" }}>{c.desc}</div>
                </div>
              </motion.a>
            ))}

            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
              style={{
                padding: "1.75rem",
                borderRadius: 16,
                background: "rgba(59,130,246,0.08)",
                border: "1px solid rgba(59,130,246,0.2)",
              }}
            >
              <div style={{ color: "#CBD5E1", fontWeight: 700, fontSize: "0.95rem", marginBottom: "1rem" }}>
                Quick Actions
              </div>
              <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
                <button
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.4rem",
                    padding: "0.6rem 1.2rem",
                    borderRadius: 10,
                    background: "linear-gradient(135deg, #3B82F6, #8B5CF6)",
                    color: "white",
                    fontWeight: 600,
                    fontSize: "0.85rem",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  <Download size={15} /> Download Resume
                </button>
                <button
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.4rem",
                    padding: "0.6rem 1.2rem",
                    borderRadius: 10,
                    background: "rgba(255,255,255,0.07)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    color: "#CBD5E1",
                    fontWeight: 600,
                    fontSize: "0.85rem",
                    cursor: "pointer",
                  }}
                >
                  <Calendar size={15} /> Schedule Interview
                </button>
              </div>
            </motion.div>
          </div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{
              padding: "2.5rem",
              borderRadius: 20,
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.09)",
              backdropFilter: "blur(16px)",
            }}
          >
            <h3 style={{ color: "#F1F5F9", fontWeight: 700, fontSize: "1.2rem", marginBottom: "1.75rem" }}>
              Send a Message
            </h3>

            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "1rem",
                  padding: "3rem 2rem",
                  textAlign: "center",
                }}
              >
                <CheckCircle size={56} color="#10B981" />
                <div style={{ color: "#F1F5F9", fontWeight: 700, fontSize: "1.2rem" }}>Message Sent!</div>
                <p style={{ color: "#94A3B8", fontSize: "0.9rem" }}>
                  Thank you for reaching out. Dhaval will respond within 24 hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                  <div>
                    <label style={{ color: "#94A3B8", fontSize: "0.82rem", fontWeight: 600, display: "block", marginBottom: "0.4rem" }}>
                      Your Name *
                    </label>
                    <input
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="John Smith"
                      style={{
                        width: "100%",
                        padding: "0.75rem 1rem",
                        borderRadius: 10,
                        background: "rgba(255,255,255,0.06)",
                        border: "1px solid rgba(255,255,255,0.12)",
                        color: "#F1F5F9",
                        fontSize: "0.9rem",
                        outline: "none",
                        boxSizing: "border-box",
                      }}
                    />
                  </div>
                  <div>
                    <label style={{ color: "#94A3B8", fontSize: "0.82rem", fontWeight: 600, display: "block", marginBottom: "0.4rem" }}>
                      Email Address *
                    </label>
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="john@company.com"
                      style={{
                        width: "100%",
                        padding: "0.75rem 1rem",
                        borderRadius: 10,
                        background: "rgba(255,255,255,0.06)",
                        border: "1px solid rgba(255,255,255,0.12)",
                        color: "#F1F5F9",
                        fontSize: "0.9rem",
                        outline: "none",
                        boxSizing: "border-box",
                      }}
                    />
                  </div>
                </div>
                <div>
                  <label style={{ color: "#94A3B8", fontSize: "0.82rem", fontWeight: 600, display: "block", marginBottom: "0.4rem" }}>
                    Subject *
                  </label>
                  <input
                    required
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    placeholder="HR Manager Opportunity at..."
                    style={{
                      width: "100%",
                      padding: "0.75rem 1rem",
                      borderRadius: 10,
                      background: "rgba(255,255,255,0.06)",
                      border: "1px solid rgba(255,255,255,0.12)",
                      color: "#F1F5F9",
                      fontSize: "0.9rem",
                      outline: "none",
                      boxSizing: "border-box",
                    }}
                  />
                </div>
                <div>
                  <label style={{ color: "#94A3B8", fontSize: "0.82rem", fontWeight: 600, display: "block", marginBottom: "0.4rem" }}>
                    Message *
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell me about the opportunity or how you'd like to collaborate..."
                    style={{
                      width: "100%",
                      padding: "0.75rem 1rem",
                      borderRadius: 10,
                      background: "rgba(255,255,255,0.06)",
                      border: "1px solid rgba(255,255,255,0.12)",
                      color: "#F1F5F9",
                      fontSize: "0.9rem",
                      outline: "none",
                      resize: "none",
                      boxSizing: "border-box",
                      fontFamily: "inherit",
                    }}
                  />
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.5rem",
                    padding: "0.875rem",
                    borderRadius: 12,
                    background: "linear-gradient(135deg, #3B82F6, #8B5CF6)",
                    color: "white",
                    fontWeight: 700,
                    fontSize: "0.95rem",
                    border: "none",
                    cursor: "pointer",
                    boxShadow: "0 4px 20px rgba(59,130,246,0.35)",
                  }}
                >
                  <Send size={18} /> Send Message
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
