import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";

const Project = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  console.log(projects);

  return (
    <div className="bg-black">
      <div className="text-center">
        <h2 className="text-3xl font-semibold pt-20 pb-10 text-white">
          Projects
        </h2>
      </div>
      <div className="bg-gray-900 mx-10 p-5 rounded-3xl text-center flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div
              key={p.id}
              className="relative group sm:w-64 sm:h-64 overflow-hidden m-5 rounded-3xl shadow-lg"
            >
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-full object-cover rounded-3xl"
              />

              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center transition-opacity duration-300 p-6 rounded-3xl">
                <h2 className="text-white text-lg font-semibold mb-4">
                  {p.title}
                </h2>
                <p className="text-gray-200 text-sm text-center mb-6">
                  {p.description}
                </p>
                <button className="btn btn-primary text-white rounded-3xl hover:bg-blue-700">
                  View Project <FaArrowRight className="ml-2 inline" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
