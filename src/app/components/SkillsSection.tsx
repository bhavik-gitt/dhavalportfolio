import { motion } from "motion/react";
import { SectionHeader } from "./SectionHeader";
import {
  RadarChart, Radar, PolarGrid, PolarAngleAxis,
  ResponsiveContainer, Tooltip,
} from "recharts";

const radarData = [
  { skill: "HR Operations", value: 96 },
  { skill: "Recruitment", value: 93 },
  { skill: "Payroll", value: 98 },
  { skill: "Compliance", value: 97 },
  { skill: "Onboarding", value: 92 },
  { skill: "Employee Engagement", value: 90 },
  { skill: "Leadership", value: 88 },
  { skill: "Communication", value: 94 },
];

const skillOrbs = [
  { name: "HR Operations", level: 96, color: "#3B82F6", size: 110 },
  { name: "Payroll", level: 98, color: "#06B6D4", size: 100 },
  { name: "Compliance", level: 97, color: "#8B5CF6", size: 105 },
  { name: "Recruitment", level: 93, color: "#EC4899", size: 95 },
  { name: "HRMIS", level: 90, color: "#F59E0B", size: 88 },
  { name: "Onboarding", level: 92, color: "#10B981", size: 92 },
  { name: "EPF / ESIC", level: 97, color: "#6366F1", size: 90 },
  { name: "PT / LWF", level: 95, color: "#14B8A6", size: 85 },
  { name: "Gratuity", level: 94, color: "#F472B6", size: 83 },
  { name: "Audit Docs", level: 91, color: "#60A5FA", size: 82 },
  { name: "Vendor Mgmt", level: 88, color: "#A78BFA", size: 80 },
  { name: "Leadership", level: 88, color: "#34D399", size: 85 },
];

const technicalSkills = [
  { category: "Statutory Compliance", skills: ["EPF", "ESIC", "PT", "LWF", "Gratuity", "Labour Law"] },
  { category: "HR Management", skills: ["Recruitment", "Onboarding", "Payroll", "HRMIS", "MIS Reports"] },
  { category: "Soft Skills", skills: ["Leadership", "Communication", "Team Building", "Negotiation"] },
  { category: "Operations", skills: ["Vendor Management", "BGC Operations", "VMS", "Audit Handling"] },
];

export function SkillsSection() {
  return (
    <section
      id="skills"
      style={{
        padding: "7rem 1.5rem",
        background: "linear-gradient(180deg, #111827 0%, #0F172A 100%)",
        position: "relative",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <SectionHeader
          badge="Skills Matrix"
          title="Expertise Visualization"
          subtitle="A comprehensive view of HR competencies built over 7+ years of enterprise experience."
          gradient="linear-gradient(135deg, #EC4899, #8B5CF6, #3B82F6)"
        />

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem", marginBottom: "2.5rem" }} className="skills-top-grid">
          {/* Radar Chart */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
              padding: "2rem",
              borderRadius: 20,
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.09)",
              backdropFilter: "blur(16px)",
            }}
          >
            <h3 style={{ color: "#CBD5E1", fontSize: "0.95rem", fontWeight: 600, marginBottom: "1.5rem" }}>
              🎯 Skill Radar — Core Competencies
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <RadarChart data={radarData}>
                <defs>
                  <linearGradient id="radarGrad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#3B82F6" />
                    <stop offset="100%" stopColor="#8B5CF6" />
                  </linearGradient>
                </defs>
                <PolarGrid stroke="rgba(255,255,255,0.1)" />
                <PolarAngleAxis dataKey="skill" tick={{ fill: "#94A3B8", fontSize: 11 }} />
                <Radar
                  dataKey="value"
                  stroke="#3B82F6"
                  fill="#3B82F6"
                  fillOpacity={0.25}
                  strokeWidth={2}
                  dot={{ fill: "#3B82F6", r: 4 }}
                />
                <Tooltip
                  contentStyle={{
                    background: "#1E293B",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: 10,
                    color: "#F1F5F9",
                  }}
                  formatter={(value: number) => [`${value}%`, "Proficiency"]}
                />
              </RadarChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Technical Skill Categories */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
              padding: "2rem",
              borderRadius: 20,
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.09)",
              backdropFilter: "blur(16px)",
              display: "flex",
              flexDirection: "column",
              gap: "1.25rem",
            }}
          >
            <h3 style={{ color: "#CBD5E1", fontSize: "0.95rem", fontWeight: 600 }}>
              🗂️ Skill Categories
            </h3>
            {technicalSkills.map((cat, i) => {
              const colors = ["#3B82F6", "#06B6D4", "#8B5CF6", "#EC4899"];
              return (
                <div key={i}>
                  <div style={{ color: colors[i], fontSize: "0.82rem", fontWeight: 700, letterSpacing: "0.06em", marginBottom: "0.5rem", textTransform: "uppercase" }}>
                    {cat.category}
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                    {cat.skills.map((s, j) => (
                      <motion.span
                        key={j}
                        whileHover={{ scale: 1.08, y: -1 }}
                        style={{
                          padding: "0.3rem 0.75rem",
                          borderRadius: 6,
                          background: `${colors[i]}15`,
                          border: `1px solid ${colors[i]}30`,
                          color: colors[i],
                          fontSize: "0.78rem",
                          fontWeight: 600,
                          cursor: "default",
                        }}
                      >
                        {s}
                      </motion.span>
                    ))}
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* Skill Orbs / Galaxy */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            padding: "2rem",
            borderRadius: 20,
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.09)",
            backdropFilter: "blur(16px)",
          }}
        >
          <h3 style={{ color: "#CBD5E1", fontSize: "0.95rem", fontWeight: 600, marginBottom: "2rem" }}>
            🌟 Skill Galaxy — Interactive Orbs
          </h3>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "1rem",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {skillOrbs.map((orb, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.04, type: "spring", stiffness: 200 }}
                whileHover={{ scale: 1.15, y: -8, zIndex: 10 }}
                animate={{
                  y: [0, i % 2 === 0 ? -5 : 5, 0],
                }}
                style={{
                  width: orb.size,
                  height: orb.size,
                  borderRadius: "50%",
                  background: `radial-gradient(circle at 35% 35%, ${orb.color}50 0%, ${orb.color}18 60%, transparent 100%)`,
                  border: `1.5px solid ${orb.color}50`,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "default",
                  position: "relative",
                  boxShadow: `0 0 20px ${orb.color}25`,
                }}
              >
                <div
                  style={{
                    color: orb.color,
                    fontSize: `${Math.max(orb.size / 10, 9)}px`,
                    fontWeight: 800,
                    lineHeight: 1,
                    marginBottom: 2,
                  }}
                >
                  {orb.level}%
                </div>
                <div
                  style={{
                    color: "#CBD5E1",
                    fontSize: `${Math.max(orb.size / 14, 8)}px`,
                    fontWeight: 600,
                    textAlign: "center",
                    padding: "0 0.5rem",
                  }}
                >
                  {orb.name}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .skills-top-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
