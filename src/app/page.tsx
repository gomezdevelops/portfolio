"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  ArrowRight,
  Download,
  Mail,
  MapPin,
  Code2,
  CheckCircle2,
  Award,
  GraduationCap,
  Sparkles,
  Star,
  ExternalLink,
  Terminal,
  Layers,
  Database,
  Gamepad2,
  Wrench,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";

/* ─────────────────────────── TYPES ─────────────────────────── */

type SkillGroup = {
  icon: React.ComponentType<{ size?: number; className?: string; style?: React.CSSProperties }>;
  title: string;
  items: string[];
};

type Project = {
  num: string;
  title: string;
  subtitle: string;
  summary: string;
  tech: string[];
  highlights: string[];
};

type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  desc: string;
  bullets: string[];
};

/* ─────────────────────────── DATA ─────────────────────────── */

const skillGroups: SkillGroup[] = [
  { icon: Layers,   title: "Frontend",         items: ["React.js","Next.js","TypeScript","JavaScript","Tailwind CSS","Responsive Design"] },
  { icon: Terminal, title: "Backend",           items: ["Node.js","Express.js","Flask","REST APIs","Authentication","CRUD Systems"] },
  { icon: Database, title: "Databases",         items: ["MongoDB","MySQL","PostgreSQL","SQLite"] },
  { icon: Code2,    title: "Languages",         items: ["JavaScript","TypeScript","Python","Java","C","C#"] },
  { icon: Gamepad2, title: "Game Development",  items: ["Unity","C#","2D/3D Mechanics","Physics Systems","Scene Management"] },
  { icon: Wrench,   title: "Tools",             items: ["Git","GitHub","Docker","Postman","Vercel","Railway"] },
];

const projects: Project[] = [
  {
    num: "01",
    title: "Smart Attendance System",
    subtitle: "Face Recognition · Computer Vision",
    summary: "Automates classroom attendance using real-time face recognition. Full stack system with admin dashboard, reports, and automated email warnings.",
    tech: ["Python","Flask","OpenCV","dlib","SQLite","NumPy","Pandas"],
    highlights: ["Real-time face detection","Automated tracking","Admin dashboard","Email alerts"],
  },
  {
    num: "02",
    title: "Discord Automation Bot",
    subtitle: "Automation · Multi-server",
    summary: "Feature-rich Discord bot built with Node.js and Discord.js with XP systems, moderation, ticket management, and server automation.",
    tech: ["Node.js","Discord.js","MongoDB","REST APIs"],
    highlights: ["XP and leveling system","Moderation commands","Multi-server support","Server automation"],
  },
  {
    num: "03",
    title: "Full Stack Web Apps",
    subtitle: "CRUD · Auth · APIs",
    summary: "Multiple production CRUD applications with JWT authentication, protected routes, responsive UI, and complete database integration.",
    tech: ["React.js","Node.js","Express.js","MongoDB"],
    highlights: ["JWT auth","Protected routes","REST APIs","CRUD flows"],
  },
];

const stats = [
  { value: "4+",    label: "Years Building" },
  { value: "50+",   label: "Projects" },
  { value: "3+",    label: "Certifications" },
  { value: "Global",label: "Open to Work" },
];

const experience: ExperienceItem[] = [
  {
    role: "Full Stack Web Development Intern",
    company: "Edu-versity",
    period: "2024 · 3 Months · Remote",
    desc: "Built and shipped responsive full stack features across React.js, Node.js, Express.js, and MongoDB throughout the complete development lifecycle.",
    bullets: ["Frontend and backend features","Auth system implementation","REST API and DB integration","Performance optimization"],
  },
  {
    role: "Independent Full Stack Developer",
    company: "Self Directed",
    period: "2024 to Present",
    desc: "Designed, built, and deployed multiple personal full stack applications end to end from architecture to production deployment.",
    bullets: ["Scalable backend systems","Responsive frontend interfaces","Cloud platform deployments","Git and GitHub workflows"],
  },
];

const certifications = [
  "Learn React — Scrimba",
  "Advanced JavaScript — Scrimba",
  "Full Stack Web Development — Edu-versity",
];

const faqs = [
  { q: "What stack do you work with?",  a: "React.js, Next.js, Node.js, Express.js, MongoDB, Python, TypeScript, and modern tooling around that core." },
  { q: "Open to relocation?",           a: "Yes, open to relocation and international opportunities." },
  { q: "What roles are you targeting?", a: "Frontend Developer, Full Stack Developer, Software Engineer, or Game Developer positions." },
  { q: "Available for freelance?",      a: "Absolutely, open to freelance projects and collaborative work." },
];

