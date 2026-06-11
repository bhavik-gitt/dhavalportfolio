import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { SectionHeader } from "./SectionHeader";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Mehta",
    role: "Plant Head",
    company: "Hindustan Coca-Cola Beverages",
    avatar: "RM",
    color: "#3B82F6",
    rating: 5,
    text: "Dhaval's expertise in managing payroll and statutory compliance for our large workforce has been outstanding. His attention to detail and proactive approach to HR challenges has significantly improved our operational efficiency. A true asset to any organization.",
  },
  {
    name: "Priya Sharma",
    role: "Business Head",
    company: "Aargee Staffing Services",
    avatar: "PS",
    color: "#06B6D4",
    rating: 5,
    text: "Working with Dhaval on vendor management and BGC operations was an exceptional experience. His ability to handle complex staffing requirements while maintaining 100% compliance standards reflects his deep expertise and professional dedication in HR management.",
  },
  {
    name: "Amit Patel",
    role: "Operations Director",
    company: "Dhruv Enterprise",
    avatar: "AP",
    color: "#8B5CF6",
    rating: 5,
    text: "Dhaval built our entire HR function from scratch with remarkable professionalism. From recruitment to payroll to compliance — his comprehensive understanding of HR operations helped us scale our workforce efficiently. A highly recommended HR professional.",
  },
];

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const id = setInterval(() => {
      setDirection(1);
      setCurrent((c) => (c + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  const go = (i: number) => {
    setDirection(i > current ? 1 : -1);
    setCurrent(i);
  };

  const prev = () => {
    setDirection(-1);
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  };

  const next = () => {
    setDirection(1);
    setCurrent((c) => (c + 1) % testimonials.length);
  };

  const t = testimonials[current];

  return (
    <section
      id="testimonials"
      style={{
        padding: "7rem 1.5rem",
        background: "linear-gradient(180deg, #111827 0%, #0F172A 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 600,
          height: 400,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(59,130,246,0.05) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <SectionHeader
          badge="Testimonials"
          title="What People Say"
          subtitle="Authentic feedback from HR colleagues and business leaders across enterprise organizations."
          gradient="linear-gradient(135deg, #F59E0B, #EC4899)"
        />

        <div style={{ position: "relative" }}>
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              initial={{ opacity: 0, x: direction * 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -direction * 60 }}
              transition={{ duration: 0.45 }}
              style={{
                padding: "3rem",
                borderRadius: 24,
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.09)",
                backdropFilter: "blur(20px)",
                position: "relative",
                overflow: "hidden",
                marginBottom: "2rem",
              }}
            >
              {/* Quote icon */}
              <div
                style={{
                  position: "absolute",
                  top: "1.5rem",
                  right: "1.5rem",
                  color: `${t.color}30`,
                }}
              >
                <Quote size={60} />
              </div>

              {/* Top accent */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 2,
                  background: `linear-gradient(to right, ${t.color}, ${t.color}60, transparent)`,
                }}
              />

              {/* Stars */}
              <div style={{ display: "flex", gap: "0.25rem", marginBottom: "1.5rem" }}>
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={18} color="#F59E0B" fill="#F59E0B" />
                ))}
              </div>

              {/* Text */}
              <p style={{ color: "#CBD5E1", fontSize: "1.1rem", lineHeight: 1.8, fontStyle: "italic", marginBottom: "2rem", position: "relative", zIndex: 1 }}>
                "{t.text}"
              </p>

              {/* Author */}
              <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                <div
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: "50%",
                    background: `linear-gradient(135deg, ${t.color}60, ${t.color}30)`,
                    border: `2px solid ${t.color}50`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    fontWeight: 800,
                    fontSize: "1rem",
                  }}
                >
                  {t.avatar}
                </div>
                <div>
                  <div style={{ color: "#F1F5F9", fontWeight: 700, fontSize: "1rem" }}>{t.name}</div>
                  <div style={{ color: t.color, fontSize: "0.85rem", fontWeight: 600 }}>{t.role}</div>
                  <div style={{ color: "#64748B", fontSize: "0.8rem" }}>{t.company}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "1rem" }}>
            <button
              onClick={prev}
              style={{
                width: 44,
                height: 44,
                borderRadius: "50%",
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.12)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                color: "#94A3B8",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(59,130,246,0.2)"; e.currentTarget.style.color = "#60A5FA"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.06)"; e.currentTarget.style.color = "#94A3B8"; }}
            >
              <ChevronLeft size={20} />
            </button>

            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => go(i)}
                style={{
                  width: i === current ? 28 : 8,
                  height: 8,
                  borderRadius: 4,
                  background: i === current
                    ? "linear-gradient(to right, #3B82F6, #8B5CF6)"
                    : "rgba(255,255,255,0.2)",
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.3s",
                }}
              />
            ))}

            <button
              onClick={next}
              style={{
                width: 44,
                height: 44,
                borderRadius: "50%",
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.12)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                color: "#94A3B8",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(59,130,246,0.2)"; e.currentTarget.style.color = "#60A5FA"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.06)"; e.currentTarget.style.color = "#94A3B8"; }}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
