import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { HashLink } from "react-router-hash-link";
import { useState } from "react";
import { IoMdCloudDownload } from "react-icons/io";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("profile");

  const handleLinkClick = (section) => {
    setActiveLink(section);
  };

  const links = (
    <>
      <li>
        <HashLink
          to="/#home"
          className={`${
            activeLink === "profile" ? "text-orange-500" : "hover:text-orange-500"
          }`}
          onClick={() => handleLinkClick("profile")}
        >
          Home
        </HashLink>
      </li>
      <li>
        <HashLink
          to="/#projects"
          className={`${
            activeLink === "projects" ? "text-orange-500" : "hover:text-orange-500"
          }`}
          onClick={() => handleLinkClick("projects")}
        >
          Project
        </HashLink>
      </li>
      <li>
        <HashLink
          to="/#skills"
          className={`${
            activeLink === "skills" ? "text-orange-500" : "hover:text-orange-500"
          }`}
          onClick={() => handleLinkClick("skills")}
        >
          Skills
        </HashLink>
      </li>
      <li>
        <HashLink
          to="/#about"
          className={`${
            activeLink === "about" ? "text-orange-500" : "hover:text-orange-500"
          }`}
          onClick={() => handleLinkClick("about")}
        >
          About
        </HashLink>
      </li>
      <li>
        <HashLink
          to="/#contact"
          className={`${
            activeLink === "contact" ? "text-orange-500" : "hover:text-orange-500"
          }`}
          onClick={() => handleLinkClick("contact")}
        >
          Contact
        </HashLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-gray-600 fixed max-w-7xl h-20 opacity-60">
     
      <div className="navbar-start">
        <img src={logo} alt="" className="w-10 " />
        <Link
          to="/"
          className="btn btn-ghost md:flex hidden text-xl text-white"
        >
          Tanim Ahmmed
        </Link>
      </div>
      <div className="navbar-center hidden sm:flex">
        <ul className="menu menu-horizontal  font-semibold px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost sm:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 font-semibold rounded-box z-[1] mt-3 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link className="btn btn-primary rounded-3xl text-lg">Resume <IoMdCloudDownload />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