const navLinks = [
  { label: "About",    href: "#about" },
  { label: "Skills",   href: "#skills" },
  { label: "Work",     href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact",  href: "#contact" },
];

const techMarquee = [
  "React.js","Node.js","TypeScript","Python","MongoDB","Next.js",
  "Express.js","Flask","Unity","PostgreSQL","Docker","Vercel",
  "OpenCV","Discord.js","Tailwind","Git","REST APIs","C#",
];

/* ─────────────────────────── HOOKS ─────────────────────────── */

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.target.classList.toggle("visible", e.isIntersecting)),
      { threshold: 0.1 }
    );
    ref.current.querySelectorAll(".reveal").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
  return ref;
}

function useCursor() {
  useEffect(() => {
    const dot  = document.getElementById("cursor-dot");
    const ring = document.getElementById("cursor-ring");
    if (!dot || !ring) return;
    let rx = 0, ry = 0;
    const onMove = (e: MouseEvent) => {
      dot.style.left = `${e.clientX}px`;
      dot.style.top  = `${e.clientY}px`;
      rx += (e.clientX - rx) * 0.12;
      ry += (e.clientY - ry) * 0.12;
    };
    const raf = () => { ring.style.left = `${rx}px`; ring.style.top = `${ry}px`; requestAnimationFrame(raf); };
    raf();
    const onEnter = () => document.body.classList.add("cursor-hover");
    const onLeave = () => document.body.classList.remove("cursor-hover");
    document.querySelectorAll("a, button").forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);
}

/* ─────────────────────────── SHARED COMPONENTS ─────────────────────────── */

function Cursor() {
  return (
    <>
      <div id="cursor-dot"  className="cursor" />
      <div id="cursor-ring" className="cursor-ring" />
    </>
  );
}

function Eyebrow({ label }: { label: string }) {
  return <p className="eyebrow mb-5">{label}</p>;
}

/** Full-width section divider — full bleed with max-width inner line */
function SectionDivider() {
  return (
    <div className="w-full px-6 lg:px-12">
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          height: 1,
          background: "linear-gradient(90deg, transparent, var(--border-2) 15%, var(--border-2) 85%, transparent)",
        }}
      />
    </div>
  );
}

function SectionWrap({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useReveal();
  return (
    <section
      id={id}
      ref={ref}
      className={`w-full ${className}`}
      style={{ padding: "96px 0" }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 48px" }}>
        {children}
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="card group h-full flex flex-col"
      style={{ cursor: "none" }}
      onClick={() => setOpen((v) => !v)}
    >
      <div className="flex items-start justify-between gap-4">
        <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--amber)", letterSpacing: "0.1em" }}>
          {project.num}
        </span>
        <ExternalLink size={14} style={{ color: "var(--text-3)", transition: "color 0.2s", flexShrink: 0, marginTop: 2 }} className="group-hover:!text-amber-400" />
      </div>

      <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.4rem", fontWeight: 700, color: "var(--text-1)", marginTop: 16, lineHeight: 1.2, letterSpacing: "-0.02em" }}>
        {project.title}
      </h3>
      <p style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--amber)", marginTop: 6, letterSpacing: "0.08em" }}>
        {project.subtitle}
      </p>
      <p style={{ color: "var(--text-2)", fontSize: 14, lineHeight: 1.75, marginTop: 14, flex: 1 }}>
        {project.summary}
      </p>

      <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 18 }}>
        {project.tech.map((t) => <span key={t} className="skill-pill">{t}</span>)}
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            style={{ overflow: "hidden" }}
          >
            <div style={{ marginTop: 20, paddingTop: 20, borderTop: "1px solid var(--border)" }}>
              <p style={{ fontFamily: "var(--font-mono)", fontSize: 10, textTransform: "uppercase", letterSpacing: "0.15em", color: "var(--text-3)", marginBottom: 12 }}>
                Key Highlights
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                {project.highlights.map((h) => (
                  <div key={h} style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                    <CheckCircle2 size={13} style={{ color: "var(--amber)", marginTop: 3, flexShrink: 0 }} />
                    <span style={{ fontSize: 13, color: "var(--text-2)", lineHeight: 1.5 }}>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 20, fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--text-3)", letterSpacing: "0.1em" }}>
        <ChevronDown size={13} style={{ transition: "transform 0.3s", transform: open ? "rotate(180deg)" : "rotate(0deg)" }} />
        {open ? "COLLAPSE" : "DETAILS"}
      </div>
    </div>
  );
}

