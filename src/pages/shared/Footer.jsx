import { FaGithub, FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import img from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer className=" bg-neutral">
      <div className="footer text-neutral-content p-10">
        <aside>
          <img src={img} alt="logo" className="w-24" />
          <p>
            Tanim Ahmmed
            <br />
            Frontend Developer
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Social</h6>
          <div className="grid grid-flow-col gap-4 text-2xl hover:cursor-pointer">
            <a target="blank" href="https://github.com/Tanim-Ahmmed">
              <FaGithub />
            </a>
            <a target="blank" href="https://www.linkedin.com/in/tanim-ahmmed">
              <FaLinkedin />
            </a>
            <a target="blank" href="https://www.facebook.com/Tanim.ahmmed123">
              <FaFacebook />
            </a>
            <a target="blank" href="https://x.com/Tanim_Ahmeed">
              <FaTwitter />
            </a>
          </div>
        </nav>
      </div>
      <aside className="flex justify-center py-6 border-t">
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by Tanim
          Ahmmed
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
