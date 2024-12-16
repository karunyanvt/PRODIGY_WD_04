import React from "react";

const Projects = () => {
  const projectList = [
    { name: "Stopwatch App", description: "A sleek, responsive stopwatch app.", link: "https://github.com/karunyanvt/PRODIGY_WD_02.git" },
    { name: "Tic Tac Toe", description: "An interactive Tic Tac Toe game.", link: "https://github.com/karunyanvt/PRODIGY_WD_03.git" },
  ];

  return (
    <section id="projects" className="p-10 bg-gradient-to-b from-gray-800 to-gray-900 text-gray-200">
      <h2 className="text-4xl font-bold text-center text-purple-400 mb-8">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projectList.map((project, index) => (
          <div
            key={index}
            className="p-6 bg-gradient-to-r from-gray-700 to-gray-800 rounded-lg shadow-lg hover:scale-105 hover:bg-gradient-to-r hover:from-teal-400 hover:to-blue-500 transition transform duration-300"
          >
            <h3 className="text-xl font-semibold mb-3 text-white">{project.name}</h3>
            <p className="text-gray-300">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-teal-300 hover:text-teal-100"
            >
              View Project &rarr;
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
