import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState("");
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_ljqtdw8", "template_5bippg8", form.current, {
        publicKey: "P25ImQbIqlZVepgBW",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <div className="hero bg-black pt-20">
      <div className="w-11/12 mx-auto">
        <div className="hero-content flex-col md:flex-row-reverse">
          <div className="text-center md:text-left">
            <h1 className="text-5xl font-bold">Contact Me!</h1>
            <nav className="w-4/12 py-6 md:mx-0 mx-auto">
              <div className="grid grid-flow-col gap-4 text-2xl hover:cursor-pointer">
                <a target="blank" href="https://github.com/Tanim-Ahmmed">
                  <FaGithub />
                </a>
                <a
                  target="blank"
                  href="https://www.linkedin.com/in/tanim-ahmmed"
                >
                  <FaLinkedin />
                </a>
                <a
                  target="blank"
                  href="https://www.facebook.com/Tanim.ahmmed123"
                >
                  <FaFacebook />
                </a>
              </div>
            </nav>
            <p className="py-6">
              I’d love to hear from you! Whether you have a question, a project
              idea, or just want to say hello, feel free to get in touch. Fill
              out the form below, and I’ll get back to you as soon as possible.
              Let’s create something amazing together!
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl ">
            <form className="card-body" ref={form} onSubmit={sendEmail}>
              <div className="form-control">
                <input
                  type="text"
                  placeholder="Your Name"
                  name="from_name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <input
                  type="email"
                  name="from_email"
                  placeholder="Your Email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <textarea
                  placeholder="Write me about any project, I'd love to work with you!"
                  name="message"
                  className="textarea textarea-bordered textarea-lg w-full max-w-xs"
                ></textarea>
              </div>
              <div className="form-control mt-6">
                <input type="submit" value="Send" className="btn btn-primary"></input>
              </div>
            </form>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
