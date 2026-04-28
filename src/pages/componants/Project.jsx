import { useMemo, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { FaArrowRight, FaGithub, FaXmark } from "react-icons/fa6";
import { projects } from "../../data/projects";

const caseStudySections = [
  { key: "problem", label: "Problem" },
  { key: "solution", label: "Solution" },
  { key: "techStack", label: "Tech Stack" },
  { key: "challenges", label: "Challenges" },
  { key: "outcome", label: "Outcome" },
];

const Project = () => {
  const [activeProject, setActiveProject] = useState(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const headerY = useTransform(scrollYProgress, [0, 0.35], [0, reduceMotion ? 0 : -70]);

  const selectedProject = useMemo(
    () => projects.find((project) => project.id === activeProject) ?? null,
    [activeProject]
  );

  return (
    <section className="section-shell relative overflow-hidden bg-background">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(242,166,90,0.08),transparent_30%)]" />
      <motion.div className="section-heading relative z-10" style={{ y: headerY }}>
        <span className="section-eyebrow">Selected Work</span>
        <h2 className="section-title">Case studies built to show thinking, not just screens.</h2>
        <p className="section-copy">
          Each project is framed around the product problem, the interface strategy, and the decisions
          that shaped the final experience.
        </p>
      </motion.div>

      <div className="container relative z-10">
        <div className="grid gap-8 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onOpen={() => setActiveProject(project.id)}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setActiveProject(null)} />
        )}
      </AnimatePresence>
    </section>
  );
};

const ProjectCard = ({ project, index, onOpen }) => {
  const reduceMotion = useReducedMotion();
  const rotateX = useSpring(useMotionValue(0), { stiffness: 180, damping: 18 });
  const rotateY = useSpring(useMotionValue(0), { stiffness: 180, damping: 18 });

  const handleMove = (event) => {
    if (reduceMotion) {
      return;
    }

    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    rotateX.set(-((y - centerY) / centerY) * 5);
    rotateY.set(((x - centerX) / centerX) * 5);
  };

  const handleLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.article
      className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-panel/80 p-4 shadow-soft backdrop-blur-xl"
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7, delay: index * 0.08 }}
      whileHover={
        reduceMotion
          ? undefined
          : { y: -10, transition: { duration: 0.25 } }
      }
      style={{ transformStyle: "preserve-3d", rotateX, rotateY }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      <div
        className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-60 transition-opacity duration-300 group-hover:opacity-100`}
      />
      <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10">
        <motion.img
          src={project.image}
          alt={project.title}
          className="h-64 w-full object-cover"
          loading="lazy"
          whileHover={reduceMotion ? undefined : { scale: 1.05 }}
          transition={{ duration: 0.5 }}
        />
      </div>

      <div className="relative mt-6 space-y-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-caption uppercase tracking-[0.24em] text-accent">Case Study {project.id}</p>
            <h3 className="mt-2 text-h3">{project.shortTitle}</h3>
          </div>
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-caption text-text-secondary">
            {project.techStack.length} tools
          </span>
        </div>

        <p className="text-body text-text-secondary">{project.description}</p>

        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-caption text-text-secondary"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between gap-4 pt-2">
          <motion.button
            type="button"
            className="btn-primary-premium"
            whileHover={reduceMotion ? undefined : { y: -3, scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            onClick={onOpen}
          >
            Open Case Study
            <FaArrowRight />
          </motion.button>

          <motion.a
            href={project.liveDemo}
            target="_blank"
            rel="noreferrer"
            className="btn-secondary-premium"
            whileHover={reduceMotion ? undefined : { y: -3 }}
            whileTap={{ scale: 0.98 }}
          >
            Live Demo
          </motion.a>
        </div>
      </div>
    </motion.article>
  );
};

const ProjectModal = ({ project, onClose }) => {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className="fixed inset-0 z-[80] flex items-center justify-center bg-black/72 px-4 py-8 backdrop-blur-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="relative max-h-[90vh] w-full max-w-5xl overflow-hidden rounded-[2rem] border border-white/10 bg-surface/95 shadow-soft"
        initial={reduceMotion ? false : { opacity: 0, y: 40, scale: 0.96 }}
        animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
        exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 24, scale: 0.98 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        onClick={(event) => event.stopPropagation()}
      >
        <div className="max-h-[90vh] overflow-y-auto">
          <div className="relative overflow-hidden border-b border-white/10 p-5 md:p-8">
            <div className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-60`} />
            <div className="relative flex items-start justify-between gap-6">
              <div className="max-w-2xl">
                <span className="section-eyebrow">Featured Case Study</span>
                <h3 className="mt-4 text-h2 md:text-h1">{project.title}</h3>
                <p className="mt-4 max-w-xl text-body text-text-secondary">{project.description}</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <motion.a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-primary-premium"
                    whileHover={reduceMotion ? undefined : { y: -3 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Visit Live Project
                    <FaArrowRight />
                  </motion.a>
                  <motion.a
                    href={project.githubRepo}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-secondary-premium"
                    whileHover={reduceMotion ? undefined : { y: -3 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Source Code
                    <FaGithub />
                  </motion.a>
                </div>
              </div>

              <motion.button
                type="button"
                className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-text-primary backdrop-blur-md"
                whileHover={reduceMotion ? undefined : { rotate: 90, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onClose}
                aria-label="Close case study"
              >
                <FaXmark />
              </motion.button>
            </div>
          </div>

          <div className="grid gap-10 p-5 md:grid-cols-[1.1fr_0.9fr] md:p-8">
            <div className="space-y-8">
              {caseStudySections.map(({ key, label }, index) => (
                <motion.section
                  key={key}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: 0.08 * index }}
                >
                  <p className="text-caption uppercase tracking-[0.22em] text-accent">{label}</p>
                  {key === "techStack" ? (
                    <div className="mt-4 flex flex-wrap gap-3">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-body-sm text-text-secondary"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  ) : (
                    <p className="mt-3 text-body text-text-secondary">{project[key]}</p>
                  )}
                </motion.section>
              ))}
            </div>

            <motion.aside
              className="premium-card h-fit"
              initial={{ opacity: 0, x: 22 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.22 }}
            >
              <p className="text-caption uppercase tracking-[0.22em] text-accent">Visual Preview</p>
              <div className="mt-5 overflow-hidden rounded-[1.5rem] border border-white/10">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-auto w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="mt-6 rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                <p className="text-caption uppercase tracking-[0.22em] text-accent">Why it matters</p>
                <p className="mt-3 text-body text-text-secondary">
                  This project demonstrates product thinking beyond visuals: structuring information,
                  reducing friction, and making the interface feel clearer and more intentional.
                </p>
              </div>
            </motion.aside>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Project;
