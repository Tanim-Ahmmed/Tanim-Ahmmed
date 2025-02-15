import img1 from "../../assets/js.png";
import img2 from "../../assets/react.png";
import img3 from "../../assets/html.png";
import img4 from "../../assets/css.png";
import img5 from "../../assets/tailwind.png";
import img6 from "../../assets/fire.png";
import img7 from "../../assets/mongo.png";
import img8 from "../../assets/nodeex.png";
import img9 from "../../assets/ex.png";
import img10 from "../../assets/linux.png";
import img11 from "../../assets/git.png";
import img12 from "../../assets/cc.png";


const Skills = () => {
    const skills = [
        { 
          id: 1, 
          name: "JavaScript", 
          level: 90, 
          description: "A versatile programming language for the web.",
          logo: img1
        },
        { 
          id: 2, 
          name: "React", 
          level: 85, 
          description: "A JavaScript library for building dynamic user interfaces.",
          logo: img2
        },
        { 
          id: 3, 
          name: "HTML5", 
          level: 95, 
          description: "The standard markup language for creating web pages.",
          logo: img3
        },
        { 
          id: 4, 
          name: "CSS3", 
          level: 90, 
          description: "A styling language for designing beautiful web pages.",
          logo: img4
        },
        { 
          id: 5, 
          name: "Tailwind CSS", 
          level: 80, 
          description: "A utility-first CSS framework for rapid UI development.",
          logo: img5
        },
        { 
          id: 6, 
          name: "Firebase", 
          level: 75, 
          description: "A backend platform for building web and mobile applications.",
          logo: img6
        },
        { 
          id: 7, 
          name: "MongoDB", 
          level: 70, 
          description: "A NoSQL database for flexible and scalable data storage.",
          logo: img7
        },
        { 
          id: 8, 
          name: "Node.js", 
          level: 70, 
          description: "A JavaScript runtime for server-side development.",
          logo: img8
        },
        { 
          id: 9, 
          name: "Express.js", 
          level: 75, 
          description: "A lightweight web application framework for Node.js.",
          logo: img9
        },
        { 
          id: 10, 
          name: "Linux", 
          level: 85, 
          description: "An open-source operating system used for servers and development.",
          logo: img10
        },
        { 
          id: 11, 
          name: "Git", 
          level: 90, 
          description: "A version control system for tracking code changes.",
          logo: img11
        },
        { 
          id: 12, 
          name: "C", 
          level: 90, 
          description: "A foundational programming language for system-level development.",
          logo: img12
        },
      ];
      
  return (
    <div className="bg-black py-20 px-10">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold">Skills</h2>
        <p className="text-gray-600 mt-2">
          Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          Pellentesque et neque id ligula mattis commodo.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {skills.map((skill) => (
          <div
            key={skill.id}
            className=" shadow-md rounded-lg p-6 border border-orange-400"
          >
            <h3 className="text-xl font-semibold">{skill.name}</h3>
            <p className="text-gray-500 mb-4 ">{skill.description}</p>
            <div className="flex items-end">

            
            <img src={skill.logo} alt="" className="bg-gray-80 rounded-l-full rounded-tr-full sm:w-20 sm:h-20  h-16 w-16 object-cover" />
            <div className="relative w-full h-4 bg-gray-200 rounded-r-full overflow-hidden">
              
              <div
                className="absolute top-0 left-0 h-full bg-slate-700"
                style={{ width: `${skill.level}%` }}
              >
              </div>
            </div>
            </div>
            <p className="text-gray-600 mt-2 text-right">{skill.level}%</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
