import { motion } from "motion/react";
import { SectionHeader } from "./SectionHeader";
import {
  AreaChart, Area, BarChart, Bar, RadarChart, Radar, PolarGrid,
  PolarAngleAxis, PieChart, Pie, Cell, RadialBarChart, RadialBar,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend,
} from "recharts";

const retentionData = [
  { month: "Jan", rate: 88 }, { month: "Feb", rate: 90 }, { month: "Mar", rate: 87 },
  { month: "Apr", rate: 92 }, { month: "May", rate: 93 }, { month: "Jun", rate: 95 },
  { month: "Jul", rate: 94 }, { month: "Aug", rate: 96 }, { month: "Sep", rate: 95 },
  { month: "Oct", rate: 97 }, { month: "Nov", rate: 96 }, { month: "Dec", rate: 98 },
];

const funnelData = [
  { stage: "Applied", count: 450 },
  { stage: "Screened", count: 280 },
  { stage: "Interview", count: 140 },
  { stage: "Offered", count: 60 },
  { stage: "Hired", count: 48 },
];

const engagementData = [
  { name: "Highly Engaged", value: 45 },
  { name: "Engaged", value: 35 },
  { name: "Neutral", value: 13 },
  { name: "Disengaged", value: 7 },
];

const ENGAGEMENT_COLORS = ["#3B82F6", "#06B6D4", "#8B5CF6", "#F43F5E"];

const complianceData = [
  { name: "EPF/ESIC", value: 99, fill: "#3B82F6" },
  { name: "PT/LWF", value: 97, fill: "#06B6D4" },
  { name: "Gratuity", value: 98, fill: "#8B5CF6" },
  { name: "Labor Law", value: 96, fill: "#EC4899" },
];

const hiringData = [
  { quarter: "Q1'23", success: 82, target: 75 },
  { quarter: "Q2'23", success: 87, target: 80 },
  { quarter: "Q3'23", success: 91, target: 85 },
  { quarter: "Q4'23", success: 94, target: 88 },
  { quarter: "Q1'24", success: 96, target: 90 },
];

const kpiCards = [
  { label: "Payroll Accuracy", value: "99.8%", color: "#3B82F6", desc: "Zero-error processing" },
  { label: "Avg Onboarding", value: "3 Days", color: "#06B6D4", desc: "Best-in-class speed" },
  { label: "Attrition Rate", value: "8.2%", color: "#8B5CF6", desc: "Well below industry avg" },
  { label: "Time-to-Hire", value: "18 Days", color: "#EC4899", desc: "Optimized pipeline" },
];

function GlassPanel({ children, title }: { children: React.ReactNode; title: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      style={{
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.09)",
        borderRadius: 20,
        padding: "1.75rem",
        backdropFilter: "blur(16px)",
      }}
    >
      <h3 style={{ color: "#CBD5E1", fontSize: "0.95rem", fontWeight: 600, marginBottom: "1.5rem", letterSpacing: "0.03em" }}>
        {title}
      </h3>
      {children}
    </motion.div>
  );
}

