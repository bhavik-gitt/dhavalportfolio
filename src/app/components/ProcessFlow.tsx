import { motion } from "motion/react";
import { SectionHeader } from "./SectionHeader";
import { Users, FileSearch, MessageCircle, Star, UserCheck, DollarSign, Heart, RefreshCw, BarChart2, Shield } from "lucide-react";

const steps = [
  { icon: <Users size={22} />, title: "Talent Acquisition", desc: "Job analysis, sourcing strategy & employer branding", color: "#3B82F6", step: "01" },
  { icon: <FileSearch size={22} />, title: "Screening", desc: "Resume review, skill matching & pre-screening calls", color: "#06B6D4", step: "02" },
  { icon: <MessageCircle size={22} />, title: "Interview", desc: "Structured interviews, assessments & panel rounds", color: "#8B5CF6", step: "03" },
  { icon: <Star size={22} />, title: "Selection", desc: "Candidate evaluation, offer negotiation & BGC", color: "#EC4899", step: "04" },
  { icon: <UserCheck size={22} />, title: "Onboarding", desc: "Documentation, induction & role transition", color: "#F59E0B", step: "05" },
  { icon: <DollarSign size={22} />, title: "Payroll", desc: "CTC structuring, payroll processing & compliance", color: "#10B981", step: "06" },
  { icon: <Heart size={22} />, title: "Engagement", desc: "R&R programs, team events & culture initiatives", color: "#6366F1", step: "07" },
  { icon: <RefreshCw size={22} />, title: "Retention", desc: "Retention strategies, skip-levels & career growth", color: "#14B8A6", step: "08" },
  { icon: <BarChart2 size={22} />, title: "Performance Review", desc: "Goal setting, mid-year reviews & annual appraisals", color: "#F472B6", step: "09" },
  { icon: <Shield size={22} />, title: "Compliance", desc: "Statutory audits, labor law & documentation", color: "#60A5FA", step: "10" },
];

export function ProcessFlow() {
  return (
    <section
      id="process"
      style={{
        padding: "7rem 1.5rem",
        background: "linear-gradient(180deg, #0F172A 0%, #111827 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Ambient glow */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 800,
          height: 400,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(59,130,246,0.04) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <SectionHeader
          badge="HR Process Flow"
          title="End-to-End HR Workflow"
          subtitle="A comprehensive, proven HR lifecycle framework driving operational excellence from talent acquisition to compliance."
          gradient="linear-gradient(135deg, #10B981, #06B6D4, #3B82F6)"
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "1.25rem",
            position: "relative",
          }}
        >
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              whileHover={{ y: -8, scale: 1.03 }}
              style={{
                padding: "1.75rem 1.5rem",
                borderRadius: 18,
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                backdropFilter: "blur(16px)",
                position: "relative",
                overflow: "hidden",
                cursor: "default",
              }}
            >
              {/* Step number bg */}
              <div
                style={{
                  position: "absolute",
                  top: "0.75rem",
                  right: "0.75rem",
                  fontSize: "2.5rem",
                  fontWeight: 900,
                  color: "rgba(255,255,255,0.04)",
                  lineHeight: 1,
                  fontFamily: "monospace",
                }}
              >
                {step.step}
              </div>

              {/* Top accent line */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 2,
                  background: `linear-gradient(to right, ${step.color}, transparent)`,
                }}
              />

              {/* Icon */}
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 14,
                  background: `${step.color}18`,
                  border: `1px solid ${step.color}35`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: step.color,
                  marginBottom: "1rem",
                }}
              >
                {step.icon}
              </div>

              {/* Step badge */}
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  padding: "0.2rem 0.6rem",
                  borderRadius: 6,
                  background: `${step.color}15`,
                  color: step.color,
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  letterSpacing: "0.06em",
                  marginBottom: "0.6rem",
                }}
              >
                STEP {step.step}
              </div>

              <h3 style={{ color: "#F1F5F9", fontWeight: 700, fontSize: "1rem", marginBottom: "0.5rem" }}>
                {step.title}
              </h3>
              <p style={{ color: "#64748B", fontSize: "0.82rem", lineHeight: 1.6 }}>
                {step.desc}
              </p>

              {/* Hover glow */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                style={{
                  position: "absolute",
                  inset: 0,
                  borderRadius: 18,
                  background: `radial-gradient(circle at center, ${step.color}08 0%, transparent 70%)`,
                  pointerEvents: "none",
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
