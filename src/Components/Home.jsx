import React from "react";
import { FaChevronRight } from "react-icons/fa";


import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { SiReaddotcv } from "react-icons/si";

const Home = () => {

  const animationVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div
      name="home"
      initial="hidden"
      variants={animationVariants}
      className="h-screen w-full bg-gradient-to-b from-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <p
            variants={animationVariants}
            className="text-sm sm:text-sm font-bold text-gray-300 text-center"
          >
            Hello, I'm
          </p>
          <h2
            variants={animationVariants}
            className="text-4xl sm:text-7xl font-bold text-white py-2 text-center"
          >
            TamilVendhan
          </h2>
          <h3
            variants={animationVariants}
            className="text-xl sm:text-4xl font-bold text-white py-4 text-center"
          >
            FrontEnd Developer
          </h3>
          <p
            variants={animationVariants}
            className="text-white py-4 max-w-screen-md md:text-lg text-sm text-justify"
          >
            Recent graduate with a degree in BCA and a passion for creating
            responsive and interactive web applications.I am passionate about working on web
            applications using technologies such as{" "}
            <span className="font-bold">React</span>,{" "}
            <span className="font-bold">Tailwind</span>,{" "}
            <span className="font-bold">Redux</span>, and{" "}
            <span className="font-bold">React Query</span>. I am eager to apply my  skills to innovative projects that challenge the limits of technology.
          </p>

          <div
            variants={animationVariants}
            className="flex justify-center space-x-4 mb-4"
          >
            <a
              href="/Resume.pdf"
              target="_blank"
              className=" inline-flex items-center justify-center p-1 mb-2 overflow-hidden text-sm font-medium text-white rounded-lg group border-2 border-[#083344] bg-transparent hover:bg-gradient-to-br hover:from-[#164e63] hover:to-[#0e7490] hover:group-hover:from-[#155e75] hover:group-hover:to-[#0ea5e9] focus:outline-none"
            >
              <span className="px-4 py-2 transition-all ease-in duration-75 bg-transparent rounded-md group-hover:bg-opacity-0 flex items-center">
                Resume
                <span>
                  <SiReaddotcv size={20} className="ml-3" />
                </span>
              </span>
            </a>

            <Link
              to="portfolio"
              smooth
              duration={500}
              className=" w-fit px-6 py-3 my-2  inline-flex items-center justify-center p-1 mb-2 overflow-hidden text-sm font-medium text-white rounded-lg group border-2 border-[#083344] bg-transparent hover:bg-gradient-to-br hover:from-[#164e63] hover:to-[#0e7490] hover:group-hover:from-[#155e75] hover:group-hover:to-[#0ea5e9] focus:outline-none cursor-pointer"
            >
              <span className=" px-4 py-2 transition-all ease-in duration-75 bg-transparent rounded-md group-hover:bg-opacity-0 flex items-center">
                Portfolio
                <span className="group-hover:rotate-90 duration-300">
                  <MdOutlineKeyboardArrowRight size={20} className="ml-1" />
                </span>
              </span>
            </Link>
          </div>

          <div
            variants={animationVariants}
            className="flex justify-center space-x-4 lg:hidden"
          >
            <a
              href="https://www.linkedin.com/in/tamilvendhan-murugesan/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-500"
            >
              <FaLinkedin size={30} />
            </a>
            <a
              href="https://github.com/Tamillvendhan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400"
            >
              <FaGithub size={30} />
            </a>
            <a
              href="mailto:tamilvendhanmurugesan789@gmail.com"
              className="text-white hover:text-yellow-500"
            >
              <CiMail size={30} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;