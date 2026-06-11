import { motion } from "motion/react";

interface Props {
  badge?: string;
  title: string;
  subtitle?: string;
  gradient?: string;
}

export function SectionHeader({
  badge,
  title,
  subtitle,
  gradient = "linear-gradient(135deg, #3B82F6, #06B6D4, #8B5CF6)",
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      style={{ textAlign: "center", marginBottom: "4rem" }}
    >
      {badge && (
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            padding: "0.375rem 1rem",
            borderRadius: "9999px",
            background: "rgba(59,130,246,0.1)",
            border: "1px solid rgba(59,130,246,0.3)",
            color: "#60A5FA",
            fontSize: "0.8rem",
            fontWeight: 600,
            letterSpacing: "0.08em",
            marginBottom: "1rem",
            textTransform: "uppercase",
          }}
        >
          <span
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: "#60A5FA",
              animation: "pulse 2s infinite",
            }}
          />
          {badge}
        </div>
      )}
      <h2
        style={{
          fontSize: "clamp(1.9rem, 4vw, 2.8rem)",
          fontWeight: 800,
          lineHeight: 1.2,
          background: gradient,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          marginBottom: "1rem",
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          style={{
            color: "#94A3B8",
            fontSize: "1.1rem",
            maxWidth: "42rem",
            margin: "0 auto",
            lineHeight: 1.7,
          }}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
