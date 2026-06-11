import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";

type Message = { role: "user" | "bot"; text: string };

const faqs: Record<string, string> = {
  experience:
    "Dhaval has 7+ years of progressive HR experience across enterprise organizations including Hindustan Coca-Cola Beverages, Aargee Staffing Services, and Dhruv Enterprise. He has managed 1000+ employees across blue-collar and white-collar segments.",
  skills:
    "Dhaval excels in HR Operations, Recruitment & Selection, Payroll Management, Statutory Compliance (EPF, ESIC, PT, LWF, Gratuity), HRMIS, Employee Engagement, BGC Operations, Vendor Management, and HR Documentation.",
  recruitment:
    "Dhaval has led 50+ hiring campaigns, managing end-to-end talent acquisition from job analysis and sourcing to offer negotiation and onboarding. He reduced average time-to-hire by 35% through process optimization.",
  compliance:
    "Dhaval maintains 100% compliance track record with zero statutory violations. His compliance expertise covers EPF, ESIC, Professional Tax, LWF, Gratuity, Labour Law, Factories Act, Contract Labour Act, and Industrial Disputes Act.",
  payroll:
    "Dhaval has managed monthly payroll for 500+ employees with 99.8% accuracy. He handles all aspects including CTC structuring, salary processing, statutory deductions, arrears, full & final settlements, and payroll MIS reporting.",
  career:
    "Dhaval started as HR Executive at Dhruv Enterprise (2017), progressed to HR Executive at Aargee Staffing (2019), then joined Hindustan Coca-Cola Beverages as Senior HR Executive (2021), now positioned as HR Manager with strategic leadership responsibilities.",
  education:
    "Dhaval holds an MBA in Human Resource Management from NIMS University and a BBA in Management from KSV University, providing a strong theoretical and practical foundation in HR.",
  contact:
    "You can reach Dhaval via the contact form on this page, by email at dhaval.ratnottar@gmail.com, or connect with him on LinkedIn. He is currently available for HR leadership opportunities.",
};

function detectIntent(input: string): string {
  const lower = input.toLowerCase();
  if (lower.match(/experience|years|worked|career|background/)) return "experience";
  if (lower.match(/skill|expertise|capable|good at|proficient/)) return "skills";
  if (lower.match(/recruit|hiring|hire|talent|sourcing|candidate/)) return "recruitment";
  if (lower.match(/compli|statutory|epf|esic|pf|labor|labour|law/)) return "compliance";
  if (lower.match(/payroll|salary|ctc|wage|pay/)) return "payroll";
  if (lower.match(/journey|progression|growth|career path/)) return "career";
  if (lower.match(/education|degree|mba|bba|university|college/)) return "education";
  if (lower.match(/contact|reach|email|phone|connect/)) return "contact";
  return "default";
}

const SUGGESTIONS = [
  "What is his experience?",
  "Tell me about his skills",
  "Recruitment expertise?",
  "Compliance knowledge?",
  "Payroll operations?",
  "Career journey?",
];

