


import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import worldwise from "../assets/Portfolio/worldwise.png";
import usepopcorn from "../assets/Portfolio/usepopcorn.png";
import eat_n_split from "../assets/Portfolio/eat_n_split.png";
import faraway from "../assets/Portfolio/faraway.png";
import pizzamenu from "../assets/Portfolio/pizzamenu.png";
import omnifood from "../assets/Portfolio/omnifood.png";


const Portfolio = () => {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!hasScrolled && window.scrollY > 0) {
        setHasScrolled(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasScrolled]);

  const portfolios = [
{
      id: 1,
      title: "World Wise",
      src: worldwise,
      demo: "https://worldwise-tamil.vercel.app/",
      code: "https://github.com/TamillVendhan/Worldwise",
      technologies: ["React", "CSS Modules", "React Leaflet"],
    },
    {
      id: 2,
      title:"Usepopcorn",
      src: usepopcorn,
      demo: "https://usepopcorn-tamil.vercel.app/",
      code: "https://github.com/TamillVendhan/usepopcorn",
      technologies: ["React", "CSS", "React Modal"],
    },
    {
      id: 3,
      title: "Eat and Split",
      src: eat_n_split,
      demo: "https://eat-and-split-tamil.vercel.app/",
      code: "https://github.com/TamillVendhan/eat-and-split",
      technologies: ["CSS", "Javascript"],
    },
    {
      id: 4,
      title:"Faraway",
      src: faraway,
      demo: "https://travel-list-tamil.vercel.app/",
      code: "https://github.com/TamillVendhan/Far-away",
      technologies: ["React", "CSS","Javascript"],
    },
    {
      id: 5,
      title:"Pizzamenu",
      src: pizzamenu,
      demo: "https://pizza-menu-tamil.vercel.app/",
      code: "https://github.com/TamillVendhan/pizza-menu",
      technologies: ["Html", "CSS", "Javascript"],
    },
    {
      id: 6,
      title:"Omnifood",
      src: omnifood,
      demo: "https://omnifood-tamilvendhan.netlify.app/",
      code: "https://github.com/TamillVendhan/Omnifood-",
      technologies: ["Html", "CSS", "Javascript"],
    },
  ];



  const itemVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const containerVariant = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  return (
    <div name="portfolio" className="w-full text-white text-center bg-gradient-to-b from-black to-gray-800 md:h-screen">
      
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">See some of my work featured below.</p>
        </div>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0"
          initial="hidden"
          variants={containerVariant}
          viewport={{ once: true, amount: 0.05 }}
        >
          {portfolios.map(({ id, src, title, demo, code, technologies }) => (
            <div
              key={id}
              className="shadow-md shadow-gray-600 rounded-lg"
              variants={itemVariant}
            >
              <img
                src={src}
                alt={title}
                className="rounded-t-md duration-200 hover:scale-105 h-auto"
              />

              <h3 className="text-lg text-center mt-2 font-bold">{title}</h3>
              <p className="text-center mt-2 text-sm">
                {technologies.join(", ")}
              </p>
              <div className="flex flex-row items-center justify-center mt-2 gap-2">
                <a
                  href={demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-auto sm:w-1/2 px-2 py-1 sm:px-6 overflow-hidden sm:py-3 m-2 duration-200 hover:scale-105 flex items-center justify-center gap-2 border border-gray-300 sm:border-2 rounded-lg transform transition-transform hover:shadow-lg hover:shadow-gray-600"
                >        
                  <FaExternalLinkAlt /> Demo
                </a>
                <a
                  href={code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-auto sm:w-1/2 px-2 py-1 sm:px-6 sm:py-3 m-2 duration-200 hover:scale-105 flex items-center justify-center gap-2 border border-gray-300 sm:border-2 rounded-lg transform transition-transform hover:shadow-lg hover:shadow-gray-600"
                >
                  <FaGithub /> Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
