import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { SectionHeader } from "./SectionHeader";
import { Building2, ChevronDown, CheckCircle2, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    company: "Hindustan Coca-Cola Beverages Pvt Ltd",
    role: "Senior HR Executive",
    period: "2021 – Present",
    location: "Gujarat, India",
    color: "#3B82F6",
    logo: "🔴",
    description:
      "Led comprehensive HR operations for one of India's largest FMCG enterprises, managing 500+ blue-collar and white-collar employees across multiple plants.",
    achievements: [
      { label: "Payroll Management", desc: "End-to-end monthly payroll processing with 99.8% accuracy for 500+ employees" },
      { label: "Recruitment Operations", desc: "Managed 20+ hiring campaigns; reduced time-to-hire by 35%" },
      { label: "Employee Engagement", desc: "Implemented quarterly engagement programs; improved eNPS from 32 to 67" },
      { label: "Compliance Handling", desc: "100% statutory compliance for EPF, ESIC, PT, LWF, Gratuity & Labour Law" },
      { label: "Attendance Management", desc: "Deployed biometric HRMIS; reduced absenteeism by 22%" },
      { label: "HR Documentation", desc: "Standardized 40+ SOPs and HR policies across the organization" },
    ],
    metrics: [
      { value: "500+", label: "Employees" },
      { value: "99.8%", label: "Payroll Accuracy" },
      { value: "35%", label: "Faster Hiring" },
    ],
  },
  {
    company: "Aargee Staffing Services Pvt Ltd",
    role: "HR Executive",
    period: "2019 – 2021",
    location: "Ahmedabad, Gujarat",
    color: "#06B6D4",
    logo: "🔵",
    description:
      "Managed staffing operations and vendor management for enterprise clients, overseeing background verification, audit compliance, and contract workforce management.",
    achievements: [
      { label: "BGC Operations", desc: "Coordinated background verification for 300+ joiners monthly with zero compliance gaps" },
      { label: "VMS Management", desc: "Administered vendor management system for 15+ staffing vendors" },
      { label: "Audit Handling", desc: "Led internal and external HR audits; maintained zero non-compliance record" },
      { label: "Statutory Compliance", desc: "Ensured compliance with Industrial Disputes Act, Factories Act & Contract Labour Act" },
      { label: "Documentation", desc: "Maintained 100% digital HR records for client audit readiness" },
      { label: "Vendor Management", desc: "Managed SLA adherence and performance reviews for all staffing partners" },
    ],
    metrics: [
      { value: "300+", label: "Monthly Joiners" },
      { value: "15+", label: "Vendors" },
      { value: "0", label: "Audit Findings" },
    ],
  },
  {
    company: "Dhruv Enterprise",
    role: "HR Executive",
    period: "2017 – 2019",
    location: "Gujarat, India",
    color: "#8B5CF6",
    logo: "🟣",
    description:
      "Established foundational HR processes for a growing enterprise, driving end-to-end recruitment, payroll operations, and manpower planning.",
    achievements: [
      { label: "Recruitment", desc: "Handled full-cycle recruitment across 10+ functional roles; filled 80+ positions" },
      { label: "Payroll", desc: "Managed monthly payroll for 150+ employees with statutory deductions" },
      { label: "Manpower Planning", desc: "Developed annual headcount plans aligned with business growth targets" },
      { label: "Administrative Operations", desc: "Oversaw HR administration including joining, exit, and transfer formalities" },
      { label: "Compliance", desc: "Implemented statutory compliance framework from scratch for the organization" },
    ],
    metrics: [
      { value: "150+", label: "Employees" },
      { value: "80+", label: "Positions Filled" },
      { value: "10+", label: "Roles Managed" },
    ],
  },
];

