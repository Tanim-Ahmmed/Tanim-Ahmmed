import { motion, useReducedMotion } from "framer-motion";
import { HashLink } from "react-router-hash-link";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import logo from "../../assets/logo.png";

const socialLinks = [
  { href: "https://github.com/Tanim-Ahmmed", label: "GitHub", icon: FaGithub },
  { href: "https://www.linkedin.com/in/tanim-ahmmed", label: "LinkedIn", icon: FaLinkedin },
  { href: "https://www.facebook.com/Tanim.ahmmed123", label: "Facebook", icon: FaFacebook },
  { href: "https://x.com/Tanim_Ahmeed", label: "X", icon: FaTwitter },
];

const footerLinks = [
  { id: "projects", label: "Case Studies" },
  { id: "skills", label: "Capabilities" },
  { id: "about", label: "About Me" },
  { id: "contact", label: "Contact" },
];

const Footer = () => {
  const reduceMotion = useReducedMotion();

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-background pb-10 pt-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(242,166,90,0.08),transparent_28%)]" />

      <div className="container relative z-10">
        <motion.div
          className="premium-card"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div>
              <div className="inline-flex items-center gap-3">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                  <img src={logo} alt="Tanim Ahmmed logo" className="w-8" />
                </span>
                <div>
                  <p className="text-caption uppercase tracking-[0.24em] text-accent">Tanim Ahmmed</p>
                  <p className="text-body-sm text-text-secondary">
                    Frontend developer crafting premium digital experiences.
                  </p>
                </div>
              </div>

              <h3 className="mt-6 max-w-xl text-h2">
                Building web experiences that feel clear, polished, and memorable.
              </h3>
              <p className="mt-4 max-w-xl text-body text-text-secondary">
                I care about thoughtful interface systems, strong storytelling, and product-focused frontend execution.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {socialLinks.map(({ href, label, icon: Icon }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-lg text-text-secondary backdrop-blur-md"
                    whileHover={reduceMotion ? undefined : { y: -4, rotate: 4 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon />
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                <p className="text-caption uppercase tracking-[0.22em] text-accent">Explore</p>
                <div className="mt-4 space-y-3">
                  {footerLinks.map((item) => (
                    <HashLink
                      key={item.id}
                      smooth
                      to={`/#${item.id}`}
                      className="block text-body-sm text-text-secondary transition-colors hover:text-text-primary"
                    >
                      {item.label}
                    </HashLink>
                  ))}
                </div>
              </div>

              <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                <p className="text-caption uppercase tracking-[0.22em] text-accent">Collaboration</p>
                <p className="mt-4 text-body text-text-secondary">
                  Available for frontend projects, redesign work, and product interfaces that need more polish and clarity.
                </p>
                <HashLink
                  smooth
                  to="/#contact"
                  className="mt-5 inline-flex text-body-sm font-semibold text-text-primary"
                >
                  Start a conversation
                </HashLink>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-6 text-body-sm text-text-muted md:flex-row md:items-center md:justify-between">
          <p>Copyright © {new Date().getFullYear()} Tanim Ahmmed. All rights reserved.</p>
          <p>Designed with motion, restraint, and product-first thinking.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
