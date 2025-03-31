import React from "react";
import "./../../styles/project.css";
import projectImg from "../../assets/project-pic.jpg"; // Replace with actual project images
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Project 1",
    description: "This is an amazing project that solves a problem.",
    img: projectImg,
    link: "https://eshop-sage.vercel.app/",
  },
  {
    title: "Project 2",
    description: "An innovative solution for modern web applications.",
    img: projectImg,
    link: "https://dashboardadminn.netlify.app/",
  },
  {
    title: "Project 3",
    description: "A responsive and dynamic web project.",
    img: projectImg,
    link: "https://mytodoappnew.netlify.app/",
  },
  {
    title: "Project 4",
    description: "A user-friendly app with great UI/UX.",
    img: projectImg,
    link: "https://ubiquitous-tapioca-1c9715.netlify.app/",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img
              src={project.img}
              alt={project.title}
              className="project-img"
            />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="github-link"
            >
              <FaGithub className="github-icon" />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
