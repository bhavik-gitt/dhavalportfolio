import { useState } from "react";
import { motion } from "motion/react";
import { SectionHeader } from "./SectionHeader";
import { Award, ExternalLink, Factory, BookMarked, BarChart } from "lucide-react";

const certifications = [
  {
    title: "Industrial Visit",
    subtitle: "Welspun Syntex Ltd",
    desc: "Hands-on exposure to large-scale industrial HR operations, workforce management, and manufacturing-sector people practices.",
    icon: <Factory size={28} />,
    color: "#3B82F6",
    tags: ["Industrial HR", "Workforce Ops", "Manufacturing"],
    year: "2018",
  },
  {
    title: "Research Methodology Workshop",
    subtitle: "Professional Development Program",
    desc: "Advanced training in quantitative and qualitative research methods applied to HR analytics, workforce studies, and organizational behavior.",
    icon: <BookMarked size={28} />,
    color: "#8B5CF6",
    tags: ["HR Analytics", "Research Design", "Data Interpretation"],
    year: "2018",
  },
  {
    title: "Market Research Project",
    subtitle: "Academic Certification",
    desc: "Comprehensive market research project focusing on talent market dynamics, compensation benchmarking, and labor market trends.",
    icon: <BarChart size={28} />,
    color: "#06B6D4",
    tags: ["Market Analysis", "Compensation Study", "Labor Trends"],
    year: "2019",
  },
];

export function CertificationsSection() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section
      id="certifications"
      style={{
        padding: "7rem 1.5rem",
        background: "linear-gradient(180deg, #111827 0%, #0F172A 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative */}
      <div
        style={{
          position: "absolute",
          top: "20%",
          right: "-5%",
          width: 400,
          height: 400,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(139,92,246,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <SectionHeader
          badge="Certifications"
          title="Achievement Wall"
          subtitle="Professional certifications and workshop participations demonstrating commitment to continuous learning and expertise."
          gradient="linear-gradient(135deg, #F59E0B, #EC4899, #8B5CF6)"
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "1.75rem",
            marginBottom: "3rem",
          }}
        >
          {certifications.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              whileHover={{ y: -8 }}
              style={{
                padding: "2.25rem",
                borderRadius: 22,
                background: "rgba(255,255,255,0.04)",
                border: `1px solid ${hovered === i ? cert.color + "50" : "rgba(255,255,255,0.08)"}`,
                backdropFilter: "blur(16px)",
                position: "relative",
                overflow: "hidden",
                cursor: "default",
                transition: "border-color 0.3s",
              }}
            >
              {/* Spotlight glow */}
              <motion.div
                animate={{ opacity: hovered === i ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                style={{
                  position: "absolute",
                  inset: 0,
                  background: `radial-gradient(circle at 40% 30%, ${cert.color}12 0%, transparent 65%)`,
                  pointerEvents: "none",
                }}
              />

              {/* Award badge */}
              <div
                style={{
                  position: "absolute",
                  top: "1.25rem",
                  right: "1.25rem",
                  color: `${cert.color}60`,
                }}
              >
                <Award size={32} />
              </div>

              {/* Icon */}
              <div
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 18,
                  background: `${cert.color}20`,
                  border: `1.5px solid ${cert.color}40`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: cert.color,
                  marginBottom: "1.5rem",
                }}
              >
                {cert.icon}
              </div>

              {/* Year */}
              <div
                style={{
                  display: "inline-flex",
                  padding: "0.2rem 0.6rem",
                  borderRadius: 6,
                  background: `${cert.color}15`,
                  color: cert.color,
                  fontSize: "0.72rem",
                  fontWeight: 700,
                  marginBottom: "0.75rem",
                  letterSpacing: "0.06em",
                }}
              >
                {cert.year}
              </div>

              <h3 style={{ color: "#F1F5F9", fontWeight: 700, fontSize: "1.05rem", marginBottom: "0.4rem" }}>
                {cert.title}
              </h3>
              <div style={{ color: cert.color, fontWeight: 600, fontSize: "0.875rem", marginBottom: "1rem" }}>
                {cert.subtitle}
              </div>
              <p style={{ color: "#94A3B8", fontSize: "0.875rem", lineHeight: 1.7, marginBottom: "1.25rem" }}>
                {cert.desc}
              </p>

              {/* Tags */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                {cert.tags.map((tag, j) => (
                  <span
                    key={j}
                    style={{
                      padding: "0.25rem 0.65rem",
                      borderRadius: 6,
                      background: `${cert.color}12`,
                      border: `1px solid ${cert.color}28`,
                      color: cert.color,
                      fontSize: "0.76rem",
                      fontWeight: 600,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{
            textAlign: "center",
            padding: "2rem",
            borderRadius: 16,
            background: "rgba(59,130,246,0.06)",
            border: "1px solid rgba(59,130,246,0.2)",
          }}
        >
          <p style={{ color: "#94A3B8", marginBottom: "1rem" }}>
            Continuously upskilling in HR technology, data analytics, and leadership development
          </p>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem", color: "#60A5FA", fontWeight: 600, fontSize: "0.9rem" }}>
            <ExternalLink size={16} />
            More certifications in progress — available on request
          </div>
        </motion.div>
      </div>
    </section>
  );
}
