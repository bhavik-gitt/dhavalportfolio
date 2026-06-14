import { useEffect } from "react";
import { CustomCursor } from "./components/CustomCursor";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { HRDashboard } from "./components/HRDashboard";
import { ExperienceTimeline } from "./components/ExperienceTimeline";
import { SkillsSection } from "./components/SkillsSection";
import { ProcessFlow } from "./components/ProcessFlow";
import { CareerGrowth } from "./components/CareerGrowth";
import { EducationSection } from "./components/EducationSection";
import { CertificationsSection } from "./components/CertificationsSection";
import { AchievementsSection } from "./components/AchievementsSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { ContactSection } from "./components/ContactSection";
import { AIAssistant } from "./components/AIAssistant";
import { Footer } from "./components/Footer";

export default function App() {
  useEffect(() => {
    // SEO Meta Tags
    document.title = "Dhaval Ratnottar ";

    const setMeta = (attrs: Record<string, string>) => {
      const el = document.createElement("meta");
      Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v));
      document.head.appendChild(el);
    };

    const setLink = (attrs: Record<string, string>) => {
      const el = document.createElement("link");
      Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v));
      document.head.appendChild(el);
    };

    // Standard SEO
    setMeta({ name: "description", content: "Dhaval Ratnottar — Experienced HR Manager with 7+ years in Workforce Operations, Talent Management, Payroll Compliance & Employee Experience across enterprise organizations." });
    setMeta({ name: "keywords", content: "HR Manager, Human Resources, Talent Management, Payroll, Statutory Compliance, Employee Engagement, Recruitment, HRMIS, EPF, ESIC, Gujarat" });
    setMeta({ name: "author", content: "Dhaval Ratnottar" });
    setMeta({ name: "robots", content: "index, follow" });
    setMeta({ name: "theme-color", content: "#0F172A" });

    // Open Graph
    setMeta({ property: "og:type", content: "website" });
    setMeta({ property: "og:title", content: "Dhaval Ratnottar | Senior HR Manager" });
    setMeta({ property: "og:description", content: "Transforming Workforce Operations, Talent Management, Payroll Compliance & Employee Experience Across Enterprise Organizations." });
    setMeta({ property: "og:site_name", content: "Dhaval Ratnottar Portfolio" });

    // Twitter Card
    setMeta({ name: "twitter:card", content: "summary_large_image" });
    setMeta({ name: "twitter:title", content: "Dhaval Ratnottar | Senior HR Manager" });
    setMeta({ name: "twitter:description", content: "Experienced HR Manager | 7+ Years | Workforce Operations | Talent Management | Payroll Compliance" });

    // Schema Markup
    const schema = {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Dhaval Ratnottar",
      jobTitle: "HR Manager",
      description: "Experienced HR Manager with 7+ years in workforce operations, talent management, payroll compliance, and employee experience across enterprise organizations.",
      knowsAbout: ["Human Resources", "Payroll Management", "Recruitment", "Statutory Compliance", "Employee Engagement", "HRMIS"],
      alumniOf: [
        { "@type": "CollegeOrUniversity", name: "NIMS University" },
        { "@type": "CollegeOrUniversity", name: "KSV University" },
      ],
      worksFor: {
        "@type": "Organization",
        name: "Hindustan Coca-Cola Beverages Pvt Ltd",
      },
      address: { "@type": "PostalAddress", addressRegion: "Gujarat", addressCountry: "IN" },
    };
    const schemaScript = document.createElement("script");
    schemaScript.type = "application/ld+json";
    schemaScript.textContent = JSON.stringify(schema);
    document.head.appendChild(schemaScript);

    // Smooth scroll
    document.documentElement.style.scrollBehavior = "smooth";
    document.body.style.overflowX = "hidden";
    document.body.style.fontFamily = "'Space Grotesk', 'Inter', sans-serif";
    document.body.style.background = "#0F172A";
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0F172A",
        overflowX: "hidden",
        fontFamily: "'Space Grotesk', 'Inter', sans-serif",
        cursor: "none",
      }}
    >
      <CustomCursor />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <HRDashboard />
        <ExperienceTimeline />
        <SkillsSection />
        <ProcessFlow />
        <CareerGrowth />
        <EducationSection />
        <CertificationsSection />
        <AchievementsSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
      <AIAssistant />
    </div>
  );
}
