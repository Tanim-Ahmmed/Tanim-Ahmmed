import Pic from "../../assets/logo.png"

const About = () => {
  return (
    <div
      id="about-me"
      className="bg-black  dark:bg-gray-700  sm:p-4  pt-8 md:pt-12"
    >
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center text-center p-5">
        <div className="md:w-3/5 sm:p-5 text-gray-700">
          <h2 className="text-2xl lg:text-3xl font-bold mb-5 mt-5 dark:text-slate-300">
            About me
          </h2>
          <h2 className="text-4xl lg:text-5xl font-bold mb-2 mt-5 dark:text-slate-300"> <span className="text-orange-400">Tanim</span> Ahmmed
          </h2>
          <h5 className=" font-semibold mb-5 dark:text-slate-300">
            Web Developer
          </h5>
          
          <div className="flex flex-col items-center justify-center mb-12">
          <p className="text-lg text-gray-700 max-w-xl mb-4">
            Hello! I'm a passionate web developer with a focus on frontend technologies like React. I enjoy building beautiful, user-friendly interfaces and constantly learning new technologies to enhance my skills. I'm always looking for opportunities to contribute to impactful projects and collaborate with talented teams.📊
          </p>
          <p className="text-md text-gray-500 max-w-xl">
            My goal is to create intuitive, responsive, and fast applications that make users' lives easier and more enjoyable. In my spare time, I like exploring open-source projects, learning new frameworks, and improving my problem-solving abilities.🚀
          </p>
        </div>
        </div>
        <div className="md:w-2/5">
          <div className="overflow-hidden">
            <img className="w-full" src={Pic} alt="Shahriar Talha" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;