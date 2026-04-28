import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { HashLink } from "react-router-hash-link";
import { IoMdCloudDownload } from "react-icons/io";
import { HiOutlineMenuAlt4, HiOutlineX } from "react-icons/hi";
import logo from "../../assets/logo.png";

const navItems = [
  { id: "home", label: "Home" },
  { id: "projects", label: "Work" },
  { id: "skills", label: "Skills" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    const sections = navItems
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry?.target?.id) {
          setActiveLink(visibleEntry.target.id);
        }
      },
      {
        threshold: [0.2, 0.45, 0.7],
        rootMargin: "-20% 0px -35% 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      sections.forEach((section) => observer.unobserve(section));
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen]);

  const renderLink = (item, mobile = false) => (
    <HashLink
      key={item.id}
      smooth
      to={`/#${item.id}`}
      onClick={() => {
        setActiveLink(item.id);
        setIsOpen(false);
      }}
      className={`relative inline-flex items-center ${
        mobile ? "w-full justify-between rounded-2xl px-4 py-3" : "px-3 py-2"
      } text-body-sm font-semibold ${
        activeLink === item.id ? "text-text-primary" : "text-text-secondary hover:text-text-primary"
      }`}
    >
      <span>{item.label}</span>
      {activeLink === item.id && (
        mobile ? (
          <motion.span
            layoutId="active-nav-pill"
            className="absolute inset-0 -z-10 rounded-2xl border border-white/10 bg-white/[0.08]"
            transition={{ type: "spring", stiffness: 300, damping: 28 }}
          />
        ) : (
          <motion.span
            layoutId="active-nav-line"
            className="absolute inset-x-3 -bottom-0.5 h-[2px] rounded-full bg-accent"
            transition={{ type: "spring", stiffness: 320, damping: 30 }}
          />
        )
      )}
    </HashLink>
  );

  return (
    <>
      <motion.header
        className="fixed inset-x-0 top-0 z-[60] px-4 pt-4"
        initial={reduceMotion ? false : { y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="mx-auto max-w-7xl">
          <motion.nav
            className={`nav-glass relative flex items-center justify-between overflow-hidden rounded-[1.75rem] px-4 py-3 md:px-5 ${
              isScrolled ? "shadow-soft" : ""
            }`}
            animate={
              reduceMotion
                ? undefined
                : {
                    paddingTop: isScrolled ? 10 : 14,
                    paddingBottom: isScrolled ? 10 : 14,
                    scale: isScrolled ? 0.985 : 1,
                  }
            }
            transition={{ duration: 0.25 }}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_45%)]" />

            <HashLink
              smooth
              to="/#home"
              className="relative z-10 inline-flex items-center gap-3"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                <img src={logo} alt="Tanim Ahmmed logo" className="w-7" />
              </span>
              <span className="hidden sm:block">
                <span className="block text-label uppercase tracking-[0.24em] text-accent">Portfolio</span>
                <span className="block text-body-sm font-semibold text-text-primary">Tanim Ahmmed</span>
              </span>
            </HashLink>

            <div className="relative z-10 hidden items-center gap-2 md:flex">
              {navItems.map((item) => renderLink(item))}
            </div>

            <div className="relative z-10 flex items-center gap-3">
              <motion.a
                href="/resume(4).pdf"
                download="Tanim_Ahmmed_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary-premium hidden min-w-[152px] sm:inline-flex"
                whileHover={reduceMotion ? undefined : { y: -3 }}
                whileTap={{ scale: 0.98 }}
              >
                Resume
                <IoMdCloudDownload />
              </motion.a>

              <motion.button
                type="button"
                className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-text-primary md:hidden"
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen((prev) => !prev)}
                aria-label="Toggle navigation menu"
                aria-expanded={isOpen}
              >
                {isOpen ? <HiOutlineX className="text-2xl" /> : <HiOutlineMenuAlt4 className="text-2xl" />}
              </motion.button>
            </div>
          </motion.nav>
        </div>
      </motion.header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-[55] bg-black/45 backdrop-blur-sm md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              className="absolute left-4 right-4 top-24 rounded-[1.75rem] border border-white/10 bg-surface/95 p-4 shadow-soft"
              initial={reduceMotion ? false : { opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="mb-4 rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-caption uppercase tracking-[0.24em] text-accent">Navigate</p>
                <p className="mt-2 text-body-sm text-text-secondary">
                  Explore my work, capabilities, and product thinking.
                </p>
              </div>

              <div className="space-y-2">
                {navItems.map((item) => renderLink(item, true))}
              </div>

              <motion.a
                href="/resume(4).pdf"
                download="Tanim_Ahmmed_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary-premium mt-4 flex w-full"
                whileTap={{ scale: 0.98 }}
              >
                Download Resume
                <IoMdCloudDownload />
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
