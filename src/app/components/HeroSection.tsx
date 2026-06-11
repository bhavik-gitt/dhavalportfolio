import { useEffect, useRef, useState, useCallback } from "react";
import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import photo from "../../imports/photo.png";
import { Download, ArrowRight, MessageSquare, ChevronDown } from "lucide-react";

function useCounter(target: number, duration: number, active: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let current = 0;
    const increment = target / (duration / 16);
    const id = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(id);
      } else {
        setCount(Math.floor(current));
      }
    }, 16);
    return () => clearInterval(id);
  }, [active, target, duration]);
  return count;
}

export function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [countersActive, setCountersActive] = useState(false);

  const exp = useCounter(7, 1800, countersActive);
  const employees = useCounter(1000, 2200, countersActive);
  const compliance = useCounter(100, 1600, countersActive);
  const campaigns = useCounter(50, 1800, countersActive);

  useEffect(() => {
    const t = setTimeout(() => setCountersActive(true), 1000);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    type Particle = {
      x: number; y: number; vx: number; vy: number;
      size: number; alpha: number; color: string;
    };
    const colors = ["#3B82F6", "#06B6D4", "#8B5CF6", "#60A5FA"];
    const particles: Particle[] = Array.from({ length: 70 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      size: Math.random() * 2 + 0.4,
      alpha: Math.random() * 0.45 + 0.08,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));

    let raf: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        const hex = Math.round(p.alpha * 255).toString(16).padStart(2, "0");
        ctx.fillStyle = p.color + hex;
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const d = Math.hypot(p.x - q.x, p.y - q.y);
          if (d < 110) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = `rgba(59,130,246,${0.1 * (1 - d / 110)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      });
      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  }, []);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  const stats = [
    { value: exp, suffix: "+", label: "Years Experience" },
    { value: employees, suffix: "+", label: "Employees Managed" },
    { value: compliance, suffix: "%", label: "Compliance Focus" },
    { value: campaigns, suffix: "+", label: "Hiring Campaigns" },
  ];

  return (
    <section
      id="hero"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        background: "linear-gradient(135deg, #0F172A 0%, #111827 60%, #1E293B 100%)",
      }}
      onMouseMove={handleMouseMove}
    >
      {/* Canvas */}
      <canvas
        ref={canvasRef}
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.7 }}
      />

      {/* Mouse glow */}
      <div
        style={{
          position: "absolute",
          left: mousePos.x - 250,
          top: mousePos.y - 250,
          width: 500,
          height: 500,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(59,130,246,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
          transition: "left 0.08s linear, top 0.08s linear",
        }}
      />

      {/* Ambient blobs */}
      <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
        <motion.div
          animate={{ scale: [1, 1.12, 1], rotate: [0, 12, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          style={{
            position: "absolute",
            top: "8%",
            right: "6%",
            width: 380,
            height: 380,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(139,92,246,0.13) 0%, transparent 70%)",
          }}
        />
        <motion.div
          animate={{ scale: [1, 1.1, 1], rotate: [0, -8, 0] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          style={{
            position: "absolute",
            bottom: "12%",
            left: "4%",
            width: 320,
            height: 320,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(6,182,212,0.11) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* Main content */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          maxWidth: 1280,
          margin: "0 auto",
          padding: "6rem 1.5rem 4rem",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "4rem",
          alignItems: "center",
          width: "100%",
        }}
        className="hero-grid"
      >
        {/* Left: Text */}
        <div>
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.45rem 1.1rem",
              borderRadius: 9999,
              background: "rgba(34,197,94,0.1)",
              border: "1px solid rgba(34,197,94,0.3)",
              color: "#4ADE80",
              fontSize: "0.82rem",
              fontWeight: 600,
              marginBottom: "1.5rem",
              letterSpacing: "0.03em",
            }}
          >
            <span
              style={{
                width: 7,
                height: 7,
                borderRadius: "50%",
                background: "#4ADE80",
                display: "inline-block",
                animation: "pulse 2s infinite",
              }}
            />
            Available for HR Leadership Opportunities
          </motion.div>

          {/* Name */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div
              style={{
                fontSize: "clamp(2.8rem, 5.5vw, 4.5rem)",
                fontWeight: 900,
                letterSpacing: "-0.03em",
                lineHeight: 1.05,
                background: "linear-gradient(135deg, #F8FAFC 0%, #CBD5E1 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              DHAVAL
            </div>
            <div
              style={{
                fontSize: "clamp(2.8rem, 5.5vw, 4.5rem)",
                fontWeight: 900,
                letterSpacing: "-0.03em",
                lineHeight: 1.05,
                background: "linear-gradient(135deg, #3B82F6 0%, #06B6D4 50%, #8B5CF6 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                marginBottom: "1rem",
              }}
            >
              RATNOTTAR
            </div>
          </motion.div>

          {/* Role */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}
          >
            <div
              style={{
                height: 2,
                width: 40,
                background: "linear-gradient(to right, #3B82F6, transparent)",
              }}
            />
            <span
              style={{
                color: "#60A5FA",
                fontSize: "0.95rem",
                letterSpacing: "0.2em",
                fontWeight: 700,
              }}
            >
              HR MANAGER AND LABOUR COMPLIANCE SPECIALIST
            </span>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            style={{
              color: "#94A3B8",
              fontSize: "1.05rem",
              lineHeight: 1.75,
              marginBottom: "2.5rem",
              maxWidth: 480,
            }}
          >
            Transforming Workforce Operations, Talent Management, Payroll
            Compliance &amp; Employee Experience Across Enterprise Organizations.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "0.75rem",
              marginBottom: "2.5rem",
            }}
            className="stats-grid"
          >
            {stats.map((s, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05, y: -2 }}
                style={{
                  padding: "1rem 0.75rem",
                  borderRadius: 14,
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.09)",
                  backdropFilter: "blur(12px)",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    fontSize: "1.7rem",
                    fontWeight: 800,
                    background: "linear-gradient(to right, #3B82F6, #06B6D4)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    lineHeight: 1.2,
                  }}
                >
                  {s.value}
                  {s.suffix}
                </div>
                <div
                  style={{ color: "#64748B", fontSize: "0.72rem", marginTop: "0.3rem", lineHeight: 1.3 }}
                >
                  {s.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.85 }}
            style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}
          >
            <motion.button
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => scrollTo("experience")}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.75rem 1.5rem",
                borderRadius: 12,
                background: "linear-gradient(135deg, #3B82F6, #8B5CF6)",
                color: "white",
                fontWeight: 600,
                fontSize: "0.9rem",
                border: "none",
                cursor: "pointer",
                boxShadow: "0 4px 24px rgba(59,130,246,0.35)",
              }}
            >
              <ArrowRight size={17} /> View Experience Journey
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.75rem 1.5rem",
                borderRadius: 12,
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.14)",
                color: "#E2E8F0",
                fontWeight: 600,
                fontSize: "0.9rem",
                cursor: "pointer",
              }}
            >
              <Download size={17} /> Download Resume
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => scrollTo("contact")}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.75rem 1.5rem",
                borderRadius: 12,
                background: "transparent",
                border: "1px solid rgba(59,130,246,0.45)",
                color: "#60A5FA",
                fontWeight: 600,
                fontSize: "0.9rem",
                cursor: "pointer",
              }}
            >
              <MessageSquare size={17} /> Let&apos;s Connect
            </motion.button>
          </motion.div>
        </div>

        {/* Right: Photo */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, type: "spring", stiffness: 100 }}
            style={{ position: "relative" }}
          >
            {/* Outer spinning ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
              style={{
                position: "absolute",
                inset: -22,
                borderRadius: "50%",
                border: "1.5px dashed rgba(59,130,246,0.28)",
              }}
            />
            {/* Inner spinning ring */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              style={{
                position: "absolute",
                inset: -38,
                borderRadius: "50%",
                border: "1px solid rgba(139,92,246,0.18)",
              }}
            />

            {/* Glow pulses */}
            <motion.div
              animate={{ scale: [1, 1.05, 1], opacity: [0.4, 0.7, 0.4] }}
              transition={{ duration: 3, repeat: Infinity }}
              style={{
                position: "absolute",
                inset: -8,
                borderRadius: "50%",
                background:
                  "radial-gradient(circle, rgba(59,130,246,0.25) 0%, transparent 70%)",
              }}
            />

            {/* Photo */}
            <div
              style={{
                width: 300,
                height: 300,
                borderRadius: "50%",
                overflow: "hidden",
                boxShadow:
                  "0 0 60px rgba(59,130,246,0.45), 0 0 120px rgba(139,92,246,0.2)",
                border: "3px solid transparent",
                background:
                  "linear-gradient(#0F172A, #0F172A) padding-box, linear-gradient(135deg, #3B82F6, #06B6D4, #8B5CF6) border-box",
              }}
            >
              <ImageWithFallback
                src={photo}
                alt="Dhaval Ratnottar - HR Manager"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center top",
                }}
              />
            </div>

            {/* Badge */}
            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              style={{
                position: "absolute",
                bottom: -16,
                left: "50%",
                transform: "translateX(-50%)",
                display: "flex",
                alignItems: "center",
                gap: "0.4rem",
                padding: "0.45rem 1rem",
                borderRadius: 9999,
                background: "rgba(15,23,42,0.92)",
                border: "1px solid rgba(59,130,246,0.4)",
                backdropFilter: "blur(12px)",
                color: "#60A5FA",
                fontSize: "0.78rem",
                fontWeight: 600,
                whiteSpace: "nowrap",
              }}
            >
              <span
                style={{
                  width: 7,
                  height: 7,
                  borderRadius: "50%",
                  background: "#4ADE80",
                  display: "inline-block",
                  animation: "pulse 2s infinite",
                }}
              />
              Senior HR Manager
            </motion.div>

            {/* Floating skill chips */}
            <motion.div
              animate={{ x: [-4, 4, -4], y: [-3, 3, -3] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              style={{
                position: "absolute",
                top: 20,
                right: -80,
                padding: "0.35rem 0.85rem",
                borderRadius: 8,
                background: "rgba(59,130,246,0.15)",
                border: "1px solid rgba(59,130,246,0.3)",
                color: "#93C5FD",
                fontSize: "0.75rem",
                fontWeight: 600,
                backdropFilter: "blur(8px)",
              }}
            >
              Payroll Expert
            </motion.div>
            <motion.div
              animate={{ x: [4, -4, 4], y: [3, -3, 3] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              style={{
                position: "absolute",
                top: 80,
                left: -90,
                padding: "0.35rem 0.85rem",
                borderRadius: 8,
                background: "rgba(139,92,246,0.15)",
                border: "1px solid rgba(139,92,246,0.3)",
                color: "#C4B5FD",
                fontSize: "0.75rem",
                fontWeight: 600,
                backdropFilter: "blur(8px)",
              }}
            >
              Talent Acquisition
            </motion.div>
            <motion.div
              animate={{ x: [-3, 3, -3], y: [4, -4, 4] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              style={{
                position: "absolute",
                bottom: 40,
                right: -70,
                padding: "0.35rem 0.85rem",
                borderRadius: 8,
                background: "rgba(6,182,212,0.15)",
                border: "1px solid rgba(6,182,212,0.3)",
                color: "#67E8F9",
                fontSize: "0.75rem",
                fontWeight: 600,
                backdropFilter: "blur(8px)",
              }}
            >
              HR Compliance
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        style={{
          position: "absolute",
          bottom: "2rem",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.4rem",
          color: "#475569",
        }}
      >
        <span style={{ fontSize: "0.68rem", letterSpacing: "0.15em" }}>SCROLL</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </motion.div>

      <style>{`
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}
