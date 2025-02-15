import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import imgB from "../../assets/me1-removebg-preview.png";
import { IoMdCloudDownload } from "react-icons/io";

const Banner = () => {
  return (
    <div>
      <section className="md:flex md:flex-row-reverse gap-6 p-10 items-center bg-black">
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <img src={imgB} alt="" className="shadow-inner sm:max-w-72" />
        </div>

        <div className="md:w-1/2 flex flex-col justify-center items-start">
          <div className="md:mt-0 mt-6">
            <h3 className="text-xl font-semibold py-2 text-white">
              Hi There! I'm{" "}
              <span className="text-orange-400"> Tanim Ahmmed </span> 👋{" "}
            </h3>
            <h1 className="text-3xl font-bold text-white">
              A <span className="">Frontend Web Developer</span>
            </h1>
            <p className="py-3 text-gray-300">
              Experience the art of building modern, responsive, and
              user-friendly web experiences with me—where creativity meets
              functionality.
            </p>
            <nav className="max-w-14 pb-6">
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
                <a target="blank" href="https://x.com/Tanim_Ahmeed">
                  <FaTwitter />
                </a>
              </div>
            </nav>
            <a
              href="/resume(4).pdf"
              download="Tanim_Ahmmed_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-orange-400 text-black hover:bg-orange-500 rounded-3xl text-lg"
            >
              Resume <IoMdCloudDownload />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
