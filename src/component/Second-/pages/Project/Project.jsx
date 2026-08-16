import React from 'react'
import './Project.css'
import Layout from '../../Layout/Layout'
import projectfirst2 from '../Project/project.png'
import { ExternalLink, GitBranchPlus } from 'lucide-react';

function Project() {
 

const projects = [
  {
    title: "Student CRUD Application",
    description:
      "A full-stack CRUD (Create, Read, Update, Delete) application built to manage student records. Users can submit personal details through a form — including name, email, mobile number, gender, date of birth, and address — which get stored and displayed in a structured data table. This was my first hands-on project applying the MERN stack end-to-end, covering form handling, state management, and data rendering.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Bootstrap"],
    images: ["/assets/project.png", "/assets/project-Data.png"],
    github: "",
    live: "",
  },
  {
    title: "",
    description: "",
    tech: [],
    images: [],
    github: "",
    live: "",
  },
  {
    title: "",
    description: "",
    tech: [],
    images: [],
    github: "",
    live: "",
  },
];
     return (
  <Layout>
    <section className="project-section">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="project-title">My Projects</h2>
          <div className="project-underline" />
        </div>

        <div className="row g-4">
          {projects.map((project, index) => (
            <div className="col-lg-6" key={index}>
              <div className="project-card">
                {/* Image area */}
                <div className="project-image-wrap">
                  {project.images.length > 0 ? (
                    <div
                      className={`project-image-grid ${
                        project.images.length === 1 ? "single" : "double"
                      }`}
                    >
                      {project.images.map((img, i) => (
                        <img
                          src={projectfirst2}
                          alt={`${project.title} screenshot `}
                          className="project-img"
                          key={i}
                        />
                      ))}
                    </div>
                  ) : (
                    <div className="project-image-placeholder">
                      <span>+ Add Project Image</span>
                    </div>
                  )}
                </div>

                {/* Content area */}
                <div className="project-content">
                  <h4 className="project-name">
                    {project.title || "Project Title"}
                  </h4>

                  <p className="project-desc">
                    {project.description ||
                      "Add a short description of this project — what it does, the problem it solves, and what you learned building it."}
                  </p>

                  {project.tech.length > 0 && (
                    <div className="project-tech">
                      {project.tech.map((tech, i) => (
                        <span className="tech-badge" key={i}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="project-links">
                    
                     <a href={project.github || "#"}
                      className="project-btn btn-outline"
                    >
                      <GitBranchPlus /> Code
                    </a>
                    
                     <a href={project.live || "#"}
                      className="project-btn btn-filled"
                    >
                      <ExternalLink /> Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

  </Layout>
 )}

export default Project