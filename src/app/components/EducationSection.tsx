import { motion } from "motion/react";
import { SectionHeader } from "./SectionHeader";
import { GraduationCap, Award, BookOpen, School } from "lucide-react";

const education = [
  {
    degree: "MBA — Human Resource Management",
    institution: "NIMS University",
    period: "2017 – 2019",
    grade: "Distinction",
    icon: <GraduationCap size={24} />,
    color: "#3B82F6",
    highlights: ["Specialized HR curriculum", "Organizational Behavior", "Labor Laws & IR", "Strategic Management"],
    badge: "Post Graduate",
  },
  {
    degree: "BBA — Management",
    institution: "KSV University",
    period: "2014 – 2017",
    grade: "First Class",
    icon: <BookOpen size={24} />,
    color: "#06B6D4",
    highlights: ["Business Administration", "Marketing Management", "Financial Accounting", "Organizational Studies"],
    badge: "Graduate",
  },
  {
    degree: "HSC — Higher Secondary",
    institution: "Gujarat Board",
    period: "2013 – 2014",
    grade: "Good Standing",
    icon: <School size={24} />,
    color: "#8B5CF6",
    highlights: ["Commerce Stream", "Accountancy", "Economics", "Business Studies"],
    badge: "XII Standard",
  },
  {
    degree: "SSC — Secondary",
    institution: "Gujarat Board",
    period: "2011 – 2012",
    grade: "Good Standing",
    icon: <Award size={24} />,
    color: "#EC4899",
    highlights: ["All Core Subjects", "Mathematics", "Science", "Social Studies"],
    badge: "X Standard",
  },
];

export function EducationSection() {
  return (
    <section
      id="education"
      style={{
        padding: "7rem 1.5rem",
        background: "linear-gradient(180deg, #0F172A 0%, #111827 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <SectionHeader
          badge="Education"
          title="Academic Foundation"
          subtitle="A strong educational background in HR Management and Business Administration powering enterprise-level expertise."
          gradient="linear-gradient(135deg, #3B82F6, #8B5CF6)"
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30, rotateX: -5 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8, scale: 1.02, rotateY: 3 }}
              style={{
                padding: "2rem",
                borderRadius: 20,
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.09)",
                backdropFilter: "blur(16px)",
                position: "relative",
                overflow: "hidden",
                cursor: "default",
                transformStyle: "preserve-3d",
              }}
            >
              {/* Top gradient */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 3,
                  background: `linear-gradient(to right, ${edu.color}, ${edu.color}50, transparent)`,
                }}
              />

              {/* Background decoration */}
              <div
                style={{
                  position: "absolute",
                  bottom: -20,
                  right: -20,
                  width: 100,
                  height: 100,
                  borderRadius: "50%",
                  background: `radial-gradient(circle, ${edu.color}15 0%, transparent 70%)`,
                }}
              />

              {/* Badge */}
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  padding: "0.25rem 0.75rem",
                  borderRadius: 6,
                  background: `${edu.color}18`,
                  border: `1px solid ${edu.color}35`,
                  color: edu.color,
                  fontSize: "0.72rem",
                  fontWeight: 700,
                  letterSpacing: "0.06em",
                  marginBottom: "1.25rem",
                  textTransform: "uppercase",
                }}
              >
                {edu.badge}
              </div>

              {/* Icon & Degree */}
              <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem", marginBottom: "1rem" }}>
                <div
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: 14,
                    background: `${edu.color}20`,
                    border: `1px solid ${edu.color}40`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: edu.color,
                    flexShrink: 0,
                  }}
                >
                  {edu.icon}
                </div>
                <div>
                  <h3 style={{ color: "#F1F5F9", fontWeight: 700, fontSize: "1rem", lineHeight: 1.35, marginBottom: "0.25rem" }}>
                    {edu.degree}
                  </h3>
                  <div style={{ color: edu.color, fontWeight: 600, fontSize: "0.875rem" }}>
                    {edu.institution}
                  </div>
                </div>
              </div>

              {/* Period & Grade */}
              <div style={{ display: "flex", gap: "1rem", marginBottom: "1.25rem", flexWrap: "wrap" }}>
                <span style={{ color: "#64748B", fontSize: "0.8rem", background: "rgba(255,255,255,0.05)", padding: "0.2rem 0.6rem", borderRadius: 6 }}>
                  📅 {edu.period}
                </span>
                <span style={{ color: "#10B981", fontSize: "0.8rem", background: "rgba(16,185,129,0.1)", padding: "0.2rem 0.6rem", borderRadius: 6 }}>
                  ✓ {edu.grade}
                </span>
              </div>

              {/* Highlights */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                {edu.highlights.map((h, j) => (
                  <span
                    key={j}
                    style={{
                      padding: "0.25rem 0.6rem",
                      borderRadius: 6,
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.07)",
                      color: "#94A3B8",
                      fontSize: "0.76rem",
                    }}
                  >
                    {h}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
