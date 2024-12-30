
import React from "react";



const aboutVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const About = () => {

  return (
    <div name="about" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
      <div
        initial="hidden"
        variants={aboutVariants}
        className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full text-center"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="sm:text-xl text-sm text-justify">
          I am a recent BCA graduate, specializing in{" "}
          <span className="font-bold">front-end development</span>. Throughout my academic
          career, I have focused on modern web development and enhanced my
          proficiency in <span className="font-bold">HTML</span>,{" "}
          <span className="font-bold">CSS</span>,{" "}
          <span className="font-bold">JavaScript</span>,{" "}
          <span className="font-bold">React.js</span>,{" "}
          <span className="font-bold">Redux</span>,{" "}
          <span className="font-bold">Tailwind</span>, and{" "}
          <span className="font-bold">Node.js</span>.where I created complex data models and leveraged{" "}
          <span className="font-bold">Express.js</span> for server-side
          development. With a solid foundation in computer science and a passion
          for creating intuitive user interfaces, I am eager to apply my skills
          to innovative projects that challenge the limits of technology.
        </p>

      </div>
    </div>
  );
};

export default About;

