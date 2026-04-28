import { motion, useReducedMotion } from "framer-motion";
import portrait from "../../assets/me1-removebg-preview.png";

const principles = [
  {
    title: "Design-sensitive development",
    description: "I care about spacing, motion, rhythm, and hierarchy as much as I care about clean code.",
  },
  {
    title: "Product-minded execution",
    description: "Every section, component, and state should support clarity, trust, and user decision-making.",
  },
  {
    title: "Always evolving",
    description: "I keep pushing my frontend craft through experimentation, new tooling, and sharper visual thinking.",
  },
];

const stats = [
  { label: "Primary focus", value: "React UI" },
  { label: "Current edge", value: "Motion UX" },
  { label: "Mindset", value: "Craft + clarity" },
];

const About = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section className="section-shell relative overflow-hidden bg-background">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(242,166,90,0.1),transparent_25%),radial-gradient(circle_at_20%_80%,rgba(255,255,255,0.05),transparent_18%)]" />

      <div className="container relative z-10">
        <div className="grid gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
          <motion.div
            className="relative order-2 lg:order-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.75 }}
          >
            <div className="relative overflow-hidden rounded-[2.2rem] border border-white/10 bg-panel-gradient p-4 shadow-soft backdrop-blur-xl">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.14),transparent_35%)]" />
              <div className="relative rounded-[1.7rem] border border-white/10 bg-surface/90 p-6">
                <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <p className="text-caption uppercase tracking-[0.22em] text-accent">About Me</p>
                    <h3 className="mt-2 text-h3">Frontend designer-developer</h3>
                  </div>
                  <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-caption text-text-secondary">
                    Open to meaningful product work
                  </span>
                </div>

                <div className="relative overflow-hidden rounded-[1.7rem] bg-[radial-gradient(circle_at_top,rgba(242,166,90,0.24),transparent_40%),linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] px-4 pt-8">
                  <motion.img
                    src={portrait}
                    alt="Portrait of Tanim Ahmmed"
                    className="mx-auto h-[360px] w-auto object-contain drop-shadow-[0_24px_60px_rgba(0,0,0,0.45)] md:h-[430px]"
                    whileHover={reduceMotion ? undefined : { y: -8, scale: 1.02 }}
                    transition={{ duration: 0.35 }}
                  />
                </div>
              </div>
            </div>

            <motion.div
              className="absolute -right-3 bottom-8 hidden rounded-3xl border border-white/10 bg-white/[0.07] px-5 py-4 backdrop-blur-xl md:block"
              animate={reduceMotion ? undefined : { y: [0, 12, 0] }}
              transition={{ duration: 4.4, repeat: Infinity, ease: "easeInOut" }}
            >
              <p className="text-caption uppercase tracking-[0.22em] text-accent">Approach</p>
              <p className="mt-2 text-h4 text-text-primary">Elegant, usable, intentional</p>
            </motion.div>
          </motion.div>

          <motion.div
            className="order-1 lg:order-2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.75, delay: 0.05 }}
          >
            <span className="section-eyebrow">Story</span>
            <h2 className="mt-5 text-h2 md:text-h1">I build modern frontend experiences that feel considered from the first glance to the final interaction.</h2>
            <p className="mt-5 max-w-2xl text-body md:text-body-lg">
              I am Tanim Ahmmed, a frontend developer focused on turning product ideas into premium digital
              experiences. My work sits at the intersection of interface design, motion, and engineering,
              where the visual polish matters just as much as the structure behind it.
            </p>
            <p className="mt-4 max-w-2xl text-body text-text-secondary">
              I enjoy crafting responsive, fast, and intuitive interfaces that make users feel guided rather
              than overwhelmed. Whether I am shaping a landing page, a dashboard, or a full product flow,
              I aim to make the experience cleaner, clearer, and more emotionally convincing.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5 backdrop-blur-md"
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  whileHover={reduceMotion ? undefined : { y: -5 }}
                >
                  <p className="text-caption uppercase tracking-[0.22em] text-accent">{stat.label}</p>
                  <p className="mt-3 text-h4">{stat.value}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 space-y-4">
              {principles.map((item, index) => (
                <motion.div
                  key={item.title}
                  className="premium-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.55, delay: index * 0.08 }}
                  whileHover={reduceMotion ? undefined : { y: -5, scale: 1.005 }}
                >
                  <p className="text-caption uppercase tracking-[0.22em] text-accent">Principle {index + 1}</p>
                  <h3 className="mt-3 text-h4">{item.title}</h3>
                  <p className="mt-3 text-body text-text-secondary">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
