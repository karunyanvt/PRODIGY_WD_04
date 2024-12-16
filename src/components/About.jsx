import React from "react";

const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center p-10 bg-gradient-to-b from-gray-900 to-gray-800 text-gray-200">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-screen-lg">
        <div className="flex justify-center">
          <img
            src="src\assets\profile.jpeg"
            alt="Profile"
            className="w-full max-w-sm rounded-lg shadow-lg border-4 border-transparent bg-gradient-to-r from-purple-500 to-teal-400 p-1"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl font-bold text-teal-400 mb-5">About Me</h2>
          <p className="text-gray-300 leading-relaxed text-lg">
            I’m a third-year AI & Data Science student with a passion for full-stack
            development. My expertise includes React, MERN, and Python. I focus on creating
            elegant, scalable web solutions that deliver real impact.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
