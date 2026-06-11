import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { SectionHeader } from "./SectionHeader";
import { Clock, Users, Target, Shield, Heart, FileText, TrendingUp, Zap } from "lucide-react";

function AnimatedNumber({ to, suffix = "", duration = 2000 }: { to: number; suffix?: string; duration?: number }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let current = 0;
    const step = to / (duration / 16);
    const id = setInterval(() => {
      current += step;
      if (current >= to) { setVal(to); clearInterval(id); }
      else setVal(Math.floor(current));
    }, 16);
    return () => clearInterval(id);
  }, [inView, to, duration]);

  return <span ref={ref}>{val}{suffix}</span>;
}

const achievements = [
  {
    icon: <Clock size={26} />,
    value: 7,
    suffix: "+",
    label: "Years of Experience",
    desc: "Progressive HR leadership across enterprise environments",
    color: "#3B82F6",
  },
  {
    icon: <Target size={26} />,
    value: 50,
    suffix: "+",
    label: "Recruitment Campaigns",
    desc: "End-to-end hiring campaigns executed successfully",
    color: "#06B6D4",
  },
  {
    icon: <Shield size={26} />,
    value: 99,
    suffix: ".8%",
    label: "Payroll Accuracy",
    desc: "Near-perfect payroll processing across all tenures",
    color: "#8B5CF6",
    isDecimal: true,
  },
  {
    icon: <Users size={26} />,
    value: 1000,
    suffix: "+",
    label: "Employees Managed",
    desc: "Diverse workforce across blue-collar & white-collar segments",
    color: "#EC4899",
  },
  {
    icon: <Heart size={26} />,
    value: 15,
    suffix: "+",
    label: "Engagement Programs",
    desc: "Employee engagement & recognition initiatives led",
    color: "#F59E0B",
  },
  {
    icon: <FileText size={26} />,
    value: 40,
    suffix: "+",
    label: "HR Documentation SOPs",
    desc: "Policies & SOPs standardized across organizations",
    color: "#10B981",
  },
  {
    icon: <TrendingUp size={26} />,
    value: 35,
    suffix: "%",
    label: "Faster Time-to-Hire",
    desc: "Reduced average hiring cycle through process optimization",
    color: "#6366F1",
  },
  {
    icon: <Zap size={26} />,
    value: 100,
    suffix: "%",
    label: "Compliance Management",
    desc: "Zero statutory non-compliance incidents across career",
    color: "#F472B6",
  },
];

export function AchievementsSection() {
  return (
    <section
      id="achievements"
      style={{
        padding: "7rem 1.5rem",
        background: "linear-gradient(180deg, #0F172A 0%, #111827 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Ambient background */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "80%",
          height: 1,
          background: "linear-gradient(to right, transparent, rgba(59,130,246,0.3), transparent)",
        }}
      />

      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <SectionHeader
          badge="Achievements"
          title="Impact Metrics"
          subtitle="Quantifiable results and measurable impact across 7+ years of HR excellence."
          gradient="linear-gradient(135deg, #10B981, #3B82F6, #8B5CF6)"
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "1.25rem",
          }}
        >
          {achievements.map((a, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              whileHover={{ y: -6, scale: 1.03 }}
              style={{
                padding: "2rem 1.75rem",
                borderRadius: 20,
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                backdropFilter: "blur(16px)",
                position: "relative",
                overflow: "hidden",
                cursor: "default",
              }}
            >
              {/* Background glow */}
              <div
                style={{
                  position: "absolute",
                  top: -30,
                  right: -30,
                  width: 120,
                  height: 120,
                  borderRadius: "50%",
                  background: `radial-gradient(circle, ${a.color}20 0%, transparent 70%)`,
                }}
              />

              {/* Icon */}
              <div
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: 16,
                  background: `${a.color}18`,
                  border: `1.5px solid ${a.color}35`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: a.color,
                  marginBottom: "1.5rem",
                }}
              >
                {a.icon}
              </div>

              {/* Value */}
              <div
                style={{
                  fontSize: "2.5rem",
                  fontWeight: 900,
                  background: `linear-gradient(135deg, ${a.color}, white)`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  lineHeight: 1.1,
                  marginBottom: "0.4rem",
                }}
              >
                {a.isDecimal ? (
                  <span>{a.value}{a.suffix}</span>
                ) : (
                  <AnimatedNumber to={a.value} suffix={a.suffix} />
                )}
              </div>

              <div style={{ color: "#F1F5F9", fontWeight: 700, fontSize: "1rem", marginBottom: "0.5rem" }}>
                {a.label}
              </div>
              <p style={{ color: "#64748B", fontSize: "0.82rem", lineHeight: 1.6, margin: 0 }}>
                {a.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
