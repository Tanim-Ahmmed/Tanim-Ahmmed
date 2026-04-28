import emailjs from "@emailjs/browser";
import { motion, useReducedMotion } from "framer-motion";
import { useRef, useState } from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const socialLinks = [
  { href: "https://github.com/Tanim-Ahmmed", icon: FaGithub, label: "GitHub" },
  { href: "https://www.linkedin.com/in/tanim-ahmmed", icon: FaLinkedin, label: "LinkedIn" },
  { href: "https://www.facebook.com/Tanim.ahmmed123", icon: FaFacebook, label: "Facebook" },
  { href: "https://x.com/Tanim_Ahmeed", icon: FaTwitter, label: "X" },
];

const contactFields = [
  { name: "from_name", type: "text", placeholder: "Your Name" },
  { name: "from_email", type: "email", placeholder: "Your Email" },
];

const Contact = () => {
  const form = useRef(null);
  const reduceMotion = useReducedMotion();
  const [focusedField, setFocusedField] = useState("");
  const [status, setStatus] = useState("idle");

  const sendEmail = async (event) => {
    event.preventDefault();
    setStatus("loading");

    try {
      await emailjs.sendForm("service_ljqtdw8", "template_5bippg8", form.current, {
        publicKey: "P25ImQbIqlZVepgBW",
      });
      setStatus("success");
      form.current?.reset();
    } catch (error) {
      console.error("FAILED...", error);
      setStatus("error");
    }
  };

  return (
    <section className="section-shell bg-background">
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <span className="section-eyebrow">Contact</span>
            <h2 className="mt-5 text-h2 md:text-h1">Let&apos;s build something memorable together.</h2>
            <p className="mt-5 max-w-xl text-body md:text-body-lg">
              Whether you have a product idea, a frontend role, or a collaboration in mind, I am open
              to conversations that care about craft, clarity, and user experience.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              {socialLinks.map(({ href, icon: Icon, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-lg text-text-secondary backdrop-blur-md"
                  whileHover={reduceMotion ? undefined : { y: -4, rotate: 3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="premium-card"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.08 }}
          >
            <form ref={form} onSubmit={sendEmail} className="space-y-5">
              {contactFields.map((field) => (
                <motion.div
                  key={field.name}
                  animate={
                    focusedField === field.name && !reduceMotion
                      ? { y: -2, scale: 1.01 }
                      : { y: 0, scale: 1 }
                  }
                  transition={{ duration: 0.2 }}
                >
                  <input
                    type={field.type}
                    name={field.name}
                    placeholder={field.placeholder}
                    className="input-premium"
                    required
                    onFocus={() => setFocusedField(field.name)}
                    onBlur={() => setFocusedField("")}
                  />
                </motion.div>
              ))}

              <motion.div
                animate={
                  focusedField === "message" && !reduceMotion
                    ? { y: -2, scale: 1.01 }
                    : { y: 0, scale: 1 }
                }
                transition={{ duration: 0.2 }}
              >
                <textarea
                  name="message"
                  placeholder="Tell me about the product, the goal, or the experience you want to improve."
                  rows="6"
                  className="input-premium resize-none"
                  onFocus={() => setFocusedField("message")}
                  onBlur={() => setFocusedField("")}
                />
              </motion.div>

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <motion.button
                  type="submit"
                  className="btn-primary-premium"
                  whileHover={reduceMotion ? undefined : { y: -3, scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={status === "loading"}
                >
                  {status === "loading" ? "Sending..." : "Send Message"}
                </motion.button>

                <p className="text-body-sm text-text-muted">
                  {status === "success" && "Message sent successfully."}
                  {status === "error" && "Something went wrong. Please try again."}
                  {status === "idle" && "Replies usually start with a thoughtful first conversation."}
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
