import { motion, useReducedMotion } from "framer-motion";
import img1 from "../../assets/js.png";
import img2 from "../../assets/react.png";
import img3 from "../../assets/html.png";
import img4 from "../../assets/css.png";
import img5 from "../../assets/tailwind.png";
import img6 from "../../assets/fire.png";
import img7 from "../../assets/mongo.png";
import img8 from "../../assets/nodeex.png";
import img9 from "../../assets/ex.png";
import img10 from "../../assets/linux.png";
import img11 from "../../assets/git.png";
import img12 from "../../assets/cc.png";

const capabilityCards = [
  {
    title: "UI Engineering",
    value: "92%",
    description: "Design-driven React interfaces with polished composition, strong hierarchy, and responsive structure.",
  },
  {
    title: "Motion Systems",
    value: "86%",
    description: "Framer Motion and GSAP interactions that guide attention without slowing the product down.",
  },
  {
    title: "Frontend Architecture",
    value: "88%",
    description: "Scalable component thinking, clean state flow, and reusable UI patterns that support growth.",
  },
];

const skillGroups = [
  {
    title: "Frontend Core",
    description: "The foundation I rely on for fast, resilient, and interactive product interfaces.",
    items: [
      { name: "JavaScript", logo: img1 },
      { name: "React", logo: img2 },
      { name: "HTML5", logo: img3 },
      { name: "CSS3", logo: img4 },
      { name: "Tailwind CSS", logo: img5 },
    ],
  },
  {
    title: "Backend & Data",
    description: "Tools I use to connect interfaces with practical application logic and scalable data layers.",
    items: [
      { name: "Firebase", logo: img6 },
      { name: "MongoDB", logo: img7 },
      { name: "Node.js", logo: img8 },
      { name: "Express.js", logo: img9 },
    ],
  },
  {
    title: "Workflow & Systems",
    description: "The environment and tooling that keep delivery consistent, collaborative, and production-ready.",
    items: [
      { name: "Linux", logo: img10 },
      { name: "Git", logo: img11 },
      { name: "C", logo: img12 },
    ],
  },
];

const Skills = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section className="section-shell relative overflow-hidden bg-background">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_30%,rgba(242,166,90,0.08),transparent_26%),radial-gradient(circle_at_85%_75%,rgba(255,255,255,0.06),transparent_18%)]" />

      <div className="container relative z-10">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7 }}
          >
            <span className="section-eyebrow">Capabilities</span>
            <h2 className="mt-5 text-h2 md:text-h1">Crafting interfaces with design taste, motion logic, and engineering discipline.</h2>
            <p className="mt-5 max-w-xl text-body md:text-body-lg">
              I focus on the layer where design quality and frontend implementation meet. The goal is not
              just to ship screens, but to create interfaces that feel refined, understandable, and alive.
            </p>

            <div className="mt-8 space-y-4">
              {capabilityCards.map((card, index) => (
                <motion.div
                  key={card.title}
                  className="premium-card"
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: index * 0.08 }}
                  whileHover={reduceMotion ? undefined : { y: -6, scale: 1.01 }}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-caption uppercase tracking-[0.22em] text-accent">{card.title}</p>
                      <p className="mt-3 max-w-md text-body text-text-secondary">{card.description}</p>
                    </div>
                    <span className="text-h3 text-text-primary">{card.value}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="space-y-6">
            {skillGroups.map((group, groupIndex) => (
              <motion.div
                key={group.title}
                className="premium-card"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.65, delay: groupIndex * 0.08 }}
              >
                <div className="flex flex-col gap-3 border-b border-white/10 pb-5 md:flex-row md:items-end md:justify-between">
                  <div>
                    <h3 className="text-h3">{group.title}</h3>
                    <p className="mt-2 max-w-2xl text-body text-text-secondary">{group.description}</p>
                  </div>
                  <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-caption uppercase tracking-[0.2em] text-accent">
                    {group.items.length} tools
                  </span>
                </div>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {group.items.map((item, index) => (
                    <motion.div
                      key={item.name}
                      className="group relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/5 p-4 backdrop-blur-md"
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: 0.45, delay: index * 0.05 }}
                      whileHover={reduceMotion ? undefined : { y: -6, rotateX: 4, rotateY: -4 }}
                      style={{ transformStyle: "preserve-3d" }}
                    >
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(242,166,90,0.14),transparent_45%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                      <div className="relative flex items-center gap-4">
                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-surface/80">
                          <img src={item.logo} alt={item.name} className="h-8 w-8 object-contain" loading="lazy" />
                        </div>
                        <div>
                          <p className="text-label text-text-primary">{item.name}</p>
                          <p className="mt-1 text-body-sm text-text-muted">Production-ready familiarity</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