export function AIAssistant() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "bot",
      text: "👋 Hi! I'm Dhaval's AI assistant. Ask me anything about his experience, skills, recruitment expertise, compliance knowledge, or career journey!",
    },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  const sendMessage = (text: string) => {
    if (!text.trim()) return;
    const userMsg: Message = { role: "user", text };
    setMessages((m) => [...m, userMsg]);
    setInput("");
    setTyping(true);
    setTimeout(() => {
      const intent = detectIntent(text);
      const response =
        intent === "default"
          ? "I can answer questions about Dhaval's experience, skills, recruitment expertise, payroll operations, compliance knowledge, career journey, education, or contact information. What would you like to know?"
          : faqs[intent];
      setTyping(false);
      setMessages((m) => [...m, { role: "bot", text: response }]);
    }, 900 + Math.random() * 600);
  };

  return (
    <>
      {/* Floating button */}
      <motion.button
        onClick={() => setOpen(!open)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        style={{
          position: "fixed",
          bottom: "2rem",
          right: "2rem",
          width: 60,
          height: 60,
          borderRadius: "50%",
          background: open
            ? "rgba(30,41,59,0.95)"
            : "linear-gradient(135deg, #3B82F6, #8B5CF6)",
          border: open ? "1px solid rgba(255,255,255,0.15)" : "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          zIndex: 9000,
          boxShadow: "0 8px 32px rgba(59,130,246,0.4)",
          color: "white",
        }}
      >
        {open ? <X size={24} /> : <MessageCircle size={24} />}
        {!open && (
          <motion.div
            animate={{ scale: [1, 1.4, 1], opacity: [0.7, 0, 0.7] }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{
              position: "absolute",
              inset: -4,
              borderRadius: "50%",
              border: "2px solid rgba(59,130,246,0.5)",
            }}
          />
        )}
      </motion.button>

      {/* Chat window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            style={{
              position: "fixed",
              bottom: "6rem",
              right: "2rem",
              width: 380,
              maxWidth: "calc(100vw - 2rem)",
              height: 520,
              borderRadius: 24,
              background: "rgba(15,23,42,0.97)",
              border: "1px solid rgba(255,255,255,0.12)",
              backdropFilter: "blur(24px)",
              display: "flex",
              flexDirection: "column",
              zIndex: 8999,
              overflow: "hidden",
              boxShadow: "0 24px 64px rgba(0,0,0,0.6), 0 0 0 1px rgba(59,130,246,0.15)",
            }}
          >
            {/* Header */}
            <div
              style={{
                padding: "1.25rem 1.5rem",
                borderBottom: "1px solid rgba(255,255,255,0.08)",
                background: "linear-gradient(135deg, rgba(59,130,246,0.12), rgba(139,92,246,0.08))",
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
              }}
            >
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #3B82F6, #8B5CF6)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Bot size={20} color="white" />
              </div>
              <div>
                <div style={{ color: "#F1F5F9", fontWeight: 700, fontSize: "0.95rem" }}>Ask About Dhaval</div>
                <div style={{ color: "#4ADE80", fontSize: "0.75rem", display: "flex", alignItems: "center", gap: "0.3rem" }}>
                  <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#4ADE80", display: "inline-block", animation: "pulse 2s infinite" }} />
                  AI Assistant Online
                </div>
              </div>
            </div>

            {/* Messages */}
            <div
              style={{
                flex: 1,
                overflowY: "auto",
                padding: "1rem",
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
              }}
            >
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25 }}
                  style={{
                    display: "flex",
                    justifyContent: msg.role === "user" ? "flex-end" : "flex-start",
                    gap: "0.5rem",
                    alignItems: "flex-end",
                  }}
                >
                  {msg.role === "bot" && (
                    <div style={{ width: 28, height: 28, borderRadius: "50%", background: "linear-gradient(135deg, #3B82F6, #8B5CF6)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <Bot size={14} color="white" />
                    </div>
                  )}
                  <div
                    style={{
                      maxWidth: "78%",
                      padding: "0.7rem 1rem",
                      borderRadius: msg.role === "user" ? "16px 16px 4px 16px" : "16px 16px 16px 4px",
                      background: msg.role === "user"
                        ? "linear-gradient(135deg, #3B82F6, #8B5CF6)"
                        : "rgba(255,255,255,0.07)",
                      border: msg.role === "bot" ? "1px solid rgba(255,255,255,0.1)" : "none",
                      color: msg.role === "user" ? "white" : "#CBD5E1",
                      fontSize: "0.875rem",
                      lineHeight: 1.6,
                    }}
                  >
                    {msg.text}
                  </div>
                  {msg.role === "user" && (
                    <div style={{ width: 28, height: 28, borderRadius: "50%", background: "rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <User size={14} color="#94A3B8" />
                    </div>
                  )}
                </motion.div>
              ))}
              {typing && (
                <div style={{ display: "flex", gap: "0.5rem", alignItems: "flex-end" }}>
                  <div style={{ width: 28, height: 28, borderRadius: "50%", background: "linear-gradient(135deg, #3B82F6, #8B5CF6)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Bot size={14} color="white" />
                  </div>
                  <div style={{ padding: "0.7rem 1rem", borderRadius: "16px 16px 16px 4px", background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.1)", display: "flex", gap: "4px", alignItems: "center" }}>
                    {[0, 1, 2].map(i => (
                      <motion.div key={i} animate={{ y: [0, -4, 0] }} transition={{ duration: 0.5, repeat: Infinity, delay: i * 0.12 }} style={{ width: 6, height: 6, borderRadius: "50%", background: "#60A5FA" }} />
                    ))}
                  </div>
                </div>
              )}
              <div ref={bottomRef} />
            </div>

            {/* Quick suggestions */}
            {messages.length === 1 && (
              <div style={{ padding: "0 1rem 0.75rem", display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                {SUGGESTIONS.map((s, i) => (
                  <button
                    key={i}
                    onClick={() => sendMessage(s)}
                    style={{
                      padding: "0.3rem 0.7rem",
                      borderRadius: 8,
                      background: "rgba(59,130,246,0.12)",
                      border: "1px solid rgba(59,130,246,0.3)",
                      color: "#60A5FA",
                      fontSize: "0.75rem",
                      cursor: "pointer",
                      fontWeight: 500,
                    }}
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <div
              style={{
                padding: "0.75rem 1rem",
                borderTop: "1px solid rgba(255,255,255,0.08)",
                display: "flex",
                gap: "0.5rem",
                alignItems: "center",
              }}
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage(input)}
                placeholder="Ask about Dhaval..."
                style={{
                  flex: 1,
                  padding: "0.6rem 1rem",
                  borderRadius: 10,
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  color: "#F1F5F9",
                  fontSize: "0.875rem",
                  outline: "none",
                  fontFamily: "inherit",
                }}
              />
              <button
                onClick={() => sendMessage(input)}
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 10,
                  background: "linear-gradient(135deg, #3B82F6, #8B5CF6)",
                  border: "none",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  color: "white",
                  flexShrink: 0,
                }}
              >
                <Send size={16} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
