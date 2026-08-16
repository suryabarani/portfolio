import React from 'react'
import './About.css'
import Layout from '../../Layout/Layout'
import { Code, Database, GraduationCap, Lightbulb, Mail, MapPin, Server, User } from 'lucide-react';
function About() {
  return (
   <Layout>
    <section className="about-section">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="about-title">About Me</h2>
          <div className="about-underline" />
        </div>

        {/* Intro Card */}
        <div className="about-card intro-card mb-4">
          <h4 className="intro-role">MERN Stack Developer | BCA Graduate</h4>
          <p className="intro-text">
            Driven by a strong foundation in computer applications and a
            passion for modern web technologies, I specialize in building
            complete, end-to-end web applications using the MERN stack
            (React, Express.js, Node.js, MongoDB). With hands-on experience
            in modern frontend design and backend architecture, I transform
            complex ideas into intuitive, high-performance digital
            solutions. Whether designing responsive UI components in React
            or building robust RESTful APIs, I focus on writing clean,
            scalable, and efficient code.
          </p>
        </div>

        {/* Competency Grid */}
        <div className="row g-4 mb-4">
          <div className="col-md-6 col-lg-4">
            <div className="about-card info-item">
              <GraduationCap className="info-icon" />
              <div>
                <h6>Education</h6>
                <p>Bachelor of Computer Application (BCA)</p>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="about-card info-item">
              <Code className="info-icon" />
              <div>
                <h6>Frontend</h6>
                <p>React.js, HTML5, CSS3, JavaScript (ES6+), Responsive Design</p>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="about-card info-item">
              <Server className="info-icon" />
              <div>
                <h6>Backend</h6>
                <p>Node.js, Express.js, REST APIs</p>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="about-card info-item">
              <Database className="info-icon" />
              <div>
                <h6>Database</h6>
                <p>MongoDB</p>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-8">
            <div className="about-card info-item">
              <Lightbulb className="info-icon" />
              <div>
                <h6>Core Competencies</h6>
                <p>
                  Full-Stack Architecture, Problem Solving, State
                  Management, API Integration
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Card */}
        <div className="about-card contact-card">
          <h5 className="contact-title">Contact Details</h5>
          <div className="contact-row">
            <User className="contact-icon" />
            <span>Surya B</span>
          </div>
          <div className="contact-row">
            <Mail className="contact-icon" />
            <a href="mailto:suryabarani2003@gmail.com">
              suryabarani2003@gmail.com
            </a>
          </div>
          <div className="contact-row">
            <MapPin className="contact-icon" />
            <span>
              NO.160, Block-AC, Ezhil Nagar, T N S C B, Perumbakkam,
              Kancheepuram, 600100.
            </span>
          </div>
        </div>
      </div>
    </section>
   </Layout>);
}
 
 

export default About