/* ─────────────────────────── MAIN PAGE ─────────────────────────── */

export default function PortfolioPage() {
  useCursor();
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY       = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <Cursor />

      {/* Ambient background glow */}
      <div
        style={{
          position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0,
          background: "radial-gradient(ellipse 60% 40% at 20% 10%, rgba(245,200,66,0.04) 0%, transparent 70%), radial-gradient(ellipse 50% 50% at 80% 80%, rgba(245,200,66,0.03) 0%, transparent 70%)",
        }}
      />

      {/* ══════════════════ HEADER ══════════════════ */}
      <header
        style={{
          position: "sticky", top: 0, zIndex: 50,
          borderBottom: "1px solid var(--border-2)",
          background: "rgba(10,10,8,0.92)",
          backdropFilter: "blur(24px)",
        }}
      >
        <div
          style={{
            maxWidth: 1280, margin: "0 auto", padding: "0 48px",
            height: 68, display: "flex", alignItems: "center", justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <a href="#home" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ width: 36, height: 36, borderRadius: "50%", overflow: "hidden", border: "1.5px solid var(--border-2)", flexShrink: 0, position: "relative" }}>
              <Image src="/profile.jpg" alt="Abin Gomez" fill style={{ objectFit: "cover" }} priority />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <span style={{ fontFamily: "var(--font-display)", fontSize: "1.05rem", fontWeight: 700, color: "var(--text-1)", letterSpacing: "-0.02em", lineHeight: 1.1 }}>
                Abin Gomez
              </span>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 9, color: "var(--amber)", letterSpacing: "0.2em", textTransform: "uppercase" }}>
                Full Stack · Game Dev
              </span>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex" style={{ display: "flex", gap: 36, alignItems: "center" }}>
            {navLinks.map((l, i) => (
              <motion.a
                key={l.label}
                href={l.href}
                className="link-underline"
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.15 + i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                style={{ fontFamily: "var(--font-mono)", fontSize: 11, textTransform: "uppercase", letterSpacing: "0.14em", color: "var(--text-2)" }}
              >
                {l.label}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              className="btn-primary"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.15 + navLinks.length * 0.07 }}
              style={{ padding: "10px 20px", fontSize: 11 }}
            >
              Hire Me <ArrowUpRight size={13} />
            </motion.a>
          </nav>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="md:hidden"
            style={{ background: "none", border: "none", color: "var(--text-1)", cursor: "none" }}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }}
              style={{ overflow: "hidden", borderTop: "1px solid var(--border-2)", background: "var(--bg-2)" }}
            >
              <div style={{ padding: "20px 24px", display: "flex", flexDirection: "column", gap: 18 }}>
                {navLinks.map((l) => (
                  <a
                    key={l.label} href={l.href} onClick={() => setMobileOpen(false)}
                    style={{ fontFamily: "var(--font-mono)", fontSize: 12, textTransform: "uppercase", letterSpacing: "0.14em", color: "var(--text-2)", textDecoration: "none" }}
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* ══════════════════ HERO ══════════════════ */}
      <section
        id="home"
        ref={heroRef}
        style={{ position: "relative", overflow: "hidden", minHeight: "100vh", borderBottom: "1px solid var(--border-2)" }}
      >
        <div className="grid-bg" style={{ position: "absolute", inset: 0, zIndex: 0 }} />

        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="relative z-10">
          <div style={{ maxWidth: 1280, margin: "0 auto", padding: "88px 48px 72px" }}>

            {/* Availability badge */}
            <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} style={{ marginBottom: 44 }}>
              <span className="tag amber">
                <span style={{ display: "inline-block", width: 6, height: 6, borderRadius: "50%", background: "var(--amber)", animation: "pulse-amber 2s infinite" }} />
                AVAILABLE FOR HIRE
              </span>
            </motion.div>

            {/* Two-column hero */}
            <div className="hero-grid" style={{ display: "grid", gridTemplateColumns: "1fr 340px", gap: 72, alignItems: "center", marginBottom: 72 }}>
              {/* Left */}
              <div>
                <motion.h1
                  initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                  style={{ color: "var(--text-1)", maxWidth: 820, marginBottom: 28 }}
                >
                  Building the{" "}
                  <em style={{ color: "var(--amber)", fontStyle: "italic" }}>web</em>
                  <br />& beyond.
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
                  style={{ maxWidth: 520, marginBottom: 40, fontSize: "1.05rem", lineHeight: 1.8, color: "var(--text-2)" }}
                >
                  Full Stack Developer and Game Developer. BCA graduate passionate about scalable systems, clean architecture, and immersive digital experiences.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.38 }}
                  style={{ display: "flex", flexWrap: "wrap", gap: 14 }}
                >
                  <a href="#projects" className="btn-primary">View Projects <ArrowRight size={14} /></a>
                  <a href="/Abin_Gomez_Resume.pdf" className="btn-secondary">Resume <Download size={14} /></a>
                  <a href="#contact" className="btn-secondary">Contact <Mail size={14} /></a>
                </motion.div>
              </div>

              {/* Right: photo */}
              <motion.div
                initial={{ opacity: 0, scale: 0.94, y: 16 }} animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                style={{ position: "relative", flexShrink: 0 }}
              >
                <div style={{ position: "absolute", inset: -12, borderRadius: 16, background: "var(--amber-glow)", filter: "blur(28px)", zIndex: 0, opacity: 0.6 }} />
                <div style={{ position: "relative", zIndex: 1, borderRadius: 12, overflow: "hidden", border: "1px solid var(--border-2)", width: "100%", aspectRatio: "3 / 4", maxHeight: 420 }}>
                  <Image src="/profile.jpg" alt="Abin Gomez — Full Stack & Game Developer" fill style={{ objectFit: "cover", objectPosition: "center top" }} priority />
                  <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "45%", background: "linear-gradient(to top, rgba(10,10,8,0.88) 0%, transparent 100%)", zIndex: 1 }} />
                  <div style={{ position: "absolute", bottom: 20, left: 20, right: 20, zIndex: 2 }}>
                    <p style={{ fontFamily: "var(--font-display)", fontSize: "1.15rem", color: "#fff", fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 4 }}>Abin Gomez</p>
                    <p style={{ fontFamily: "var(--font-mono)", fontSize: 9, color: "var(--amber)", letterSpacing: "0.2em", textTransform: "uppercase" }}>Full Stack · Game Developer</p>
                  </div>
                </div>
                {/* Location badge */}
                <div style={{ position: "absolute", top: -14, right: -14, background: "var(--surface)", border: "1px solid var(--border-2)", borderRadius: 4, padding: "8px 14px", display: "flex", alignItems: "center", gap: 6, zIndex: 3 }}>
                  <MapPin size={11} style={{ color: "var(--amber)" }} />
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 9, color: "var(--text-2)", letterSpacing: "0.12em", textTransform: "uppercase", whiteSpace: "nowrap" }}>Kerala, India</span>
                </div>
              </motion.div>
            </div>

            {/* Stats bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              style={{
                display: "grid", gridTemplateColumns: "repeat(4, 1fr)",
                borderTop: "1px solid var(--border-2)",
                borderLeft: "1px solid var(--border-2)",
                borderRadius: 8,
                overflow: "hidden",
              }}
            >
              {stats.map((s) => (
                <div
                  key={s.label}
                  style={{
                    padding: "32px 28px",
                    borderRight: "1px solid var(--border-2)",
                    borderBottom: "1px solid var(--border-2)",
                    background: "var(--surface)",
                  }}
                >
                  <div className="stat-value">{s.value}</div>
                  <div className="stat-label">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
          style={{ position: "absolute", bottom: 40, left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: 8, fontFamily: "var(--font-mono)", fontSize: 9, textTransform: "uppercase", letterSpacing: "0.2em", color: "var(--text-3)" }}
        >
          <span>Scroll</span>
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}>
            <ChevronDown size={14} style={{ color: "var(--amber)" }} />
          </motion.div>
        </motion.div>
      </section>

      {/* ══════════════════ MARQUEE ══════════════════ */}
      <div style={{ borderBottom: "1px solid var(--border-2)", overflow: "hidden", background: "var(--bg-2)", padding: "16px 0" }}>
        <div className="marquee-track" style={{ gap: 0 }}>
          {[...techMarquee, ...techMarquee].map((t, i) => (
            <React.Fragment key={i}>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--text-3)", textTransform: "uppercase", letterSpacing: "0.15em", whiteSpace: "nowrap", padding: "0 32px" }}>
                {t}
              </span>
              <span style={{ color: "var(--amber)", fontSize: 10 }}>·</span>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* ══════════════════ ABOUT ══════════════════ */}
      <SectionWrap id="about">
        <div className="about-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 72, alignItems: "start" }}>

          {/* Left */}
          <div className="reveal">
            <Eyebrow label="About Me" />
            <h2 style={{ color: "var(--text-1)", marginBottom: 32 }}>A builder with a full stack foundation</h2>

            {/* Profile card */}
            <div style={{ display: "flex", alignItems: "center", gap: 20, padding: "20px 24px", background: "var(--surface-2)", border: "1px solid var(--border-2)", borderRadius: 8, marginBottom: 32 }}>
              <div style={{ width: 72, height: 72, borderRadius: "50%", overflow: "hidden", border: "2px solid var(--border-2)", flexShrink: 0, position: "relative" }}>
                <Image src="/profile.jpg" alt="Abin Gomez" fill style={{ objectFit: "cover", objectPosition: "center top" }} />
              </div>
              <div>
                <p style={{ fontFamily: "var(--font-display)", fontSize: "1.05rem", color: "var(--text-1)", marginBottom: 4, fontWeight: 700 }}>Abin Gomez</p>
                <p style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--amber)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 8 }}>Full Stack Developer · Game Dev</p>
                <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <MapPin size={11} style={{ color: "var(--text-3)" }} />
                  <span style={{ fontSize: 12, color: "var(--text-3)" }}>Kollam, Kerala, India</span>
                </div>
              </div>
            </div>

            <p style={{ color: "var(--text-2)", lineHeight: 1.85, marginBottom: 20, fontSize: 15 }}>
              I'm Abin Gomez, a Full Stack Developer and aspiring Software Engineer from Kerala, India. Curiosity turned into craft: I've spent years building real-world applications and interactive experiences, from web apps to computer vision systems to verified Discord bots.
            </p>
            <p style={{ color: "var(--text-2)", lineHeight: 1.85, fontSize: 15 }}>
              My current focus is deepening backend architecture knowledge and building systems that scale, perform, and last. When I'm not writing code, I'm designing levels in Unity.
            </p>
          </div>

          {/* Right: what I do */}
          <div className="reveal delay-2">
            <div style={{ display: "grid", gap: 16 }}>
              {[
                { title: "Web Development",  body: "Fast, responsive interfaces. Scalable app architecture. Clean component design.",              accent: "01" },
                { title: "Backend Systems",  body: "APIs, auth, databases, automation. Reliable server-side logic at scale.",                     accent: "02" },
                { title: "Game Development", body: "Unity 2D and 3D. Physics systems. Scene management. Interactive experiences.",               accent: "03" },
              ].map((item) => (
                <div key={item.title} className="card" style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--amber)", letterSpacing: "0.1em", marginTop: 3, flexShrink: 0, minWidth: 20 }}>{item.accent}</span>
                  <div>
                    <h3 style={{ color: "var(--text-1)", marginBottom: 10, fontSize: "1rem" }}>{item.title}</h3>
                    <p style={{ color: "var(--text-2)", fontSize: 14, lineHeight: 1.75 }}>{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionWrap>

      <SectionDivider />

      {/* ══════════════════ SKILLS ══════════════════ */}
      <SectionWrap id="skills">
        <div className="reveal">
          <Eyebrow label="Skills" />
          <h2 style={{ color: "var(--text-1)", maxWidth: 600, marginBottom: 14 }}>A modern stack, end to end</h2>
          <p style={{ color: "var(--text-2)", maxWidth: 520, marginBottom: 56, lineHeight: 1.75 }}>
            Frontend to backend, databases to deployment, game engines to CLI tools.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 16 }}>
          {skillGroups.map((group, i) => {
            const Icon = group.icon;
            return (
              <div key={group.title} className={`card reveal delay-${(i % 4) + 1}`}>
                <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 20 }}>
                  <div style={{ width: 38, height: 38, borderRadius: 6, border: "1px solid var(--border-2)", display: "flex", alignItems: "center", justifyContent: "center", background: "var(--amber-glow)", flexShrink: 0 }}>
                    <Icon size={16} style={{ color: "var(--amber)" }} />
                  </div>
                  <h3 style={{ color: "var(--text-1)", fontSize: "0.95rem", fontFamily: "var(--font-display)" }}>{group.title}</h3>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {group.items.map((item) => <span key={item} className="skill-pill">{item}</span>)}
                </div>
              </div>
            );
          })}
        </div>
      </SectionWrap>

      <SectionDivider />

      {/* ══════════════════ EXPERIENCE ══════════════════ */}
      <SectionWrap id="experience">
        <div className="reveal">
          <Eyebrow label="Experience" />
          <h2 style={{ color: "var(--text-1)", marginBottom: 56 }}>Where I've worked</h2>
        </div>

        <div style={{ display: "grid", gap: 20 }}>
          {experience.map((item, i) => (
            <div key={item.role} className={`card reveal delay-${i + 1}`}>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 16, justifyContent: "space-between", alignItems: "flex-start", marginBottom: 20, paddingBottom: 20, borderBottom: "1px solid var(--border)" }}>
                <div>
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.2rem", color: "var(--text-1)", marginBottom: 6 }}>{item.role}</h3>
                  <p style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--amber)", letterSpacing: "0.08em" }}>{item.company}</p>
                </div>
                <span className="tag">{item.period}</span>
              </div>
              <p style={{ color: "var(--text-2)", fontSize: 14, lineHeight: 1.8, marginBottom: 20 }}>{item.desc}</p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                {item.bullets.map((b) => (
                  <div key={b} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                    <div className="timeline-dot" style={{ marginTop: 5 }} />
                    <span style={{ fontSize: 13, color: "var(--text-2)", lineHeight: 1.6 }}>{b}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </SectionWrap>

      <SectionDivider />

      {/* ══════════════════ PROJECTS ══════════════════ */}
      <SectionWrap id="projects">
        <div className="reveal">
          <Eyebrow label="Featured Projects" />
          <h2 style={{ color: "var(--text-1)", maxWidth: 560, marginBottom: 14 }}>Selected work</h2>
          <p style={{ color: "var(--text-2)", maxWidth: 480, marginBottom: 56, lineHeight: 1.75, fontSize: 14 }}>
            Click any card to expand details. Backend depth, frontend craft, real problems solved.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 16 }}>
          {projects.map((p, i) => (
            <div key={p.num} className={`reveal delay-${i + 1}`} style={{ display: "flex" }}>
              <ProjectCard project={p} />
            </div>
          ))}
        </div>
      </SectionWrap>

      <SectionDivider />

      {/* ══════════════════ ACHIEVEMENTS ══════════════════ */}
      <SectionWrap>
        <div className="reveal">
          <Eyebrow label="Achievements" />
          <h2 style={{ color: "var(--text-1)", marginBottom: 56 }}>Proof of shipping</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 14 }}>
          {[
            "Built and deployed multiple full stack apps independently",
            "Completed a full stack development internship",
            "Discord bot that passed official Discord verification",
            "Developed a computer vision attendance system",
            "Covered frontend, backend, databases, APIs, and cloud deployment",
            "Continuously learning modern workflows and technologies",
          ].map((item, i) => (
            <div key={item} className={`card reveal delay-${(i % 3) + 1}`} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
              <Award size={16} style={{ color: "var(--amber)", flexShrink: 0, marginTop: 2 }} />
              <p style={{ fontSize: 13, color: "var(--text-2)", lineHeight: 1.7 }}>{item}</p>
            </div>
          ))}
        </div>
      </SectionWrap>

      <SectionDivider />

      {/* ══════════════════ EDUCATION + CERTIFICATIONS ══════════════════ */}
      <SectionWrap>
        <div className="reveal">
          <Eyebrow label="Education and Certifications" />
          <h2 style={{ color: "var(--text-1)", marginBottom: 56 }}>Academic foundation</h2>
        </div>
        <div className="edu-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>

          {/* Education */}
          <div className="card reveal">
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 24, paddingBottom: 20, borderBottom: "1px solid var(--border)" }}>
              <div style={{ width: 38, height: 38, borderRadius: 6, border: "1px solid var(--border-2)", display: "flex", alignItems: "center", justifyContent: "center", background: "var(--amber-glow)", flexShrink: 0 }}>
                <GraduationCap size={16} style={{ color: "var(--amber)" }} />
              </div>
              <div>
                <h3 style={{ color: "var(--text-1)", fontSize: "1rem" }}>Education</h3>
                <p style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--text-3)", letterSpacing: "0.1em", textTransform: "uppercase", marginTop: 2 }}>BCA</p>
              </div>
            </div>
            <div style={{ background: "var(--surface-2)", border: "1px solid var(--border)", borderRadius: 6, padding: "20px 22px" }}>
              <p style={{ color: "var(--text-1)", fontFamily: "var(--font-display)", fontSize: "1rem", marginBottom: 6 }}>Amrita Vishwa Vidyapeetham</p>
              <p style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--amber)", letterSpacing: "0.1em", marginBottom: 14 }}>2023 — 2026</p>
              <p style={{ color: "var(--text-2)", fontSize: 13, lineHeight: 1.75 }}>
                Software development, databases, programming, and web technologies built alongside real-world projects.
              </p>
            </div>
          </div>

          {/* Certifications */}
          <div className="card reveal delay-2">
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 24, paddingBottom: 20, borderBottom: "1px solid var(--border)" }}>
              <div style={{ width: 38, height: 38, borderRadius: 6, border: "1px solid var(--border-2)", display: "flex", alignItems: "center", justifyContent: "center", background: "var(--amber-glow)", flexShrink: 0 }}>
                <Sparkles size={16} style={{ color: "var(--amber)" }} />
              </div>
              <div>
                <h3 style={{ color: "var(--text-1)", fontSize: "1rem" }}>Certifications</h3>
                <p style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--text-3)", letterSpacing: "0.1em", textTransform: "uppercase", marginTop: 2 }}>Industry aligned</p>
              </div>
            </div>
            <div style={{ display: "grid", gap: 10 }}>
              {certifications.map((c, i) => (
                <div key={c} style={{ display: "flex", alignItems: "center", gap: 14, background: "var(--surface-2)", border: "1px solid var(--border)", borderRadius: 6, padding: "14px 18px" }}>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--amber)", letterSpacing: "0.1em", flexShrink: 0 }}>0{i + 1}</span>
                  <span style={{ fontSize: 13, color: "var(--text-2)" }}>{c}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionWrap>

      <SectionDivider />

      {/* ══════════════════ LANGUAGES + CS FUNDAMENTALS ══════════════════ */}
      <SectionWrap>
        <div className="reveal">
          <Eyebrow label="Languages and Fundamentals" />
          <h2 style={{ color: "var(--text-1)", marginBottom: 56 }}>Communication and CS core</h2>
        </div>
        <div className="edu-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
          <div className="card reveal">
            <h3 style={{ color: "var(--text-1)", fontSize: "0.95rem", marginBottom: 18, paddingBottom: 16, borderBottom: "1px solid var(--border)" }}>Spoken Languages</h3>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {["English","Malayalam","Hindi","Urdu","Malay"].map((l) => <span key={l} className="skill-pill">{l}</span>)}
            </div>
          </div>
          <div className="card reveal delay-2">
            <h3 style={{ color: "var(--text-1)", fontSize: "0.95rem", marginBottom: 18, paddingBottom: 16, borderBottom: "1px solid var(--border)" }}>CS Fundamentals</h3>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {["Data Structures and Algorithms","DBMS","Operating Systems","Computer Networks","OOP","Software Engineering"].map((l) => <span key={l} className="skill-pill">{l}</span>)}
            </div>
          </div>
        </div>
      </SectionWrap>

      <SectionDivider />

      {/* ══════════════════ FAQ ══════════════════ */}
      <SectionWrap>
        <div className="reveal">
          <Eyebrow label="FAQ" />
          <h2 style={{ color: "var(--text-1)", marginBottom: 56 }}>Quick answers</h2>
        </div>
        <div className="edu-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
          {faqs.map((faq, i) => (
            <div key={faq.q} className={`card reveal delay-${(i % 2) + 1}`}>
              <p style={{ fontFamily: "var(--font-display)", fontSize: "1rem", color: "var(--text-1)", marginBottom: 14, paddingBottom: 14, borderBottom: "1px solid var(--border)" }}>
                {faq.q}
              </p>
              <p style={{ fontSize: 13, color: "var(--text-2)", lineHeight: 1.75 }}>{faq.a}</p>
            </div>
          ))}
        </div>
      </SectionWrap>

      <SectionDivider />

      {/* ══════════════════ CONTACT ══════════════════ */}
      <SectionWrap id="contact">
        <div className="contact-grid" style={{ display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: 72, alignItems: "start" }}>

          {/* Left */}
          <div className="reveal">
            <Eyebrow label="Contact" />
            <h2 style={{ color: "var(--text-1)", marginBottom: 24 }}>
              Let's build <br />
              <em style={{ color: "var(--amber)", fontStyle: "italic" }}>something</em>.
            </h2>
            <p style={{ color: "var(--text-2)", fontSize: 14, lineHeight: 1.85, maxWidth: 440, marginBottom: 40 }}>
              Open to internships, full-time roles, freelance projects, and collaborations. If you're building something interesting, I'd love to hear from you.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              {[
                { icon: Mail,     label: "Email",        value: "gomezdevelops@gmail.com",   href: "mailto:gomezdevelops@gmail.com" },
                { icon: MapPin,   label: "Location",     value: "Kollam, Kerala, India",      href: "#" },
                { icon: Code2,    label: "Focus",        value: "Full Stack and Game Dev",    href: "#" },
                { icon: Sparkles, label: "Availability", value: "Open to opportunities",      href: "#" },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <a key={item.label} href={item.href} style={{ textDecoration: "none" }} className="card">
                    <Icon size={15} style={{ color: "var(--amber)", marginBottom: 14 }} />
                    <p style={{ fontFamily: "var(--font-mono)", fontSize: 9, color: "var(--text-3)", textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: 6 }}>{item.label}</p>
                    <p style={{ fontSize: 12, color: "var(--text-2)", lineHeight: 1.5 }}>{item.value}</p>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Right: contact card */}
          <div className="reveal delay-2">
            <div className="card" style={{ padding: 36 }}>
              {/* Mini profile */}
              <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 28, paddingBottom: 24, borderBottom: "1px solid var(--border)" }}>
                <div style={{ width: 56, height: 56, borderRadius: "50%", overflow: "hidden", border: "1.5px solid var(--border-2)", flexShrink: 0, position: "relative" }}>
                  <Image src="/profile.jpg" alt="Abin Gomez" fill style={{ objectFit: "cover", objectPosition: "center top" }} />
                </div>
                <div>
                  <p style={{ fontFamily: "var(--font-display)", fontSize: "1rem", color: "var(--text-1)", fontWeight: 700, marginBottom: 4 }}>Abin Gomez</p>
                  <p style={{ fontFamily: "var(--font-mono)", fontSize: 9, color: "var(--amber)", letterSpacing: "0.15em", textTransform: "uppercase" }}>Available for hire</p>
                </div>
              </div>

              <p style={{ fontFamily: "var(--font-mono)", fontSize: 9, textTransform: "uppercase", letterSpacing: "0.2em", color: "var(--amber)", marginBottom: 14 }}>Quick Summary</p>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.35rem", color: "var(--text-1)", lineHeight: 1.3, marginBottom: 16 }}>
                Professional, responsive, ready.
              </h3>
              <p style={{ color: "var(--text-2)", fontSize: 13, lineHeight: 1.85, marginBottom: 28 }}>
                BCA graduate. Full stack developer. Game development enthusiast. Open to Kerala, India, remote, and relocation opportunities.
              </p>
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                <a href="mailto:gomezdevelops@gmail.com" className="btn-primary" style={{ fontSize: 11, padding: "12px 22px" }}>
                  Send Email <ArrowUpRight size={13} />
                </a>
                <a href="#home" className="btn-secondary" style={{ fontSize: 11, padding: "11px 22px" }}>
                  Back to Top
                </a>
              </div>

              <div style={{ marginTop: 28, paddingTop: 24, borderTop: "1px solid var(--border)" }}>
                {[
                  { icon: Star,         label: "Editorial dark theme" },
                  { icon: Sparkles,     label: "Scroll driven reveals" },
                  { icon: CheckCircle2, label: "Playfair and JetBrains Mono" },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 12 }}>
                      <Icon size={13} style={{ color: "var(--amber)" }} />
                      <span style={{ fontSize: 12, color: "var(--text-3)", fontFamily: "var(--font-mono)", letterSpacing: "0.06em" }}>{item.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </SectionWrap>

      {/* ══════════════════ FOOTER ══════════════════ */}
      <footer style={{ borderTop: "1px solid var(--border-2)", background: "var(--bg-2)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "36px 48px", display: "flex", flexWrap: "wrap", gap: 16, alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            
            <div>
              <p style={{ fontFamily: "var(--font-display)", fontSize: "0.95rem", color: "var(--text-1)" }}>Abin Gomez</p>
              <p style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--text-3)", letterSpacing: "0.12em", marginTop: 3 }}>
                © 2025 · DESIGNED AND BUILT BY ABIN GOMEZ
              </p>
            </div>
          </div>
          <nav style={{ display: "flex", gap: 28 }}>
            {navLinks.map((l) => (
              <a key={l.label} href={l.href} className="link-underline" style={{ fontFamily: "var(--font-mono)", fontSize: 10, textTransform: "uppercase", letterSpacing: "0.14em", color: "var(--text-3)" }}>
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      </footer>

      {/* ══════════════════ RESPONSIVE ══════════════════ */}
      <style>{`
        @media (max-width: 1024px) {
          .hero-grid    { grid-template-columns: 1fr !important; }
          .hero-grid > div:last-child { display: none !important; }
          .about-grid   { grid-template-columns: 1fr !important; }
          .contact-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 768px) {
          .edu-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}