export function ExperienceTimeline() {
  const [expanded, setExpanded] = useState<number | null>(0);

  return (
    <section
      id="experience"
      style={{
        padding: "7rem 1.5rem",
        background: "linear-gradient(180deg, #0F172A 0%, #111827 100%)",
        position: "relative",
      }}
    >
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <SectionHeader
          badge="Experience Journey"
          title="Career Milestones"
          subtitle="A cinematic journey through 7+ years of HR excellence across enterprise organizations."
          gradient="linear-gradient(135deg, #8B5CF6, #3B82F6, #06B6D4)"
        />

        {/* Timeline */}
        <div style={{ position: "relative" }}>
          {/* Vertical line */}
          <div
            style={{
              position: "absolute",
              left: 28,
              top: 0,
              bottom: 0,
              width: 2,
              background: "linear-gradient(to bottom, #3B82F6, #06B6D4, #8B5CF6)",
              opacity: 0.3,
            }}
          />

          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                style={{ position: "relative", paddingLeft: "4.5rem" }}
              >
                {/* Timeline dot */}
                <motion.div
                  whileHover={{ scale: 1.3 }}
                  style={{
                    position: "absolute",
                    left: 18,
                    top: 22,
                    width: 20,
                    height: 20,
                    borderRadius: "50%",
                    background: exp.color,
                    border: "3px solid #0F172A",
                    boxShadow: `0 0 12px ${exp.color}80`,
                    zIndex: 2,
                  }}
                />

                {/* Card */}
                <motion.div
                  whileHover={{ boxShadow: `0 0 30px ${exp.color}20` }}
                  style={{
                    borderRadius: 20,
                    background: "rgba(255,255,255,0.04)",
                    border: `1px solid ${expanded === i ? exp.color + "40" : "rgba(255,255,255,0.08)"}`,
                    backdropFilter: "blur(16px)",
                    overflow: "hidden",
                    transition: "border-color 0.3s",
                  }}
                >
                  {/* Header */}
                  <button
                    onClick={() => setExpanded(expanded === i ? null : i)}
                    style={{
                      width: "100%",
                      padding: "1.75rem 2rem",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      textAlign: "left",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      gap: "1rem",
                    }}
                  >
                    <div style={{ flex: 1 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.5rem", flexWrap: "wrap" }}>
                        <div
                          style={{
                            width: 40,
                            height: 40,
                            borderRadius: 10,
                            background: `${exp.color}20`,
                            border: `1px solid ${exp.color}35`,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: "1.25rem",
                          }}
                        >
                          {exp.logo}
                        </div>
                        <div>
                          <div style={{ color: "#F1F5F9", fontWeight: 700, fontSize: "1.05rem" }}>
                            {exp.role}
                          </div>
                          <div style={{ color: exp.color, fontWeight: 600, fontSize: "0.9rem" }}>
                            {exp.company}
                          </div>
                        </div>
                      </div>
                      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                        <span style={{ display: "flex", alignItems: "center", gap: "0.3rem", color: "#64748B", fontSize: "0.82rem" }}>
                          <Calendar size={13} /> {exp.period}
                        </span>
                        <span style={{ display: "flex", alignItems: "center", gap: "0.3rem", color: "#64748B", fontSize: "0.82rem" }}>
                          <MapPin size={13} /> {exp.location}
                        </span>
                      </div>
                    </div>
                    <motion.div
                      animate={{ rotate: expanded === i ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      style={{ color: "#64748B", flexShrink: 0, marginTop: "0.25rem" }}
                    >
                      <ChevronDown size={20} />
                    </motion.div>
                  </button>

                  {/* Expanded content */}
                  <AnimatePresence>
                    {expanded === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35 }}
                        style={{ overflow: "hidden" }}
                      >
                        <div
                          style={{
                            padding: "0 2rem 2rem",
                            borderTop: `1px solid ${exp.color}20`,
                          }}
                        >
                          <p style={{ color: "#94A3B8", fontSize: "0.95rem", lineHeight: 1.7, marginBottom: "1.5rem", paddingTop: "1.25rem" }}>
                            {exp.description}
                          </p>

                          {/* Metrics */}
                          <div style={{ display: "flex", gap: "1rem", marginBottom: "1.5rem", flexWrap: "wrap" }}>
                            {exp.metrics.map((m, j) => (
                              <div
                                key={j}
                                style={{
                                  padding: "0.6rem 1.25rem",
                                  borderRadius: 10,
                                  background: `${exp.color}15`,
                                  border: `1px solid ${exp.color}30`,
                                  textAlign: "center",
                                }}
                              >
                                <div style={{ color: exp.color, fontWeight: 800, fontSize: "1.25rem" }}>{m.value}</div>
                                <div style={{ color: "#64748B", fontSize: "0.75rem" }}>{m.label}</div>
                              </div>
                            ))}
                          </div>

                          {/* Achievements */}
                          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "0.75rem" }}>
                            {exp.achievements.map((a, j) => (
                              <motion.div
                                key={j}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: j * 0.05 }}
                                style={{
                                  padding: "0.85rem 1rem",
                                  borderRadius: 12,
                                  background: "rgba(255,255,255,0.03)",
                                  border: "1px solid rgba(255,255,255,0.07)",
                                  display: "flex",
                                  gap: "0.6rem",
                                  alignItems: "flex-start",
                                }}
                              >
                                <CheckCircle2 size={15} color={exp.color} style={{ marginTop: 2, flexShrink: 0 }} />
                                <div>
                                  <div style={{ color: "#CBD5E1", fontSize: "0.85rem", fontWeight: 600, marginBottom: "0.2rem" }}>
                                    {a.label}
                                  </div>
                                  <div style={{ color: "#64748B", fontSize: "0.78rem", lineHeight: 1.5 }}>{a.desc}</div>
                                </div>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
