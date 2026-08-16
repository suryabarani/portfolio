
import './Skills.css'
import Layout from '../../Layout/Layout'
import React, { useEffect, useRef, useState } from "react";

const skills = [
  { name: "HTML", percent: 90, colorClass: "bar-html" },
  { name: "Express.js", percent: 70, colorClass: "bar-express" },
  { name: "CSS, Bootstrap, Tailwind", percent: 90, colorClass: "bar-css" },
  { name: "Node.js", percent: 70, colorClass: "bar-node" },
  { name: "JavaScript", percent: 75, colorClass: "bar-js" },
  { name: "React", percent: 80, colorClass: "bar-react" },
  { name: "MongoDB", percent: 75, colorClass: "bar-mongo" },
  { name: "Git & GitHub", percent: 80, colorClass: "bar-git" },
];

 function Skills() {
  const [widths, setWidths] = useState(skills.map(() => 0));
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          skills.forEach((skill, i) => {
            setTimeout(() => {
              setWidths((prev) => {
                const updated = [...prev];
                updated[i] = skill.percent;
                return updated;
              });
            }, i * 150);
          });
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <Layout>
    <section className="skills-section" ref={sectionRef}>
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="skills-title">My Skills</h2>
          <div className="skills-underline" />
        </div>

        <div className="skills-card row justify-content-center p-4 p-md-5">
          <div className="col-lg-10">
            <div className="row">
              {skills.map((skill, i) => (
                <div className="col-md-6" key={skill.name}>
                  <div className="skill-item">
                    <div className="skill-label">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percent">{widths[i]}%</span>
                    </div>
                    <div className="progress-track">
                      <div
                        className={`progress-fill ${skill.colorClass}`}
                        style={{ width: `${widths[i]}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>)}

export default Skills