import { useEffect, useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import { HashLink } from "react-router-hash-link";
import {
  FaArrowRight,
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { IoMdCloudDownload } from "react-icons/io";
import imgB from "../../assets/me1-removebg-preview.png";

const socialLinks = [
  {
    href: "https://github.com/Tanim-Ahmmed",
    label: "GitHub",
    icon: FaGithub,
  },
  {
    href: "https://www.linkedin.com/in/tanim-ahmmed",
    label: "LinkedIn",
    icon: FaLinkedin,
  },
  {
    href: "https://www.facebook.com/Tanim.ahmmed123",
    label: "Facebook",
    icon: FaFacebook,
  },
  {
    href: "https://x.com/Tanim_Ahmeed",
    label: "X",
    icon: FaTwitter,
  },
];

const Banner = () => {
  const heroRef = useRef(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const visualY = useTransform(scrollYProgress, [0, 0.35], [0, reduceMotion ? 0 : 90]);
  const contentY = useTransform(scrollYProgress, [0, 0.35], [0, reduceMotion ? 0 : -30]);
  const glowY = useTransform(scrollYProgress, [0, 0.35], [0, reduceMotion ? 0 : 120]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      timeline
        .from(".hero-kicker", {
          y: 28,
          opacity: 0,
          duration: 0.7,
        })
        .from(
          ".hero-reveal-line",
          {
            yPercent: 120,
            opacity: 0,
            duration: 0.9,
            stagger: 0.12,
          },
          "-=0.35"
        )
        .from(
          ".hero-copy",
          {
            y: 24,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.45"
        )
        .from(
          ".hero-actions",
          {
            y: 24,
            opacity: 0,
            duration: 0.7,
          },
          "-=0.45"
        )
        .from(
          ".hero-social",
          {
            y: 16,
            opacity: 0,
            stagger: 0.08,
            duration: 0.45,
          },
          "-=0.45"
        )
        .from(
          ".hero-visual",
          {
            scale: 0.92,
            opacity: 0,
            duration: 1,
          },
          "-=0.75"
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="hero-noise hero-grid section-shell relative isolate overflow-hidden bg-background pt-28 md:pt-32"
    >
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top_left,rgba(242,166,90,0.18),transparent_30%),radial-gradient(circle_at_85%_18%,rgba(255,138,61,0.18),transparent_24%),linear-gradient(135deg,#0b0d10_0%,#11161d_55%,#0d1116_100%)]" />
      <motion.div
        className="absolute inset-x-0 top-8 -z-10 mx-auto h-72 w-72 rounded-full bg-accent/10 blur-3xl md:h-96 md:w-96"
        style={{ y: glowY }}
      />

      <div className="container relative">
        <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div className="max-w-3xl" style={{ y: contentY }}>
            <div className="hero-kicker mb-6 inline-flex items-center gap-3 rounded-full border border-glass-border bg-glass px-4 py-2 text-caption uppercase tracking-[0.24em] text-accent backdrop-blur-md">
              Frontend Developer
              <span className="h-2 w-2 rounded-full bg-accent" />
              Dhaka, Bangladesh
            </div>

            <div className="space-y-2 overflow-hidden">
              <div className="overflow-hidden">
                <h1 className="hero-reveal-line text-h1 sm:text-display-lg xl:text-display-xl">
                  Building interfaces
                </h1>
              </div>
              <div className="overflow-hidden">
                <h1 className="hero-reveal-line text-h1 sm:text-display-lg xl:text-display-xl">
                  that feel
                  <span className="bg-accent-gradient bg-clip-text text-transparent">
                    {" "}
                    cinematic
                  </span>
                </h1>
              </div>
              <div className="overflow-hidden">
                <h1 className="hero-reveal-line text-h1 sm:text-display-lg xl:text-display-xl">
                  and convert.
                </h1>
              </div>
            </div>

            <p className="hero-copy mt-8 max-w-2xl text-body md:text-body-lg">
              I am Tanim Ahmmed, a frontend-focused developer crafting polished
              React experiences with motion, visual depth, and clean product
              thinking. I turn static screens into interfaces that feel alive,
              premium, and memorable.
            </p>

            <div className="hero-actions mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <motion.div whileHover={{ y: -4, scale: 1.01 }} whileTap={{ scale: 0.98 }}>
                <HashLink
                  to="/#projects"
                  className="btn-primary-premium group min-w-[180px]"
                >
                  View Projects
                  <motion.span
                    className="inline-flex"
                    animate={{ x: [0, 4, 0] }}
                    transition={{
                      duration: 1.8,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <FaArrowRight />
                  </motion.span>
                </HashLink>
              </motion.div>

              <motion.a
                href="/resume(4).pdf"
                download="Tanim_Ahmmed_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary-premium min-w-[180px]"
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.98 }}
              >
                Resume
                <IoMdCloudDownload />
              </motion.a>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              {socialLinks.map(({ href, label, icon: Icon }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="hero-social inline-flex h-12 w-12 items-center justify-center rounded-full border border-glass-border bg-white/5 text-lg text-text-secondary backdrop-blur-md hover:border-accent/60 hover:text-text-primary"
                  whileHover={{ y: -5, rotate: 3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="hero-visual relative mx-auto w-full max-w-[520px]"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            style={{ y: visualY }}
          >
            <motion.div
              className="absolute -left-6 top-12 hidden rounded-3xl border border-white/10 bg-white/5 px-5 py-4 text-left backdrop-blur-xl md:block"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4.4, repeat: Infinity, ease: "easeInOut" }}
            >
              <p className="text-caption uppercase tracking-[0.22em] text-accent">
                Focus
              </p>
              <p className="mt-2 text-h4 text-text-primary">Motion-first UI</p>
            </motion.div>

            <motion.div
              className="absolute -right-3 bottom-10 hidden rounded-3xl border border-white/10 bg-white/5 px-5 py-4 text-left backdrop-blur-xl md:block"
              animate={{ y: [0, 12, 0] }}
              transition={{
                duration: 4.8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.3,
              }}
            >
              <p className="text-caption uppercase tracking-[0.22em] text-accent">
                Specialty
              </p>
              <p className="mt-2 text-h4 text-text-primary">React + Tailwind</p>
            </motion.div>

            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-panel-gradient p-4 shadow-soft backdrop-blur-xl">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.14),transparent_35%)]" />
              <div className="relative rounded-[1.5rem] border border-white/10 bg-surface/90 p-6">
                <div className="mb-6 flex items-center justify-between gap-4">
                  <div>
                    <p className="text-caption uppercase tracking-[0.22em] text-accent">
                      Selected Profile
                    </p>
                    <h2 className="mt-2 text-h3">Tanim Ahmmed</h2>
                  </div>
                  <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-caption text-text-secondary">
                    Available for frontend work
                  </div>
                </div>

                <div className="relative overflow-hidden rounded-[1.75rem] bg-[radial-gradient(circle_at_top,rgba(242,166,90,0.28),transparent_40%),linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] px-4 pt-8">
                  <img
                    src={imgB}
                    alt="Portrait of Tanim Ahmmed"
                    className="mx-auto h-[360px] w-auto object-contain drop-shadow-[0_24px_60px_rgba(0,0,0,0.45)] md:h-[430px]"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mt-14 flex justify-center md:mt-20"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <HashLink
            to="/#projects"
            className="group flex flex-col items-center gap-3 text-caption uppercase tracking-[0.28em] text-text-muted"
          >
            Scroll to explore
            <span className="scroll-indicator-line relative flex h-16 w-8 items-start justify-center rounded-full border border-white/10 p-2">
              <motion.span
                className="h-3 w-3 rounded-full bg-accent"
                animate={{ y: [0, 28, 0] }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </span>
          </HashLink>
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;
