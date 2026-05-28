"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  CheckCircle2,
  Code2,
  Download,
  ExternalLink,
  Globe,
  GraduationCap,
  Mail,
  MapPin,
  MessageCircle,
  MonitorSmartphone,
  PlayCircle,
  ShieldCheck,
  Sparkles,
  Star,
  TerminalSquare,
  Workflow,
} from "lucide-react";

type SkillGroup = {
  title: string;
  items: string[];
};

type Project = {
  title: string;
  summary: string;
  details: string;
  tech: string[];
  highlights: string[];
};

type Stat = {
  value: string;
  label: string;
};

type Experience = {
  role: string;
  company: string;
  period: string;
  description: string;
  bullets: string[];
};

type FAQ = {
  q: string;
  a: string;
};

const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    items: ["React.js", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "Responsive Design"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express.js", "Flask", "REST APIs", "Authentication", "CRUD Systems"],
  },
  {
    title: "Databases",
    items: ["MongoDB", "MySQL", "PostgreSQL", "SQLite"],
  },
  {
    title: "Languages",
    items: ["JavaScript", "TypeScript", "Python", "Java", "C", "C#"],
  },
  {
    title: "Game Development",
    items: ["Unity", "C#", "2D/3D Mechanics", "Physics Systems", "Scene Management"],
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "Docker", "Postman", "Vercel", "Railway"],
  },
];

const projects: Project[] = [
  {
    title: "Smart Attendance System Using Face Recognition",
    summary: "Computer vision based attendance automation for classrooms.",
    details:
      "A full stack attendance management system that automates classroom attendance using real-time face recognition technology.",
    tech: ["Python", "Flask", "OpenCV", "dlib", "SQLite", "NumPy", "Pandas", "Flask-Mail"],
    highlights: [
      "Real-time face recognition",
      "Automated attendance tracking",
      "Student registration and admin dashboard",
      "Attendance reports and email warnings",
    ],
  },
  {
    title: "Discord Automation Bot",
    summary: "Verified Discord bot with moderation, leveling, and automation.",
    details:
      "A feature-rich Discord bot built using Node.js and Discord.js that successfully passed Discord official verification review.",
    tech: ["Node.js", "Discord.js", "MongoDB", "REST APIs"],
    highlights: [
      "XP and leveling system",
      "Moderation and ticket commands",
      "Multi-server support",
      "Verified by Discord",
    ],
  },
  {
    title: "Full Stack Web Applications",
    summary: "Responsive CRUD apps with auth and APIs.",
    details:
      "Built multiple CRUD based full stack web applications with authentication systems, responsive interfaces, and REST APIs.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
    highlights: [
      "JWT authentication",
      "Protected routes",
      "Responsive UI and API integration",
      "Database management and CRUD flows",
    ],
  },
];

const stats: Stat[] = [
  { value: "4+", label: "Years of Development Experience" },
  { value: "50+", label: "Projects Built and Deployed" },
  { value: "Modern", label: "Full Stack Technologies" },
  { value: "Global", label: "Open to Opportunities" },
];
  
const experience: Experience[] = [
  {
    role: "Full Stack Web Development Intern",
    company: "Edu-versity",
    period: "Remote | 2024 | 3 Months",
    description:
      "Worked on responsive full stack web applications using React.js, Node.js, Express.js, and MongoDB across the complete development lifecycle.",
    bullets: [
      "Built frontend and backend features",
      "Implemented authentication systems",
      "Integrated REST APIs and databases",
      "Improved performance and responsiveness",
    ],
  },
  {
    role: "Independent Full Stack Developer",
    company: "Self Directed Projects",
    period: "2024 to Present",
    description:
      "Designed, developed, and deployed multiple personal full stack applications independently from planning to deployment.",
    bullets: [
      "Built scalable backend systems",
      "Developed responsive interfaces",
      "Managed deployments using cloud platforms",
      "Used Git and GitHub for version control",
    ],
  },
];

const faqs: FAQ[] = [
  {
    q: "What technologies do you use?",
    a: "I mainly work with React.js, Next.js, Node.js, Express.js, MongoDB, Python, TypeScript, and modern frontend technologies.",
  },
  {
    q: "Are you open to relocation?",
    a: "Yes, I am open to relocation and international opportunities.",
  },
  {
    q: "What roles are you looking for?",
    a: "Frontend Developer, Full Stack Developer, Software Engineer, and Game Developer roles.",
  },
  {
    q: "Are you available for freelance work?",
    a: "Yes, I am open to freelance and collaborative opportunities.",
  },
];

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.55, ease: "easeOut" as const },
};

function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <div className="max-w-3xl">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-violet-300/90">{eyebrow}</p>
      <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">{title}</h2>
      <p className="mt-4 text-base leading-7 text-zinc-300">{description}</p>
    </div>
  );
}

function GlassCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={`rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl ${className}`}
    >
      {children}
    </div>
  );
}

function FooterSection() {
  return (
    <footer className="border-t border-white/10 bg-black/20">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold text-white">Abin Gomez</p>
            <p className="mt-1 text-sm text-zinc-400">Designed and developed by Abin Gomez.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href="#home" className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10">
              Back to top
            </a>
            <a href="mailto:gomezdevelops@gmail.com" className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:scale-[1.02]">
              Send email
            </a>
          </div>
        </div>
        <div className="mt-8 grid gap-3 text-sm text-zinc-400 sm:grid-cols-3">
          <div className="flex items-center gap-2"><PlayCircle className="h-4 w-4 text-violet-300" /> Smooth animations</div>
          <div className="flex items-center gap-2"><Sparkles className="h-4 w-4 text-violet-300" /> Glassmorphism cards</div>
          <div className="flex items-center gap-2"><Star className="h-4 w-4 text-violet-300" /> Professional dark theme</div>
        </div>
      </div>
    </footer>
  );
}

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute left-[-10%] top-[-10%] h-96 w-96 rounded-full bg-violet-600/20 blur-3xl" />
        <div className="absolute right-[-10%] top-[15%] h-[28rem] w-[28rem] rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute bottom-[-10%] left-[30%] h-80 w-80 rounded-full bg-fuchsia-500/10 blur-3xl" />
      </div>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050816]/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="#home" className="group inline-flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-violet-400/30 bg-violet-500/10">
              <Sparkles className="h-5 w-5 text-violet-300" />
            </div>
            <div>
              <p className="text-sm font-semibold tracking-wide text-white">Abin Gomez</p>
              <p className="text-xs text-zinc-400">Full Stack Developer</p>
            </div>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="text-sm text-zinc-300 transition hover:text-white">
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/10"
          >
            Let&apos;s Talk <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </header>

      <section id="home" className="relative mx-auto max-w-7xl px-4 pb-20 pt-16 sm:px-6 lg:px-8 lg:pt-24">
        <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
          <motion.div {...fadeUp}>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-500/10 px-4 py-2 text-sm text-violet-200">
              <ShieldCheck className="h-4 w-4" />
              Open to internships, full-time roles, and freelance work
            </div>
            <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
              Full Stack Developer &amp; Game Developer
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
              Building scalable web applications, backend systems, and immersive digital experiences.
            </p>
            <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-400">
              BCA graduate passionate about full stack development, backend engineering, UI and UX, and game development. I enjoy creating fast, responsive, and user focused applications using modern technologies and clean architecture.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:scale-[1.02]"
              >
                View Projects <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Contact Me <MessageCircle className="h-4 w-4" />
              </a>
              <a
                href="/Abin_Gomez_Resume.pdf"
                className="inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-500/10 px-6 py-3 text-sm font-semibold text-violet-100 transition hover:bg-violet-500/15"
              >
                Download Resume <Download className="h-4 w-4" />
              </a>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {stats.map((stat) => (
                <GlassCard key={stat.label} className="p-5">
                  <p className="text-3xl font-semibold text-white">{stat.value}</p>
                  <p className="mt-2 text-sm text-zinc-400">{stat.label}</p>
                </GlassCard>
              ))}
            </div>
          </motion.div>

          <motion.div {...fadeUp} transition={{ duration: 0.65 }}>
            <div className="relative mx-auto max-w-xl">
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-violet-500/20 via-cyan-500/10 to-fuchsia-500/15 blur-2xl" />
              <GlassCard className="relative overflow-hidden p-3 sm:p-4">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] border border-white/10 bg-zinc-950">
                  <img
                    src="/profile.jpg"
                    alt="Abin Gomez portrait"
                    className="h-full w-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <div className="flex items-end justify-between gap-4">
                      <div>
                        <p className="text-sm text-zinc-300">Kollam, Kerala, India</p>
                        <p className="mt-1 text-lg font-semibold text-white">Abin Gomez</p>
                      </div>
                      <div className="rounded-2xl border border-white/10 bg-white/10 px-3 py-2 backdrop-blur-md">
                        <p className="text-xs text-zinc-200">Available</p>
                      </div>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <motion.div {...fadeUp}>
          <SectionHeading
            eyebrow="About Me"
            title="A builder mindset with a strong full stack foundation"
            description="I am Abin Gomez, a Full Stack Developer and aspiring Software Engineer from Kerala, India. My interest in development started from curiosity and gradually turned into a strong passion for building real world applications and interactive experiences."
          />
        </motion.div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div {...fadeUp}>
            <GlassCard className="h-full">
              <p className="text-base leading-8 text-zinc-300">
                Over the last few years, I have worked on full stack applications, backend systems, APIs, authentication systems, automation tools, and game development projects. I mainly work with React.js, Node.js, Express.js, MongoDB, and Python.
              </p>
              <p className="mt-4 text-base leading-8 text-zinc-300">
                I enjoy solving problems, designing clean user experiences, and building scalable applications from scratch. Apart from web development, I am also deeply interested in game development and interactive systems.
              </p>
              <p className="mt-4 text-base leading-8 text-zinc-300">
                My current focus is becoming a stronger software engineer with deeper knowledge in backend systems, architecture, scalability, and modern application development.
              </p>
            </GlassCard>
          </motion.div>

          <motion.div {...fadeUp} transition={{ duration: 0.7 }}>
            <GlassCard className="h-full">
              <div className="grid gap-4">
                {[
                  { icon: Code2, label: "Web Development", text: "Fast, responsive interfaces and scalable app architecture." },
                  { icon: Workflow, label: "Backend Systems", text: "APIs, authentication, databases, and automation workflows." },
                  { icon: MonitorSmartphone, label: "UI and UX Focus", text: "Clean, professional, user focused design choices." },
                ].map((item) => (
                  <div key={item.label} className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-violet-500/10 text-violet-200">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-white">{item.label}</p>
                      <p className="mt-1 text-sm leading-6 text-zinc-400">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </section>

      <section id="skills" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <motion.div {...fadeUp}>
          <SectionHeading
            eyebrow="Skills"
            title="A modern stack built for product focused development"
            description="I work across frontend, backend, databases, programming languages, game development, and essential engineering tools."
          />
        </motion.div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group) => (
            <motion.div key={group.title} {...fadeUp}>
              <GlassCard className="h-full">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/5 text-violet-200">
                    <TerminalSquare className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{group.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-zinc-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="experience" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <motion.div {...fadeUp}>
          <SectionHeading
            eyebrow="Experience"
            title="Hands on work across internships and independent projects"
            description="I have worked in both structured internship environments and self directed project development, which helped me understand the full development lifecycle.">
          </SectionHeading>
        </motion.div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {experience.map((item) => (
            <motion.div key={item.role} {...fadeUp}>
              <GlassCard className="h-full">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white">{item.role}</h3>
                    <p className="mt-1 text-sm text-violet-200">{item.company}</p>
                  </div>
                  <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-zinc-300">
                    {item.period}
                  </span>
                </div>
                <p className="mt-4 text-base leading-7 text-zinc-300">{item.description}</p>
                <div className="mt-5 space-y-3">
                  {item.bullets.map((bullet) => (
                    <div key={bullet} className="flex items-start gap-3 text-sm text-zinc-300">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-violet-300" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <motion.div {...fadeUp}>
          <SectionHeading
            eyebrow="Featured Projects"
            title="Selected work that shows technical depth and product thinking"
            description="These projects highlight backend logic, frontend quality, automation, and real world problem solving."
          />
        </motion.div>

        <div className="mt-10 grid gap-6 xl:grid-cols-3">
          {projects.map((project) => (
            <motion.div key={project.title} {...fadeUp}>
              <GlassCard className="group h-full overflow-hidden transition hover:-translate-y-1 hover:bg-white/[0.055]">
                <div className="flex h-full flex-col">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-500/10 text-violet-200 transition group-hover:bg-violet-500/15">
                      <Globe className="h-5 w-5" />
                    </div>
                    <ExternalLink className="h-4 w-4 text-zinc-500 transition group-hover:text-zinc-300" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-white">{project.title}</h3>
                  <p className="mt-2 text-sm text-violet-200">{project.summary}</p>
                  <p className="mt-4 text-sm leading-7 text-zinc-300">{project.details}</p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-zinc-300">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                    <p className="text-sm font-medium text-white">Key highlights</p>
                    <ul className="mt-3 space-y-2">
                      {project.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-3 text-sm text-zinc-300">
                          <Star className="mt-0.5 h-4 w-4 shrink-0 text-violet-300" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <motion.div {...fadeUp}>
          <SectionHeading
            eyebrow="Achievements"
            title="Proof of consistent building and shipping"
            description="I focus on momentum, learning, and execution, turning ideas into working products."
          />
        </motion.div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {[
            "Built and deployed multiple full stack applications independently",
            "Completed a full stack development internship",
            "Built a Discord bot that passed official Discord verification",
            "Developed a computer vision based attendance system",
            "Worked with frontend, backend, databases, APIs, and cloud deployment",
            "Continuously learning modern technologies and development workflows",
          ].map((item) => (
            <GlassCard key={item} className="flex items-start gap-4">
              <Award className="mt-1 h-5 w-5 shrink-0 text-violet-300" />
              <p className="text-sm leading-7 text-zinc-300">{item}</p>
            </GlassCard>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <motion.div {...fadeUp}>
          <SectionHeading
            eyebrow="Education and Certifications"
            title="A strong academic base with practical learning on top"
            description="I combine formal education with ongoing self learning and project experience."
          />
        </motion.div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <GlassCard>
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/5 text-violet-200">
                <GraduationCap className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Education</h3>
                <p className="text-sm text-zinc-400">Bachelor of Computer Applications</p>
              </div>
            </div>
            <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
              <p className="text-white">Amrita Vishwa Vidyapeetham</p>
              <p className="mt-1 text-sm text-zinc-400">2023 to 2026</p>
              <p className="mt-3 text-sm leading-7 text-zinc-300">
                Focused on software development, databases, programming, and web technologies while building real world projects alongside academics.
              </p>
            </div>
          </GlassCard>

          <GlassCard>
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/5 text-violet-200">
                <Sparkles className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Certifications</h3>
                <p className="text-sm text-zinc-400">Industry aligned learning</p>
              </div>
            </div>
            <div className="mt-5 grid gap-3">
              {[
                "Learn React - Scrimba",
                "Advanced JavaScript - Scrimba",
                "Full Stack Web Development - Edu-versity",
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm text-zinc-300">
                  {item}
                </div>
              ))}
            </div>
          </GlassCard>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <motion.div {...fadeUp}>
          <SectionHeading
            eyebrow="Languages and Basics"
            title="Communication and fundamentals that support long term growth"
            description="I work across multiple languages and have a solid foundation in computer science fundamentals."
          />
        </motion.div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <GlassCard>
            <h3 className="text-lg font-semibold text-white">Languages</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {["English", "Malayalam", "Hindi", "Urdu", "Malay"].map((item) => (
                <span key={item} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-zinc-300">
                  {item}
                </span>
              ))}
            </div>
          </GlassCard>

          <GlassCard>
            <h3 className="text-lg font-semibold text-white">Computer Science Fundamentals</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {[
                "Data Structures and Algorithms",
                "DBMS",
                "Operating Systems",
                "Computer Networks",
                "OOP",
                "Software Engineering",
              ].map((item) => (
                <span key={item} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-zinc-300">
                  {item}
                </span>
              ))}
            </div>
          </GlassCard>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <motion.div {...fadeUp}>
          <SectionHeading
            eyebrow="FAQ"
            title="A quick overview for recruiters"
            description="These answers help surface the most useful context quickly."
          />
        </motion.div>

        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          {faqs.map((faq) => (
            <GlassCard key={faq.q}>
              <p className="text-base font-semibold text-white">{faq.q}</p>
              <p className="mt-3 text-sm leading-7 text-zinc-300">{faq.a}</p>
            </GlassCard>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <motion.div {...fadeUp}>
          <SectionHeading
            eyebrow="Contact"
            title="Let’s connect"
            description="I am open to internships, full-time opportunities, freelance work, and collaborations related to software development and modern web technologies."
          />
        </motion.div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          <GlassCard>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { icon: Mail, label: "Email", value: "gomezdevelops@gmail.com", href: "mailto:gomezdevelops@gmail.com" },
                { icon: MapPin, label: "Location", value: "Kollam, Kerala, India", href: "#" },
                { icon: Code2, label: "GitHub", value: "github.com/gomezdevelops", href: "https://github.com/gomezdevelops" },
                { icon: Globe, label: "LinkedIn", value: "linkedin.com/in/abingomez", href: "https://linkedin.com/in/abingomez" },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition hover:bg-white/[0.06]"
                >
                  <item.icon className="h-5 w-5 text-violet-300" />
                  <p className="mt-3 text-sm text-zinc-400">{item.label}</p>
                  <p className="mt-1 text-sm font-medium text-white">{item.value}</p>
                </a>
              ))}
            </div>
          </GlassCard>

          <GlassCard>
            <p className="text-sm uppercase tracking-[0.25em] text-violet-300">Contact Summary</p>
            <h3 className="mt-3 text-2xl font-semibold text-white">Professional, responsive, and ready for new opportunities.</h3>
            <p className="mt-4 text-sm leading-7 text-zinc-300">
              Built with modern design principles, premium motion, and a recruiter friendly content structure.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#home" className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10">
                Back to top
              </a>
              <a href="mailto:gomezdevelops@gmail.com" className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:scale-[1.02]">
                Send email
              </a>
            </div>
            <div className="mt-8 grid gap-3 text-sm text-zinc-400">
              <div className="flex items-center gap-2"><PlayCircle className="h-4 w-4 text-violet-300" /> Smooth animations</div>
              <div className="flex items-center gap-2"><Sparkles className="h-4 w-4 text-violet-300" /> Glassmorphism cards</div>
              <div className="flex items-center gap-2"><Star className="h-4 w-4 text-violet-300" /> Professional dark theme</div>
            </div>
          </GlassCard>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
