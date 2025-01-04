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
            <h3 className="text-xl font-semibold text-white">Hi There! I'm Tanim 👋 </h3>
            <h1 className="text-5xl font-bold text-white">
              A <span className="text-primary">Frontend Web Developer</span>
            </h1>
            <p className="py-6 text-gray-300">
              Experience the art of building modern, responsive, and user-friendly web experiences with me—where creativity meets functionality.
            </p>
            <button className="btn btn-primary text-lg rounded-3xl">Resume <IoMdCloudDownload />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
