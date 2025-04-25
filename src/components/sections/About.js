import React from "react";
import "./../../styles/about.css";
import aboutPic from "../../assets/about.jpg"; // Import your image

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        {/* Left Side - Image */}
        <div className="about-left">
          <img src={aboutPic} alt="Profile" className="about-img" />
        </div>

        {/* Right Side - Description */}
        <div className="about-right">
          <h2>About Me</h2>
          <p>
            Hello! I'm <strong>Sruthi</strong>, a passionate Front-End Developer
            specializing in React.js, HTML, CSS, and JavaScript. I love creating
            beautiful and responsive web applications with a focus on user
            experience. With a strong foundation in UI/UX design, I aim to build
            innovative and functional websites. Let's create something amazing
            together!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