export function HRDashboard() {
  return (
    <section
      id="dashboard"
      style={{
        padding: "7rem 1.5rem",
        background: "linear-gradient(180deg, #111827 0%, #0F172A 100%)",
        position: "relative",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <SectionHeader
          badge="Live HR Analytics"
          title="HR Intelligence Dashboard"
          subtitle="Real-time workforce metrics showcasing operational excellence, compliance mastery, and people management impact."
          gradient="linear-gradient(135deg, #06B6D4, #3B82F6, #8B5CF6)"
        />

        {/* KPI Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "1.25rem",
            marginBottom: "2rem",
          }}
        >
          {kpiCards.map((k, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              whileHover={{ y: -4, scale: 1.02 }}
              style={{
                padding: "1.5rem",
                borderRadius: 18,
                background: `linear-gradient(135deg, ${k.color}18, ${k.color}08)`,
                border: `1px solid ${k.color}30`,
                backdropFilter: "blur(12px)",
              }}
            >
              <div style={{ color: "#94A3B8", fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.05em", marginBottom: "0.5rem" }}>
                {k.label}
              </div>
              <div
                style={{
                  fontSize: "2rem",
                  fontWeight: 800,
                  background: `linear-gradient(135deg, ${k.color}, white)`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  lineHeight: 1.2,
                }}
              >
                {k.value}
              </div>
              <div style={{ color: "#64748B", fontSize: "0.78rem", marginTop: "0.3rem" }}>{k.desc}</div>
            </motion.div>
          ))}
        </div>

        {/* Charts Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }} className="charts-grid">
          {/* Employee Retention */}
          <GlassPanel title="📈 Employee Retention Rate (%)">
            <ResponsiveContainer width="100%" height={220}>
              <AreaChart data={retentionData}>
                <defs>
                  <linearGradient id="retentionGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#3B82F6" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" />
                <XAxis dataKey="month" tick={{ fill: "#64748B", fontSize: 11 }} axisLine={false} tickLine={false} />
                <YAxis domain={[80, 100]} tick={{ fill: "#64748B", fontSize: 11 }} axisLine={false} tickLine={false} />
                <Tooltip
                  contentStyle={{ background: "#1E293B", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 10, color: "#F1F5F9" }}
                />
                <Area type="monotone" dataKey="rate" stroke="#3B82F6" strokeWidth={2.5} fill="url(#retentionGrad)" dot={{ fill: "#3B82F6", r: 3 }} />
              </AreaChart>
            </ResponsiveContainer>
          </GlassPanel>

          {/* Recruitment Funnel */}
          <GlassPanel title="🔻 Recruitment Funnel">
            <ResponsiveContainer width="100%" height={220}>
              <BarChart data={funnelData} layout="vertical">
                <defs>
                  <linearGradient id="funnelGrad" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#06B6D4" />
                    <stop offset="100%" stopColor="#8B5CF6" />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" />
                <XAxis type="number" tick={{ fill: "#64748B", fontSize: 11 }} axisLine={false} tickLine={false} />
                <YAxis dataKey="stage" type="category" tick={{ fill: "#94A3B8", fontSize: 12 }} axisLine={false} tickLine={false} width={60} />
                <Tooltip contentStyle={{ background: "#1E293B", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 10, color: "#F1F5F9" }} />
                <Bar dataKey="count" fill="url(#funnelGrad)" radius={[0, 6, 6, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </GlassPanel>

          {/* Compliance Performance */}
          <GlassPanel title="🛡️ Compliance Performance (%)">
            <ResponsiveContainer width="100%" height={220}>
              <RadialBarChart cx="50%" cy="50%" innerRadius="25%" outerRadius="90%" data={complianceData} startAngle={90} endAngle={-270}>
                <RadialBar dataKey="value" cornerRadius={6} label={{ position: "insideStart", fill: "#94A3B8", fontSize: 11 }} />
                <Legend iconType="circle" iconSize={10} wrapperStyle={{ color: "#94A3B8", fontSize: 12 }} />
                <Tooltip contentStyle={{ background: "#1E293B", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 10, color: "#F1F5F9" }} />
              </RadialBarChart>
            </ResponsiveContainer>
          </GlassPanel>

          {/* Employee Engagement */}
          <GlassPanel title="💼 Employee Engagement Breakdown">
            <ResponsiveContainer width="100%" height={220}>
              <PieChart>
                <Pie data={engagementData} cx="50%" cy="50%" innerRadius={55} outerRadius={90} paddingAngle={3} dataKey="value">
                  {engagementData.map((_, i) => (
                    <Cell key={i} fill={ENGAGEMENT_COLORS[i]} />
                  ))}
                </Pie>
                <Tooltip contentStyle={{ background: "#1E293B", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 10, color: "#F1F5F9" }} />
                <Legend iconType="circle" iconSize={10} wrapperStyle={{ color: "#94A3B8", fontSize: 12 }} />
              </PieChart>
            </ResponsiveContainer>
          </GlassPanel>

          {/* Hiring Success Rate - full width */}
          <div style={{ gridColumn: "1 / -1" }}>
            <GlassPanel title="🎯 Hiring Success Rate vs Target (%)">
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={hiringData}>
                  <defs>
                    <linearGradient id="successGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#3B82F6" />
                      <stop offset="100%" stopColor="#8B5CF6" />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" />
                  <XAxis dataKey="quarter" tick={{ fill: "#64748B", fontSize: 12 }} axisLine={false} tickLine={false} />
                  <YAxis domain={[60, 100]} tick={{ fill: "#64748B", fontSize: 11 }} axisLine={false} tickLine={false} />
                  <Tooltip contentStyle={{ background: "#1E293B", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 10, color: "#F1F5F9" }} />
                  <Legend iconType="circle" iconSize={10} wrapperStyle={{ color: "#94A3B8", fontSize: 12 }} />
                  <Bar dataKey="success" name="Achieved" fill="url(#successGrad)" radius={[6, 6, 0, 0]} />
                  <Bar dataKey="target" name="Target" fill="rgba(255,255,255,0.12)" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </GlassPanel>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .charts-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
