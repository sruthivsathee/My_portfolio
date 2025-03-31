import React from "react";
import "./../../styles/skills.css";

const Skills = () => {
  const skills = [
    { name: "React.js", level: "90%" },
    { name: "JavaScript", level: "85%" },
    { name: "HTML & CSS", level: "95%" },
    { name: "Redux", level: "75%" },
  ];

  return (
    <section id="skills" className="skills">
      <h2>My Skills</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill">
            <span className="skill-name">{skill.name}</span>
            <div className="skill-bar">
              <div className="skill-fill" style={{ width: skill.level }}></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
