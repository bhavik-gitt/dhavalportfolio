import { motion } from "motion/react";
import { SectionHeader } from "./SectionHeader";
import { Target, Lightbulb, Heart, TrendingUp, Users, Shield } from "lucide-react";

const cards = [
  {
    icon: <Target size={24} />,
    title: "Core Strengths",
    color: "#3B82F6",
    items: [
      "Strategic Workforce Planning",
      "End-to-End Recruitment Operations",
      "Statutory Compliance Management",
      "Payroll Processing & Accuracy",
      "Employee Relations & Engagement",
    ],
  },
  {
    icon: <Lightbulb size={24} />,
    title: "Career Vision",
    color: "#06B6D4",
    items: [
      "Build high-performing HR functions",
      "Drive data-driven HR decisions",
      "Champion diversity & inclusion",
      "Enable business growth through people",
      "Foster a culture of continuous learning",
    ],
  },
  {
    icon: <Heart size={24} />,
    title: "Leadership Philosophy",
    color: "#8B5CF6",
    items: [
      "People-first approach always",
      "Transparency & open communication",
      "Empowerment over micromanagement",
      "Result-driven accountability",
      "Empathy in every interaction",
    ],
  },
  {
    icon: <TrendingUp size={24} />,
    title: "HR Management Approach",
    color: "#EC4899",
    items: [
      "Proactive compliance monitoring",
      "Technology-enabled HR processes",
      "Continuous process optimization",
      "Cross-functional collaboration",
      "Holistic employee lifecycle care",
    ],
  },
];

const pillars = [
  { icon: <Users size={20} />, label: "People Operations", color: "#3B82F6" },
  { icon: <Shield size={20} />, label: "100% Compliance", color: "#06B6D4" },
  { icon: <Target size={20} />, label: "Strategic Hiring", color: "#8B5CF6" },
  { icon: <Heart size={20} />, label: "Employee Experience", color: "#EC4899" },
  { icon: <TrendingUp size={20} />, label: "Growth Mindset", color: "#F59E0B" },
];

export function AboutSection() {
  return (
    <section
      id="about"
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
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "60%",
          height: 1,
          background: "linear-gradient(to right, transparent, rgba(59,130,246,0.4), transparent)",
        }}
      />

      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <SectionHeader
          badge="About Me"
          title="Premium Storytelling"
          subtitle="7+ years of shaping enterprise HR landscapes — from talent pipelines to payroll compliance, driving measurable workforce transformation."
        />

        {/* Professional Summary */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            maxWidth: 860,
            margin: "0 auto 4rem",
            padding: "2.5rem",
            borderRadius: 20,
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.09)",
            backdropFilter: "blur(16px)",
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: "2rem",
              right: "2rem",
              height: 1,
              background: "linear-gradient(to right, transparent, rgba(59,130,246,0.5), transparent)",
            }}
          />
          <p style={{ color: "#CBD5E1", fontSize: "1.1rem", lineHeight: 1.85, textAlign: "center" }}>
            A dynamic and results-driven{" "}
            <span style={{ color: "#60A5FA", fontWeight: 600 }}>HR Manager</span> with over{" "}
            <span style={{ color: "#34D399", fontWeight: 600 }}>7 years of progressive experience</span>{" "}
            in Human Resources management across diverse enterprise environments. Proven expertise in{" "}
            <span style={{ color: "#A78BFA", fontWeight: 600 }}>
              Payroll Management, Statutory Compliance, Talent Acquisition, Employee Relations,
            </span>{" "}
            and comprehensive HRMIS operations. Committed to building high-performance teams and
            cultivating workplace cultures that drive organizational success and employee well-being.
          </p>
        </motion.div>

        {/* Pillar chips */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "0.75rem",
            marginBottom: "4rem",
          }}
        >
          {pillars.map((p, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.06, y: -2 }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.5rem 1.25rem",
                borderRadius: 9999,
                background: `${p.color}18`,
                border: `1px solid ${p.color}35`,
                color: p.color,
                fontSize: "0.875rem",
                fontWeight: 600,
                cursor: "default",
              }}
            >
              {p.icon}
              {p.label}
            </motion.div>
          ))}
        </motion.div>

        {/* Cards grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6, scale: 1.02 }}
              style={{
                padding: "2rem",
                borderRadius: 20,
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                backdropFilter: "blur(16px)",
                position: "relative",
                overflow: "hidden",
                cursor: "default",
              }}
            >
              {/* Top gradient line */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 2,
                  background: `linear-gradient(to right, ${card.color}, transparent)`,
                }}
              />

              {/* Icon */}
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 14,
                  background: `${card.color}20`,
                  border: `1px solid ${card.color}35`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: card.color,
                  marginBottom: "1.25rem",
                }}
              >
                {card.icon}
              </div>

              <h3 style={{ color: "#F1F5F9", fontWeight: 700, marginBottom: "1rem", fontSize: "1.1rem" }}>
                {card.title}
              </h3>

              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {card.items.map((item, j) => (
                  <li
                    key={j}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.6rem",
                      color: "#94A3B8",
                      fontSize: "0.9rem",
                      padding: "0.35rem 0",
                      borderBottom: j < card.items.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none",
                    }}
                  >
                    <span style={{ width: 5, height: 5, borderRadius: "50%", background: card.color, flexShrink: 0 }} />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
