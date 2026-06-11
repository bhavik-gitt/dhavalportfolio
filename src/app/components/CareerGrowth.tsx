import { motion } from "motion/react";
import { SectionHeader } from "./SectionHeader";
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, ReferenceLine,
} from "recharts";

const careerData = [
  { year: "2017", role: "HR Executive", responsibility: 30, impact: 25, leadership: 20, label: "Dhruv Enterprise" },
  { year: "2018", role: "HR Executive", responsibility: 40, impact: 35, leadership: 28, label: "Dhruv Enterprise" },
  { year: "2019", role: "HR Executive", responsibility: 52, impact: 45, leadership: 36, label: "Aargee Staffing" },
  { year: "2020", role: "HR Executive", responsibility: 63, impact: 58, leadership: 46, label: "Aargee Staffing" },
  { year: "2021", role: "Senior HR Exec", responsibility: 75, impact: 70, leadership: 60, label: "HCCB" },
  { year: "2022", role: "Senior HR Exec", responsibility: 83, impact: 79, leadership: 70, label: "HCCB" },
  { year: "2023", role: "Senior HR Exec", responsibility: 90, impact: 87, leadership: 80, label: "HCCB" },
  { year: "2024", role: "HR Manager", responsibility: 96, impact: 93, leadership: 90, label: "HCCB" },
];

const milestones = [
  { year: "2017", title: "Career Start", desc: "Began HR journey at Dhruv Enterprise", color: "#8B5CF6" },
  { year: "2019", title: "Domain Expansion", desc: "Joined Aargee Staffing — VMS & BGC expertise", color: "#06B6D4" },
  { year: "2021", title: "Enterprise Level", desc: "HCCB — Coca-Cola enterprise-scale HR", color: "#3B82F6" },
  { year: "2024", title: "Senior Leadership", desc: "HR Manager role — strategic workforce leadership", color: "#10B981" },
];

const CustomTooltip = ({ active, payload, label }: { active?: boolean; payload?: Array<{ value: number; name: string; color: string }>; label?: string }) => {
  if (active && payload && payload.length) {
    const d = careerData.find(d => d.year === label);
    return (
      <div style={{ background: "#1E293B", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 12, padding: "1rem", minWidth: 180 }}>
        <div style={{ color: "#F1F5F9", fontWeight: 700, marginBottom: "0.5rem" }}>{label} — {d?.label}</div>
        {payload.map((p, i) => (
          <div key={i} style={{ display: "flex", justifyContent: "space-between", gap: "1rem", marginBottom: "0.25rem" }}>
            <span style={{ color: "#94A3B8", fontSize: "0.82rem" }}>{p.name}</span>
            <span style={{ color: p.color, fontWeight: 700, fontSize: "0.82rem" }}>{p.value}%</span>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

export function CareerGrowth() {
  return (
    <section
      id="career-growth"
      style={{
        padding: "7rem 1.5rem",
        background: "linear-gradient(180deg, #111827 0%, #0F172A 100%)",
        position: "relative",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <SectionHeader
          badge="Career Trajectory"
          title="Growth Visualization"
          subtitle="Charting 7+ years of progressive growth in responsibility, organizational impact, and leadership influence."
          gradient="linear-gradient(135deg, #F59E0B, #EC4899, #8B5CF6)"
        />

        {/* Chart */}
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
            marginBottom: "2rem",
          }}
        >
          <h3 style={{ color: "#CBD5E1", fontSize: "0.95rem", fontWeight: 600, marginBottom: "1.5rem" }}>
            📈 Career Growth Metrics Over Time
          </h3>
          <ResponsiveContainer width="100%" height={320}>
            <AreaChart data={careerData} margin={{ top: 10, right: 10, bottom: 0, left: -20 }}>
              <defs>
                <linearGradient id="respGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.25} />
                  <stop offset="95%" stopColor="#3B82F6" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="impGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.25} />
                  <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="leadGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10B981" stopOpacity={0.25} />
                  <stop offset="95%" stopColor="#10B981" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" />
              <XAxis dataKey="year" tick={{ fill: "#64748B", fontSize: 12 }} axisLine={false} tickLine={false} />
              <YAxis domain={[0, 100]} tick={{ fill: "#64748B", fontSize: 11 }} axisLine={false} tickLine={false} />
              <Tooltip content={<CustomTooltip />} />
              <Area type="monotone" dataKey="responsibility" name="Responsibility" stroke="#3B82F6" strokeWidth={2.5} fill="url(#respGrad)" dot={{ fill: "#3B82F6", r: 4 }} />
              <Area type="monotone" dataKey="impact" name="Impact" stroke="#8B5CF6" strokeWidth={2.5} fill="url(#impGrad)" dot={{ fill: "#8B5CF6", r: 4 }} />
              <Area type="monotone" dataKey="leadership" name="Leadership" stroke="#10B981" strokeWidth={2.5} fill="url(#leadGrad)" dot={{ fill: "#10B981", r: 4 }} />
              <ReferenceLine x="2021" stroke="rgba(59,130,246,0.3)" strokeDasharray="4 4" label={{ value: "HCCB →", fill: "#60A5FA", fontSize: 11 }} />
            </AreaChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Milestones */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.25rem" }}>
          {milestones.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              whileHover={{ y: -4, scale: 1.02 }}
              style={{
                padding: "1.5rem",
                borderRadius: 16,
                background: `${m.color}10`,
                border: `1px solid ${m.color}30`,
                backdropFilter: "blur(12px)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: "50%",
                    background: `${m.color}25`,
                    border: `2px solid ${m.color}60`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: m.color,
                    fontSize: "0.75rem",
                    fontWeight: 800,
                  }}
                >
                  {m.year}
                </div>
                <div style={{ color: m.color, fontWeight: 700, fontSize: "0.95rem" }}>{m.title}</div>
              </div>
              <p style={{ color: "#94A3B8", fontSize: "0.85rem", lineHeight: 1.6, margin: 0 }}>{m.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
